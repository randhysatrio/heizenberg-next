import type { SearchResult } from "../_types/SearchResult";

export const MOCK_SRCH_RSLT_GUNDAM: SearchResult = {
  id: 1,
  value: "gundam mgex strike freedom",
  createdAt: 1707482618,
};
export const MOCK_SRCH_RSLT_GODHAND: SearchResult = {
  id: 2,
  value: "godhand spn-120",
  createdAt: 1707482618,
};
export const MOCK_SRCH_RSLT_MILFALCON: SearchResult = {
  id: 3,
  value: "pg bandai millennium falcon",
  createdAt: 1707482618,
};

export const MOCK_SRCH_RESULTS = [
  MOCK_SRCH_RSLT_GUNDAM,
  MOCK_SRCH_RSLT_GODHAND,
  MOCK_SRCH_RSLT_MILFALCON,
];
