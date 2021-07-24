import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React from 'react';
import './Post.css'

//post的用户名认证账号id 用的span
//部分icon用了MUI自带参数fontSize="small"
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
              Rafeh Qazi{"  "}
              <span className="post__headerUsername">
                <VerifiedUserIcon  className="post__badge"/>
                @feifeirun97
              </span>
            </h3>
            <div className="post__headerDescription">
              <p>Uhank you.Uhank you.Uhank you.Uhank you.Uhank you.Uhank you.Uhank you.Uhank you.Uhank you.Uhank you.Uhank you.Uhank you.</p>
            </div>
          </div>          
        </div>
        <img 
          src="https://media3.giphy.com/media/kiBcwEXegBTACmVOnE/giphy.gif?cid=ecf05e475f0mxniimhziyihwvc0e2roilqbvrra8qi3ewvuv&rid=giphy.gif&ct=g"
          alt="img loadfailed" 
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
}

export default Post;
