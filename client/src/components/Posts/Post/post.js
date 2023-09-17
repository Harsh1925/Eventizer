import React from "react";
import moment from "moment";
// import photo from "../../Img/img.png"
// import photo2 from "../../Img/notFound.jpg"
import photo3 from "../../Img/notFound2.jpg"

const Post = ({ post, setCurrentId }) => {   //distructuring the props
    return (

        <div className="card text-bg-dark mb-3" style={{ maxWidth: "830px", maxHeight: "400px" }}>
            <div className="row g-5" >
                <div className="col-md-4">
                    {!post.selectedFile ? (
                        <img src={photo3} style={{ maxWidth: "300px", maxHeight: "250px" }} className="img-fluid rounded-start" alt="Not Available" />
                    ) : (
                        <img src={post.selectedFile} style={{ maxWidth: "300px", maxHeight: "250px" }} className="img-fluid rounded-start" alt="Not Available" />)}
                </div>
                <div className="col-md-7" >
                    <div className="card-body" style={{ marginLeft: "15px" }}>
                        <div style={{ flexDirection: 'row' }}>
                            <span className="card-title" style={{ fontSize: "20px" }} >{post.title}</span>
                            <span style={{ marginLeft: "20px" }} className="card-text" id="cardTags">{post.tags}</span>
                        </div>
                        <p className="card-text" style={{ marginTop: "10px" }}>T{post.message}</p>
                        <p className="card-text"><small style={{ color: "yellow" }}>Last updated {moment(post.createdAt).fromNow()}</small></p>
                        <button size="small" type="button" style={{ fontSize: "12px" }} className="btn btn-outline-light" onClick={() => { }} ><i className="bi bi-hand-thumbs-up"> Like {post.likeCount}</i></button>
                        <button size="small" type="button" style={{ marginLeft: "15px", fontSize: "12px" }} className="btn btn-outline-danger" onClick={() => { }}><i className="bi bi-trash"> Delete </i></button>
                        <button id="editButton" onClick={() => setCurrentId(post._id)} type="button" className="btn btn-outline-light"  ><i className="bi bi-pencil-square"></i></button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Post;