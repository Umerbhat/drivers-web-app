import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { DeliveryListList } from "./features/deliveryTracker/pages/DeliveryList";
import { DeliveryDetails } from "./features/deliveryTracker/pages/DeliveryDetails";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<DeliveryListList />} />
        <Route path="details/:deliveryId" element={<DeliveryDetails />} />
      </Routes>
  );
}