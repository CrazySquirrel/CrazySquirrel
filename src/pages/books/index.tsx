import * as React from 'react';

import App from 'components/App';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Книги',
  title: 'Книги',
  description: 'Книги',
  keywords: 'Книги',
  h1: 'Книги',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Доступные книги:</p>
        <ul>
          <li>
            <Link to='https://dsps.crazysquirrel.ru'>Алгоритмы, Структуры данных и Решения задачь с
              интерьвью</Link>
          </li>
        </ul>
      </App>
  );
}
