import "@patternfly/react-core/dist/styles/base.css";

import * as React from 'react';
import { Tabs, Tab, TabTitleText, Tooltip } from '@patternfly/react-core';
import { CourseList } from "./CourseList";
import { FilteredCourseList } from "./FilteredCourseList";
interface IProps {
  courses: object,
  activeElementId: number
};

function display() {
  console.log("Rendering TableCourses");
  return 1;
}
export const TabbedCourses: React.FunctionComponent = (props: IProps) => {
  let displayconsole = false;
  //setActiveElementId(props.activeElementId);
  console.log("I am in Tabbled Courses");
  if(displayconsole)console.log(props.courses);
  if(displayconsole)console.log(props.activeElementId);
  const courseList = props.courses;
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
  if(props.courses==null)
    return(
      <div id="empty-courselist">
        <p>Select Requirements on the left to view available courses</p>
      </div>
    );
  return (
    <div>
      {display()==1}
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        isBox
        aria-label="Tabs in the box light variation example"
        role="region"
      >
        <Tab eventKey={0} title={<TabTitleText>Course List</TabTitleText>} aria-label="Box light variation content - users">
          <CourseList {...courseList} />
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Filtered Course</TabTitleText>} tooltip={tooltip}>
          <FilteredCourseList />
        </Tab>
      </Tabs>
    </div>
  );
};