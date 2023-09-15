import React from "react"
import Post from "./Post/post"
import { useSelector } from "react-redux"

const Posts = () => {

    const posts = useSelector((state) => state.posts);

    const circular = () => {

        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    console.log(posts);
    return (
        !posts.length ? <div>{circular}</div> : (
            <div>
                {posts.map((post) => (
                    <div key={post._id} >
                        <Post post={post} />
                    </div>
                ))}

            </div>
        )
    )
}

export default Posts

