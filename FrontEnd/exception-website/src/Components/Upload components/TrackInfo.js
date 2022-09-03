import React from "react";
import { motion } from "framer-motion";

const TrackInfo = ({ page, setPage, formData, setFormData, x, setX }) => {
  return (
    <>
      <motion.div
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
        
      >
      <div className="card">
        <div className="step-title">Personal Info</div>
        <input
          type="text"
          placeholder="Nickname"
          value={formData.nickname}
          onChange={(e) =>
            setFormData({ ...formData, nickname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button>Next</button>
        <br />
        <button
          onClick={() => {
            setPage(page - 1);
            setX(-1000);
          }}
        >
          Previous
        </button>
      </div>
      </motion.div>
    </>
  );
};

export default TrackInfo;
