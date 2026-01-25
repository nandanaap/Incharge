import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/image (3).png',
    '/image (4).png', 
    '/image (6).png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Blue tint overlay */}
              <div className="absolute inset-0" style={{backgroundColor: '#1E90FF', opacity: 0.7}}></div>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Take Charge of Your Mental Health
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Professional therapy services to help you overcome challenges and live your best life
            </p>
            <div className="space-x-4 animate-slide-up">
              <Link to="/services" className="bg-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{color: '#1E90FF'}}>
                Explore Our Services
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300" style={{'--hover-color': '#1E90FF'}} onMouseOver={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#1E90FF';}} onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white';}}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#1E90FF'}}>Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#1E90FF'}}>Individual Therapy</h3>
              <p className="text-gray-600 mb-4">One-on-one sessions tailored to your needs</p>
            </div>
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#1E90FF'}}>Couples Therapy</h3>
              <p className="text-gray-600 mb-4">Strengthen your relationship together</p>
            </div>
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#1E90FF'}}>Family Therapy</h3>
              <p className="text-gray-600 mb-4">Heal and grow as a family unit</p>
            </div>
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#1E90FF'}}>Group Therapy</h3>
              <p className="text-gray-600 mb-4">Connect with others on similar journeys</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#1E90FF'}}>Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4" style={{color: '#1E90FF'}}>Greatness Community</h3>
              <p className="text-gray-600 mb-4">Connect with like-minded individuals</p>
              <button className="text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold hover:transform hover:scale-105" style={{backgroundColor: '#1E90FF'}} onMouseOver={(e) => e.target.style.backgroundColor = '#6495ED'} onMouseOut={(e) => e.target.style.backgroundColor = '#1E90FF'}>Become a Member</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4" style={{color: '#1E90FF'}}>Volunteer</h3>
              <p className="text-gray-600 mb-4">Make a difference in others' lives</p>
              <button className="text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold hover:transform hover:scale-105" style={{backgroundColor: '#1E90FF'}} onMouseOver={(e) => e.target.style.backgroundColor = '#6495ED'} onMouseOut={(e) => e.target.style.backgroundColor = '#1E90FF'}>Join Us</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4" style={{color: '#1E90FF'}}>Partnerships</h3>
              <p className="text-gray-600 mb-4">Collaborate with us</p>
              <button className="text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold hover:transform hover:scale-105" style={{backgroundColor: '#1E90FF'}} onMouseOver={(e) => e.target.style.backgroundColor = '#6495ED'} onMouseOut={(e) => e.target.style.backgroundColor = '#1E90FF'}>Partner With Us</button>
            </div>
          </div>
          
          {/* Company Logos Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#1E90FF'}}>Organisation Impacted</h3>
              <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#1E90FF'}}></div>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                {[
                  { name: "Company 1", logo: "/logo1.png" },
                  { name: "Company 2", logo: "/logo2.png" },
                  { name: "Company 3", logo: "/logo3.png" },
                  { name: "Company 4", logo: "/logo4.png" },
                  { name: "Company 5", logo: "/logo5.jpg" },
                  { name: "Company 6", logo: "/logo6.png" },
                  { name: "Company 7", logo: "/logo7.png" },
                  { name: "Company 8", logo: "/logo8.png" } 
                 
                ].map((company, index) => (
                  <div key={index} className="flex justify-center items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Video */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8" style={{color: '#1E90FF'}}>Our Story</h2>
          <div className="aspect-video rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:transform hover:scale-105" style={{backgroundColor: '#1E90FF'}} onMouseOver={(e) => e.target.style.backgroundColor = '#6495ED'} onMouseOut={(e) => e.target.style.backgroundColor = '#1E90FF'}>
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
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#1E90FF'}}>What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#1E90FF'}}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐️</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">"I highly recommend Dr.Feeba. She is one of the strong minded people I have ever known. Her positive outlook towards life and ability to guide you through difficult situations making you understand your own self in a way is spectacular."</p>
              <div className="border-t pt-4" style={{borderColor: '#6495ED'}}>
                <p className="font-semibold" style={{color: '#1E90FF'}}>Aditi Mane</p>
                <p className="text-gray-500 text-sm">· a year ago</p>
              </div>
            </div>
            <div className="p-6 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#1E90FF'}}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐️</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">"I highly recommend Dr. Freeba John. She was like magic, flipping the coin and changing my pain to power. Just like that. I am grateful to find her."</p>
              <div className="border-t pt-4" style={{borderColor: '#6495ED'}}>
                <p className="font-semibold" style={{color: '#1E90FF'}}>Saolee</p>
                <p className="text-gray-500 text-sm">· a year ago</p>
              </div>
            </div>
            <div className="p-6 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#1E90FF'}}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐️</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">"It's an experience I can't recommend highly enough. From personal issues to future aspirations, relationships, and maintaining focus amidst external distractions, she provided invaluable support and insight every step of the way."</p>
              <div className="border-t pt-4" style={{borderColor: '#6495ED'}}>
                <p className="font-semibold" style={{color: '#1E90FF'}}>Kaushalendra Sharma</p>
                <p className="text-gray-500 text-sm">· a year ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;