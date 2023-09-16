import React from "react";
import moment from "moment";
// import photo from "../../Img/img.png"
// import photo2 from "../../Img/notFound.jpg"
import photo3 from "../../Img/notFound2.jpg"

const Post = ({ post }) => {   //distructuring the props
    return (
        // <div className="container">
        //     <div className="card text-bg-dark border-dark mb-3" style={{ maxwidth: "18rem" }}>
        //         <div class="card-header bg-transparent border-light" style={{ justifyContent: 'space-between' }}>
        //             <div>{post.creator} <span style={{ marginLeft: "550px" }}>{moment(post.createdAt).fromNow()}</span></div>
        //             <div className="card-text" style={{ postion: "absolute" }}></div>
        //         </div>

        //         <h6 className="card-header">{post.title}</h6>
        //         <hr id="cardTitle" ></hr>
        //         <div></div>
        //         <p className="card-header">{post.message}</p>
        //         <p className="card-header">{post.tags.map((tag) => `#${tag} `)}</p>
        //         <a href=" " class="btn btn-primary">Button</a>
        //         {!post.selectedFile ? (<></>) : (
        //             <>
        //                 <img src={post.selectedFile} style={{ maxHeight: "100px", maxWidth: "100px" }} className="card-img-bottom" alt="..." />
        //             </>
        //         )
        //         }
        //     </div>
        // </div >

        <div class="card text-bg-dark mb-3" style={{ maxWidth: "830px", maxHeight: "400px" }}>
            <div class="row g-5" >
                <div class="col-md-4">
                    {!post.selectedFile ? (
                        <img src={photo3} style={{ maxWidth: "300px", maxHeight: "250px" }} class="img-fluid rounded-start" alt="Not Available" />
                    ) : (
                        <img src={post.selectedFile} style={{ maxWidth: "300px", maxHeight: "250px" }} class="img-fluid rounded-start" alt="Not Available" />)}
                </div>
                <div class="col-md-7" >
                    <div class="card-body" style={{ marginLeft: "15px" }}>
                        <div style={{ flexDirection: 'row' }}>
                            <text class="card-title" style={{ fontSize: "20px" }} >{post.title}</text>
                            <text style={{ marginLeft: "20px" }} class="card-text" id="cardTags">{post.tags}</text>
                        </div>
                        <p class="card-text" style={{ marginTop: "10px" }}>T{post.message}</p>
                        <p class="card-text"><small style={{ color: "yellow" }}>Last updated {moment(post.createdAt).fromNow()}</small></p>
                        <button size="small" type="button" style={{ fontSize: "12px" }} class="btn btn-outline-light" onClick={() => { }} ><i class="bi bi-hand-thumbs-up"> Like {post.likeCount}</i></button>
                        <button size="small" type="button" style={{ marginLeft: "15px", fontSize: "12px" }} class="btn btn-outline-danger" onClick={() => { }}><i class="bi bi-trash"> Delete </i></button>
                        <button id="editButton" type="button" class="btn btn-outline-light" onClick={() => { }}><i class="bi bi-pencil-square"></i></button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Post;