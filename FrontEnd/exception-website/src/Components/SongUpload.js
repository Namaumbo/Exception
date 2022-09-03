import React from "react";
import CoverPic from "./Upload components/CoverPic";
import TrackInfo from "./Upload components/TrackInfo";
import { useState } from "react";
import "../App.css";

const SongUpload = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    nickname: "",

  });
  const [x, setX] = useState(0);

  const [page, setPage] = useState(0);
  const componentList = [
    <CoverPic
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
    <TrackInfo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
  ];
  return (
    <>
      <div className="adminContainer">
        <div className="progress-bar">
          <div
            style={{ width: page === 0 ? "0%" : page === 1 ? "100%" : "100%" }}
          ></div>
        </div>
        <div>{componentList[page]}</div>
      </div>
    </>
  );
};
export default SongUpload;
