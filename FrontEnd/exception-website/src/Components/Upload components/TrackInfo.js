import React from "react";
import { motion } from "framer-motion";
import { Button, Input } from "semantic-ui-react";

const TrackInfo = ({ page, setPage, formData, setFormData, x, setX }) => {
  return (
    <>
      <motion.div
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
        <div className="card">
          <div className="step-title">Track Artwork</div>
          <Input
            focus
            type="text"
            placeholder="Nickname"
            value={formData.nickname}
            onChange={(e) =>
              setFormData({ ...formData, nickname: e.target.value })
            }
          />
          <Button color="green">Upload</Button>
          <Button
            color="red"
            onClick={() => {
              setPage(page - 1);
              setX(-1000);
            }}
          >
            Previous
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default TrackInfo;
