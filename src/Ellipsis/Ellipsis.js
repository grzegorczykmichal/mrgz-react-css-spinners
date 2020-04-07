import React from "react";
import style from "./styles.css";

const Ellipsis = () => (
  <>
    <style>{style}</style>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
);

export default Ellipsis;
