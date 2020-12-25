import React from 'react';
import Post from "../mainpage/post";
import Navbar from "../mainpage/navbar";
import Sidebar from "../mainpage/sidebar";
import Stories from '../mainpage/stories';


const Page= ()=>  {
  return (
    <div >
      <Navbar></Navbar>
      <Stories></Stories>
      <Post url="https://i1.wp.com/peopleoftheplanet.com/wp-content/uploads/2019/03/guthries-camp-fire-photo-article-cover.png?fit=1528%2C1782&ssl=1"></Post>
      <Post url="https://cdn.dribbble.com/users/230034/screenshots/3793443/untitled-1.png?compress=1&resize=800x600"></Post>
      <Post url="https://mir-s3-cdn-cf.behance.net/project_modules/fs/81ddeb80737259.5ce9de036b084.jpg"></Post>
      <Post url="https://i.pinimg.com/564x/66/f3/85/66f3850fae506d22a432c18b7c0a9dfb.jpg"></Post>
      <Sidebar></Sidebar>
    </div>
  );
}

export default Page;
