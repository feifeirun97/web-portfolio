import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css';
import db from './firebase';

//注意是所有内容在form内，表格每一行有自己的空间
//Avatar是头像库
//input用的palceholder不是value
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e =>{
    //防止刷新
    e.preventDefault();
    db.collection('posts').add({
      displayName: 'Jinyu Yuan',
      username: 'April.',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avator:
        "https://i.pinimg.com/736x/3b/74/bc/3b74bca401101300aba962b2d867a209.jpg"
    })
    
    //发送后吧value重置
    setTweetImage('');
    setTweetMessage('');
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg" />
          <input
            onChange={ e => setTweetMessage(e.target.value) }
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>

        <input
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        {/* type是button自带属性 */}
        <Button
          onClick={sendTweet} 
          type="submit" 
          className="tweetBox__tweetButton"
        >Tweet</Button>

      </form>
    </div>
  )
}

export default TweetBox;
