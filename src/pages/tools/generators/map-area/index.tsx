import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Map area по изображению',
  title: 'Map area по изображению',
  description: 'Map area по изображению',
  keywords: 'Map area по изображению',
  h1: 'Map area по изображению',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        {/*TODO add MapAreaGenerator*/}
      </App>
  );
}
