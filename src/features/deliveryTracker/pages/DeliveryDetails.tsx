import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TDeliveryItemDetails, TPostStatusParams } from "../../../api/types";
import { Loader } from "../../../components/Loader";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { InfoCard } from "../components/InfoCard";
import { ItemActions } from "../components/ItemActions";
import { getDeliveryDetails, setDeliveryStatus } from "../state/asyncActions";
import { setActiveDelivery } from "../state/slice";
import { getDeliveryDetailsData } from "../state/selectors";

export function DeliveryDetails() {
  const {
    deliveryListData,
    deliveryApiStatus: apiStatus,
    markDeliveryApiStatus: markApiStatus,
    activeDeliveryId,
  } = useAppSelector(getDeliveryDetailsData);
  const { entities } = deliveryListData;
  const { deliveryId } = useParams();
  const dispatch = useAppDispatch();
  const details = deliveryId
    ? (entities[deliveryId] as TDeliveryItemDetails)
    : null;
  const isActiveDelivery = activeDeliveryId === deliveryId;
  const isApiLoading = apiStatus === "loading" || markApiStatus === "loading";
  const isApiError = apiStatus === "failed" || markApiStatus === "failed";

  useEffect(() => {
    if (deliveryId) {
      dispatch(getDeliveryDetails(deliveryId));
    }
  }, [deliveryId, dispatch]);

  const handleMarkDeliveryStatus = useCallback(
    (status: TPostStatusParams["status"]) => {
      if (deliveryId && details) {
        dispatch(
          setDeliveryStatus({
            deliveryId,
            status,
            latitude: details.latitude,
            longitude: details.longitude,
          })
        );
      }
    },
    [deliveryId, details, dispatch]
  );

  return (
    <div>
      {isApiLoading && <Loader />}
      {isApiError && "Something went wrong..."}
      {details && deliveryId ? (
        <div>
          <ItemActions
            isActiveDelivery={isActiveDelivery}
            activeDeliveryId={activeDeliveryId}
            onMakeDeliveryActive={() => dispatch(setActiveDelivery(deliveryId))}
            onMarkDeliveryStatus={handleMarkDeliveryStatus}
          />
          <InfoCard details={details} isActive={isActiveDelivery} />
        </div>
      ) : null}
    </div>
  );
}
