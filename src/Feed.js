import React, { useState,useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import db from './firebase';
import FilpMove from 'react-flip-move';

//Header比较简单不需要新开组件了
//为posts加了一个flipmove动画效果
function Feed() {
  //[state，改变state的函数]=useState(初始值)
  const [posts, setPosts] = useState([])

  //onSnapsot监听（来自firebase文档）
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      // 把‘posts’集的所有文件【列表】数据都返回出来
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}

      < FilpMove>
        {posts.map(post => (
          //注意map用的是()不是{}，返回的是post list
          <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username} 
            verfiled={post.verfiled} 
            text={post.text} 
            avator={post.avator} 
            image={post.image} 
          />
        ))}
      </FilpMove>
      
    </div>
  )
}

export default Feed;
