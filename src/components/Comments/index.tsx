import * as React from 'react';

import Analytics from 'utils/Analytics';

import I18N from 'components/I18N';
import Accordion from 'components/Accordion';

interface Props {
  href: string;
  pathname: string;
  title: string;
}

interface State {
}

export default class Comments extends React.Component<Props, State> {
  public render() {
    const Disqus = require('disqus-react');

    return (
        <Accordion title='<I18N>View and leave comments</I18N>'>
          <Disqus.DiscussionEmbed shortname={'crazysquirrelru'} config={{
            url: this.props.href,
            identifier: this.props.pathname,
            title: this.props.title,
            onNewComment: () => {
              Analytics.event({
                category: 'comment',
                action: 'new',
              });
            },
          }}/>
        </Accordion>
    );
  }
}
