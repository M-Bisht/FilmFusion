import React from "react";

const Loader = (parentClass, childClass) => {
  return (
    <div className={`loaderContainer ${parentClass}`}>
      <div className={`loader ${childClass}`}></div>
    </div>
  );
};

export default Loader;
