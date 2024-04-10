import * as React from 'react';
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
import {transformCourseDetails} from "../transformCourseDetails";

interface ISection{
  coursesection_CRN:Int16Array,
  coursesection_id:Int16Array,
  coursesection_maxseat:Int16Array,
  coursesection_maxwaitlist:Int16Array,
  coursesection_number:Int16Array,
  coursesection_term:Int16Array,
  coursesection_year:Int16Array,
  labsection_id:Int16Array
}

interface ICourseCatalog {
  courseattribute_id:Int16Array,
  coursecatalog_id:Int16Array,
  coursecatalog_name: string,
  coursecatalog_number:Int16Array,
  faculty_id:Int16Array,
  sections:Array<ISection>
}

interface ICoursesSubject {
  coursecatalogs:Array<ICourseCatalog>
  coursesubject:string,
  coursesubject_id:Int16Array,
  coursesubject_name:string
}

interface IProps{
  audit_id: Int16Array,
  requirement_details:Array<ICoursesSubject>
  requirement_id: Int16Array,
  requirement_name: string,
  requirement_occurence: Int16Array,
  requiirement_status: Int16Array
}

function display() {
  console.log("Rendering CourseList");
  return 1;
}
export const CourseList: React.FunctionComponent = (props: IProps) => {
  let displayconsole = false;
  console.log("I am in CourseList");
  if(displayconsole)console.log({name:"props", props: props});
  if(displayconsole)console.log({name:"reqdeets", propsreq: props.requirement_details});
  const options = transformCourseDetails(props.requirement_details);
  if(displayconsole)console.log({name:"options",options:options});
  const options2 = fetchCourses;
  if(displayconsole)console.log(options2);

  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>();
  const [filteredItems, setFilteredItems] = React.useState(options);
  const [isFiltered, setIsFiltered] = React.useState(false);

  React.useEffect(() => {
    setFilteredItems(transformCourseDetails(props.requirement_details));
  }, [props.requirement_details])

  if(displayconsole)console.log({name:"activeItems", activeItems:activeItems});
  if(displayconsole)console.log({name:"filteredItems", filteredItems:filteredItems});
  if(displayconsole)console.log({name:"isFiltered", isFiltered:isFiltered});

  
  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    // Ignore folders for selection
    if (treeViewItem && !treeViewItem.children) {
      if(displayconsole)console.log("active items: "+ activeItems)
      setActiveItems([treeViewItem]);
    }
  };

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input === '') {
      setFilteredItems(options);
      setIsFiltered(false);
    } else {
      const filtered = options.map((opt) => Object.assign({}, opt)).filter((item) => filterItems(item, input));
      if(displayconsole)console.log({filtered: filtered})
      setFilteredItems(filtered);
      setIsFiltered(true);
    }
  };
  const filterItems = (item, input) => {
    if (item.name.toLowerCase().includes(input.toLowerCase())) {
      return true;
    }
    if (item.children) {
      return (
        (item.children = item.children
          .map((opt) => Object.assign({}, opt))
          .filter((child) => filterItems(child, input))).length > 0
      );
    }
  };
  const toolbar = (
    <Toolbar style={{ padding: 0, width: "100%" }}>
      {display()==1}
      <ToolbarContent style={{ padding: 0, width: "100%" }}>
        <ToolbarItem widths={{ default: '100%' }}>
          <div className="search-bar">
          <TreeViewSearch onSearch={onSearch} id="input-search" name="search-input" aria-label="Search input example" />
          <CourseToolTip/>
          </div>
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  return (
    <TreeView
      data={filteredItems}
      activeItems={activeItems}
      onSelect={onSelect}
      allExpanded={isFiltered}
      toolbar={toolbar}
    />
  );
};