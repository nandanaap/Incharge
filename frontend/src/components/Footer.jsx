import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="flex items-center">
                <div className="flex space-x-4"></div>
              <img src="/IN-Charge-LOGO.png" alt="InCharge Logo" className="h-12 w-auto hover:scale-105 transition-transform duration-300" />
            </Link>
            
            <p className="text-gray-300 mb-4">
              Professional mental health and therapy services to help you live your best life.
            </p>
            
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white">Individual Therapy</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Couples Therapy</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Family Therapy</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Group Therapy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
             
              <li><Link to="/podcast" className="text-gray-300 hover:text-white">Podcast</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white">Courses</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; 2024 Incharge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;