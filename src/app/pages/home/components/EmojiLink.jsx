import Link from "next/link";
import React from "react";

const EmojiLink = ({ link, gif, mood }) => {
  return (
    <Link className="emojiLink" href={link}>
      <img src={`/assets/gif/${gif}.gif`} />
      {mood}
    </Link>
  );
};

export default EmojiLink;
