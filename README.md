# Incharge - Mental Health Portfolio Site

A modern, responsive portfolio website for mental health and therapy services built with React, Tailwind CSS, and Firebase.

## Features

- **Services**: Individual, Couples, Family, and Group therapy booking
- **Community**: Greatness community membership and volunteer applications
- **Partnerships**: Partner application system
- **Podcast**: Podcast episodes and subscription links
- **Courses**: Online courses and book promotion
- **Contact**: Multi-tab contact forms
- **Reviews**: Google reviews display
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS
- **Backend**: Firebase Firestore
- **Build Tool**: Vite
- **Icons**: Heroicons

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Firebase Configuration**
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Firestore Database
   - Copy your Firebase config and replace the placeholder in `src/config/firebase.js`

3. **Firestore Collections**
   Create these collections in your Firestore:
   - `bookings` - For therapy session bookings
   - `contacts` - For general contact form submissions
   - `partnerships` - For partnership applications
   - `volunteers` - For volunteer applications

4. **Development Server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

5. **Build for Production**
   ```bash
   npm run build
   ```

## Firebase Security Rules

Add these rules to your Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{collection}/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

## Customization

- Update colors in `tailwind.config.js`
- Modify Firebase config in `src/config/firebase.js`
- Add your content and images
- Update contact information in Contact page
- Add real podcast episodes and course content

## Deployment

Deploy to platforms like:
- Vercel
- Netlify
- Firebase Hosting
- AWS Amplify

## License

MIT License