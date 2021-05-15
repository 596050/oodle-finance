import { useSWRInfinite } from "swr";
import { API_STATE } from "@constants";

export const fetcher = (input, init) =>
  fetch(input, init).then((res) => res?.json());

export const useClientSideInfinite = ({ getKey }) => {
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const response = {
    error,
    data,
    state: API_STATE.FAILED,
    size,
    setSize,
  };

  const isLoadingInitialData = !data && !error;
  const isLoading =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  if (isLoading) {
    response.state = API_STATE.LOADING;
  }

  if (data) {
    response.state = API_STATE.SUCCESS;
  }

  return response;
};
