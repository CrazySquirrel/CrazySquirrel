import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'IDN конвертер',
  title: 'IDN конвертер',
  description: 'IDN конвертер',
  keywords: 'IDN конвертер',
  h1: 'IDN конвертер',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        {/*TODO add IDNConverter*/}
      </App>
  );
}
