import EyeSlashIcon from '@patternfly/react-icons/dist/esm/icons/eye-slash-icon';
import EyeIcon from '@patternfly/react-icons/dist/esm/icons/eye-icon';
import { Button } from '@patternfly/react-core';
import * as React from 'react';
//props us for filtering

export const SlashEyesActionButton = () => {
    const [isHover, setHover] = React.useState<boolean>(false);
    return (
        <Button 
            variant="plain" 
            aria-label="Unfilter Course"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
            {
                isHover? <EyeIcon /> : <EyeSlashIcon/>
            }
        </Button>
    )
}