// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const {ref, uploadBytesResumable, getDownloadURL} = require("firebase/storage")

exports.uploadFile = (req , res) => {

  res.send("okok").status(200)
  
  // if not file porcessed then return
  // if (!file) return;

  // const storageReference = ref(Storage, `/files/${file.name}`);
  // const uploadFile = uploadBytesResumable(storageReference);

  // uploadTask.on(
  //   "state_changed",
  //   (snapshot) => {
  //     const prog = Math.round(
  //       // this shud be on the front end
  //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //     );
  //     setProgress(prog);
  //   },
  //   (error) => console.log(error),
  //   () => {
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       // downloadURL to be saved to the database
  //       console.log("File available at", downloadURL);
  //     });
  //   }
  // );
};

