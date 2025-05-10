import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - EcoSphere",
  description: "Explore our range of eco-friendly services and solutions",
};

const services = [
  {
    title: "Environmental Consulting",
    description: "Expert guidance on implementing sustainable practices in your business or home.",
    icon: "🌱",
  },
  {
    title: "Waste Management",
    description: "Comprehensive waste reduction and recycling solutions for businesses and communities.",
    icon: "♻️",
  },
  {
    title: "Energy Efficiency",
    description: "Solutions to reduce energy consumption and transition to renewable energy sources.",
    icon: "⚡",
  },
  {
    title: "Sustainable Development",
    description: "Planning and implementation of eco-friendly development projects.",
    icon: "🏗️",
  },
  {
    title: "Environmental Education",
    description: "Workshops and training programs to promote environmental awareness.",
    icon: "📚",
  },
  {
    title: "Green Technology",
    description: "Implementation of cutting-edge green technologies for sustainable living.",
    icon: "💡",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive environmental solutions for a sustainable future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to learn more about how we can help you achieve your sustainability goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
} 