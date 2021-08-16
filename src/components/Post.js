import React from "react";
import './post.css';
import { FcApproval } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { FcDownload } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
import { FcLike } from 'react-icons/fc';
import { FcExpand } from 'react-icons/fc';

const Post = ({name, photo, nickname, content, image, date,
  comments, reposts, likes}) => {
    return (
      <div className="container">
        <div className="content">
          <div className="content__info">
            <div className="content__info-img">
              <img className="info-img" src={photo} alt="profile pic"/>
            </div>
            <div className="content__info-top">
              <div className="name">
                <div className="real-name">
                  {name} 
                </div>
                <div className="square">
                  <FcApproval />
                </div>
                <div className="nickname">
                  {nickname} &#149; {date}
                </div>
                <div className="arrow">
                  <FcExpand />
                </div>
              </div>
                <div className="text">{content}</div>
                  <div className="photo">
                    <img className="photo__img" src={image} alt="Tokyo"/>
                  </div>
                  <div className="icons">
                    <div className="comments">
                      <FcComments /><span class="comment">{comments}</span>
                    </div>
                    <div className="reposts">
                      <FcShare /><span class="repost">{reposts}</span>
                    </div>
                    <div className="likes">
                      <FcLike/><span class="like">{likes}</span>
                    </div>
                    <div className="download">
                      <FcDownload/>
                    </div>
                   </div>
                  </div>
              </div>
        </div>
      </div>
    )
  }

  export default Post;