import { css, cx } from "@emotion/css";
import React from "react";
import { Link } from "react-router-dom";
import { TDeliveryItemDetails } from "../../../api/types";
import { paperClassName } from "../../../components/Paper";
import { DeliveryStatusTag } from "./DeliveryStatusTag";

type Props = {
  listData: TDeliveryItemDetails;
  isActive: boolean;
};
export const ListItem = ({ listData, isActive }: Props) => {
  const {
    id,
    address,
    city,
    zipCode,
    customer,
    status: deliveryStatus,
  } = listData;
  return (
    <Link
      to={`details/${id}`}
      className={css`
        display: block;
        position: relative;
        ${paperClassName};
        cursor: pointer;
        transition: all 0.3s ease-out;
        outline: 0;
        color: inherit;
        text-decoration: none;
        width: calc(33.33% - 6rem);
        margin: 0.5rem;
        &:hover,
        &:focus {
          transition: 0.3s ease-in;
          color: #fff;
          background-color: var(--primary-color);
          box-shadow: 0px 0px 15px 6px var(#333);
          transform: translateY(-2px) scale(1.01);
          & .muted-sub-heading {
            color: #ddd;
          }
        }
      `}
    >
      <DeliveryStatusTag isActive={isActive} deliveryStatus={deliveryStatus} />
      <h4>{customer}</h4>

      <p
        className={css`
          font-size: 14px;
          margin-top: 0;
          margin-bottom: 0.5rem;
        `}
      >
        {address}
      </p>
      <p
        className={cx(
          css`
            font-size: 12px;
            color: var(--muted-text);
            margin: 0;
            transition: 0.3s ease-in;
          `,
          "muted-sub-heading"
        )}
      >
        {city}, {zipCode}
      </p>
    </Link>
  );
};
