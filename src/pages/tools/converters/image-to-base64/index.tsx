import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Изображение в base64',
  title: 'Изображение в base64',
  description: 'Изображение в base64',
  keywords: 'Изображение в base64',
  h1: 'Изображение в base64',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        {/*TODO add ImageToBase64Converter*/}
      </App>
  );
}
