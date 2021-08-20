import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Оптимизатор svg',
  title: 'Оптимизатор svg',
  description: 'Оптимизатор svg',
  keywords: 'Оптимизатор svg',
  h1: 'Оптимизатор svg',
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
