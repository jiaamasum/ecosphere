import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | EcoSphere',
  description: 'Latest articles and insights about sustainable living and environmental conservation.',
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Blog Posts - Replace with actual data */}
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <article key={post} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Add image here */}
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March {post}, 2024</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Sustainable Living Tips for Urban Dwellers
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover practical ways to live sustainably in the city while reducing your environmental footprint.
                </p>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 