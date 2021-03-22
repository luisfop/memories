import React, { useState } from "react";

import { Typography, Button, Paper, TextField } from "@material-ui/core";
import FileBase from 'react-file-base64';

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tag: "",
    selectedFile: ""
  });

  const handleSubmit = () => {
    console.log("SUBMMITED");
  };

  const clear = () => {
    console.log('cleared')
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a Memory</Typography>
        <TextField  variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={e => setPostData({ ...postData, creator: e.target.value })}/>
        <TextField  variant="outlined" label="Title" fullWidth value={postData.title} onChange={e => setPostData({ ...postData, title: e.target.value })}/>
        <TextField  variant="outlined" label="Message" fullWidth value={postData.message} onChange={e => setPostData({ ...postData, message: e.target.value })}/>
        <TextField  variant="outlined" label="Tag" fullWidth value={postData.tag} onChange={e => setPostData({ ...postData, tag: e.target.value })}/>
        <div className={classes.fileInput}>
        <FileBase
            className={classes.fileInput}
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
        />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Submit</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
