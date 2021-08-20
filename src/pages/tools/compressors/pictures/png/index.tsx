import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Оптимизатор png',
  title: 'Оптимизатор png',
  description: 'Оптимизатор png',
  keywords: 'Оптимизатор png',
  h1: 'Оптимизатор png',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        {/*TODO add Compressor*/}
      </App>
  );
}
