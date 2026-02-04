# Incharge Backend - Appointment Booking API

Backend service for managing appointment bookings for the Incharge mental health platform.

## Features

- Book appointments with therapists
- Check available time slots
- Store appointment data in MongoDB
- RESTful API endpoints

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **MongoDB Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Update the MONGODB_URI in `.env` file

3. **Environment Variables**
   Create a `.env` file with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/incharge
   ```

4. **Start Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### POST /api/appointments
Book a new appointment
```json
{
  "therapistName": "Dr. Freeba John",
  "consultationType": "Paid Consultation",
  "duration": 45,
  "price": 1000,
  "date": "2024-02-15",
  "time": "10:00",
  "clientName": "John Doe",
  "clientEmail": "john@example.com",
  "clientPhone": "1234567890"
}
```

### GET /api/appointments
Get all appointments

### GET /api/appointments/available-slots/:date
Get available time slots for a specific date

## Database Schema

### Appointment
- therapistName: String (required)
- consultationType: String (required)
- duration: Number (required)
- price: Number (required)
- date: Date (required)
- time: String (required)
- clientName: String (required)
- clientEmail: String (required)
- clientPhone: String (required)
- status: String (default: 'pending')
- createdAt: Date (default: Date.now)