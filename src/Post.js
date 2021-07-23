import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import React from 'react';
import './Post.css'

function Post({
  displayName,
  username,
  verfiled,
  text,
  image,
  avator
}) {
  return (
    <div className="post">
      <div className="post__avator">
        <Avatar src="https://i.pinimg.com/736x/3b/74/bc/3b74bca401101300aba962b2d867a209.jpg"/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Rafeh Qazi 
              <span>
                <VerifiedUserIcon className="post__badge"/>
              </span>
            </h3>
            <div className="post__headerDescription">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
