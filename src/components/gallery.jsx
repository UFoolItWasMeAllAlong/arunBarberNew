import React from "react";
import "./gallery.css";

export const Gallery = (props) => {
  return (
    <div className="gallery">
      <div className="text">
        <h2>Gallery</h2>
        <p>Some of my freshest cuts</p>
      </div>
      <ul className="results">
        <li className="result">
          <a href="#">
            <img
              src="/img/portfolio/IMG_5206.JPEG"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
        <li className="result">
          <a href="#">
            <img
              src="/img/portfolio/IMG_6415.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
        <li className="result">
          <a href="#">
            <img
              src="img/portfolio/IMG_6416.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
        <li className="result">
          <a href="#">
            <img
              src="img/portfolio/IMG_6417.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
        <li className="result">
          <a href="#">
            <img
              src="img/portfolio/IMG_6421.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
        <li className="result">
          <a href="#">
            <img
              src="img/portfolio/IMG_6422.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
        <li className="result">
          <a href="#">
            <img
              src="img/portfolio/IMG_6423.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
        <li className="result">
          <a href="#">
            <img
              src="img/portfolio/IMG_6429.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
        <li className="result">
          <a href="#">
            <img
              src="img/portfolio/IMG_6430.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
        <li className="result">
          <a href="#">
            <img
              src="img/portfolio/IMG_6431.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
        </li>
      </ul>

    </div>
  );
};
