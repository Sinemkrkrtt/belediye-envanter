import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6G7JfaTCSpvwkX4PXTTJ6I92LIpzkkxk",
  authDomain: "belediyeenvanter.firebaseapp.com",
  projectId: "belediyeenvanter",
  storageBucket: "belediyeenvanter.appspot.com",
  messagingSenderId: "1088833874170",
  appId: "1:1088833874170:web:2e2c1c069a9880917b8143",
  measurementId: "G-6G8V5MLPYN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Lütfen e-posta ve şifre girin.");
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Giriş başarılı!");
        window.location.href = "envanter.html"; // ✅ başarılı giriş sonrası yönlendirme
      } catch (error) {
        console.error("Giriş hatası:", error);
        alert("Giriş başarısız. Bilgileri kontrol edin.");
      }
    });
  }
});
