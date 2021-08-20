import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Оптимизатор jpeg',
  title: 'Оптимизатор jpeg',
  description: 'Оптимизатор jpeg',
  keywords: 'Оптимизатор jpeg',
  h1: 'Оптимизатор jpeg',
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
