const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/incharge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  therapistName: { type: String, required: true },
  consultationType: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  
  // Client Information
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  clientPhone: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String },
  emergencyContact: { type: String },
  emergencyPhone: { type: String },
  preferredLanguage: { type: String, default: 'English' },
  
  // Medical & Therapy Information
  reasonForVisit: { type: String, required: true },
  previousTherapy: { type: String },
  medications: { type: String },
  medicalConditions: { type: String },
  
  // Appointment Status
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Routes
app.post('/api/appointments', async (req, res) => {
  try {
    const { date, time } = req.body;
    
    // Check if slot is already booked
    const existingAppointment = await Appointment.findOne({
      date: new Date(date),
      time: time,
      status: { $ne: 'cancelled' }
    });
    
    if (existingAppointment) {
      return res.status(400).json({ error: 'This time slot is already booked' });
    }
    
    // Update the updatedAt field
    const appointmentData = {
      ...req.body,
      updatedAt: new Date()
    };
    
    const appointment = new Appointment(appointmentData);
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully', appointment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/appointments/available-slots/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const bookedSlots = await Appointment.find({ 
      date: new Date(date),
      status: { $ne: 'cancelled' }
    }).select('time');
    
    const allSlots = [
      '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
    ];
    
    const bookedTimes = bookedSlots.map(slot => slot.time);
    const availableSlots = allSlots.filter(slot => !bookedTimes.includes(slot));
    
    res.json(availableSlots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});