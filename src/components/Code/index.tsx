import * as React from 'react';

import {block as bem} from 'bem-cn';

import bind from 'bind-decorator';

const block = bem('code');

import './index.scss';

export interface Props {
  src: string;
  data: string;
}

export default class Code extends React.Component<Props, {}> {
  public static highlight: any;

  private ref: HTMLPreElement;

  public componentDidMount() {
    if (
        typeof window !== 'undefined' &&
        this.getType() !== 'txt'
    ) {
      this.watch();
    }
  }

  public render() {
    return (
        <pre className={block()} ref={this.handleRef}>
          <code className={`lang-${this.getType()}`}>
              {this.props.data}
          </code>
        </pre>
    );
  }

  private getType() {
    if (this.props.src.endsWith('.js')) {
      return 'javascript';
    }

    if (this.props.src.endsWith('.ts')) {
      return 'typescript';
    }

    if (this.props.src.endsWith('.json')) {
      return 'json';
    }

    return 'txt';
  }

  @bind
  private watch() {
    requestAnimationFrame(() => {
      if ((window as any).Visibility.checkVisibility(this.ref) > 0.5) {
        (window as any).Highlight.highlightBlock(this.ref);
      } else {
        this.watch();
      }
    });
  }

  @bind
  private handleRef(ref: HTMLPreElement) {
    this.ref = ref;
  }
}
