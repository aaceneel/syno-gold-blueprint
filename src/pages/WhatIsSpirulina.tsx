
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Award, Globe, Microscope, Heart, Zap } from "lucide-react";

const WhatIsSpirulina = () => {
  const nutritionalData = [
    { nutrient: "Protein", amount: "65-70%", description: "Complete amino acid profile" },
    { nutrient: "Vitamin B12", amount: "High", description: "Essential for energy metabolism" },
    { nutrient: "Iron", amount: "Rich", description: "Supports healthy blood" },
    { nutrient: "Chlorophyll", amount: "Abundant", description: "Natural detoxifier" },
    { nutrient: "Beta-carotene", amount: "High", description: "Powerful antioxidant" },
    { nutrient: "Minerals", amount: "15+", description: "Essential trace elements" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              What is <span className="gradient-text">Spirulina</span>?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover the ancient superfood that has sustained civilizations and continues to revolutionize modern nutrition with its extraordinary properties.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-6 border-0 bg-syno-green-50">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-syno-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Microscope className="w-8 h-8 text-syno-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Blue-Green Algae</h3>
                  <p className="text-gray-600">A microscopic spiral-shaped organism that thrives in alkaline water environments</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 bg-syno-gold-50">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-syno-gold-100 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-syno-gold-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Ancient Superfood</h3>
                  <p className="text-gray-600">Consumed by the Aztecs and other ancient civilizations for its life-giving properties</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 bg-green-50">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Complete Nutrition</h3>
                  <p className="text-gray-600">One of the most nutrient-dense foods on Earth with exceptional bioavailability</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                Spirulina (Arthrospira platensis) is a blue-green algae that has existed for over 3 billion years, making it one of the oldest known life forms on our planet. This remarkable organism grows naturally in alkaline lakes and has been harvested and consumed by humans for centuries.
              </p>
              
              <p>
                What makes spirulina truly extraordinary is its incredible nutrient density. This microscopic powerhouse contains more protein per gram than any other natural food source, along with essential vitamins, minerals, and powerful antioxidants that work synergistically to support optimal health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Rich History of Nourishment</h2>
            <p className="text-lg text-gray-600">From ancient civilizations to modern nutrition science</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-syno-green-600 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Ancient Origins</h3>
              <p className="text-gray-600">The Aztecs harvested spirulina from Lake Texcoco, calling it "tecuitlatl" - their primary source of protein and energy.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-syno-green-600 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">African Traditions</h3>
              <p className="text-gray-600">Communities around Lake Chad have consumed spirulina for generations, recognizing its ability to sustain health and vitality.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-syno-green-600 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Modern Science</h3>
              <p className="text-gray-600">Today, spirulina is extensively researched and celebrated as one of the most complete foods available to humanity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exceptional Nutritional Profile</h2>
            <p className="text-lg text-gray-600">A complete breakdown of nature's most concentrated superfood</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionalData.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3 p-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">{item.nutrient}</h3>
                    <span className="text-syno-green-600 font-bold">{item.amount}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-syno-green-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why Spirulina Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Complete Protein Source</h4>
                <p className="text-gray-700">Contains all nine essential amino acids in optimal ratios, making it a perfect protein for cellular repair and growth.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Superior Bioavailability</h4>
                <p className="text-gray-700">Spirulina's nutrients are easily absorbed by the body due to its unique cellular structure and lack of cellulose walls.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Antioxidant Powerhouse</h4>
                <p className="text-gray-700">Rich in phycocyanin, a powerful blue pigment with exceptional antioxidant and anti-inflammatory properties.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Sustainable Nutrition</h4>
                <p className="text-gray-700">Produces more protein per acre than any other food source while requiring minimal water and no arable land.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatIsSpirulina;
