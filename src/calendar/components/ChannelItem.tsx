import { ChannelItem as IChannelItem, ChannelBox } from "@nessprim/planby-pro";
import { Flex, Text } from "@chakra-ui/react";

export const ChannelItem = ({ isVerticalMode, channel }: IChannelItem) => {
  const { position, day } = channel;
  return (
    <ChannelBox
      isVerticalMode={isVerticalMode}
      {...position}
      style={{ overflow: "hidden" }}
    >
      <Flex flexDirection={"column"}>
        <Text
          fontWeight={500}
          fontSize={"lg"}
          as={"span"}
          position={"relative"}
          zIndex={2}
        >
          {day}
        </Text>
      </Flex>
    </ChannelBox>
  );
};
