import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React, { forwardRef } from 'react';
import './Post.css'

//post的用户名认证账号id 用的span
//部分icon用了MUI自带参数fontSize="small"

//用到了forwardRef，为了flip move动画
//key用的text，当不唯一时可以用object id[doc.id]
const Post = forwardRef(
  ({ displayName,username,verfiled,text,image,avator }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__avator">
        <Avatar src={avator}/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{"  "}
              <span className="post__headerUsername">
                {verfiled && <VerifiedUserIcon  className="post__badge"/>}
                @{username}
              </span>
            </h3>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>          
        </div>
        <img 
          src={image}
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>

      </div>
    </div>
  )
});

export default Post;
