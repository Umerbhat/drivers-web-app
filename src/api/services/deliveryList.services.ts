import { API_BASE_URL } from "../config";
import { TPostStatusParams } from "../types";

export function fetchDeliveryList() {
  return fetch(API_BASE_URL + "/deliveries");
}

export function fetchDeliveryDetails(id: string) {
  return fetch(API_BASE_URL + `/deliveries/${id}`);
}

export function postFinishDelivery(body: TPostStatusParams) {
  return fetch(API_BASE_URL + `/finishDelivery`, {
    method: "POST",
    body: JSON.stringify(body),
  });
}
