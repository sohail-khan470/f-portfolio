Firebase Setup Guide for Fatima Portfolio
📋 Prerequisites
Node.js 18+ installed

npm or yarn package manager

Google account (Gmail)

🚀 Step-by-Step Firebase Setup

1. Create Firebase Project
   text
1. Go to: https://console.firebase.google.com/
1. Click "Create a project"
1. Name: "fatima-portfolio"
1. Disable Google Analytics (optional)
1. Click "Create project"
1. Enable Required Services
   Authentication:
   text
1. Go to: Build → Authentication
1. Click "Get started"
1. Go to "Sign-in method" tab
1. Enable "Email/Password"
1. Click "Save"
   Firestore Database:
   text
1. Go to: Build → Firestore Database
1. Click "Create database"
1. Choose "Start in test mode"
1. Select location (closest to you)
1. Click "Enable"
   Storage:
   text
1. Go to: Build → Storage
1. Click "Get started"
1. Choose "Start in test mode"
1. Select location (same as Firestore)
1. Click "Create"
1. Get Firebase Config
   text
1. Go to: Project Settings (gear icon)
1. Scroll to "Your apps" section
1. Click "</>" (Web app) icon
1. App name: "fatima-portfolio"
1. Click "Register app"
1. COPY the configuration object
1. Create .env File
   In project root, create .env file with this content:

env
VITE_FIREBASE_API_KEY=YOUR_API_KEY_HERE
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN_HERE
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID_HERE
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET_HERE
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID_HERE
VITE_FIREBASE_APP_ID=YOUR_APP_ID_HERE
Replace values with your Firebase config.

5. Set Security Rules
   Firestore Rules (Copy & Paste):
   Go to Firestore → Rules tab:

javascript
rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /projects/{project} {
allow read: if true;
allow write: if request.auth != null &&
request.auth.token.email in [
"fatima@designer.com",
"developer@studio.com"
];
}
}
}
Click Publish.

Storage Rules (Copy & Paste):
Go to Storage → Rules tab:

javascript
rules_version = '2';
service firebase.storage {
match /b/{bucket}/o {
match /projects/{allPaths=\*\*} {
allow read: if true;
allow write: if request.auth != null &&
request.auth.token.email in [
"fatima@designer.com",
"developer@studio.com"
];
}
}
}
Click Publish.

6. Create Admin Users
   text
1. Go to: Authentication → Users
1. Click "Add user"
1. Add FIRST user:

   - Email: fatima@designer.com
   - Password: [choose secure password]
   - Click "Add user"

1. Add SECOND user:
   - Email: developer@studio.com
   - Password: [choose secure password]
   - Click "Add user"
     Save these credentials! You'll need them to login.

📁 Project Setup Commands
bash

# 1. Install dependencies

npm install

# 2. Start development server

npm run dev

# 3. Build for production

npm run build

# 4. Preview production build

npm run preview
🔐 Admin Login Info
Login URL: http://localhost:5173/login
Admin Emails:

fatima@designer.com

developer@studio.com
Password: (what you set in Firebase)

🚀 Quick Deploy to Vercel
bash

# Deploy to Vercel

npm i -g vercel
vercel
vercel --prod
After deployment:

Go to Vercel Dashboard → Project → Settings → Environment Variables

Add ALL variables from your .env file

Redeploy

🐛 Troubleshooting Quick Fixes
"Permission Denied"
Check Security Rules are published

Verify admin emails match exactly

"Invalid Credentials"
Check user exists in Firebase Authentication

Try resetting password in Firebase Console

"Image Upload Failed"
Check Storage rules allow write

Ensure image < 5MB

"Environment Variables Not Working"
bash

# Restart dev server

npm run dev

# Check if variables are loaded

console.log(import.meta.env.VITE_FIREBASE_API_KEY)
📞 Support Summary
Done Checklist:

✅ Firebase project created

✅ Services enabled (Auth, Firestore, Storage)

✅ .env file configured

✅ Security rules set

✅ Admin users created

✅ Local dev server running

Next Steps:

Visit http://localhost:5173

Test admin login at /login

Add projects via admin panel

Deploy to Vercel/Netlify

Need Help?

Firebase Console: https://console.firebase.google.com/

Firebase Docs: https://firebase.google.com/docs

rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /projects/{project} {
allow read: if true;
allow write: if request.auth != null &&
request.auth.token.email in [
"fatima@designer.com",
"developer@studio.com"
];
}
}
}

rules_version = '2';
service firebase.storage {
match /b/{bucket}/o {
match /projects/{allPaths=\*\*} {
allow read: if true;
allow write: if request.auth != null &&
request.auth.token.email in [
"fatima@designer.com",
"developer@studio.com"
];
}
}
}
