import Post from "./components/mainpage/post";
import Navbar from "./components/mainpage/navbar";
import "./App.scss";
import Sidebar from "./components/mainpage/sidebar";
import Stories from './components/mainpage/stories'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Stories></Stories>
      <Post url="https://i1.wp.com/peopleoftheplanet.com/wp-content/uploads/2019/03/guthries-camp-fire-photo-article-cover.png?fit=1528%2C1782&ssl=1"></Post>
      <Post url="https://cdn.dribbble.com/users/230034/screenshots/3793443/untitled-1.png?compress=1&resize=800x600"></Post>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
