import { css } from "@emotion/css";
import React from "react";

type Props = {
  label: string;
  value: string;
};

export const Information = ({ label, value }: Props) => {
  return (
    <div
      className={css`
        width: 50%;
      `}
    >
      <div
        className={css`
          color: var(--muted-text);
          font-size: 0.7rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        `}
      >
        {label}:
      </div>
      <div
        className={css`
          margin-bottom: 1rem;
        `}
      >
        {value}
      </div>
    </div>
  );
};
