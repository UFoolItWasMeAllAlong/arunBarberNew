import React from "react";

export const Image = ({
  title,
  largeImage,
  smallImage,
  index,
  openLightbox,
}) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg" onClick={() => openLightbox(index)}>
        <div className="hover-icon">
          <img src="path/to/your/icon.png" alt="View larger" />
        </div>
        <img src={smallImage} className="img-responsive" alt={title} />
      </div>
    </div>
  );
};