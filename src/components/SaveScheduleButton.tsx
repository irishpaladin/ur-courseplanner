import { Button } from '@patternfly/react-core';
import "@patternfly/react-core/dist/styles/base.css";
import * as React from 'react'

interface LoadingPropsType {
    spinnerAriaValueText: string;
    spinnerAriaLabelledBy?: string;
    spinnerAriaLabel?: string;
    isLoading: boolean;
  }

export const SaveScheduleButton = () => {
    const [isPrimaryLoading, setIsPrimaryLoading] = React.useState<boolean>(true);
    const primaryLoadingProps = {} as LoadingPropsType;
    primaryLoadingProps.spinnerAriaValueText = 'Loading';
    primaryLoadingProps.spinnerAriaLabelledBy = 'save-schedule-button';
    primaryLoadingProps.isLoading = isPrimaryLoading;
    return (
      <Button
      isBlock
      variant="primary"
      id="primary-loading-button"
      onClick={() => setIsPrimaryLoading(!isPrimaryLoading)}
      {...primaryLoadingProps}
    >
      {isPrimaryLoading ? 'Saving Schedule...' : 'Save Schedule'}
    </Button>
    )
}