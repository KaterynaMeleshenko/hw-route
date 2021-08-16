import React from 'react';
import Post from './Post';
import './post.css';

const CHAPLIN_PHOTO = 'https://images-na.ssl-images-amazon.com/images/I/719LAcj7oUL.png';
const WALT_PHOTO = 'https://myhero.com/images/guest/g225815/hero63846/g225815_u73428_031009Walt_Hero_feature.jpg';
const CHAPLIN_CONTENT = 'https://stillmed.olympics.com/media/Images/OlympicOrg/News/2019/07/23/2019-07-23-Trailblazing-Tokyo-looking-ahead-featured.jpg?interpolation=lanczos-none&resize=3840:1600';
const WALT_CONTENT = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png';

const posts = [
  {
    id: 0,
    name: "Charlie Chaplin",
    photo: CHAPLIN_PHOTO,
    nickname: "@charlie_1889",
    content: "A life without travelling is a life not lived.",
    image: CHAPLIN_CONTENT,
    date: "27 June",
    comments: 307,
    reposts: 85,
    likes: 512,
  },
  {
    id: 1,
    name: "Walt Disney",
    photo: WALT_PHOTO,
    nickname: "@cartoonyst",
    content: "If you can imagine it you can achieve it.",
    image: WALT_CONTENT,
    date: "29 June",
    comments: 205,
    reposts: 106,
    likes: 820,
  }
]

const PostsComponent = () => {
  return (
    <div className="posts">
      {posts.map(post => <Post {...post} key = {post.id}/>)}
    </div>
  )
}

export default PostsComponent;
