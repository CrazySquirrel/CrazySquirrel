import * as React from 'react';

import {block as bem} from 'bem-cn';

import {connect} from 'react-redux';

import Badges from 'components/Badges';
import Link from 'components/Link';

import {PAGES} from 'routs/index';

import {State as StoreTree} from 'store/index';

const block = bem('sub-menu');

import './index.scss';

interface Props {
  location: string;
  extend?: boolean;
  onlyBadges?: boolean;
}

class SubMenu extends React.Component<Props, {}> {
  public render() {
    const items = Object.keys(PAGES).reduce((a: JSX.Element[], v: string) => {
      if (
          v !== this.props.location &&
          v.startsWith(this.props.location) &&
          v.replace(this.props.location, '').split('/').length <= 2
      ) {
        if (this.props.extend) {
          a.push(<h2 key={`${v}_h2`}><Link to={v}>{PAGES[v].metadata.menu}</Link></h2>);

          if (PAGES[v].metadata.badges) {
            a.push(<Badges key={`${v}_badges`} badges={PAGES[v].metadata.badges}/>);
          }

          if (!this.props.onlyBadges || !PAGES[v].metadata.badges) {
            a.push(<p key={`${v}_p`}>{PAGES[v].metadata.description}</p>);
          }
        } else {
          a.push(<Link key={v} to={v}>{PAGES[v].metadata.menu}</Link>);
        }
      }

      return a;
    }, []);

    if (items.length === 0) {
      return null;
    }

    return (
        <nav className={block({extend: this.props.extend})}>
          {items}
        </nav>
    );
  }
}

export default connect(
    (state: StoreTree) => ({
      location: state.router.location,
    }),
    (dispatch) => ({}),
)(SubMenu);
