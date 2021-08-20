import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Полный анализ сайта',
  title: 'Полный анализ сайта',
  description: 'Полный анализ сайта',
  keywords: 'Полный анализ сайта',
  h1: 'Полный анализ сайта',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        {/*TODO add Analyzer*/}
      </App>
  );
}
