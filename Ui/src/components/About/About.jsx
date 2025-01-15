import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-teal-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl">
            Learn more about our mission, vision, and the passionate team that drives us forward.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our mission is to empower individuals and organizations with innovative solutions
            that enhance productivity, creativity, and growth. We believe in creating
            meaningful impacts through technology and teamwork.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-teal-500">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-teal-500">CTO</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Michael Brown</h3>
              <p className="text-teal-500">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg mb-6">
            Want to be a part of something big? Let’s work together to make a difference.
          </p>
          <a
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
