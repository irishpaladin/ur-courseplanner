import * as React from 'react';
import { useState, useContext, useCallback } from "react";

import "@patternfly/react-core/dist/styles/base.css";
import {
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  TreeView,
  TreeViewDataItem,
  TreeViewSearch
} from '@patternfly/react-core';
import { fetchCourses } from '../useCourseList';
import { CourseToolTip } from './CourseToolTip';
import { RequirementType } from "./types"

interface TabbedCoursesProps {
  requirement: RequirementType; // Define the type of your requirement prop
}
export const CourseList: React.FunctionComponent<TabbedCoursesProps> = ({ requirement }) => {
  if (!requirement || !requirement.requirement_details) {
    // Return a message or component indicating that the requirement data is not available
    return <div>No course catalogs available</div>;
  }
  const options = requirement.requirement_details;

  const [activeItems, setActiveItems] = React.useState(null);
  const [filteredItems, setFilteredItems] = React.useState(options);
  const [isFiltered, setIsFiltered] = React.useState(false);

  const onSelect = (_event: React.MouseEvent, item: any) => {
    // Ignore folders for selection
    setActiveItems(item);
  };

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toLowerCase();
    if (input === '') {
      setFilteredItems(options);
      setIsFiltered(false);
    } else {
      const filtered = options.filter((item) => filterItems(item, input));
      setFilteredItems(filtered);
      setIsFiltered(true);
    }
  };
  const filterItems = (item: any, input: string) => {
    if (item.coursecatalog_name.toLowerCase().includes(input)) {
      return true;
    }
    if (item.sections) {
      return item.sections.some((child: any) => filterItems(child, input));
    }
    return false;
  };

  const exportData = (data: any) => {

    // Implement your export logic here
    const ev = {
      id: data.sectionschedule_id

    }
    console.log(data);
    // Example: You can send the data to another component, API, or perform any action you need
  };


  const toolbar = (
    <Toolbar style={{ padding: 0, width: "100%" }}>
      <ToolbarContent style={{ padding: 0, width: "100%" }}>
        <ToolbarItem widths={{ default: '100%' }}>
          <div className="search-bar">
            <TreeViewSearch onSearch={onSearch} id="input-search" name="search-input" aria-label="Search input example" />
            <CourseToolTip />
          </div>
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );
  console.log("courselist:", requirement);
  return (
<div>
  {toolbar}
  <ul>
    <ul>
      <div className='courseName'>
        {requirement.requirement_details.map((item, index) => (
          <li key={index} onClick={() => onSelect(null, item)}>
            <div className='coursesubjectname'>{item.coursesubject_name}</div>
            {item.coursecatalogs.map((it) => (
              <ul>
                <div className='courseDetails'>
                  <li>Course Name: {it.coursecatalog_name}</li>
                  <li>Course Number: {it.coursecatalog_number}</li>
                  
                  {/* Check if sections exist */}
                  {it.sections && it.sections.length > 0 ? (
                    it.sections.map((i) => (
                      <ul>
                        <div className='courseTime'>
                          
                          <li>Course Term: {i.coursesection_term}</li>
                          <li>Course Year: {i.coursesection_year}</li>
                          <li>Max Seat: {i.coursesection_maxseat}</li>

                          {i.schedule.map((j) => (
                            <ul className='coursesectionTime' onClick={() => exportData(j)}>
                              <li>Section No: {j.sectionschedule_id}</li>
                            </ul>
                          ))}
                        </div>
                      </ul>
                    ))
                  ) : (
                    <div>No available sections</div>
                  )}
                </div>
              </ul>
            ))}
          </li>
        ))}
      </div>
    </ul>
  </ul>
</div>

  );
};