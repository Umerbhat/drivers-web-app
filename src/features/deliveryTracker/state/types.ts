import { EntityState } from "@reduxjs/toolkit";
import { TDeliveryItemDetails } from "../../../api/types";
import {
  FETCH_DELIVERY,
  FETCH_DELIVERY_LIST,
  POST_DELIVERY_STATUS,
} from "./constants";

export type TApiStatus = "idle" | "loading" | "failed" | "success";

export type TDeliveryListState = {
  data: EntityState<TDeliveryItemDetails | {}>;
  apiStatus: Record<
    | typeof FETCH_DELIVERY_LIST
    | typeof FETCH_DELIVERY
    | typeof POST_DELIVERY_STATUS,
    TApiStatus
  >;
  activeDeliveryId: null | string;
};
