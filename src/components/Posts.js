import "../style/Posts.css";
import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            id="title"
            name="title"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            value={description}
            id="description"
            name="description"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="posts">
        <div className="post">
          <h4 className="title">Title :{title}</h4>
          <p className="description"> Description : {description}</p>
          <div className="flex buttons">
           <button className="edit" type="submit" style={{backgroundColor: "green"}}>Edit</button>
           <button className="delete" type="submit" style={{backgroundColor: "red"}}>Delete</button>

          </div>
          
        </div>
      </div>
    </>
  );
}

export default Form;
