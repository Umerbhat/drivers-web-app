import { css } from "@emotion/css";
import React from "react";
import { Link } from "react-router-dom";
import { TPostStatusParams } from "../../../api/types";
import { Button } from "../../../components/Button";
import { Paper } from "../../../components/Paper";

type Props = {
  isActiveDelivery: boolean;
  onMakeDeliveryActive: () => void;
  activeDeliveryId: string | null;
  onMarkDeliveryStatus: (status: TPostStatusParams["status"]) => void;
};

export const ItemActions = ({
  isActiveDelivery,
  activeDeliveryId,
  onMakeDeliveryActive,
  onMarkDeliveryStatus,
}: Props) => {
  return (
    <>
      <Link
        to="/"
        className={css`
          display: inline-block;
          color: inherit;
          margin-top: 1rem;
        `}
      >
        Back to List
      </Link>
      <Paper
        className={css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        `}
      >
        {isActiveDelivery ? (
          <>
            <Button
              buttonType="primary"
              onClick={() => onMarkDeliveryStatus("delivered")}
              className={css`
                margin-right: 2rem;
              `}
            >
              Mark Delivered
            </Button>
            <Button
              buttonType="danger"
              onClick={() => onMarkDeliveryStatus("undelivered")}
            >
              Mark Undelivered
            </Button>
          </>
        ) : (
          <Button
            buttonType="success"
            onClick={onMakeDeliveryActive}
            disabled={!!activeDeliveryId}
          >
            Make Active
          </Button>
        )}
      </Paper>
    </>
  );
};
