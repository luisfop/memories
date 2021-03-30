import React, { useState, useEffect } from "react";

import { Typography, Button, Paper, TextField } from "@material-ui/core";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../actions/posts";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });

  const classes = useStyles();
  const dispatch = useDispatch();


  //FETCH FROM REDUX - UpdatePost
  const post = useSelector(state =>
    currentId ? state.posts.find(p => p._id === currentId) : null
  );


  useEffect(() => {
    //if post exists populate postData / update
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = e => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
      
    } else {
      dispatch(createPost(postData));
    }
    console.log("SUBMMITED", postData);

    clear();
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: "" })
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Create"} a Memory
        </Typography>
        <TextField
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={e => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className={classes.fileInput}>
          <FileBase
            className={classes.fileInput}
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
