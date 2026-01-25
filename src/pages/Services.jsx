import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        createdAt: new Date(),
        status: 'pending'
      });
      alert('Booking request submitted successfully!');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      alert('Error submitting booking. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Individual Therapy</h2>
            <p className="text-gray-600 mb-6">
              Personalized one-on-one sessions to address your specific mental health needs and goals.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Depression and anxiety treatment</li>
              <li>Trauma and PTSD therapy</li>
              <li>Stress management</li>
              <li>Personal growth and development</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Couples Therapy</h2>
            <p className="text-gray-600 mb-6">
              Strengthen your relationship and improve communication with your partner.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Communication improvement</li>
              <li>Conflict resolution</li>
              <li>Intimacy and trust building</li>
              <li>Pre-marital counseling</li>
            </ul>
          
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Family Therapy</h2>
            <p className="text-gray-600 mb-6">
              Heal family dynamics and create a healthier home environment for everyone.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Parent-child relationships</li>
              <li>Sibling conflicts</li>
              <li>Blended family challenges</li>
              <li>Family communication</li>
            </ul>
            
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Group Therapy</h2>
            <p className="text-gray-600 mb-6">
              Connect with others facing similar challenges in a supportive group setting.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Anxiety support groups</li>
              <li>Grief and loss groups</li>
              <li>Addiction recovery groups</li>
              <li>Social skills development</li>
            </ul>
         
          </div>
        </div>

        {/* Book a Session Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Book a Session</h2>
          <p className="text-center text-gray-600 mb-8">Choose your preferred therapist to schedule your session</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Feeba John</h3>
              <p className="text-gray-600 mb-4">Founder & Senior Psychologist</p>
              <a href="https://forms.gle/oPSV3EWZsqW6XdKL9" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block">
                Book with Feeba
              </a>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Arzoo Bhagchandan</h3>
              <p className="text-gray-600 mb-4">Clinical Psychologist</p>
              <a href="https://forms.gle/XwmcmoeAcuAwsb498" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block">
                Book with Arzoo
              </a>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Aishwarya Iyer</h3>
              <p className="text-gray-600 mb-4">Counseling Psychologist</p>
              <a href="https://forms.gle/Wd8d9yyFLX6CBm836" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block">
                Book with Aishwarya
              </a>
            </div>
          </div>
        </div>

        {/* Community Links Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Volunteer with Us</h3>
              <p className="text-gray-600 mb-4">Make a difference in others' lives by joining our volunteer program</p>
              <a href="https://forms.gle/LKSGuRfERib549fH9" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block">
                Apply to Volunteer
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Greatness Community</h3>
              <p className="text-gray-600 mb-4">Connect with like-minded individuals in our supportive community</p>
              <a href="https://forms.gle/wZz9a9n9Fv9JwMBM6" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block">
                Join Community
              </a>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Services;