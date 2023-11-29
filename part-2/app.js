import React from "react";
import tweet from "./tweet";

const app = () => {
    return (
        <div className="app">
      <tweet
        username="user1handle"
        name="User One"
        date="Nov 28, 2023"
        message="This is my first tweet!"
      />
      <tweet
        username="user2handle"
        name="User Two"
        date="Nov 27, 2023"
        message="Hello Twitter world!"
      />
      <tweetweet
        username="user3handle"
        name="User Three"
        date="Nov 26, 2023"
        message="React is amazing! #coding #reactjs"
      />
    </div>
    );
};

export default app;