let shareCount = 0;
let totalSharesRequired = 5;
let timerValue = 30;
let timerInterval;

function startQuiz() {
  document.getElementById("question").innerText = "তোমার বন্ধু কে?";
  document.getElementById("options").innerHTML = `
    <button onclick="nextStep()">Md. Awlad</button>
    <button onclick="nextStep()">শয়তান</button>
  `;
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timerValue--;
    document.getElementById("timer").innerText = "⏳ সময়: " + timerValue + " সেকেন্ড বাকি";
    if (timerValue <= 0) {
      clearInterval(timerInterval);
      nextStep(); // টাইম শেষ হলে অটো পরবর্তী ধাপে যাবে
    }
  }, 1000);
}

function nextStep() {
  clearInterval(timerInterval);
  document.getElementById("quiz").style.display = "none";
  document.getElementById("share-section").style.display = "block";
}

function shareClick() {
  shareCount++;
  document.getElementById("share-count").innerText = "শেয়ার হয়েছে: " + shareCount + "/5";
  if (shareCount >= totalSharesRequired) {
    document.getElementById("reward-btn").disabled = false;
  }
}

function showFinalMessage() {
  document.getElementById("share-section").style.display = "none";
  document.getElementById("final-message").innerHTML = `
    <h2>😈 "মারা খা!"</h2>
    <p>এত লোভ কেন? 🤭<br>বি:দ্র: এটা বানিয়েছি আপনাদের সতর্ক করার জন্য যেন কেউ আপনার ফেসবুক/বিকাশ পাসওয়ার্ড না নেয়।</p>
  `;
}

startQuiz();
