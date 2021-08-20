import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Поиск',
  title: 'Поиск',
  description: 'Поиск',
  keywords: 'Поиск',
  h1: 'Поиск',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        {/*TODO add Search*/}
      </App>
  );
}
