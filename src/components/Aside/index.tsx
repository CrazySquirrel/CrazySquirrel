import * as React from 'react';

import {block as bem} from 'bem-cn';

import {connect} from 'react-redux';
import {State as StoreTree} from 'store/index';
import {updateAside} from 'actions/aside';
import {Type} from 'models/aside';

import Logotype from 'components/Logotype';
import Language from 'components/Language';
import Languages from 'components/Languages';
import Burger from 'components/Burger';
import Donate from 'components/Donate';

import Menu from 'components/Menu';

const block = bem('aside');

import './index.scss';

export enum Side {
  LEFT = 'left',
  RIGHT = 'right',
}

interface Props {
  side: Side;
  aside: Type;
}

class Aside extends React.Component<Props, {}> {
  public render() {
    if (this.props.side === Side.LEFT) {
      return (
          <aside className={block({side: this.props.side})}>
            <span className={block('icons')}>
              <Logotype/>
              <Language/>
              <Burger/>
              <Donate/>
            </span>
            <div className={block('content', {
              active: this.props.aside === Type.MENU,
              type: 'menu',
            })}>
              <Menu/>
            </div>
            <div className={block('content', {
              active: this.props.aside === Type.LANGUAGE,
              type: 'language',
            })}>
              <Languages/>
            </div>
          </aside>
      );
    } else if (this.props.side === Side.RIGHT) {
      return (
          <aside className={block({side: this.props.side})}/>
      );
    }

    return (
        <aside className={block({side: this.props.side})}/>
    );
  }
}

export default connect(
    (state: StoreTree) => ({
      aside: state.aside.aside,
    }),
    (dispatch) => ({
      update: (aside: Type) => dispatch(updateAside(aside)),
    }),
)(Aside);
