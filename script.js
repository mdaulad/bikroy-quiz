let shareCount = 0;
let totalSharesRequired = 5;
let timerValue = 30;
let timerInterval;

const questions = [
  {
    q: "তোমার বন্ধু কে?",
    options: ["Md. Awlad", "শয়তান"]
  },
  {
    q: "তুমি কয়টা ফেসবুক একাউন্ট ব্যবহার করো?",
    options: ["১টা", "২টা", "৩+", "মনে নাই"]
  },
  {
    q: "তুমি কি কখনো কাউকে পাসওয়ার্ড দিয়ে দিয়েছো?",
    options: ["হ্যাঁ", "না", "ভুলে দিয়েছিলাম", "একবার দিয়েছিলাম"]
  }
];

let currentQuestionIndex = 0;

function startQuiz() {
  showQuestion();
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timerValue--;
    document.getElementById("timer").innerText = "⏳ সময়: " + timerValue + " সেকেন্ড বাকি";
    if (timerValue <= 0) {
      clearInterval(timerInterval);
      showShareSection();
    }
  }, 1000);
}

function showQuestion() {
  const q = questions[currentQuestionIndex];
  document.getElementById("question").innerText = q.q;
  document.getElementById("options").innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = nextQuestion;
    document.getElementById("options").appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    clearInterval(timerInterval);
    showShareSection();
  }
}

function showShareSection() {
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
    <p>এত লোভ কেন? 🤭<br><strong>বি:দ্র:</strong> এটা বানিয়েছি আপনাদের সতর্ক করার জন্য যেন কেউ আপনার ফেসবুক/বিকাশ পাসওয়ার্ড না নেয়।</p>
  `;
}

startQuiz();
