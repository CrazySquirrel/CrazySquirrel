import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';
import SubMenu from 'components/SubMenu';

export const metadata: Metadata = {
  menu: 'Пакеты npm',
  title: 'Пакеты npm',
  description: 'Пакеты npm',
  keywords: 'Пакеты npm',
  h1: 'Пакеты npm',
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
