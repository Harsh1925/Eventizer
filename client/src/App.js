import React, { useEffect } from "react";
import Navbar from "./navbar";
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts"


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <p>Do something, Where the hell are you ?</p>
          </div>
          <div className="col-lg-7 boxy" id="cards-body">
            <Posts />
          </div>
          <div className="col-lg-3">
            <Form />
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
