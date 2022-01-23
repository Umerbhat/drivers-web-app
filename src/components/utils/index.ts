import { TColorType } from "../types";

export const getTypeColor = (type: TColorType) => {
  if (type === "success") {
    return "green";
  }
  if (type === "danger") {
    return "red";
  }

  return "var(--primary-color)";
};
