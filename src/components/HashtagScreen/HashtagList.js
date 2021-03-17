import React from "react";
import Hashtag from "./Hashtag/Hashtag";
import "./HashtagList.css";

const HashtagList = ({ hashtags, selectedHashtags, setSelectedHashtags }) => {
  const hashtagsWithState = hashtags.map((hashtag) => {
    hashtag.active = selectedHashtags.find((x) => x.title === hashtag.title);
    return hashtag;
  });
  return (
    <div className="hashtags">
      {hashtagsWithState.map(({ title, active }) => (
        <Hashtag
          onClick={() =>
            setSelectedHashtags(
              active
                ? selectedHashtags.filter((hashtag) => title !== hashtag.title)
                : [...selectedHashtags,{ title }])
            
          }
          title={title}
          active={active}
        />
      ))}
    </div>
  );
};
export default HashtagList;