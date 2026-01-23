const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Incharge</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to providing compassionate, professional mental health services 
            to help you take charge of your wellbeing and live your best life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Incharge, we believe everyone deserves access to quality mental health care. 
              Our mission is to provide comprehensive, evidence-based therapy services in a 
              safe, supportive environment.
            </p>
            <p className="text-gray-600 mb-4">
              We're committed to helping individuals, couples, and families overcome challenges, 
              build resilience, and achieve their personal goals for mental wellness.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Mission Image Placeholder</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center lg:order-1">
            <p className="text-gray-600">Team Image Placeholder</p>
          </div>
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-600 mb-4">
              Our team consists of licensed therapists, counselors, and mental health 
              professionals with years of experience in various therapeutic approaches.
            </p>
            <p className="text-gray-600 mb-4">
              We're trained in evidence-based treatments including CBT, DBT, EMDR, 
              and family systems therapy to provide the best care for our clients.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Compassion</h3>
              <p className="text-gray-600">
                We approach every client with empathy, understanding, and genuine care.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of professional practice and ethics.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
              <p className="text-gray-600">
                We help clients develop the tools and confidence to take charge of their lives.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          {/* Founder Card - Top */}
          <div className="flex justify-center mb-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm">
              <img 
                src="/char1.png" 
                alt="" 
                className="w-48 h-48 mx-auto mb-4 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-2">FEEBA JOHN</h3>
              <p className="text-blue-600 font-medium mb-2">Founder</p>
              <p className="text-gray-600">BCPA Member
Senior Psychologist</p>
            </div>
          </div>
          
          {/* Team Members - Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/char2.png" 
                alt="Michael Chen" 
                className="w-40 h-40 mx-auto mb-4 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Arzoo Bhagchandan</h3>
              <p className="text-gray-600">Clinical Psychologist</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/char3.png" 
                alt="Dr. Emily Rodriguez" 
                className="w-40 h-40 mx-auto mb-4 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Aishwarya Iyer</h3>
              <p className="text-gray-600">Counseling Psychologist</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/char4.png" 
                alt="David Thompson" 
                className="w-40 h-40 mx-auto mb-4 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Rachel Bhopale</h3>
              <p className="text-gray-600">Community and Engagement Manager</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/char5.png" 
                alt="David Thompson" 
                className="w-40 h-40 mx-auto mb-4 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Moksha Sherwani</h3>
              <p className="text-gray-600">Operations Manager Clinical Team</p>
            </div>
          </div>
          
          {/* Media & Creative Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Media & Creative</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/soham.jpg" 
                  alt="Soham Ambe" 
                  className="w-40 h-40 mx-auto mb-4 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">Soham Ambe</h3>
                <p className="text-gray-600">Creative Director</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/akhil.jpg" 
                  alt="Akhil Samuel" 
                  className="w-40 h-40 mx-auto mb-4 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">Akhil Samuel</h3>
                <p className="text-gray-600">Media Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;