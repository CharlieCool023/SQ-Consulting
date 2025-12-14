import React, { useState, useEffect } from 'react';
import { getSubmissions, markAsRead, deleteSubmission, Message } from '../services/storageService';

export const AdminDashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [filter, setFilter] = useState<'all' | 'inquiry' | 'booking'>('all');

  useEffect(() => {
    loadMessages();
    // Poll for new messages every 5 seconds
    const interval = setInterval(loadMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadMessages = () => {
    setMessages(getSubmissions());
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      deleteSubmission(id);
      loadMessages();
    }
  };

  const handleToggleRead = (id: number) => {
    markAsRead(id);
    loadMessages();
  };

  const filteredMessages = messages.filter(m => filter === 'all' || m.type === filter);

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your inquiries and appointments</p>
          </div>
          <div className="flex bg-white rounded-lg p-1 shadow-sm mt-4 md:mt-0">
            {(['all', 'inquiry', 'booking'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  filter === f ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}s
              </button>
            ))}
          </div>
        </div>

        {filteredMessages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-gray-400 text-3xl">inbox</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No messages found</h3>
            <p className="text-gray-500">New inquiries and bookings will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredMessages.map((msg) => (
              <div 
                key={msg.id} 
                className={`bg-white rounded-xl p-6 shadow-sm border-l-4 transition hover:shadow-md ${
                  msg.type === 'booking' ? 'border-secondary' : 'border-primary'
                } ${!msg.read ? 'bg-blue-50/30' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                      msg.type === 'booking' ? 'bg-orange-100 text-orange-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {msg.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(msg.timestamp).toLocaleString()}
                    </span>
                    {!msg.read && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => window.open(`mailto:${msg.email}`)}
                      className="p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-full transition"
                      title="Reply via Email"
                    >
                      <span className="material-icons">reply</span>
                    </button>
                    <button 
                      onClick={() => handleToggleRead(msg.id)}
                      className="p-2 text-gray-400 hover:text-green-600 hover:bg-gray-100 rounded-full transition"
                      title="Mark as Read"
                    >
                      <span className="material-icons">{msg.read ? 'mark_email_read' : 'mark_email_unread'}</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(msg.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded-full transition"
                      title="Delete"
                    >
                      <span className="material-icons">delete</span>
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <h4 className="font-bold text-gray-900">{msg.name}</h4>
                    <p className="text-sm text-gray-600">{msg.email}</p>
                    {msg.details?.company && (
                       <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                         <span className="material-icons text-xs">business</span>
                         {msg.details.company}
                       </p>
                    )}
                  </div>
                  
                  <div className="md:col-span-3">
                    {msg.type === 'booking' && msg.details && (
                      <div className="mb-3 flex flex-wrap gap-3">
                        <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2">
                           <span className="material-icons text-gray-500 text-sm">event</span>
                           {msg.details.date}
                        </div>
                        <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2">
                           <span className="material-icons text-gray-500 text-sm">schedule</span>
                           {msg.details.time}
                        </div>
                      </div>
                    )}
                    <p className="text-gray-700 whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
