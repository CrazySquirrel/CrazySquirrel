import * as React from 'react';

import {connect} from 'react-redux';
import {block as bem} from 'bem-cn';

import Link from 'components/Link';

import {PAGES} from 'routs/index';

import {State as StoreTree} from 'store/index';

const block = bem('menu');

import './index.scss';

interface Props {
  location: string;
}

class Menu extends React.Component<Props, {}> {
  private tree: any;

  public render() {
    this.tree = Object.keys(PAGES).reduce((a: any, v: string) => {
      const localV = v.split('/');
      localV.pop();
      localV.pop();

      if (localV.length > 0) {
        const localLocalV = localV.join('/') + '/';
        a[localLocalV] = a[localLocalV] || {};
        a[localLocalV][v] = PAGES[v];
      }

      return a;
    }, {});

    return (
        <nav className={block()}>
          {this.buildMenu('/')}
        </nav>
    );
  }

  private buildMenu(prefix: string) {
    const items = Object.keys(this.tree[prefix] || {}).map((v) => (
        <li key={v}><Link to={v}>{PAGES[v].metadata.menu}</Link>{this.buildMenu(v)}</li>
    ));

    if (items.length === 0) {
      return '';
    }

    return (
        <ol>
          {...items}
        </ol>
    );
  }
}

export default connect(
    (state: StoreTree) => ({
      location: state.router.location,
    }),
    (dispatch) => ({}),
)(Menu);
