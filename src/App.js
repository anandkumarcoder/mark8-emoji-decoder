import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😉": "Winking",
  "😍": "Smiling face with heart eyes",
  "🤩": "star-stuck",
  "💖": "love",
  "😷": "face with mask",
  "🤗": "hugging face",
  "🙄": "face with rolling eyes",
  "🍕": "pizza",
  "🍗": "Chicken leg piece "
};

var emojisWeKnow = Object.keys(emojiDictionary); //4.we mar mapping emoji dictionary with emojisweknow using object key

export default function App() {
  const [meaning, setMeaning] = useState("");
  //meaning is defined here

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    //2.meaning from emoji dictionary(processing) based on input from user(input)
    // console.log(meaning);
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Decoder</h1>

      <input onChange={emojiInputHandler} />
      {/* 1.when user puts in value */}
      <h2> {meaning} </h2>
      {/* output based on function from 2 */}

      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        //mapping emoji with emojisweknow(point4) to get(return) emoji list
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
