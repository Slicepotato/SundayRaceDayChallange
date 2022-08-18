import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH85-TtGzKydnDqC6Ki0YXiB2RcVR1fSs",
  authDomain: "horizon-raceday.firebaseapp.com",
  projectId: "horizon-raceday",
  storageBucket: "horizon-raceday.appspot.com",
  messagingSenderId: "877108552970",
  appId: "1:877108552970:web:de74c1d48b4dc134b986f3",
  measurementId: "G-CLSR15HPMC"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics }
