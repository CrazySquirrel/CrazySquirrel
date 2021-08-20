import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';
import SubMenu from 'components/SubMenu';

export const metadata: Metadata = {
  menu: 'jQuery плагины',
  title: 'jQuery плагины',
  description: 'jQuery плагины',
  keywords: 'jQuery плагины',
  h1: 'jQuery плагины',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <SubMenu extend={true} onlyBadges={true}/>
      </App>
  );
}
