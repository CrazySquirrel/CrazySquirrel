import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Генератор sitemap',
  title: 'Генератор sitemap',
  description: 'Генератор sitemap',
  keywords: 'Генератор sitemap',
  h1: 'Генератор sitemap',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        {/*TODO add SitemapGenerator*/}
      </App>
  );
}
