import React from "react";
import LeftMainContent from "./LeftMainCont";
import MiddleMainCont from "./MiddleMainCont";
import RightMainCont from "./RightMainCont";

function MainContent() {
  return (
    <section className="main-content-sec">
      <div className="container">
        <LeftMainContent />
        <MiddleMainCont />
        <RightMainCont />
      </div>
    </section>
  );
}

export default MainContent;
