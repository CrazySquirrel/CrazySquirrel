import * as React from 'react';

import {block as bem} from 'bem-cn';

import cn from 'classnames';

import {prop} from 'tools/index';

import {NavLink as RoutLink} from 'react-router-dom';

import {PAGES} from 'routs/index';

const block = bem('link');

import './index.scss';

export interface Props {
  to?: string;
  className?: string;
  replaceClassName?: string;
  title?: string;
}

export default class Link extends React.Component<Props, {}> {
  public render() {
    const locals = {
      className: this.props.replaceClassName || cn(block(), this.props.className),
      title: this.props.title || prop(PAGES[this.props.to], 'metadata.menu'),
    };

    if (this.props.to) {
      if (this.props.to.startsWith('http')) {
        return (
            <a
                {...locals}
                target='_blank'
                rel='noreferrer'
                href={this.props.to}
            >
              {this.props.children}
            </a>
        );
      } else {
        return (
            <RoutLink
                {...locals}
                to={this.props.to}
                exact={true}
                activeClassName={(this.props.replaceClassName || block({active: true})).toString()}
            >
              {this.props.children}
            </RoutLink>
        );
      }
    } else {
      return (
          <span {...locals}>
            {this.props.children}
          </span>
      );
    }
  }
}
