import * as React from 'react';

import {block as bem} from 'bem-cn';

import Link from 'components/Link';
import {Icon} from 'components/Icon';

import {Badge} from 'types/index';

const block = bem('badges');

import './index.scss';

interface Props {
  badges?: Badge[];
}

export default class Badges extends React.Component<Props, {}> {
  public render() {
    if (!Array.isArray(this.props.badges) || this.props.badges.length === 0) {
      return;
    }

    return (
        <div className={block()}>
          {this.props.badges.map((badge: Badge, i: number) => {
            if (typeof badge.img === 'string') {
              return (
                  <Link to={badge.link} key={i} className={block('badge')}>
                    <img
                        src={badge.img}
                        className={block('badge')}
                        alt={badge.alt}
                        width={badge.width}
                        height={badge.height}
                    />
                  </Link>
              );
            } else {
              return (
                  <Link to={badge.link} key={i} className={block('badge')}>
                    {Icon((badge.img as any).default)}
                  </Link>
              );
            }
          })}
        </div>
    );
  }
}
