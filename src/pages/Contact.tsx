
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-section-gradient">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Contact</h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch coming soon...
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-gray-700">
              We're preparing a seamless way for you to reach out with questions, 
              collaborations, or media inquiries. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
