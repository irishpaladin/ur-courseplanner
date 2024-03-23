import * as React from "react";
import { fetchResources } from "../data";
import { Channel, Program, useEpg } from "@nessprim/planby-pro";

export function useCalendarPlanner() {
  const startDate = "2023-09-11T08:00:00";
  const endDate = "2023-09-11T21:00:00";

  const [channels, setChannels] = React.useState<Channel[]>([]);
  const [epg, setEpg] = React.useState<Program[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const channelsData = React.useMemo(() => channels, [channels]);
  const epgData = React.useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    itemHeight: 90,// days
    sidebarWidth: 80,
    dayWidth: 710,//time
    startDate,
    endDate,
    isBaseTimeFormat: true,
    isCurrentTime: false,
    isVerticalMode: true,
    timelineDividers: 2, //hour divider
  });

  const handleFetchResources = React.useCallback(async () => {
    setIsLoading(true);
    // Pre-generated channels and events data
    const { epg, channels } = (await fetchResources()) as {
      epg: Program[];
      channels: Channel[];
    };

    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return {
    getEpgProps,
    getLayoutProps,
    isLoading,
  };
}
