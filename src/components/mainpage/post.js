import React from 'react';
import img1 from '../../assests/img1.png';
import { Avatar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import TelegramIcon from "@material-ui/icons/Telegram";
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import Sidebar from "./sidebar";

const Post = ({url}) => {
    return(
        <div className="post">
            <div className="tag1"></div>
            <div className="tag2">
                <div className="header">
                    <Avatar alt="Remy Sharp" src={img1} />
                    <p>username</p>
                    <h3>...</h3>
                </div>
                
                <div className="post-image">
                    <img src={url} alt="meri pic hai"></img>
                </div>
                <div className="image-footer">
                    <FavoriteBorderIcon fontSize="large" style={{ marginRight: '15px'}}></FavoriteBorderIcon>
                    <ChatBubbleOutlineSharpIcon fontSize="large" style={{ marginRight: '15px'}}></ChatBubbleOutlineSharpIcon>
                    <TelegramIcon fontSize="large" style={{ marginRight: '15px'}}></TelegramIcon>
                    <div className="bookmark">
                        <BookmarkBorderSharpIcon fontSize="large"></BookmarkBorderSharpIcon>
                    </div>
                </div>
                <div className="about">
                    <p>Liked by <strong>adam and 3,343,536 others</strong></p>
                    <p><strong>kinkardashian </strong> Tahoe w the fam</p>
                    <span>View all 39,234 comments</span>
                    <h6>1 DAY AGO</h6>
                </div>
                <div className="comment">
                    <div className="or">
                        <div className="line"></div>
                    </div>
                    <div className="add-comment">
                        <p>Add a comment...<h4>Post</h4></p>
                    </div>
                </div>
            </div>
            <div className="tag3">
                <Sidebar/>
            </div>
        </div>
    );
};

export default Post;