import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-teal-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl">
            Have any questions or inquiries? Feel free to reach out to us!
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Get In Touch
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            {/* Email */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">example@example.com</p>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>

            {/* Address */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                1234 Street Name, City, State, 56789
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-6 justify-center">
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
