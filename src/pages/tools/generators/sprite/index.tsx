import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Генератор спрайтов',
  title: 'Генератор спрайтов',
  description: 'Генератор спрайтов',
  keywords: 'Генератор спрайтов',
  h1: 'Генератор спрайтов',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        {/*TODO add SpriteGenerator*/}
      </App>
  );
}
