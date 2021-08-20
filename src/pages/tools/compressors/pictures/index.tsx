import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Оптимизатор изображения',
  title: 'Оптимизатор изображения',
  description: 'Оптимизатор изображения',
  keywords: 'Оптимизатор изображения',
  h1: 'Оптимизатор изображения',
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
