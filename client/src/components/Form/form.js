import React, { useState } from "react";
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {

    const dispatch = useDispatch();

    const [postData, setPostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }
    const clear = (e) => {

    }

    return (
        <>
            <form noValidate onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="creator" className="col-sm-3 col-form-label">Creator:</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="creator"
                            name="creator"
                            value={postData.creator}
                            onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="title" className="col-sm-3 col-form-label">Title</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={postData.title}
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="message" className="col-sm-3 col-form-label">Message</label>
                    <div className="col-sm-8">
                        <textarea
                            rows="3"
                            className="form-control"
                            id="message"
                            name="message"
                            value={postData.message}
                            onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="tags" className="col-sm-3 col-form-label">Tags</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="tags"
                            name="tags"
                            value={postData.tags}
                            onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    </div>
                </div>
                {/* <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label className="form-check-label" for="gridRadios1">
                                First radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" for="gridRadios2">
                                Second radio
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                            <label className="form-check-label" for="gridRadios3">
                                Third disabled radio
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" for="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div> */}
                <div className="fileinput">
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <button className="btn btn-dark" type="button" onClick={clear}>Reset</button>
                </div>
            </form>
        </>
    )
}

export default Form;