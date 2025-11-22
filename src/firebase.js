import { initializeApp } from 'firebase/app'

// Firebase project configuration from the Firebase console
const firebaseConfig = {
  apiKey: 'AIzaSyCSu9pi0sGO26korbE2Z-cU_K-V_VGY1hI',
  authDomain: 'xietianyiwebsite.firebaseapp.com',
  projectId: 'xietianyiwebsite',
  storageBucket: 'xietianyiwebsite.firebasestorage.app',
  messagingSenderId: '118441500700',
  appId: '1:118441500700:web:db2290950f2ee927503fd9',
}

// Initialize Firebase once for the app
export const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
