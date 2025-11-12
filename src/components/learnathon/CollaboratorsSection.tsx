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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative cursor-pointer h-48 sm:h-56"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ perspective: '1000px' }}
            >
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-30' : 'opacity-0'
                }`}
                style={{ backgroundColor: partner.color }}
              ></div>

              {/* Flip Card Container */}
              <div 
                className="relative w-full h-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: hoveredIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front Side - Logo Only */}
                <div 
                  className="absolute inset-0 bg-white border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center p-6 sm:p-8"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain max-w-[120px] sm:max-w-[150px] max-h-[120px] sm:max-h-[150px]"
                  />
                </div>

                {/* Back Side - Title & Description */}
                <div 
                  className="absolute inset-0 bg-white border-2 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 space-y-3 sm:space-y-4"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    borderColor: partner.color
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{ 
                      background: `linear-gradient(135deg, ${partner.color}, transparent)` 
                    }}
                  ></div>
                  
                  <h3 
                    className="text-xl sm:text-2xl font-black relative z-10 text-center"
                    style={{ color: partner.color }}
                  >
                    {partner.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-700 text-center relative z-10 font-medium">
                    {partner.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16"
                    style={{
                      background: `linear-gradient(135deg, transparent 50%, ${partner.color} 50%)`,
                      opacity: 0.2
                    }}
                  ></div>
                </div>
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