import { RootState } from "../../../store";
import {
  FETCH_DELIVERY,
  FETCH_DELIVERY_LIST,
  POST_DELIVERY_STATUS,
} from "./constants";

export const getDeliveryListData = (state: RootState) =>
  state.deliveryTracker.data;
export const getDeliveryListApiStatus = (state: RootState) =>
  state.deliveryTracker.apiStatus[FETCH_DELIVERY_LIST];
export const getDeliveryApiStatus = (state: RootState) =>
  state.deliveryTracker.apiStatus[FETCH_DELIVERY];
export const getMarkDeliveryApiStatus = (state: RootState) =>
  state.deliveryTracker.apiStatus[POST_DELIVERY_STATUS];
export const getActiveDeliveryId = (state: RootState) =>
  state.deliveryTracker.activeDeliveryId;

export const getDeliveryDetailsData = (state: RootState) => ({
  deliveryListData: getDeliveryListData(state),
  deliveryApiStatus: getDeliveryApiStatus(state),
  markDeliveryApiStatus: getMarkDeliveryApiStatus(state),
  activeDeliveryId: getActiveDeliveryId(state),
});
