import "@patternfly/react-core/dist/styles/base.css";

import * as React from 'react';
import { Tabs, Tab, TabTitleText, Tooltip } from '@patternfly/react-core';
import { CourseList } from "./CourseList";
import { FilteredCourseList } from "./FilteredCourseList";

export const TabbedCourses: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);

  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };
  
  const tooltip = (
    <Tooltip content="This is where filtered courses are placed" />
  );
  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        isBox
        aria-label="Tabs in the box light variation example"
        role="region"
      >
        <Tab eventKey={0} title={<TabTitleText>Course List</TabTitleText>} aria-label="Box light variation content - users">
          <CourseList/>
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Filtered Course</TabTitleText>} tooltip={tooltip}>
          <FilteredCourseList/>
        </Tab>
      </Tabs>
    </div>
  );
};