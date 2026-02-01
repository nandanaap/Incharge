import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [partnerForm, setPartnerForm] = useState({
    organization: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    description: ''
  });
  
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    availability: '',
    motivation: ''
  });

  const [activeTab, setActiveTab] = useState('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'contacts'), {
        ...contactForm,
        type: 'general',
        createdAt: new Date()
      });
      alert('Message sent successfully!');
      setContactForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'partnerships'), {
        ...partnerForm,
        createdAt: new Date(),
        status: 'pending'
      });
      alert('Partnership application submitted successfully!');
      setPartnerForm({ organization: '', contactName: '', email: '', phone: '', partnershipType: '', description: '' });
    } catch (error) {
      alert('Error submitting application. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'volunteers'), {
        ...volunteerForm,
        createdAt: new Date(),
        status: 'pending'
      });
      alert('Volunteer application submitted successfully!');
      setVolunteerForm({ name: '', email: '', phone: '', experience: '', availability: '', motivation: '' });
    } catch (error) {
      alert('Error submitting application. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <p className="text-gray-600">info@incharge.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p className="text-gray-600">123 Wellness St<br />City, State 12345</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === 'contact' ? 'bg-white text-primary shadow' : 'text-gray-600'
              }`}
            >
              General Contact
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === 'partner' ? 'bg-white text-primary shadow' : 'text-gray-600'
              }`}
            >
              Partnerships
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === 'volunteer' ? 'bg-white text-primary shadow' : 'text-gray-600'
              }`}
            >
              Volunteer
            </button>
          </div>
        </div>

        {/* Forms */}
        <div className="max-w-2xl mx-auto">
          {activeTab === 'contact' && (
            <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          {activeTab === 'partner' && (
            <form onSubmit={handlePartnerSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <h2 className="text-2xl font-bold mb-6">Partner with Us</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                <input
                  type="text"
                  value={partnerForm.organization}
                  onChange={(e) => setPartnerForm({ ...partnerForm, organization: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input
                  type="text"
                  value={partnerForm.contactName}
                  onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={partnerForm.email}
                  onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type *</label>
                <select
                  value={partnerForm.partnershipType}
                  onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select partnership type</option>
                  <option value="referral">Referral Partnership</option>
                  <option value="corporate">Corporate Wellness</option>
                  <option value="educational">Educational Institution</option>
                  <option value="healthcare">Healthcare Provider</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  value={partnerForm.description}
                  onChange={(e) => setPartnerForm({ ...partnerForm, description: e.target.value })}
                  required
                  rows={4}
                  placeholder="Tell us about your organization and partnership goals..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Partnership Application'}
              </button>
            </form>
          )}

          {activeTab === 'volunteer' && (
            <form onSubmit={handleVolunteerSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <h2 className="text-2xl font-bold mb-6">Become a Volunteer</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={volunteerForm.name}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={volunteerForm.email}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  value={volunteerForm.phone}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience</label>
                <textarea
                  value={volunteerForm.experience}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, experience: e.target.value })}
                  rows={3}
                  placeholder="Any relevant experience in mental health, counseling, or volunteer work..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
                <select
                  value={volunteerForm.availability}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to volunteer? *</label>
                <textarea
                  value={volunteerForm.motivation}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, motivation: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;