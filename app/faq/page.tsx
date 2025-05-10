import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | EcoSphere',
  description: 'Frequently asked questions about EcoSphere and our sustainability initiatives.',
};

const FAQPage = () => {
  const faqs = [
    {
      question: "What is EcoSphere?",
      answer: "EcoSphere is a platform dedicated to promoting sustainable living and environmental conservation. We provide resources, tools, and community support to help individuals and organizations make eco-friendly choices."
    },
    {
      question: "How can I get involved with EcoSphere?",
      answer: "You can get involved by subscribing to our newsletter, participating in our community events, contributing to our blog, or joining our sustainability initiatives. Visit our 'Get Involved' page for more details."
    },
    {
      question: "What services does EcoSphere offer?",
      answer: "We offer various services including sustainability consulting, eco-friendly product recommendations, educational resources, and community engagement programs. Check our Services page for a complete list."
    },
    {
      question: "How can I track my environmental impact?",
      answer: "We provide tools and resources to help you calculate and track your carbon footprint, water usage, and waste production. Our platform offers personalized recommendations to reduce your environmental impact."
    },
    {
      question: "Is EcoSphere free to use?",
      answer: "Many of our basic resources and community features are free to use. We also offer premium services and features for those who want more in-depth support and tools."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage; 