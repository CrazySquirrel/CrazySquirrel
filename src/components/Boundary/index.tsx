import * as Sentry from '@sentry/browser';
import * as React from 'react';

import I18N from 'components/I18N';

interface Props {
}

interface State {
  error: any;
}

export class Boundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  public componentDidCatch(error: any, errorInfo: any) {
    this.setState({error});

    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });
  }

  public render() {
    if (this.state.error) {
      return (
          <a onClick={() => Sentry.showReportDialog()}><I18N>Report</I18N></a>
      );
    } else {
      return this.props.children;
    }
  }
}
