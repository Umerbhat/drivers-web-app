import React from "react";
import { TPostStatusParams } from "../../../api/types";
import { Tag } from "../../../components/Tag";

type Props = {
  deliveryStatus?: TPostStatusParams["status"];
  isActive: boolean;
};

export const DeliveryStatusTag = ({ deliveryStatus, isActive }: Props) => {
  const tagType = deliveryStatus === "delivered" ? "success" : "danger";
  return (
    <>
      {isActive && <Tag label="Active" type="primary" />}
      {!isActive && !!deliveryStatus && (
        <Tag label={deliveryStatus} type={tagType} />
      )}
    </>
  );
};
