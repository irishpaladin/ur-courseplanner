import * as React from 'react';
import { useState} from "react";

import "@patternfly/react-core/dist/styles/base.css";
import {
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  TreeViewSearch
} from '@patternfly/react-core';
import { CourseToolTip } from './CourseToolTip';
import { RequirementType } from "./types"

interface TabbedCoursesProps {
  requirement: RequirementType; // Define the type of your requirement prop
}

export const CourseList: React.FunctionComponent<TabbedCoursesProps> = ({ requirement }) => {
  const options = requirement.requirement_details;

  const [activeItems, setActiveItems] = React.useState(null);
  const [filteredItems, setFilteredItems] = React.useState(options);
  const [isFiltered, setIsFiltered] = React.useState(false);
  const [sectionTimeVisibility, setSectionTimeVisibility] = useState<{ [key: string]: boolean }>({}); // State to manage section time visibility
  if (!requirement || !requirement.requirement_details) {
    // Return a message or component indicating that the requirement data is not available
    return <div>No course catalogs available</div>;
  }


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
  const toggleSectionTime = (sectionId: number) => {
    const idString = sectionId.toString(); // Convert the section ID to a string
    setSectionTimeVisibility(prevState => ({
      ...prevState,
      [idString]: !prevState[idString] // Toggle visibility for the selected section
    }));
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
  return (
    <div>
      {toolbar}
      <ul>
        <ul>
          <div className='courseName'>
            {requirement.requirement_details.map((item, index) => (
              <li key={index} onClick={() => onSelect(null, item)}>
                <div className='coursesubjectname'>{item.coursesubject_name}</div>
                {item.coursecatalogs.map((it, index) => (
                  <ul key={index}>
                    <div className='courseDetails'>
                      <li>Course Name: {it.coursecatalog_name}</li>
                      <li>Course Number: {it.coursecatalog_number}</li>
                      
                      {/* Check if sections exist */}
                      {it.sections && it.sections.length > 0 ? (
                        it.sections.map((i,index) => (
                          <ul key={index}>
                            <div className='courseTime'>
                              
                              <li>Course Term: {i.coursesection_term}</li>
                              <li>Course Year: {i.coursesection_year}</li>
                              <li>Max Seat: {i.coursesection_maxseat}</li>
  
                              {i.schedule.map((j, index) => (
                                <ul id="sec" key = {index} className='coursesectionTime' onClick={() => toggleSectionTime(j.sectionschedule_id)}>
                                  <li>Section No: {j.sectionschedule_id}</li>
                                  {sectionTimeVisibility[j.sectionschedule_id.toString()] && ( // Show section time if showSectionTime is true
                                    <div className=''>
                                      <li>Class starts: {j.sectionschedule_starttime}</li>
                                      <li>class end: {j.sectionschedule_endtime}</li>
                                      {j.sectionschedule_day==1 && (
                                        <li>Class is on Monday</li>
                                      )}
                                      {j.sectionschedule_day==2 && (
                                        <li>Class is on Tuesday</li>
                                      )}
                                      {j.sectionschedule_day==3 && (
                                        <li>Class is on Wednesday</li>
                                      )}
                                      {j.sectionschedule_day==4 && (
                                        <li>Class is on Thursday</li>
                                      )}
                                      {j.sectionschedule_day==5 && (
                                        <li>Class is on Friday</li>
                                      )}
                                    </div>
                                  )}
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
