import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavLinkClass = "block px-3 py-2 text-white font-bold hover:text-gray-200 hover:bg-blue-500 rounded transition-all duration-300";

  return (
    <header className="shadow-xl sticky top-0 z-50" style={{backgroundColor: '#3258b2'}}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/IN-Charge-LOGO.png" alt="InCharge Logo" className="h-8 sm:h-9 w-auto hover:scale-105 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 pt-2">
            <Link to="/" className="text-white font-bold hover:text-gray-200 transform hover:scale-110 transition-all duration-300 text-sm lg:text-base pt-2">Home</Link>
            <Link to="/services" className="text-white font-bold hover:text-gray-200 transform hover:scale-110 transition-all duration-300 text-sm lg:text-base pt-2">Services</Link>
            <Link to="/about" className="text-white font-bold hover:text-gray-200 transform hover:scale-110 transition-all duration-300 text-sm lg:text-base pt-2">About</Link>
           
            <a href="https://api.whatsapp.com/send?phone=917058125603" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transform hover:scale-110 transition-all duration-300 pt-2">
              <svg className="h-5 w-5 lg:h-6 lg:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <button 
              onClick={() => window.location.href = 'mailto:work@inchargewellness.com?subject=Inquiry%20from%20Website&body=I%20am%20interested%20in%20your%20services.'}
              className="text-white px-3 py-1.5 rounded-lg hover:bg-opacity-80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-slow cursor-pointer text-sm"
              style={{backgroundColor: '#3258b2'}}
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2" style={{backgroundColor: '#3258b2'}}>
              <Link to="/" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/services" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/about" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/book-appointment" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Book Appointment</Link>
              <a href="https://api.whatsapp.com/send?phone=917058125603" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-white font-bold hover:text-gray-200 hover:bg-blue-500 rounded transition-all duration-300">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              <button 
                onClick={() => {window.location.href = 'mailto:work@inchargewellness.com?subject=Inquiry%20from%20Website&body=I%20am%20interested%20in%20your%20services.'; setIsOpen(false);}}
                className="w-full text-left px-3 py-2 text-white font-bold hover:text-gray-200 hover:bg-blue-500 rounded transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;