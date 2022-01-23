import { css } from "@emotion/css";
import React from "react";
import { TDeliveryItemDetails } from "../../../api/types";
import { Information } from "../../../components/Information";
import { Paper } from "../../../components/Paper";
import { DeliveryStatusTag } from "./DeliveryStatusTag";

type Props = {
  details: TDeliveryItemDetails;
  isActive: boolean;
};

export const InfoCard = ({ details, isActive }: Props) => {
  const {
    id,
    address,
    city,
    zipCode,
    latitude,
    longitude,
    customer,
    status: deliveryStatus,
  } = details;
  return (
    <Paper>
      <div
        className={css`
          display: flex;
          justify-content: left;
          align-items: center;
        `}
      >
        <h2
          className={css`
            margin-right: 1rem;
          `}
        >
          #Order: {id}
        </h2>
        <DeliveryStatusTag
          isActive={isActive}
          deliveryStatus={deliveryStatus}
        />
      </div>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <Information label="Customer Name" value={customer} />
        <Information label="Address" value={address} />
        <Information label="City" value={city} />
        <Information label="Zip Code" value={zipCode} />
        <Information label="Lat / Lng" value={`${latitude} / ${longitude}`} />
      </div>
    </Paper>
  );
};
