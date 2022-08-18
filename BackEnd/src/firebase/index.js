
import { getStorage, ref, listAll } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// listing tracks
export const storage = getStorage(app);
