const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative text-white py-20 overflow-hidden" style={{background: '#3258b2'}}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-ping"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
            About InCharge
          </h1>
          <p className="text-2xl md:text-3xl mb-4 max-w-4xl mx-auto animate-slide-up opacity-90 font-bold italic">
            Building Resilient Minds
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto animate-slide-up opacity-90">
            InCharge is a psychological well-being partner dedicated to building resilient minds.
          </p>
          <div className="animate-bounce mt-8">
            <svg className="w-8 h-8 mx-auto text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="transform hover:scale-105 transition-all duration-500">
              <div className="p-1 rounded-2xl" style={{background: '#3258b2'}}>
                <div className="bg-white p-8 rounded-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{background: '#3258b2'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold" style={{color: '#3258b2'}}>Our Mission</h2>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We deliver confidential, stigma-free, and evidence-based therapy services within a safe, 
                    professional, and ethically grounded environment.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We support individuals in effectively navigating life and work challenges, strengthening 
                    resilience, and achieving sustainable mental-wellness outcomes aligned with their personal goals.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We partner with organisations to design and implement resilient, holistic, and care-centred 
                    workplace cultures through strategically tailored workshops and mental well-being initiatives 
                    that enhance performance, engagement, and long-term organisational success.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" style={{background: '#3258b2'}}></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <img src="/image (3).png" alt="Mission" className="w-full h-64 object-cover rounded-xl mb-6" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Empowering Lives</h3>
                  <p className="text-gray-600">Through compassionate care and evidence-based treatment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative group lg:order-2">
              <div className="absolute -inset-4 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" style={{background: '#3258b2'}}></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <img src="/image (4).png" alt="Our Team" className="w-full h-64 object-cover rounded-xl mb-6" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Professionals</h3>
                  <p className="text-gray-600">Licensed therapists with years of experience</p>
                </div>
              </div>
            </div>
            <div className="lg:order-1 transform hover:scale-105 transition-all duration-500">
              <div className="p-1 rounded-2xl" style={{background: '#3258b2'}}>
                <div className="bg-white p-8 rounded-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{background: '#3258b2'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold" style={{color: '#3258b2'}}>Our Team</h2>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our team consists of licensed therapists, counselors, and mental health 
                    professionals with years of experience in various therapeutic approaches.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We're trained in evidence-based treatments including CBT, DBT, EMDR, 
                    and family systems therapy to provide the best care for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden" style={{background: '#3258b2'}}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-5 rounded-full animate-bounce"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group transform hover:scale-105 transition-all duration-500">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white text-center">Compassion</h3>
                <p className="text-white text-opacity-90 text-center leading-relaxed">
                  We approach every client with empathy, understanding, and genuine care.
                </p>
              </div>
            </div>
            <div className="group transform hover:scale-105 transition-all duration-500">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white text-center">Excellence</h3>
                <p className="text-white text-opacity-90 text-center leading-relaxed">
                  We maintain the highest standards of professional practice and ethics.
                </p>
              </div>
            </div>
            <div className="group transform hover:scale-105 transition-all duration-500">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white text-center">Empowerment</h3>
                <p className="text-white text-opacity-90 text-center leading-relaxed">
                  We help clients develop the tools and confidence to take charge of their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#3258b2'}}>Meet Our Team</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{background: '#3258b2'}}></div>
          </div>
          
          {/* Founder Card - Top */}
          <div className="flex justify-center mb-16">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" style={{background: '#3258b2'}}></div>
              <div className="relative text-center bg-white p-10 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 max-w-md">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-2xl blur opacity-20" style={{background: '#3258b2'}}></div>
                  <img 
                    src="/char1.png" 
                    alt="FEEBA JOHN" 
                    className="relative w-56 h-56 mx-auto object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-3" style={{color: '#3258b2'}}>FEEBA JOHN</h3>
                <p className="font-semibold mb-2 text-lg" style={{color: '#3258b2'}}>Founder</p>
                <p className="text-gray-600 leading-relaxed">BCPA Member<br/>Senior Psychologist</p>
              </div>
            </div>
          </div>
          
          {/* Team Members - Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { name: "Arzoo Bhagchandani", role: "Clinical Psychologist", image: "/char2.png" },
              { name: "Aishwarya Iyer", role: "Counseling Psychologist", image: "/char3.png" },
              { name: "Rachel Bhopale", role: "Community and Engagement Manager", image: "/char4.png" },
              { name: "Moksha Sherwani", role: "Operations Manager Clinical Team", image: "/char5.png" }
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" style={{background: '#3258b2'}}></div>
                <div className="relative text-center bg-white p-6 rounded-2xl shadow-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="relative mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 mx-auto object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 transition-colors duration-300" style={{'&:hover': {color: '#0f1a2b'}}}>{member.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Media & Creative Section */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#3258b2'}}>Media & Creative</h3>
              <div className="w-20 h-1 mx-auto rounded-full" style={{background: '#3258b2'}}></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                { name: "Soham Ambe", role: "Creative Director", image: "/char7.png" },
                { name: "Akhil Samuel", role: "Media Lead", image: "/char6.png" }
              ].map((member, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-3 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" style={{background: '#3258b2'}}></div>
                  <div className="relative text-center bg-white p-8 rounded-2xl shadow-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="relative mb-6">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-44 h-44 mx-auto object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 transition-colors duration-300">{member.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;