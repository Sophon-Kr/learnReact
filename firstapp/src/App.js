import "./App.css";
import Navbar from "./Navbar";
// import Input from './Input';
import React from "react";
import Login from "./Login";

// let id = 1;

function App() {
  //  const [posts, setPosts] = useState([]);

  //  function addPost(title) {
  //    const newPost ={id,title};
  //    setPosts([newPost,...posts]);
  //    id+=1;

  //  }

  return (
    <div className="App">
      <Navbar />
      {/* <Input addPost={addPost}/> */}
      <Login />
    </div>
  );
}

export default App;
