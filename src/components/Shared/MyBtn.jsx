import React from "react";
import '/src/components/Shared/MyBtn.css'

const MyBtn = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
        <div class="svg-wrapper">
        <button className="bg-transparent border-0">
        <svg className="" height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <text x="155" y="30" fill="white" text-anchor="middle" alignment-baseline="central" className="fs-3">{props.btnText}</text>
          <rect class="shape" height="60" width="320" />
        </svg>
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default MyBtn;
