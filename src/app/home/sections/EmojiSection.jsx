import React from "react";
import EmojiLink from "../comps/EmojiLink";

const EmojiSection = () => {
  return (
    <div className="emojiSection">
      <h2>Are You:</h2>
      <ul className="emojiDiv">
        <EmojiLink link={"feeling/happy"} gif={"happy"} mood={"Happy"} />
        <EmojiLink link={"feeling/sad"} gif={"sad"} mood={"Sad"} />
        <EmojiLink link={"feeling/romantic"} gif={"romantic"} mood={"Romantic"} />
        <EmojiLink link={"feeling/angry"} gif={"angry"} mood={"Angry"} />
      </ul>
    </div>
  );
};

export default EmojiSection;
