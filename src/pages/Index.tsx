
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Leaf, 
  Zap, 
  Shield, 
  Sparkles, 
  Heart,
  Award,
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-syno-green-600" />,
      title: "Boosts Energy",
      description: "Natural sustained energy without crashes"
    },
    {
      icon: <Shield className="w-6 h-6 text-syno-green-600" />,
      title: "Supports Immunity",
      description: "Strengthens your body's natural defenses"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-syno-green-600" />,
      title: "Rich in Antioxidants",
      description: "Powerful protection against free radicals"
    },
    {
      icon: <Heart className="w-6 h-6 text-syno-green-600" />,
      title: "Heart Health",
      description: "Supports cardiovascular wellness"
    }
  ];

  const qualityFeatures = [
    "Ethically sourced from pristine environments",
    "Meticulous processing to preserve nutrients",
    "Third-party tested for purity",
    "Sustainable cultivation practices"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="gradient-text">Syno Gold</span>: The Pure Essence of Spirulina
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover the natural path to vitality and wellness with nature's most powerful superfood.
                </p>
              </div>
              <Link to="/benefits">
                <Button size="lg" className="bg-syno-green-600 hover:bg-syno-green-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg group">
                  Discover the Benefits
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/lovable-uploads/8fea7643-d41d-4e98-bf8d-e785e72122e2.png" 
                  alt="Syno Gold Spirulina Product" 
                  className="w-80 h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-syno-gold-200 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-syno-green-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Spirulina Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  What is Spirulina?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Spirulina is one of nature's most remarkable superfoods—a blue-green algae that has nourished civilizations for centuries. This ancient powerhouse is packed with complete proteins, essential vitamins, and minerals that your body craves.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <Leaf className="w-8 h-8 text-syno-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Nutrient-Dense</h3>
                  <p className="text-sm text-gray-600">Complete nutrition in every serving</p>
                </div>
                <div className="text-center p-4">
                  <Award className="w-8 h-8 text-syno-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Ancient Superfood</h3>
                  <p className="text-sm text-gray-600">Trusted for thousands of years</p>
                </div>
                <div className="text-center p-4">
                  <Sparkles className="w-8 h-8 text-syno-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Blue-Green Algae</h3>
                  <p className="text-sm text-gray-600">Pure, natural wellness</p>
                </div>
              </div>

              <Link to="/what-is-spirulina">
                <Button variant="outline" className="border-syno-green-600 text-syno-green-600 hover:bg-syno-green-50">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md h-80 section-gradient rounded-3xl flex items-center justify-center">
                <div className="text-center text-syno-green-600">
                  <Leaf className="w-24 h-24 mx-auto mb-4 opacity-60" />
                  <p className="text-lg font-medium">Spirulina Filaments</p>
                  <p className="text-sm opacity-80">Nature's perfect spiral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Snapshot */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              A Glimpse into the Goodness
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the transformative power of spirulina with benefits that touch every aspect of your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border-0 hover:scale-105 hover:bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-syno-green-50 rounded-full flex items-center justify-center mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
              <div className="w-32 h-32 bg-gradient-to-br from-syno-green-200 to-syno-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
              <p className="text-lg font-medium text-gray-900">Green Vitality Smoothie</p>
              <p className="text-sm text-gray-600">Your daily dose of natural energy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src="/lovable-uploads/8fea7643-d41d-4e98-bf8d-e785e72122e2.png" 
                  alt="Syno Gold Quality Standard" 
                  className="w-72 h-72 object-contain drop-shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-syno-gold-100/20 to-syno-green-100/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  The <span className="gradient-text">Syno Gold</span> Standard
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to purity and quality goes beyond industry standards. We believe that the finest spirulina comes from the finest practices—from cultivation to your cup.
                </p>
              </div>

              <ul className="space-y-3">
                {qualityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-syno-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/our-quality">
                <Button size="lg" variant="outline" className="border-syno-gold-400 text-syno-gold-600 hover:bg-syno-gold-50 group">
                  Explore Our Quality
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
