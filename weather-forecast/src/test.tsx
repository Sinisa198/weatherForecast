import React from "react";
import sunny from "./components/assets/pictures/sunny.png";
import "./test.css";
function test() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <h1>This is a heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                assumenda dolore reprehenderit ullam blanditiis ex sapiente
                pariatur tempore incidunt facilis?
              </p>
              <a href="#" className="btn">
                Click Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="webCifar-sidebox">
        <div id="webCifar">
          <h2 className="logo">Web Cifar</h2>
          <p className="author">
            Coded By <span>Shaif Arfan</span>{" "}
          </p>
          <div className="items">
            <a
              href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ"
              target="_blank"
              className="item youtubeLink"
            >
              <p>Watch how we made this.</p>
            </a>
            <a href="https://webcifar.com" target="_blank" className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <p>https://webcifar.com</p>
            </a>
          </div>
          <div className="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div id="webCifar-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>Info About the pen</p>
        </div>
      </div>
    </div>
  );
}

export default test;
