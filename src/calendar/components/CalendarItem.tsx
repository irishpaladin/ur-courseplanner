import {
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  useProgram,
  ProgramItem,
} from "@nessprim/planby-pro";

export function CalendarItem({
  program,
  isVerticalMode,
  ...rest
}: ProgramItem) {
  const { styles, formatTime, set12HoursTimeFormat, isLive } = useProgram({
    program,
    isVerticalMode,
    ...rest,
  });

  const { data } = program;
  const { title, since, till, description, busy, notWorkTime, available } =
    data;

  const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
  const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

  const contentStyle = () => {
      return {
        background: "#31384d",
        color: "#fff",
        opacity: 1,
        padding: 0,
        paddingLeft: 3,
        paddingTop: 3,
      };
  };

  const fontStyle = () => {
      return { 
        color: "#fff",
      };
      
  };

  return (
    <ProgramBox width={styles.width} style={styles.position}>
      <ProgramContent
        isVerticalMode={isVerticalMode}
        width={styles.width}
        isLive={isLive}
        style={{ ...contentStyle() }}
      >
        <ProgramFlex isVerticalMode={isVerticalMode}>
          <ProgramStack>
            <ProgramTitle style={{ marginBottom: 0, fontSize: 10, ...fontStyle() }}>
              {title}
            </ProgramTitle>
            <ProgramText style={{fontSize: 8, ...fontStyle()}}>
              {sinceTime} - {tillTime}
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
}
