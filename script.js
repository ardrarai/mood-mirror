function getMoodReply() {
  const input = document.getElementById('moodInput').value.toLowerCase();

  const moodMap = [
    { keywords: ["sad", "depressed", "down", "blue"], 
      reply: "SAME BRO 😭 let's cry and order biryani." },
    { keywords: ["happy", "joy", "excited", "yay"], 
      reply: "YESS 🕺 go dance, you legend." },
    { keywords: ["lost", "confused", "stuck", "no idea"], 
      reply: "Existential dread is our daily tea ☕." },
    { keywords: ["tired", "sleepy", "exhausted", "fatigued"], 
      reply: "Nap time or riot. Your choice 😴" },
    { keywords: ["angry", "mad", "pissed", "rage"], 
      reply: "Go scream into a pillow and eat chocolate 🍫🔥" },
    { keywords: ["anxious", "nervous", "worried", "panic"], 
      reply: "Deep breaths. Chaos can wait 🧘‍♀️" },
    { keywords: ["motivated", "productive", "focused", "hustling"], 
      reply: "You're on fire 🔥 Keep slaying it, boss!" }
  ];

  let foundReply = "idk man, but you’ll survive 💪";

  for (let mood of moodMap) {
    if (mood.keywords.some(word => input.includes(word))) {
      foundReply = mood.reply;
      break;
    }
  }

  document.getElementById('responseArea').innerText = foundReply;
}
