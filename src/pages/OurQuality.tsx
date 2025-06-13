
import Layout from "@/components/Layout";

const OurQuality = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-section-gradient">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Our Quality</h1>
          <p className="text-xl text-gray-600 mb-8">
            Premium quality standards coming soon...
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-gray-700">
              Discover our rigorous quality processes, sustainable sourcing practices, 
              and the meticulous care that goes into every batch of Syno Gold spirulina.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurQuality;
