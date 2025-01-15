import React from "react";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl">
            Discover the services we offer to help you grow, streamline your processes, and achieve success.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/100"
                alt="Service 1"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Web Development</h3>
              <p className="text-gray-600">
                We create responsive and engaging websites that provide excellent user experiences.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/100"
                alt="Service 2"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">App Development</h3>
              <p className="text-gray-600">
                Our team specializes in building powerful mobile applications tailored to your needs.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/100"
                alt="Service 3"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                We help businesses grow their online presence through targeted digital marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="max-w-xs bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                "The team exceeded our expectations. The website they built for us helped increase our sales by 40%!"
              </p>
              <p className="font-bold">John Doe</p>
              <p className="text-gray-600">CEO, Example Company</p>
            </div>

            {/* Testimonial 2 */}
            <div className="max-w-xs bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                "The mobile app they developed made our operations smoother and helped us serve customers better."
              </p>
              <p className="font-bold">Jane Smith</p>
              <p className="text-gray-600">Marketing Director, TechCorp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-6">
            Get in touch with us to discuss your project and see how we can help you succeed.
          </p>
          <a
            href="/contact"
            className="bg-teal-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-teal-400"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
 