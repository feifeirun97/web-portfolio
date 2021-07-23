import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css'

//注意是所有内容在form内，表格每一行有自己的空间
//Avatar是头像库
//input用的palceholder不是value
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg" />
          <input type="text" placeholder="What's happening?" />
        </div>

        <input 
          className="tweetBox__imageInput"
          type="text" 
          placeholder="Optional: Enter image URL" 
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>

      </form>
    </div>
  )
}

export default TweetBox;
