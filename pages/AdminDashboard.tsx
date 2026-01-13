import React, { useState, useEffect } from 'react';
import { getSubmissions, markAsRead, deleteSubmission, Message } from '../services/storageService';

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [filter, setFilter] = useState<'all' | 'inquiry' | 'booking'>('all');

  useEffect(() => {
    const auth = sessionStorage.getItem('sq_admin_auth');
    if (auth === 'true') {
        setIsAuthenticated(true);
        loadMessages();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
        setIsAuthenticated(true);
        sessionStorage.setItem('sq_admin_auth', 'true');
        loadMessages();
        setError('');
    } else {
        setError('Unauthorized Access');
    }
  };

  const loadMessages = () => {
    setMessages(getSubmissions());
  };

  const handleDelete = (id: number) => {
    if (confirm('Permanently delete this entry?')) {
      deleteSubmission(id);
      loadMessages();
    }
  };

  const handleToggleRead = (id: number) => {
    markAsRead(id);
    loadMessages();
  };

  const filteredMessages = messages.filter(m => filter === 'all' || m.type === filter);

  if (!isAuthenticated) {
    return (
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6">
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 w-full max-w-md shadow-2xl animate-fade-in">
                <div className="text-center mb-10">
                     <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/30">
                         <span className="material-icons text-primary text-4xl">security</span>
                     </div>
                     <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">System Access</h2>
                     <p className="text-white/40 text-sm">Protected by SQ Intelligence Protocol.</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative">
                        <input 
                            type="password" 
                            autoFocus
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white text-center text-2xl tracking-[1em] focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                            placeholder="••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-400 text-xs text-center font-bold uppercase tracking-widest animate-bounce">{error}</p>}
                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition shadow-2xl active:scale-95">
                        Verify Credentials
                    </button>
                </form>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Intelligence Dashboard</h1>
            <p className="text-slate-500 mt-2 font-medium">Monitoring active leads and engagement.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
             <div className="flex bg-white rounded-xl p-1.5 shadow-sm border border-slate-200">
                {(['all', 'inquiry', 'booking'] as const).map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    filter === f ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-primary hover:bg-slate-50'
                    }`}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}s
                </button>
                ))}
            </div>
            <button 
                onClick={() => { setIsAuthenticated(false); sessionStorage.removeItem('sq_admin_auth'); }}
                className="bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200 text-slate-400 hover:text-red-500 transition-colors"
            >
                <span className="material-icons">logout</span>
            </button>
          </div>
        </div>

        {filteredMessages.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
            <span className="material-icons text-slate-200 text-7xl mb-6">explore_off</span>
            <h3 className="text-2xl font-bold text-slate-900">Zero Inbound Activity</h3>
            <p className="text-slate-400">The pipeline is currently clear.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredMessages.map((msg) => (
              <div 
                key={msg.id} 
                className={`group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative ${!msg.read ? 'ring-2 ring-primary/20' : ''}`}
              >
                {!msg.read && <div className="absolute top-8 right-8 w-3 h-3 bg-primary rounded-full animate-pulse"></div>}
                
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-4 mb-4">
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg ${msg.type === 'booking' ? 'bg-secondary' : 'bg-primary'}`}>
                        {msg.name.charAt(0)}
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900">{msg.name}</h3>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{msg.type} • {new Date(msg.timestamp).toLocaleDateString()}</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-600">
                        <span className="material-icons text-sm">alternate_email</span>
                        <span className="font-semibold">{msg.email}</span>
                    </div>
                    {msg.details?.company && (
                      <div className="flex items-center gap-3 text-slate-500">
                        <span className="material-icons text-sm">business</span>
                        <span>{msg.details.company}</span>
                      </div>
                    )}
                    <div className="bg-slate-50 p-6 rounded-2xl text-slate-700 italic border border-slate-100 mt-4">
                        "{msg.message}"
                    </div>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col gap-3 md:pt-4 w-full md:w-auto">
                    <button onClick={() => window.open(`mailto:${msg.email}`)} className="flex-1 md:w-12 md:h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition shadow-lg"><span className="material-icons">send</span></button>
                    <button onClick={() => handleToggleRead(msg.id)} className={`flex-1 md:w-12 md:h-12 border rounded-xl flex items-center justify-center transition ${msg.read ? 'bg-green-50 border-green-200 text-green-600' : 'bg-white border-slate-200 text-slate-400 hover:text-green-600'}`}><span className="material-icons">{msg.read ? 'check_circle' : 'radio_button_unchecked'}</span></button>
                    <button onClick={() => handleDelete(msg.id)} className="flex-1 md:w-12 md:h-12 bg-white border border-slate-200 text-slate-400 hover:text-red-500 rounded-xl flex items-center justify-center transition"><span className="material-icons">delete</span></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};