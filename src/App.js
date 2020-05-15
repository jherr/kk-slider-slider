import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swipeable } from "react-swipeable";
import "./App.css";

function App({ slides }) {
  const [position, positionSet] = useState(0);
  const handleSwipe = ({ dir }) => {
    if (dir === "Right") {
      if (position < slides.length - 1) {
        positionSet(position + 1);
      }
    }
    if (dir === "Left") {
      if (position > 0) {
        positionSet(position - 1);
      }
    }
  };
  return (
    <Swipeable onSwiped={handleSwipe} className="App">
      <div className="row">
        {slides.map((url, index) => (
          <motion.div
            className="container"
            key={index}
            initial={{ scale: 0, rotation: -180 }}
            animate={{
              rotate: 0,
              left: `${(index - position) * 60 - 30}vw`,
              scale: index === position ? 1 : 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <img src={url}></img>
          </motion.div>
        ))}
      </div>
    </Swipeable>
  );
}

export default App;
