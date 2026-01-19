import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Take Charge of Your Mental Health
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Professional therapy services to help you overcome challenges and live your best life
          </p>
          <div className="space-x-4 animate-slide-up">
            <Link to="/services" className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book a Session
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gradient-to-b from-white to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 animate-fade-in">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="interactive-card group">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Individual Therapy</h3>
              <p className="text-gray-600 mb-4">One-on-one sessions tailored to your needs</p>
              <Link to="/services" className="btn-primary w-full text-center block">Book Session</Link>
            </div>
            <div className="interactive-card group">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Couples Therapy</h3>
              <p className="text-gray-600 mb-4">Strengthen your relationship together</p>
              <Link to="/services" className="btn-primary w-full text-center block">Book Session</Link>
            </div>
            <div className="interactive-card group">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Family Therapy</h3>
              <p className="text-gray-600 mb-4">Heal and grow as a family unit</p>
              <Link to="/services" className="btn-primary w-full text-center block">Book Session</Link>
            </div>
            <div className="interactive-card group">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Group Therapy</h3>
              <p className="text-gray-600 mb-4">Connect with others on similar journeys</p>
              <Link to="/services" className="btn-secondary w-full text-center block">Register</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="interactive-card text-center group">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Greatness Community</h3>
              <p className="text-gray-600 mb-4">Connect with like-minded individuals</p>
              <button className="btn-primary w-full">Become a Member</button>
            </div>
            <div className="interactive-card text-center group">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Volunteer</h3>
              <p className="text-gray-600 mb-4">Make a difference in others' lives</p>
              <button className="btn-primary w-full">Join Us</button>
            </div>
            <div className="interactive-card text-center group">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Partnerships</h3>
              <p className="text-gray-600 mb-4">Collaborate with us</p>
              <button className="btn-primary w-full">Partner With Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Video */}
      <section className="py-16 bg-gradient-to-r from-accent to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Our Story</h2>
          <div className="aspect-video bg-white bg-opacity-20 rounded-xl flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">▶</div>
              <p className="text-xl font-semibold">Watch Our Brand Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="interactive-card">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"Incharge helped me through a difficult time. Highly recommended!"</p>
              <p className="font-semibold text-primary">- Sarah M.</p>
            </div>
            <div className="interactive-card">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"Professional, caring, and effective therapy services."</p>
              <p className="font-semibold text-primary">- John D.</p>
            </div>
            <div className="interactive-card">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"The couples therapy saved our marriage. Thank you!"</p>
              <p className="font-semibold text-primary">- Mike & Lisa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;