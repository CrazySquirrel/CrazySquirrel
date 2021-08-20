import * as React from 'react';

import App from 'components/App';
import SubMenu from 'components/SubMenu';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Полезные статьи',
  title: 'Полезные статьи',
  description: 'Полезные статьи',
  keywords: 'Полезные статьи',
  h1: 'Полезные статьи',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <SubMenu extend={true}/>
      </App>
  );
}
