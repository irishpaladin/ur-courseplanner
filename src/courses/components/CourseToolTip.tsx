import '@patternfly/react-core/src/components/Tooltip/examples/./TooltipExamples.css';
import * as React from 'react';
import { Tooltip } from '@patternfly/react-core';

export const CourseToolTip: React.FunctionComponent = () => {
    return (
        <div className='tooltip'>
            <Tooltip aria="none" aria-live="polite" content="Click eye icon to filter/unfilter courses">
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 11.5V16.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 7.51L12.01 7.49889" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </Tooltip>
        </div>
    );
};