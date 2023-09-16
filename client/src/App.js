import React, { useEffect } from "react";
import Navbar from "./navbar";
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts"
import image from "./components/Img/new.png"


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <img id="newThings" src={image} alt="not Availabel"></img>
            <div class="vl"></div>
          </div>
          <div className="col-lg-8 boxy" id="cards-body">
            <Posts />
          </div>
          <div className="col-lg-2">
            <Form />
            <div class="v2"></div>
          </div>
          <div className="card-footer">
            2 days ago
          </div>
        </div >
      </div >
    </>
  )
}

export default App;
