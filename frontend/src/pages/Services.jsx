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
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{color: '#3258b2'}}>Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional mental health services tailored to your unique needs. Take the first step towards better mental wellness.</p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#3258b2'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#3258b2'}}>
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h2 className="text-2xl font-bold" style={{color: '#3258b2'}}>Individual Therapy</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Personalized one-on-one sessions to address your specific mental health needs and goals.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Depression and anxiety treatment</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Trauma and PTSD therapy</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Stress management</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Personal growth and development</li>
            </ul>
          </div>

          <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#3258b2'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#3258b2'}}>
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h2 className="text-2xl font-bold" style={{color: '#3258b2'}}>Couples Therapy</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Strengthen your relationship and improve communication with your partner.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Communication improvement</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Conflict resolution</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Intimacy and trust building</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Pre-marital counseling</li>
            </ul>
          </div>

          <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#3258b2'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#3258b2'}}>
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h2 className="text-2xl font-bold" style={{color: '#3258b2'}}>Family Therapy</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Heal family dynamics and create a healthier home environment for everyone.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Parent-child relationships</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Sibling conflicts</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Blended family challenges</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Family communication</li>
            </ul>
          </div>

          <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#3258b2'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#3258b2'}}>
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h2 className="text-2xl font-bold" style={{color: '#3258b2'}}>Group Therapy</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Connect with others facing similar challenges in a supportive group setting.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Anxiety support groups</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Grief and loss groups</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Addiction recovery groups</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6495ED'}}></span>Social skills development</li>
            </ul>
          </div>
        </div>

        {/* Book a Session Section */}
        <div className="p-10 rounded-2xl shadow-xl mb-20" style={{backgroundColor: '#6495ED'}}>
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Book a Session</h2>
          <p className="text-center text-white mb-12 text-lg">Choose your preferred therapist to schedule your session</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold" style={{backgroundColor: '#3258b2'}}>FJ</div>
              <h3 className="text-2xl font-semibold mb-2" style={{color: '#3258b2'}}>Feeba John</h3>
              <p className="text-gray-600 mb-6">Founder & Senior Psychologist</p>
              <a href="https://forms.gle/oPSV3EWZsqW6XdKL9" target="_blank" rel="noopener noreferrer" className="text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-block font-semibold hover:transform hover:scale-105" style={{backgroundColor: '#3258b2'}}>
                Book with Feeba
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold" style={{backgroundColor: '#3258b2'}}>AB</div>
              <h3 className="text-2xl font-semibold mb-2" style={{color: '#3258b2'}}>Arzoo Bhagchandan</h3>
              <p className="text-gray-600 mb-6">Clinical Psychologist</p>
              <a href="https://forms.gle/XwmcmoeAcuAwsb498" target="_blank" rel="noopener noreferrer" className="text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-block font-semibold hover:transform hover:scale-105" style={{backgroundColor: '#3258b2'}}>
                Book with Arzoo
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold" style={{backgroundColor: '#3258b2'}}>AI</div>
              <h3 className="text-2xl font-semibold mb-2" style={{color: '#3258b2'}}>Aishwarya Iyer</h3>
              <p className="text-gray-600 mb-6">Counseling Psychologist</p>
              <a href="https://forms.gle/Wd8d9yyFLX6CBm836" target="_blank" rel="noopener noreferrer" className="text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-block font-semibold hover:transform hover:scale-105" style={{backgroundColor: '#3258b2'}}>
                Book with Aishwarya
              </a>
            </div>
          </div>
        </div>

        {/* Community Links Section */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-4" style={{color: '#3258b2'}}>Join Our Community</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Be part of something bigger and make a positive impact</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl shadow-lg text-center border-l-4 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold" style={{backgroundColor: '#6495ED'}}>🤝</div>
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#3258b2'}}>Volunteer with Us</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Make a difference in others' lives by joining our volunteer program</p>
              <a href="https://forms.gle/LKSGuRfERib549fH9" target="_blank" rel="noopener noreferrer" className="text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-block font-semibold hover:transform hover:scale-105" style={{backgroundColor: '#6495ED'}}>
                Apply to Volunteer
              </a>
            </div>
            <div className="p-8 rounded-xl shadow-lg text-center border-l-4 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105" style={{backgroundColor: '#F0F8FF', borderColor: '#6495ED'}}>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold" style={{backgroundColor: '#6495ED'}}>🌟</div>
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#3258b2'}}>Greatness Community</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Connect with like-minded individuals in our supportive community</p>
              <a href="https://forms.gle/wZz9a9n9Fv9JwMBM6" target="_blank" rel="noopener noreferrer" className="text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-block font-semibold hover:transform hover:scale-105" style={{backgroundColor: '#6495ED'}}>
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