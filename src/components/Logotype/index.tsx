import * as React from 'react';

import {block as bem} from 'bem-cn';

import Link from 'components/Link';

import {IconSquirrel} from 'components/Icon';

const block = bem('logotype');

import './index.scss';

export default class Logotype extends React.Component<{}, {}> {
  public render() {
    return (
        <Link to='/' replaceClassName={block()}>{IconSquirrel()}</Link>
    );
  }
}
