let questions = [
  { question: "তোমার বন্ধু কে?", options: ["Md. Awlad", "শয়তান"], answer: "Md. Awlad" }
];

let currentQuestion = 0;
let shareCount = 0;
const totalSharesRequired = 5;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => handleAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(selected) {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("share-section").style.display = "block";
}

function shareClick(platform) {
  const pageUrl = window.location.href;
  const shareText = "🔥 Bikroy.com এর ১৩ বছর পূর্তিতে iPhone 16 Pro Max জিতুন! কিছু প্রশ্নের উত্তর দিন আর শেয়ার করুন 🎁\n" + pageUrl;

  let shareLink = "";

  switch(platform) {
    case "facebook":
      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
      break;
    case "whatsapp":
      shareLink = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
      break;
    case "messenger":
      shareLink = `fb-messenger://share?link=${encodeURIComponent(pageUrl)}`;
      break;
    case "imo":
      navigator.clipboard.writeText(shareText).then(() => {
        alert("✅ লিংক কপি হয়েছে! এখন Imo খুলে মেসেজে পাঠিয়ে দিন 📲");
      });
      break;
  }

  if (platform !== "imo") {
    window.open(shareLink, "_blank");
  }

  shareCount++;
  document.getElementById("share-count").innerText = "শেয়ার হয়েছে: " + shareCount + "/5";
  if (shareCount >= totalSharesRequired) {
    document.getElementById("reward-btn").disabled = false;
  }
}

function showFinalMessage() {
  document.getElementById("share-section").style.display = "none";
  document.getElementById("final-message").innerHTML = `😈 <br> <strong>মারা খা</strong><br>এতো লোভ কেন?<br><small>বি:দ্র: এটা বানানো হয়েছে আপনাকে সতর্ক করার জন্য, যেন কেউ ফেসবুক/বিকাশ পাসওয়ার্ড নিয়ে না যায়।</small>`;
}

// Timer
let timeLeft = 30;
const timer = document.getElementById("timer");
const countdown = setInterval(() => {
  timeLeft--;
  timer.innerText = "⏳ সময়: " + timeLeft + " সেকেন্ড বাকি";
  if (timeLeft <= 0) {
    clearInterval(countdown);
    handleAnswer("");
  }
}, 1000);

window.onload = loadQuestion;
