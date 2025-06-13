
import Layout from "@/components/Layout";

const Benefits = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-section-gradient">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4 gradient-text">The Benefits</h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive health benefits coming soon...
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-gray-700">
              We're crafting a detailed exploration of spirulina's incredible health benefits. 
              This page will showcase how this ancient superfood can transform your wellness journey.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Benefits;
