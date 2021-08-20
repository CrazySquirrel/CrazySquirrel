import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Оптимизатор gif',
  title: 'Оптимизатор gif',
  description: 'Оптимизатор gif',
  keywords: 'Оптимизатор gif',
  h1: 'Оптимизатор gif',
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
