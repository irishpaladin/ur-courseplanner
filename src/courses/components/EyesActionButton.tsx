import EyeIcon from '@patternfly/react-icons/dist/esm/icons/eye-icon';
import EyeSlashIcon from '@patternfly/react-icons/dist/esm/icons/eye-slash-icon';
import { Button } from '@patternfly/react-core';
import * as React from 'react';
//props us for filtering

export const EyesActionButton = () => {
    const [isHover, setHover] = React.useState<boolean>(false);
    return (
        <Button variant="plain"
            aria-label="Launch app 1"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {isHover? <EyeSlashIcon /> : <EyeIcon />}
        </Button>
    )
}