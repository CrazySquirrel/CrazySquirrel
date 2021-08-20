import * as React from 'react';

import {block as bem} from 'bem-cn';

const block = bem('main');

import './index.scss';

export default class Main extends React.Component {
  public render() {
    return (
        <main className={block()}>
          {this.props.children}
        </main>
    );
  }
}
