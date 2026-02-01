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
              <div className="absolute inset-0" style={{backgroundColor: '#2E5D8A', opacity: 0.7}}></div>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
              Take Charge of Your Mental Health
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up px-2">
              Professional therapy services to help you overcome challenges and live your best life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 animate-slide-up items-center justify-center">
              <Link to="/services" className="bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center" style={{color: '#2E5D8A'}}>
                Explore Our Services
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center" style={{'--hover-color': '#2E5D8A'}} onMouseOver={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#2E5D8A';}} onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white';}}>
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
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12" style={{color: '#2E5D8A'}}>Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{color: '#2E5D8A'}}>Individual Therapy</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">One-on-one sessions tailored to your needs</p>
            </div>
            <div className="p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{color: '#2E5D8A'}}>Couples Therapy</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Strengthen your relationship together</p>
            </div>
            <div className="p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{color: '#2E5D8A'}}>Family Therapy</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Heal and grow as a family unit</p>
            </div>
            <div className="p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{color: '#2E5D8A'}}>Group Therapy</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Connect with others on similar journeys</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Resources */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Company Logos Section */}
          <div className="mt-8 sm:mt-12 lg:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4" style={{color: '#2E5D8A'}}>Organisation Impacted</h3>
              <div className="w-16 sm:w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#2E5D8A'}}></div>
            </div>
            <div className="bg-white p-4 sm:p-6 lg:p-10 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                  <div key={index} className="flex justify-center items-center p-3 sm:p-4 lg:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="h-8 sm:h-10 lg:h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
         
          
        </div>
      </section>

      {/* Brand Video */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8" style={{color: '#2E5D8A'}}>Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="video-container relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300" style={{height: '300px'}}>
              <video 
                className="w-full h-full object-cover cursor-pointer"
                controls
                style={{height: '300px'}} 
              >
                <source src="/Left.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-container relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300" style={{height: '300px'}}>
              <video 
                className="w-full h-full object-cover cursor-pointer"
                controls
                style={{height: '300px'}}
              >
                <source src="/Middle.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-container relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300" style={{height: '300px'}}>
              <video 
                className="w-full h-full object-cover cursor-pointer"
                controls
                style={{height: '300px'}}
              >
                <source src="/Right.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Community Links Section */}
          <div className="mt-8 sm:mt-12 lg:mt-20">  
            {/* Partnership Section - Top */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8" style={{color: '#0f1a2b'}}>Partnership with Us</h2>
              <div className="max-w-sm sm:max-w-md mx-auto">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{color: '#0f1a2b'}}>Partnerships</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Collaborate with us</p>
                  <button className="text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 font-semibold hover:transform hover:scale-105 w-full sm:w-auto" style={{backgroundColor: '#0f1a2b'}} onMouseOver={(e) => e.target.style.backgroundColor = '#6495ED'} onMouseOut={(e) => e.target.style.backgroundColor = '#0f1a2b'}>Partner With Us</button>
                </div>
              </div>
            </div>
            
            {/* Community & Volunteer Section - Bottom */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12" style={{color: '#0f1a2b'}}>Join Our Community</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{color: '#0f1a2b'}}>Greatness Community</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Connect with like-minded individuals</p>
                  <a href="https://forms.gle/wZz9a9n9Fv9JwMBM6" target="_blank" rel="noopener noreferrer" className="text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 font-semibold hover:transform hover:scale-105 inline-block w-full sm:w-auto" style={{backgroundColor: '#0f1a2b'}} onMouseOver={(e) => e.target.style.backgroundColor = '#6495ED'} onMouseOut={(e) => e.target.style.backgroundColor = '#0f1a2b'}>Become a Member</a>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{color: '#0f1a2b'}}>Volunteer</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Make a difference in others' lives</p>
                  <a href="https://forms.gle/LKSGuRfERib549fH9" target="_blank" rel="noopener noreferrer" className="text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 font-semibold hover:transform hover:scale-105 inline-block w-full sm:w-auto" style={{backgroundColor: '#0f1a2b'}} onMouseOver={(e) => e.target.style.backgroundColor = '#6495ED'} onMouseOut={(e) => e.target.style.backgroundColor = '#0f1a2b'}>Join Us</a>
                </div>
              </div>
            </div>
          </div> 

        </div>
       
      </section>
       

      {/* Google Reviews */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12" style={{color: '#2E5D8A'}}>What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-4 sm:p-6 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full min-h-[250px] sm:min-h-[300px]" style={{backgroundColor: '#F0F8FF', borderColor: '#1E90FF'}}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐️</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3 sm:mb-4 italic leading-relaxed flex-grow text-sm sm:text-base">"I highly recommend Dr.Feeba. She is one of the strong minded people I have ever known. Her positive outlook towards life and ability to guide you through difficult situations making you understand your own self in a way is spectacular."</p>
              <div className="border-t pt-3 sm:pt-4 mt-auto" style={{borderColor: '#6495ED'}}>
                <p className="font-semibold text-sm sm:text-base" style={{color: '#1E90FF'}}>Aditi Mane</p>
                <p className="text-gray-500 text-xs sm:text-sm">· a year ago</p>
              </div>
            </div>
            <div className="p-4 sm:p-6 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full min-h-[250px] sm:min-h-[300px]" style={{backgroundColor: '#F0F8FF', borderColor: '#1E90FF'}}>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">⭐️</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3 sm:mb-4 italic leading-relaxed flex-grow text-sm sm:text-base">"I highly recommend Dr. Freeba John. She was like magic, flipping the coin and changing my pain to power. Just like that. I am grateful to find her."</p>
              <div className="border-t pt-3 sm:pt-4 mt-auto" style={{borderColor: '#6495ED'}}>
                <p className="font-semibold text-sm sm:text-base" style={{color: '#1E90FF'}}>Saolee</p>
                <p className="text-gray-500 text-xs sm:text-sm">· a year ago</p>
              </div>
            </div>
            <div className="p-4 sm:p-6 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full min-h-[250px] sm:min-h-[300px]" style={{backgroundColor: '#F0F8FF', borderColor: '#1E90FF'}}>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">⭐️</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3 sm:mb-4 italic leading-relaxed flex-grow text-sm sm:text-base">"It's an experience I can't recommend highly enough. From personal issues to future aspirations, relationships, and maintaining focus amidst external distractions, she provided invaluable support and insight every step of the way."</p>
              <div className="border-t pt-3 sm:pt-4 mt-auto" style={{borderColor: '#6495ED'}}>
                <p className="font-semibold text-sm sm:text-base" style={{color: '#1E90FF'}}>Kaushalendra Sharma</p>
                <p className="text-gray-500 text-xs sm:text-sm">· a year ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;