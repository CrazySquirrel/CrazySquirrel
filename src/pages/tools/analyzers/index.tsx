import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Анализаторы',
  title: 'Анализаторы',
  description: 'Анализаторы',
  keywords: 'Анализаторы',
  h1: 'Анализаторы',
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
