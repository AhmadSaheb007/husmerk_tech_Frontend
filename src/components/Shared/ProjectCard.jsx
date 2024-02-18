import React from "react";
import MyBtn from "./MyBtn";

const ProjectCard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="project-card p-4">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="img-responsive w-100 rounded-3"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipe iure eum
                  laboriosam similique aliquam et! A, at amet ratione magni fuga
                  dignissimos ex voluptas, corrupti itaque quos hic eligendi
                  dolore.
                </p>
              </div>
              <div className="col-lg-12">
                <button className="bg-black text-light py-2 px-4 project-bg-btn">Preview</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
