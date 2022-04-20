const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/Fortune", (req, res) => {
  const fortune = ["All your hard work will soon pay off.",
					 "Curiosity kills boredom. Nothing can kill curiosity.",
					 "Change is happening in your life, so go with the flow!",
           "A friend asks only for your time not your money.",
           "Do not be intimidated by the eloquence of others",
           "He will win who knows when to fight and when not to fight.",
           "In the midst of chaos, there is also opportunity"
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/joke", (req, res) => {
  const jokes = ["Why did the football coach go to the bank? To get his quarter back.",
					 "Why are fish so smart? They live in schools!",
					 "Where do boats go when they're sick? To the dock.",
  ];

  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomjoke = jokes[randomIndex];

  res.status(200).send(randomjoke);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
