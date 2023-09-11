import Navbar from "./navbar";
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";

function App() {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <p>Do something, Where the hell are you ?</p>
          </div>
          <div class="col-lg-7 boxy" id="cards-body">
            <Posts />
          </div>
          <div class="col-lg-3">
            <Form />
          </div>
          <div class="card-footer">
            2 days ago
          </div>
        </div >
      </div >
    </>
  )
}

export default App;
