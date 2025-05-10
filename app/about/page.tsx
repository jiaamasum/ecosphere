import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - EcoSphere",
  description: "Learn about EcoSphere's mission and vision for sustainable living",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About EcoSphere</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering sustainable living through innovative solutions and community engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At EcoSphere, we're dedicated to creating a sustainable future through innovative
              environmental solutions. We believe in empowering individuals and communities to
              make eco-friendly choices that benefit both people and the planet.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where sustainable living is accessible to everyone. Through
              our platform, we aim to connect eco-conscious individuals with the resources
              and tools they need to make a positive impact on the environment.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to promoting sustainable practices in everything we do.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek new and better ways to solve environmental challenges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community to drive positive environmental change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 