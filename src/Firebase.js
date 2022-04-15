import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

let firebaseConfig = {
  apiKey: 'AIzaSyDR07b4Gc5AMIPwyhdmPr1W_Tar0z3iOB8',
  authDomain: 'react-firebase-7b2dc.firebaseapp.com',
  projectId: 'react-firebase-7b2dc',
  storageBucket: 'react-firebase-7b2dc.appspot.com',
  messagingSenderId: '352829354190',
  appId: '1:352829354190:web:6c9981865bdf0ad340609f'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)