import * as React from 'react';

import {connect} from 'react-redux';
import {block as bem} from 'bem-cn';

import Link from 'components/Link';

import {PAGES} from 'routs/index';

import {State as StoreTree} from 'store/index';

const block = bem('bread-crumb');

import './index.scss';

interface Props {
  location: string;
}

interface Item {
  title: string;
  path: string;
}

class BreadCrumb extends React.Component<Props, {}> {
  public render() {
    const currentPath = (`/${this.props.location || ''}/`).replace(/\/+/ig, '/').split('/');

    const path = [currentPath.shift()];

    const breadcrumb = [];

    for (const c of currentPath) {
      const p = path.join('/') + '/';
      const v = (PAGES[p] as any).metadata;

      breadcrumb.push((
          <Link key={p} to={p}>{v.menu}</Link>
      ));

      path.push(c);
    }

    return (
        <nav className={block()}>
          {breadcrumb}
        </nav>
    );
  }
}

export default connect(
    (state: StoreTree) => ({
      location: state.router.location,
    }),
    (dispatch) => ({}),
)(BreadCrumb);
