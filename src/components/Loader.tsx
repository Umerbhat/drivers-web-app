import { css } from "@emotion/css";
import React from "react";

export const Loader = () => {
  return (
    <div
      className={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9;
      `}
    >
      <span
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 10px solid transparent;
          border-top: 10px solid var(--muted-text);
          border-bottom: 10px solid var(--muted-text);
          animation: rotate 1.8s linear infinite;
          opacity: 0.7;
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      ></span>
    </div>
  );
};
