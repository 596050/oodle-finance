import { useClientSideInfinite } from "./shared";

export const useBeers = (pageSize = 80) => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${process.env.NEXT_PUBLIC_API_BASE_PUNK}/beers?page=${
      pageIndex + 1
    }&per_page=${pageSize}`;
  };
  return { ...useClientSideInfinite({ getKey }), pageSize };
};
