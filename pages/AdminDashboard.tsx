import React, { useState, useEffect } from 'react';
import { getSubmissions, markAsRead, deleteSubmission, Message } from '../services/storageService';

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [filter, setFilter] = useState<'all' | 'inquiry' | 'booking'>('all');

  useEffect(() => {
    // Check session storage for existing auth
    const auth = sessionStorage.getItem('sq_admin_auth');
    if (auth === 'true') {
        setIsAuthenticated(true);
        loadMessages();
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
        const interval = setInterval(loadMessages, 5000);
        return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
        setIsAuthenticated(true);
        sessionStorage.setItem('sq_admin_auth', 'true');
        loadMessages();
        setError('');
    } else {
        setError('Invalid credentials');
    }
  };

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

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <div className="text-center mb-8">
                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                         <span className="material-icons text-primary text-3xl">lock</span>
                     </div>
                     <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
                     <p className="text-gray-500 text-sm">Enter your secure PIN to access dashboard.</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input 
                            type="password" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none text-center text-lg tracking-widest"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}
                    <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition shadow-lg">
                        Access Dashboard
                    </button>
                </form>
            </div>
        </div>
    );
  }

  // DASHBOARD
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your inquiries and appointments</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-end md:items-center mt-4 md:mt-0">
             <div className="flex bg-white rounded-lg p-1 shadow-sm">
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
            <button 
                onClick={() => {
                    setIsAuthenticated(false);
                    sessionStorage.removeItem('sq_admin_auth');
                }}
                className="text-sm text-red-500 hover:text-red-700 font-bold flex items-center gap-1 bg-white px-3 py-2 rounded-lg shadow-sm"
            >
                <span className="material-icons text-sm">logout</span>
                Logout
            </button>
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