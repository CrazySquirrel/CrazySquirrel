import * as React from 'react';

import {block as bem} from 'bem-cn';

const block = bem('footer');

import './index.scss';

export default class Main extends React.Component {
  public render() {
    return (
        <footer className={block()}>
          {this.props.children}
        </footer>
    );
  }
}
