import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-16 space-y-8 md:space-y-0">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Welcome to Your <span className="text-teal-400">Next Adventure</span>
            </h1>
            <p className="text-lg mb-6">
              Discover the best features and solutions tailored for your needs. Join us to explore endless possibilities.
            </p>
            <div>
              <a
                href="#services"
                className="bg-teal-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-teal-400 mr-4"
              >
                Get Started
              </a>
              <a
                href="#about"
                className="border border-teal-500 text-teal-500 px-6 py-3 rounded-lg shadow-lg hover:bg-teal-500 hover:text-black"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="https://cdn.pixabay.com/photo/2019/06/18/06/01/chair-4281511_640.png"
              alt="Hero"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Features We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Feature 1"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Fast Performance</h3>
              <p className="text-gray-600">
                Experience lightning-fast speeds with our state-of-the-art technology.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Feature 2"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Reliable Support</h3>
              <p className="text-gray-600">
                We are here for you 24/7 with expert advice and solutions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Feature 3"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Customizable Solutions</h3>
              <p className="text-gray-600">
                Tailor our services to suit your specific needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-teal-500 text-black py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-6">
            Join thousands of others who are using our services to grow their businesses.
          </p>
          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800"
          >
            Join Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
