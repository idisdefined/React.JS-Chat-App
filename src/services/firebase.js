import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBHQMcABmTzOhDw8HScpo1uIsJgOtcceqk",
  authDomain: "react-msg-847f2.firebaseapp.com",
  databaseURL: "https://react-msg-847f2-default-rtdb.firebaseio.com",
  projectId: "react-msg-847f2",
  storageBucket: "react-msg-847f2.appspot.com",
  messagingSenderId: "578926863405",
  appId: "1:578926863405:web:3ea8f3042804d10cdec4a4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
  await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const userRef = ref(db, "user");
export const chatsRef = ref(db, "chats");
export const messagesRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMsgsListRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);
export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
