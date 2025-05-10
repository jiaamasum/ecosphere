import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | EcoSphere',
  description: 'Terms and conditions for using EcoSphere services and platform.',
};

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing or using EcoSpheres services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">Permission is granted to temporarily access our services for personal, non-commercial use, subject to the following restrictions:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You must not modify or copy our materials</li>
              <li>You must not use our materials for any commercial purpose</li>
              <li>You must not attempt to reverse engineer any software contained in our services</li>
              <li>You must not remove any copyright or proprietary notations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-600 mb-4">When creating an account with us, you must provide accurate and complete information. You are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Maintaining the security of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Modifications</h2>
            <p className="text-gray-600">
              EcoSphere reserves the right to modify or discontinue, temporarily or permanently, our services with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600">
              In no event shall EcoSphere be liable for any damages arising out of the use or inability to use our services, even if we have been notified of the possibility of such damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Governing Law</h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@ecosphere.com
              <br />
              Address: 123 Main St, Anytown, USA
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 