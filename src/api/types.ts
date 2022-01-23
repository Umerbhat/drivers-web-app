export type TPostStatusParams = {
  deliveryId: string;
  status: "delivered" | "undelivered";
  latitude: number;
  longitude: number;
};

export type TDeliveryItemDetails = {
  id: string;
  address: string;
  city: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  customer: string;
  status?: TPostStatusParams["status"];
};
