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
export const CourseList: React.FunctionComponent = () => {
  const options = fetchCourses;

  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>();
  const [filteredItems, setFilteredItems] = React.useState(options);
  const [isFiltered, setIsFiltered] = React.useState(false);

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    // Ignore folders for selection
    if (treeViewItem && !treeViewItem.children) {
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