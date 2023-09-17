import React from "react";
import EmojiLink from "../components/EmojiLink";

const EmojiSection = () => {
  return (
    <div className="emojiSection">
      <h2>Are You:</h2>
      <ul className="emojiDiv">
        <EmojiLink link={"/"} gif={"happy"} mood={"Happy"} />
        <EmojiLink link={"/"} gif={"sad"} mood={"Sad"} />
        <EmojiLink link={"/"} gif={"romantic"} mood={"Romantic"} />
        <EmojiLink link={"/"} gif={"angry"} mood={"Angry"} />
      </ul>
    </div>
  );
};

export default EmojiSection;
