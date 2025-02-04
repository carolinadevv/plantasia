import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB14xSVbSc4E1A7qqxx9GtiX1hHxWVBJto",
  authDomain: "plantasia-eb281.firebaseapp.com",
  projectId: "plantasia-eb281",
  storageBucket: "plantasia-eb281.firebasestorage.app",
  messagingSenderId: "243951330714",
  appId: "1:243951330714:web:94c4436593a87dd6560623",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default async function getAsyncData() {
  const collectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(collectionRef);

  const documentsData = productsSnapshot.docs.map((doc) => doc.data());
  return documentsData;
}
