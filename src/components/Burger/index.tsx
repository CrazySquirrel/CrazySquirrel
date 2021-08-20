import * as React from 'react';

import bind from 'bind-decorator';
import {connect} from 'react-redux';
import {State as StoreTree} from 'store/index';
import {updateAside} from 'actions/aside';
import {Type} from 'models/aside';

import {block as bem} from 'bem-cn';

const block = bem('burger');

import './index.scss';

interface Props {
  aside: Type;
  update: (aside: Type) => any;
}

interface State {
}

class Burger extends React.Component<Props, State> {
  public render() {
    return (
        <span
            className={block({animation: this.props.aside === Type.MENU ? 'forward' : 'backwards'})}
            onClick={this.handleClick}
        >
            <span className={block('content')}>
              <span className={block('line', {line: '1'})}/>
              <span className={block('line', {line: '2'})}/>
              <span className={block('line', {line: '3'})}/>
            </span>
        </span>
    );
  }

  @bind
  private handleClick() {
    this.props.update(this.props.aside === Type.MENU ? undefined : Type.MENU);
  }
}

export default connect(
    (state: StoreTree) => ({
      aside: state.aside.aside,
    }),
    (dispatch) => ({
      update: (aside: Type) => dispatch(updateAside(aside)),
    }),
)(Burger);
