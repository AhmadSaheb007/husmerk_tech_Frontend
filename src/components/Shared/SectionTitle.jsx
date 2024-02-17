import React from 'react';

const SectionTitle = (props) => {
    return (
        <div className="row py-4">
          <div className="col-lg-12 text-center">
            <p className="fs-1 text-light">{props.sectionTitle}</p>
          </div>
        </div>
    );
};

export default SectionTitle;