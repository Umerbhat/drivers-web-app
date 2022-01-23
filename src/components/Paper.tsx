import React, { FC } from "react";
import { css, cx } from "@emotion/css";

type Props = {
  className?: string;
};
export const paperClassName = css`
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 1rem;
  margin: 1rem auto;
  background-color: var(--paper);
`;

export const Paper: FC<Props> = (props) => {
  const { children, className } = props;
  return <div className={cx(paperClassName, className)}>{children}</div>;
};
