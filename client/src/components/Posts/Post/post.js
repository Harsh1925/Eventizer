import React from "react";

const Post = () => {
    return (

        <div className="card text-bg-dark mb-3 text-left" style={{ maxwidth: "18rem" }}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href=" " className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Post;