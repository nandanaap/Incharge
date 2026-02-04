import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #3258b2 0%, #1a1a1a 100%)'}}>
      <div className="absolute inset-0 opacity-10"></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="flex items-center justify-center">
                <div className="flex space-x-4"></div>
              <img src="/IN-Charge-LOGO.png" alt="InCharge Logo" className="h-8 w-auto hover:scale-105 transition-transform duration-300" />
            </Link>
            <p className="text-sm font italic text-gray-200 mt-2 mb-4">
              Building Resilient minds
            </p>
            
            <p className="text-gray-300">
              Professional mental health and therapy services to help you live your best life.
            </p>
            
          </div>
          
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white">Individual Therapy</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Couples Therapy</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Family Therapy</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Group Therapy</Link></li>
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