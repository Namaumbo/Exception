import React, { useState } from "react";
import { Input, Button, Progress } from "semantic-ui-react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function AdminPanel() {
  // files uploading 
  const [progress, setProgress] = useState(0);
  const sendFile = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFile(file);
  };

  const uploadFile = (file) => {
    if (!file) return;
    const storage = getStorage();
    const storageRef = ref(storage, `${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_change",
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((fileUploaded) => {
          console.log(fileUploaded);
        });
      }
    );
  };
  return (
    <>
      <div>
        {" "}
        <label>Enter Track</label>{" "}
        <form onSubmit={sendFile}>
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
        <br />
        <br />
        <Progress percent={progress} indicating />
        <Input
          icon="image"
          iconPosition="right"
          type="file"
          accept=".jpg, .jpeg, .png"
        />
        <br />
        <br />
        <Button
          onChange={sendFile}
          color="orange"
          content="Upload"
          icon="add"
          labelPosition="left"
        />
      </div>
    </>
  );
}
