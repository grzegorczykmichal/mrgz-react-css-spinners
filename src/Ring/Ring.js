import React from "react";
import style from "./styles.css";

const Ring = () => (
  <>
    <style>{style}</style>
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
);

export default Ring;
