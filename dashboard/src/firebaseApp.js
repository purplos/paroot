import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
