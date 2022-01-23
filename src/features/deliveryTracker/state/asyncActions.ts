import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDeliveryList, fetchDeliveryDetails } from "../../../api";
import { postFinishDelivery } from "../../../api/services/deliveryList.services";
import { TPostStatusParams } from "../../../api/types";
import {
  FETCH_DELIVERY_LIST,
  FETCH_DELIVERY,
  POST_DELIVERY_STATUS,
} from "./constants";

export const getDeliveryList = createAsyncThunk(
  FETCH_DELIVERY_LIST,
  async () => {
    const response = await fetchDeliveryList();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
);

export const getDeliveryDetails = createAsyncThunk(
  FETCH_DELIVERY,
  async (id: string) => {
    const response = await fetchDeliveryDetails(id);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
);

export const setDeliveryStatus = createAsyncThunk(
  POST_DELIVERY_STATUS,
  async (params: TPostStatusParams) => {
    const response = await postFinishDelivery(params);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
);
