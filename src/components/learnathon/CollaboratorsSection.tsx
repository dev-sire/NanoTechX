import { useState } from 'react';
import ciscoCommunityLogo from "@/assets/cisco_community.jpg"
import MarketSmile from "@/assets/market_smiling.jpg";
import aieysLogo from "@/assets/aieys.jpg";

const CollaboratorsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const partners = [
    { name: 'Cisco Community Pakistan', description: 'IT Systems Training & Support', color: '#0D96CC', logo: ciscoCommunityLogo },
    { name: 'Market Smiling', description: 'Cisco Trainings & Certifications', color: '#F58025', logo: MarketSmile },
    { name: 'AI Explains You Science', description: 'Higher Education', color: '#0D96CC', logo: aieysLogo },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle network background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #0D96CC 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-transparent bg-gradient-to-r from-[#0D96CC] to-[#F58025] bg-clip-text" style={{ fontFamily: 'monospace' }}>
            OUR COLLABORATORS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#0D96CC] to-[#F58025] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Powered by industry-leading partners</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-30' : 'opacity-0'
                }`}
                style={{ backgroundColor: partner.color }}
              ></div>

              {/* Card */}
              <div className="relative h-48 bg-white border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-transparent">
                {/* Gradient overlay on hover */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-10' : 'opacity-0'
                  }`}
                  style={{ 
                    background: `linear-gradient(135deg, ${partner.color}, transparent)` 
                  }}
                ></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 space-y-4">
                  {/* Logo image */}
                  <div 
                    className="w-24 h-24 flex items-center justify-center transition-all duration-500"
                    style={{ 
                      transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                    }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Partner name */}
                  <h3 
                    className="text-xl font-black transition-colors duration-300"
                    style={{ 
                      color: hoveredIndex === index ? partner.color : '#1e293b'
                    }}
                  >
                    {partner.name}
                  </h3>

                  {/* Description - slide up on hover */}
                  <p 
                    className={`text-sm text-gray-600 text-center transition-all duration-500 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {partner.description}
                  </p>
                </div>

                {/* Animated corner accent */}
                <div 
                  className={`absolute top-0 right-0 w-16 h-16 transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-100' : 'scale-0'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${partner.color} 50%)`,
                    transformOrigin: 'top right'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 flex items-center justify-center space-x-4">
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#0D96CC] rounded-full"></div>
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0D96CC] to-[#F58025] animate-pulse"></div>
          <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#F58025] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;