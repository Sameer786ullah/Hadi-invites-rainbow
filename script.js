// This invitation is addressed to Rainbow from Abdul Hadi.
const reply = document.getElementById("reply");
const confettiLayer = document.getElementById("confetti-layer");

document.getElementById("yes").addEventListener("click", () => {
  reply.textContent = "Yay! Abdul Hadi is looking forward to planning a lovely dinner with you, Rainbow! 💗";
  celebrate();
});

document.getElementById("later").addEventListener("click", () => {
  reply.textContent = "Of course, Rainbow! Abdul Hadi would be happy to plan it whenever you're ready. 🌷";
});

function celebrate() {
  const decorations = ["💗", "💕", "✨", "🌸", "♡"];
  for (let i = 0; i < 30; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = decorations[Math.floor(Math.random() * decorations.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.fontSize = `${14 + Math.random() * 14}px`;
    confettiLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 3900);
  }
}
