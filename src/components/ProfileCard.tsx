import { Instagram, Linkedin, Plus } from 'lucide-react';
import avatarImg from '../assets/avatar.png';
import fundoTopoImg from '../assets/fundo_topo.jpg';

interface ProfileCardProps {
  variant: 'withExpBar' | 'withColorRing';
}

export default function ProfileCard({ variant }: ProfileCardProps) {
  return (
    <div className="w-[440px] bg-white rounded-[32px] shadow-lg overflow-hidden">
      {/* Header Section with Background Image */}
      <div className="relative h-[240px] bg-sky-400 overflow-hidden">
        <img
          src={fundoTopoImg}
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Follow Button */}
        <button className="absolute top-6 right-6 px-6 py-2.5 bg-white/90 backdrop-blur-sm rounded-full font-medium text-gray-900 hover:bg-gray-100 transition-all shadow-sm flex items-center gap-2">
          {variant === 'withExpBar' ? (
            <>
              Follow <Plus size={18} />
            </>
          ) : (
            <Plus size={20} />
          )}
        </button>

        {/* Profile Image */}
        <div className="absolute -bottom-16 left-8">
          <div className={`relative ${variant === 'withColorRing' ? 'p-1 bg-gradient-to-br from-purple-500 via-green-400 to-orange-400 rounded-full' : ''}`}>
            <div className="w-32 h-32 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-white">
              <img
                src={avatarImg}
                alt="Rafael Lins"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Experience Bar (only for variant 1) */}
        {variant === 'withExpBar' && (
          <div className="absolute bottom-6 right-8 flex items-center gap-2">
            <span className="text-gray-700 text-sm font-medium">exp.</span>
            <div className="flex gap-0.5">
              {/* Rainbow gradient bars */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-3 rounded-full"
                  style={{
                    backgroundColor: i < 12
                      ? `hsl(${(i / 12) * 280}, 80%, 60%)`
                      : '#e5e7eb'
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="pt-20 pb-8 px-8">
        {/* Name and Bio */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Rafael Lins</h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          CEO Ad Rock Digital Mkt, Especialista em Marketing Digital, IA Generativa & Automação | Perito Forense Digital | BI, GA4 | Growth Hacking, E-commerce, SEO Técnico | AdTech, MarTech & Data-Driven Strategy | Cripto Enthusiast | Python | React
        </p>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">72.9K</div>
              <div className="text-sm text-gray-500">Likes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">828</div>
              <div className="text-sm text-gray-500">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">342.9K</div>
              <div className="text-sm text-gray-500">Views</div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a
            href="https://www.instagram.com/rafael.mlins/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://x.com/rafael_mlins"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/rafael/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
