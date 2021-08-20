import * as React from 'react';

import {block as bem} from 'bem-cn';

import bind from 'bind-decorator';

interface Props {
  title: string;
}

interface State {
  active: boolean;
}

const block = bem('accordion');

import './index.scss';

export default class Accordion extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  public render() {
    if (this.state.active) {
      return (
          <div className={block()}>
            {this.props.children}
          </div>
      );
    } else {
      return (
          <div className={block()}>
            <div className={block('button')} onClick={this.handleClick}>
              {this.props.title}
            </div>
          </div>
      );
    }
  }

  @bind
  private handleClick() {
    this.setState({
      active: true,
    });
  }
}
