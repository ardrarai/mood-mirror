function getMoodReply() {
  const input = document.getElementById('moodInput').value.toLowerCase().trim();
  const response = {
    sad: "SAME BRO 😭 let's cry and order biryani.",
    happy: "YESS 🕺 go dance, you legend.",
    lost: "Existential dread is our daily tea ☕.",
    tired: "Nap time or riot. Your choice 😴",
    angry: "Go scream into a pillow and eat chocolate 🍫🔥",
    anxious: "Deep breaths. Chaos can wait 🧘‍♀️",
    excited: "ENERGY!!! Let's goooo 🚀💃"
  };
  
  document.getElementById('responseArea').innerText =
    response[input] || "idk man, but you’ll survive 💪";
}

document.getElementById('moodInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getMoodReply();
  }
});
