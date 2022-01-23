import { cx, css } from "@emotion/css";
import React from "react";
import { TColorType } from "./types";
import { getTypeColor } from "./utils";

type ButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  buttonType?: TColorType;
};

export const Button = (props: ButtonProp) => {
  const {
    children,
    buttonType = "primary",
    className,
    ...buttonAttributes
  } = props;
  return (
    <button
      className={cx(
        css`
          border-radius: 5px;
          border-style: none;
          background-color: ${getTypeColor(buttonType)};
          box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          font-family: inherit;
          height: 60px;
          line-height: 60px;
          outline: 0;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          padding: 0 2rem;
          opacity: 0.9;
          cursor: pointer;
          &:hover:not(:disabled),
          &:focus:not(:disabled) {
            opacity: 1;
            transform: scale(1.05) translateY(-2px);
          }
          &:disabled {
            background-color: #ccc;
            box-shadow: none;
            cursor: not-allowed;
          }
        `,
        className
      )}
      {...buttonAttributes}
    >
      {children}
    </button>
  );
};
