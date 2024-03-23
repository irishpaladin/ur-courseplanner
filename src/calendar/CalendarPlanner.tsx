import { Epg, Layout } from "@nessprim/planby-pro";

// Import hooks
import { useCalendarPlanner } from "./useCalendarPlanner";

// Import components
import {
  ChannelItem,
  CalendarItem,
} from "./components";
import { DragMouseUp, ResizeMouseUp } from "@nessprim/planby-pro/dist/Epg/helpers/types";

function CalendarPlanner() {
  const { isLoading, getEpgProps, getLayoutProps } = useCalendarPlanner();

  return (
    <div
      style={{
        padding:0,
        height: "100%"
      }}
    >
      <div style={{ height: "99%", width: "99%",}}>
        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderProgram={({ program, ...rest }) => (
              <CalendarItem 
                dragMouseUp={function (data: DragMouseUp): void {
                } } resizeMouseUp={function (data: ResizeMouseUp): void {
                } } isRTL={program.data.isRTL}
                isVerticalMode={program.data.isVerticalMode}
                isBaseTimeFormat={program.data.isBaseTimeFormat}
                liveRefreshTime={program.data.liveRefreshTime}
                mode={program.data.mode} 
                startDate={program.data.startDate}
                dnd={program.data.dnd}
                dayWidth={program.data.dayWidth}
                itemHeight={program.data.itemHeight}
                contentHeight={program.data.contentHeight}
                hourWidth={program.data.hourWidth}
                key={program.data.id} 
                program={program} {...rest} />
            )}
            renderChannel={({ channel, ...rest }) => (
              <ChannelItem key={channel.uuid} channel={channel} {...rest} />
            )}
          />
        </Epg>
      </div>
    </div>
  );
}

export default CalendarPlanner;
