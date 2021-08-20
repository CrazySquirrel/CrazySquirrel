import * as React from 'react';

import {connect} from 'react-redux';
import bind from 'bind-decorator';

import {block as bem} from 'bem-cn';

import {State as StoreTree} from 'store/index';
import {updateAside} from 'actions/aside';
import {Type} from 'models/aside';

import {IconMap} from 'components/Icon';

const block = bem('language');

import './index.scss';

interface Props {
  aside: Type;
  update: (aside: Type) => any;
}

interface State {

}

class Language extends React.Component<Props, State> {
  public render() {
    return (
        <span
            className={block({active: this.props.aside === Type.LANGUAGE})}
            onClick={this.handleClick}
        >
            <span className={block('content')}>{IconMap()}</span>
        </span>
    );
  }

  @bind
  private handleClick() {
    this.props.update(this.props.aside === Type.LANGUAGE ? undefined : Type.LANGUAGE);
  }
}

export default connect(
    (state: StoreTree) => ({
      aside: state.aside.aside,
    }),
    (dispatch) => ({
      update: (aside: Type) => dispatch(updateAside(aside)),
    }),
)(Language);
