import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - EcoSphere",
  description: "Explore our successful environmental projects and initiatives",
};

const projects = [
  {
    title: "Urban Garden Initiative",
    description: "Transforming urban spaces into productive green areas for local communities.",
    image: "/projects/urban-garden.jpg",
    category: "Community",
  },
  {
    title: "Renewable Energy Transition",
    description: "Helping businesses transition to 100% renewable energy sources.",
    image: "/projects/renewable-energy.jpg",
    category: "Energy",
  },
  {
    title: "Waste Reduction Program",
    description: "Implementing zero-waste solutions in corporate environments.",
    image: "/projects/waste-reduction.jpg",
    category: "Waste Management",
  },
  {
    title: "Eco-Education Center",
    description: "Building sustainable education centers for environmental awareness.",
    image: "/projects/eco-education.jpg",
    category: "Education",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we're making a difference in communities around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Add actual images later */}
                <div className="w-full h-48 bg-gray-300"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 text-green-600 hover:text-green-700 font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Collaborate?</h2>
          <p className="text-gray-600 mb-8">
            We're always looking for new partners to help us create a more sustainable future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
} 