import db from "../firebase";
import { ref, get } from "firebase/database";

const dbRef = ref(db, "/reviews");

const getAllReviews = () => {
  return get(dbRef);
};

export default {
  getAllReviews
};