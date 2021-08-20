import * as React from 'react';

import {block as bem} from 'bem-cn';

import Link from 'components/Link';

const block = bem('donate');

import './index.scss';

export default class Donate extends React.Component<{}, {}> {
  public render() {
    return (
        <Link
            to='https://money.yandex.ru/to/41001951616035'
            title='Поддержите нас'
            replaceClassName={block()}
        />
    );
  }
}
