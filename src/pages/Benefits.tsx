
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Droplet, 
  Atom,
  Heart,
  Dumbbell
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-syno-green-600" />,
      title: "Enhanced Energy & Vitality",
      description: "Spirulina is a natural source of B-vitamins, iron, and potent antioxidants that work together to fight fatigue. It helps optimize your body's energy production at a cellular level, providing sustained vitality without the crash from stimulants.",
      scientificTagline: "Fueling metabolic function and improving oxygen transport in the bloodstream.",
      bgGradient: "from-yellow-50/30 to-orange-50/30"
    },
    {
      icon: <Shield className="w-8 h-8 text-syno-green-600" />,
      title: "Robust Immune Support",
      description: "Rich in phytonutrients like Phycocyanin, spirulina helps increase the production of infection-fighting cells and antibodies. Regular consumption can fortify your immune system, making it more resilient and responsive.",
      scientificTagline: "Shown to encourage the production of cytokines, the messengers of the immune system.",
      bgGradient: "from-blue-50/30 to-indigo-50/30"
    },
    {
      icon: <Droplet className="w-8 h-8 text-syno-green-600" />,
      title: "Natural Detoxification & Cleansing",
      description: "Spirulina possesses a powerful ability to bind with heavy metals and toxins, helping to safely eliminate them from your body. Its high concentration of chlorophyll further aids in cleansing the blood and purifying internal systems.",
      scientificTagline: "Contains chelating agents and chlorophyll that support the body's natural purification pathways.",
      bgGradient: "from-cyan-50/30 to-teal-50/30"
    },
    {
      icon: <Atom className="w-8 h-8 text-syno-green-600" />,
      title: "A Powerhouse of Antioxidants",
      description: "Oxidative stress is a key driver of aging and chronic illness. Spirulina is loaded with antioxidants, especially the potent phycocyanin, which combat free radicals and protect your cells and DNA from damage.",
      scientificTagline: "Providing powerful antioxidant and anti-inflammatory properties to protect against cellular damage.",
      bgGradient: "from-purple-50/30 to-pink-50/30"
    },
    {
      icon: <Heart className="w-8 h-8 text-syno-green-600" />,
      title: "Supports Heart & Cholesterol Health",
      description: "Studies suggest that spirulina can contribute to a healthy cardiovascular system. It may help lower levels of \"bad\" LDL cholesterol and triglycerides while potentially increasing \"good\" HDL cholesterol, as well as promoting healthy blood pressure levels.",
      scientificTagline: "Aiding in the management of lipid profiles and promoting vascular health.",
      bgGradient: "from-red-50/30 to-rose-50/30"
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-syno-green-600" />,
      title: "Improves Muscle Strength & Endurance",
      description: "As a complete protein source, spirulina provides all essential amino acids required for muscle repair and building. Its antioxidant properties also help reduce exercise-induced oxidative damage, potentially leading to improved endurance and faster recovery.",
      scientificTagline: "Providing essential amino acids and reducing oxidative stress for enhanced physical performance.",
      bgGradient: "from-green-50/30 to-emerald-50/30"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The <span className="gradient-text">Pillars of Wellness</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Spirulina is more than just a superfood; it's a catalyst for holistic health. Its unique and dense nutritional profile offers a spectrum of benefits that support your body's natural processes, from energy production to cellular defense. Discover the fundamental ways Syno Gold spirulina can elevate your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                <CardContent className="p-0">
                  <div className={`relative bg-gradient-to-br ${benefit.bgGradient} p-12 lg:p-16`}>
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-current"></div>
                      <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-current"></div>
                    </div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Icon Section */}
                      <div className="lg:col-span-2 flex justify-center lg:justify-start">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {benefit.icon}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:col-span-10 text-center lg:text-left space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                          {benefit.title}
                        </h2>
                        
                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                          {benefit.description}
                        </p>
                        
                        <p className="text-sm italic text-syno-green-700 font-medium">
                          {benefit.scientificTagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Transform Your Wellness?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the comprehensive benefits of Syno Gold spirulina and discover how this ancient superfood can become the foundation of your health journey.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-syno-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-syno-green-600" />
              </div>
              <p className="text-gray-700 font-medium">
                Nature's perfect nutrition, refined by science, delivered with care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Benefits;
