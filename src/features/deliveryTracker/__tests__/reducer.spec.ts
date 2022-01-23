import { createEntityAdapter } from "@reduxjs/toolkit";
import { getDeliveryList } from "../state/asyncActions";
import {
  FETCH_DELIVERY,
  FETCH_DELIVERY_LIST,
  POST_DELIVERY_STATUS,
} from "../state/constants";
import deliveryTrackerReducer, {
  resetActiveDelivery,
  setActiveDelivery,
} from "../state/slice";
import { TDeliveryListState } from "../state/types";
import { store } from "../../../store";

beforeEach(() => {
  // if you have an existing `beforeEach` just add the following lines to it
  fetchMock.mockResponseOnce(
    JSON.stringify([{ id: "4", address: "Barcelona" }])
  );
});

describe("delivery tracker reducer", () => {
  // NOTE: Helper adapter to normalize data and gives helper functions to do CRUD in it.
  const deliveryListAdapter = createEntityAdapter<TDeliveryListState["data"]>();

  const initialState: TDeliveryListState = {
    data: deliveryListAdapter.getInitialState({}),
    apiStatus: {
      [FETCH_DELIVERY_LIST]: "idle",
      [FETCH_DELIVERY]: "idle",
      [POST_DELIVERY_STATUS]: "idle",
    },
    activeDeliveryId: null,
  };

  it("should handle initial state", () => {
    expect(deliveryTrackerReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle setting active delivery id", () => {
    const actual = deliveryTrackerReducer(initialState, setActiveDelivery("2"));
    expect(actual.activeDeliveryId).toEqual("2");
  });

  it("should handle resetting active delivery id", () => {
    const actual = deliveryTrackerReducer(initialState, resetActiveDelivery());
    expect(actual.activeDeliveryId).toEqual(null);
  });

  it("should call list API, set data to state and set api status to success", async () => {
    await store.dispatch(getDeliveryList());
    const actual = store.getState();
    expect(
      actual.deliveryTracker.apiStatus["deliveryList/fetchAllDeliveryList"]
    ).toEqual("success");
    expect(actual.deliveryTracker.data.ids[0]).toEqual("4");
    expect(
      (actual.deliveryTracker.data as any).entities["4"]["address"]
    ).toEqual("Barcelona");
  });
});
