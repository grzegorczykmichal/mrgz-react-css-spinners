import React from "react";
import style from "./styles.css";

const Ripple = () => (
  <>
    <style>{style}</style>
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </>
);

export default Ripple;
