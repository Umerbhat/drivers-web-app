import { css } from "@emotion/css";
import React, { useEffect } from "react";
import { TDeliveryItemDetails } from "../../../api/types";
import { Loader } from "../../../components/Loader";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { ListItem } from "../components/ListItem";
import { getDeliveryList } from "../state/asyncActions";
import {
  getDeliveryListData,
  getDeliveryListApiStatus,
  getActiveDeliveryId,
} from "../state/selectors";

export function DeliveryListList() {
  const { ids: listIds, entities } = useAppSelector(getDeliveryListData);
  const apiStatus = useAppSelector(getDeliveryListApiStatus);
  const dispatch = useAppDispatch();
  const activeDeliveryId = useAppSelector(getActiveDeliveryId);

  useEffect(() => {
    dispatch(getDeliveryList());
  }, [dispatch]);

  return (
    <div>
      {apiStatus === "loading" && <Loader />}
      {apiStatus === "failed" && "Something went wrong..."}
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin: 0 -4rem;
        `}
      >
        {listIds.map((id) => (
          <ListItem
            key={id}
            listData={entities[id] as TDeliveryItemDetails}
            isActive={activeDeliveryId === id}
          />
        ))}
      </div>
    </div>
  );
}
