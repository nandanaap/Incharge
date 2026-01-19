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
            <p className="text-lg font-semibold text-primary">$120 per session</p>
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
            <p className="text-lg font-semibold text-primary">$150 per session</p>
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
            <p className="text-lg font-semibold text-primary">$180 per session</p>
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
            <p className="text-lg font-semibold text-primary">$60 per session</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Book a Session</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a service</option>
                <option value="individual">Individual Therapy</option>
                <option value="couples">Couples Therapy</option>
                <option value="family">Family Therapy</option>
                <option value="group">Group Therapy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us about your needs or any questions you have..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Book Session'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;