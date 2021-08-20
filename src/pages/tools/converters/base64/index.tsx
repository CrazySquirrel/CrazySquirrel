import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Base64 конвертер',
  title: 'Base64 конвертер',
  description: 'Base64 конвертер',
  keywords: 'Base64 конвертер',
  h1: 'Base64 конвертер',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        {/*TODO add Base64Converter*/}
      </App>
  );
}
