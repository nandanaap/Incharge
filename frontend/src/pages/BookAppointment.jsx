import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    age: '',
    gender: '',
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    reasonForVisit: '',
    previousTherapy: '',
    medications: '',
    medicalConditions: '',
    preferredLanguage: 'English'
  });

  const therapist = {
    name: 'Dr. Feeba John',
    consultationType: 'Paid Consultation',
    duration: 45,
    price: 1000
  };

  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async (date) => {
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/available-slots/${date.toISOString().split('T')[0]}`);
      const slots = await response.json();
      setAvailableSlots(slots);
      
      const booked = timeSlots.filter(slot => !slots.includes(slot));
      setBookedSlots(booked);
    } catch (error) {
      console.error('Error fetching available slots:', error);
      setAvailableSlots(timeSlots);
      setBookedSlots([]);
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const handleDateSelect = (date) => {
    if (date && date >= new Date().setHours(0, 0, 0, 0)) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !formData.clientName || !formData.clientEmail || !formData.clientPhone || !formData.age || !formData.gender || !formData.reasonForVisit) {
      alert('Please fill all required fields (*) and select date & time');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          therapistName: therapist.name,
          consultationType: therapist.consultationType,
          duration: therapist.duration,
          price: therapist.price,
          date: selectedDate,
          time: selectedTime,
          ...formData
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert('Appointment booked successfully!');
        setSelectedDate(null);
        setSelectedTime(null);
        setFormData({
          clientName: '',
          clientEmail: '',
          clientPhone: '',
          age: '',
          gender: '',
          address: '',
          emergencyContact: '',
          emergencyPhone: '',
          reasonForVisit: '',
          previousTherapy: '',
          medications: '',
          medicalConditions: '',
          preferredLanguage: 'English'
        });
      } else {
        alert(result.error || 'Error booking appointment');
        if (selectedDate) {
          fetchAvailableSlots(selectedDate);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error booking appointment');
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6" style={{color: '#0f1a2b'}}>Book Appointment</h1>
          
          <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">👨⚕️</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold" style={{color: '#0f1a2b'}}>{therapist.name}</h3>
              <p className="text-gray-600">{therapist.consultationType}</p>
              <p className="text-gray-600">{therapist.duration} mins | ₹{therapist.price}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4" style={{color: '#0f1a2b'}}>Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="clientName"
                placeholder="Full Name *"
                value={formData.clientName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="clientEmail"
                placeholder="Email Address *"
                value={formData.clientEmail}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="clientPhone"
                placeholder="Phone Number *"
                value={formData.clientPhone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age *"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Gender *</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <select
                name="preferredLanguage"
                value={formData.preferredLanguage}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Tamil">Tamil</option>
              </select>
              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                rows="2"
              />
              <input
                type="text"
                name="emergencyContact"
                placeholder="Emergency Contact Name"
                value={formData.emergencyContact}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="emergencyPhone"
                placeholder="Emergency Contact Phone"
                value={formData.emergencyPhone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4" style={{color: '#0f1a2b'}}>Medical & Therapy Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <textarea
                name="reasonForVisit"
                placeholder="Reason for visit / What brings you here today? *"
                value={formData.reasonForVisit}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              />
              <textarea
                name="previousTherapy"
                placeholder="Previous therapy experience (if any)"
                value={formData.previousTherapy}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="2"
              />
              <textarea
                name="medications"
                placeholder="Current medications (if any)"
                value={formData.medications}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="2"
              />
              <textarea
                name="medicalConditions"
                placeholder="Medical conditions or allergies (if any)"
                value={formData.medicalConditions}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="2"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center mr-3">
                <span className="text-sm">📅</span>
              </div>
              <h3 className="text-lg font-semibold" style={{color: '#0f1a2b'}}>Date & Time</h3>
            </div>
            
            <p className="text-gray-600 mb-4">Your appointment will be booked with {therapist.name}</p>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <h4 className="text-lg font-semibold">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h4>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentMonth).map((date, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    disabled={!date || date < new Date().setHours(0, 0, 0, 0)}
                    className={`p-2 text-center rounded ${
                      date && selectedDate && date.toDateString() === selectedDate.toDateString()
                        ? 'bg-blue-600 text-white'
                        : date && date >= new Date().setHours(0, 0, 0, 0)
                        ? 'hover:bg-blue-100 text-gray-900'
                        : 'text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    {date ? date.getDate() : ''}
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div className="mt-4">
                <h4 className="font-semibold mb-3">Time Slots</h4>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map(time => {
                    const isAvailable = availableSlots.includes(time);
                    const isBooked = bookedSlots.includes(time);
                    
                    return (
                      <button
                        key={time}
                        onClick={() => isAvailable ? handleTimeSelect(time) : null}
                        disabled={!isAvailable}
                        className={`p-2 text-center rounded border ${
                          selectedTime === time
                            ? 'bg-blue-600 text-white border-blue-600'
                            : isBooked
                            ? 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                        }`}
                      >
                        {time} {isBooked ? '(Booked)' : ''}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleBooking}
            className="w-full py-3 px-6 text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:scale-105"
            style={{backgroundColor: '#0f1a2b'}}
            onMouseOver={(e) => e.target.style.backgroundColor = '#6495ED'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0f1a2b'}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;