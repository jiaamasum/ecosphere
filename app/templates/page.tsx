import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Templates | EcoSphere",
  description: "Downloadable templates and resources for sustainable living and environmental projects.",
};

const TemplatesPage = () => {
  const templates = [
    {
      title: "Carbon Footprint Calculator",
      description: "Track and calculate your personal or organizational carbon footprint with our easy-to-use template.",
      category: "Calculators",
      downloadUrl: "#",
      image: "/templates/carbon-calculator.png"
    },
    {
      title: "Waste Management Plan",
      description: "A comprehensive template for creating and implementing an effective waste management strategy.",
      category: "Planning",
      downloadUrl: "#",
      image: "/templates/waste-management.png"
    },
    {
      title: "Sustainability Report Template",
      description: "Professional template for documenting and reporting sustainability initiatives and progress.",
      category: "Reporting",
      downloadUrl: "#",
      image: "/templates/sustainability-report.png"
    },
    {
      title: "Green Event Checklist",
      description: "Ensure your events are environmentally friendly with this detailed checklist template.",
      category: "Planning",
      downloadUrl: "#",
      image: "/templates/green-event.png"
    },
    {
      title: "Energy Audit Form",
      description: "Conduct thorough energy audits with our detailed assessment template.",
      category: "Assessment",
      downloadUrl: "#",
      image: "/templates/energy-audit.png"
    },
    {
      title: "Sustainable Procurement Guide",
      description: "Template for implementing sustainable procurement practices in your organization.",
      category: "Guidelines",
      downloadUrl: "#",
      image: "/templates/procurement.png"
    },
    {
      title: "Water Usage Tracker",
      description: "Monitor and optimize your water consumption with this comprehensive tracking template.",
      category: "Calculators",
      downloadUrl: "#",
      image: "/templates/water-tracker.png"
    },
    {
      title: "Environmental Impact Assessment",
      description: "Evaluate the environmental impact of your projects with this detailed assessment template.",
      category: "Assessment",
      downloadUrl: "#",
      image: "/templates/impact-assessment.png"
    }
  ];

  const categories = Array.from(new Set(templates.map(template => template.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTemplates = selectedCategory
    ? templates.filter(template => template.category === selectedCategory)
    : templates;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sustainability Templates</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Download our free templates and resources to help you implement sustainable practices in your personal life or organization.
        </p>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                {/* Template Preview Image */}
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Template Preview</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-4">
                  {template.category}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {template.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {template.description}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href={template.downloadUrl}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Download Template
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                  <span className="text-sm text-gray-500">PDF Format</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No templates found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesPage; 