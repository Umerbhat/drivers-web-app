import { css } from "@emotion/css";
import React from "react";
import { TColorType } from "./types";
import { getTypeColor } from "./utils";

type Props = {
  label: string;
  type: TColorType;
};

export const Tag = ({ label, type }: Props) => {
  return (
    <span
      className={css`
        padding: 0.5rem 1rem;
        font-weight: 500;
        border-radius: 0.6rem;
        display: inline-block;
        font-size: 14px;
        line-height: 1;
        color: var(--contrast-primary-text);
        text-transform: capitalize;
        background-color: ${getTypeColor(type)};
      `}
    >
      {label}
    </span>
  );
};
