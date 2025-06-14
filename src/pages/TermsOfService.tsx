
import Layout from "@/components/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the Syno Gold website and purchasing our products, you accept and agree to 
                  be bound by the terms and provision of this agreement. These terms apply to all visitors, users, 
                  and customers.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Product Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to provide accurate product descriptions and pricing. However, we reserve the right to 
                  correct any errors, inaccuracies, or omissions and to change or update information at any time 
                  without prior notice. All products are subject to availability.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Orders and Payment</h2>
                <p className="text-gray-700 leading-relaxed">
                  By placing an order, you are making an offer to purchase our products. We reserve the right to 
                  accept or decline your order for any reason. Payment must be received before products are shipped. 
                  We accept major credit cards and other payment methods as indicated on our website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Shipping and Delivery</h2>
                <p className="text-gray-700 leading-relaxed">
                  We will make every effort to ship your order promptly. Delivery times are estimates and may vary. 
                  Title and risk of loss pass to you upon delivery to the carrier. We are not responsible for delays 
                  caused by shipping carriers or circumstances beyond our control.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Returns and Refunds</h2>
                <p className="text-gray-700 leading-relaxed">
                  We want you to be completely satisfied with your purchase. If you are not satisfied, you may return 
                  unopened products within 30 days of purchase for a full refund. Return shipping costs are the 
                  responsibility of the customer unless the return is due to our error.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Health Claims and Disclaimers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our products are dietary supplements and are not intended to diagnose, treat, cure, or prevent any 
                  disease. The statements on our website have not been evaluated by the FDA. Please consult with a 
                  healthcare professional before using our products, especially if you have any medical conditions 
                  or are taking medications.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property 
                  of Syno Gold and is protected by copyright and other intellectual property laws. You may not 
                  reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by law, Syno Gold shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                  directly or indirectly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                  posting on our website. Your continued use of our website and products constitutes acceptance of 
                  any changes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these terms, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    Email: hello@synogold.com<br />
                    Address: [Your Business Address]
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
