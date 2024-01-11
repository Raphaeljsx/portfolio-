import React from "react";
import useTypewriter from "../Hooks/useTypewriter";
import PropTypes from "prop-types";

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);
  return <div>{displayText}</div>;
};

export default Typewriter;

Typewriter.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
