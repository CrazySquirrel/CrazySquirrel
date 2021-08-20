import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Минификатор css',
  title: 'Минификатор css',
  description: 'Минификатор css',
  keywords: 'Минификатор css',
  h1: 'Минификатор css',
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
