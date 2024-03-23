import { format} from "date-fns";
import { epgCalendarChannels } from "./epg-channels";
import { EVENTS } from "./epgs";

export const getToday = ({
  date = "2022-04-19",
  formatType = "yyyy-MM-dd",
} = {}) => format(new Date(date), formatType);

export const getResources = () => {
  const channels = epgCalendarChannels;
  const events = EVENTS;
  return { channels, epg: events };
};
