import { getResources } from "./epg-data";

export const fetchResources = async () => {
  const resources = getResources();
  return new Promise((res) => setTimeout(() => res(resources), 500));
};
