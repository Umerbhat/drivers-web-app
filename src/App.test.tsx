import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FETCH_DELIVERY,
  FETCH_DELIVERY_LIST,
  POST_DELIVERY_STATUS,
} from "./features/deliveryTracker/state/constants";
import { TDeliveryListState } from "./features/deliveryTracker/state/types";
import userEvent from "@testing-library/user-event";

test("renders homepage without crash", () => {
  const reduxState = {
    deliveryTracker: {
      data: {
        ids: ["4"],
        entities: { "4": { id: "4", address: "Barcelona", zipCode: "089879" } },
      },
      apiStatus: {
        [FETCH_DELIVERY_LIST]: "idle",
        [FETCH_DELIVERY]: "idle",
        [POST_DELIVERY_STATUS]: "idle",
      },
      activeDeliveryId: null,
    },
  };
  const middlewares = getDefaultMiddleware();
  const mockStore = configureStore<TDeliveryListState>(middlewares);
  const store = mockStore(reduxState as any);
  const { getByTestId, getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  // test if app runs without crash
  expect(getByTestId("app")).toBeInTheDocument();
  expect(getByText(/Barcelona/)).toBeInTheDocument();
});

test("click on list item navigates to details page", () => {
  const reduxState = {
    deliveryTracker: {
      data: {
        ids: ["4"],
        entities: { "4": { id: "4", address: "Barcelona", zipCode: "089879" } },
      },
      apiStatus: {
        [FETCH_DELIVERY_LIST]: "idle",
        [FETCH_DELIVERY]: "idle",
        [POST_DELIVERY_STATUS]: "idle",
      },
      activeDeliveryId: null,
    },
  };
  const middlewares = getDefaultMiddleware();
  const mockStore = configureStore<TDeliveryListState>(middlewares);
  const store = mockStore(reduxState as any);
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  // Click on list item
  userEvent.click(getByText(/Barcelona/));
  // Navigates to details page
  const makeActiveButton = getByText(/Make Active/);
  expect(makeActiveButton).toBeInTheDocument();
});
