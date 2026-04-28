'use client';
import { MessageSquare, ShoppingBag, Globe, Info, ArrowRight, Share2, Zap, Camera, Users } from 'lucide-react';
import Link from 'next/link';

export default function LinksPage() {
  const links = [
    {
      title: 'Configuração de Agentes de IA',
      description: 'Contrate Robôs Autônomos de Atendimento e Execução',
      url: 'https://wa.me/5549984101144?text=/bot%20Ol%C3%A1,%20tenho%20interesse%20na%20implementa%C3%A7%C3%A3o%20de%20agentes%20de%20IA',
      icon: <Zap size={24} />,
      color: '#7000ff'
    },
    {
      title: 'Cobertura de Foto e Vídeo para Eventos',
      description: 'Atendimento de Elite na Região da AMURC',
      url: 'https://wa.me/5549984101144?text=/bot%20Ol%C3%A1,%20tenho%20interesse%20em%20cobertura%20de%20eventos',
      icon: <Camera size={24} />,
      color: '#00ff88'
    },
    {
      title: 'Converse com o Jarvis (Institucional)',
      description: 'Saiba sobre nosso trabalho para Instituições',
      url: 'https://wa.me/5549984101144?text=/bot%20Ol%C3%A1,%20tenho%20interesse%20em%20saber%20sobre%20o%20trabalho%20da%20VirtualPlace%20para%20institui%C3%A7%C3%B5es',
      icon: <Users size={24} />,
      color: '#00d1ff'
    },
    {
      title: 'Site - Soluções Institucionais',
      description: 'Nossa expertise em branding e comunicação',
      url: 'https://lp.autolead.site/institucional',
      icon: <Globe size={24} />,
      color: '#ffffff'
    },
    {
      title: 'Site - Marketing e IA para Empresas',
      description: 'Conheça nossa metodologia de escala',
      url: 'https://lp.autolead.site',
      icon: <Zap size={24} />,
      color: '#ffaa00'
    }
  ];

  return (
    <div className="links-container">
      <div className="bg-glow"></div>
      
      <main className="links-content">
        <header className="profile-section">
          <h1 className="profile-name">Virtual<span>Place</span></h1>
          <p className="profile-bio">Construindo Audiência e Autoridade com Inteligência Artificial de Elite.</p>
        </header>

        <div className="links-grid">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="link-card" target={link.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
              <div className="link-icon" style={{ color: link.color }}>{link.icon}</div>
              <div className="link-text">
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </div>
              <div className="link-arrow">
                <ArrowRight size={18} />
              </div>
            </a>
          ))}
        </div>

        <footer className="links-footer">
          <p>© 2026 Virtual Place. Todos os direitos reservados.</p>
        </footer>
      </main>

      <style jsx>{`
        .links-container {
          min-height: 100vh;
          background: #030306;
          display: flex;
          justify-content: center;
          padding: 4rem 2rem;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .bg-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(112, 0, 255, 0.08) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        .links-content {
          width: 100%;
          max-width: 500px;
          position: relative;
          z-index: 1;
        }

        .profile-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .profile-avatar {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 1.5rem;
        }

        .profile-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.1);
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          position: relative;
          z-index: 2;
        }

        .avatar-pulse {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          border: 2px solid #7000ff;
          animation: pulse 2s infinite;
          opacity: 0.3;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        .profile-name {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          letter-spacing: -2px;
          color: white;
        }

        .profile-name span {
          color: #7000ff;
          margin-left: 2px;
        }

        .profile-bio {
          color: #94a3b8;
          font-size: 1rem;
          line-height: 1.5;
        }

        .links-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .link-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none;
          color: white;
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .link-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .link-icon {
          background: rgba(255, 255, 255, 0.03);
          padding: 1rem;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .link-text {
          flex-grow: 1;
        }

        .link-text h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .link-text p {
          color: #64748b;
          font-size: 0.9rem;
        }

        .link-arrow {
          color: #475569;
          transition: 0.3s;
        }

        .link-card:hover .link-arrow {
          color: white;
          transform: translateX(5px);
        }

        .links-footer {
          margin-top: 5rem;
          text-align: center;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .social-links a {
          color: #475569;
          transition: 0.3s;
        }

        .social-links a:hover {
          color: white;
          transform: scale(1.2);
        }

        .links-footer p {
          color: #334155;
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
}
