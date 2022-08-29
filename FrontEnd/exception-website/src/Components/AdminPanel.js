import React, { useState } from "react";
import { Input, Button, Progress } from "semantic-ui-react";
import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function AdminPanel() {
  // files uploading
  const [progress, setProgress] = useState(0);
  const [albumName, setAlbumNameValue] = useState("");
  const [genreType, setGenreTypeValue] = useState("");
  const [title, setTitleValue] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const setAlbumName = (e) => {
    setAlbumNameValue(e.target.value);
  };

  const setGenreName = (e) => {
    setGenreTypeValue(e.target.value);
  };

  const setTitleName = (e) => {
    setTitleValue(e.target.value);
  };
  const setDate = (e) => {
    setReleaseDate(e.target.value);
  };

  const sendFile = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFile(file);
  };

  const uploadFile = (file) => {
    if (!file) return;
    const storage = getStorage();
    const storageRef = ref(storage, `Excepcion-Music-Tracks/${file.name}`);
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
          saveDetails(fileUploaded);
        });
      }
    );
  };

  const saveDetails = async (link) => {
    const data = {
      genre: genreType,
      album: albumName,
      url: link,
      title: title,
      releaseDate: releaseDate,
    };

    try {
      await axios
        .post("http://localhost:4000/api/admin/add-track", data)
        .then((response) => console.log(response.data));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div>
        {" "}
        <label>Enter Track Details</label> <br />
        <br />
        <form onSubmit={sendFile}>
          <input type="file" />
          <br />
          <br />

          <Input
            icon="image"
            iconPosition="right"
            type="file"
            accept=".jpg, .jpeg, .png"
          />
          <br />
          <br />
          <Input
            placeholder="Release Date"
            value={releaseDate}
            onChange={setDate}
            type="date"
          />
          <br />
          <br />
          <Input
            icon="address card outline"
            iconPosition="right"
            placeholder="Album Name"
            value={albumName}
            onChange={setAlbumName}
          />
          <br />
          <br />
          <Input
            icon="image"
            iconPosition="right"
            placeholder="Genre Type"
            value={genreType}
            onChange={setGenreName}
          />
          <br />
          <br />
          <Input
            icon="font"
            iconPosition="right"
            placeholder="track title"
            value={title}
            onChange={setTitleName}
          />
          <br />
          <br />
          <Button type="submit" color="orange" icon="cloud"></Button>
        </form>
        <Progress percent={progress} indicating />
      </div>
    </>
  );
}
