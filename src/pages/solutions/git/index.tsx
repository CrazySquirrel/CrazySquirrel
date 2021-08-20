import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';
import SubMenu from 'components/SubMenu';

export const metadata: Metadata = {
  menu: 'Репозитории git',
  title: 'Репозитории git',
  description: 'Репозитории git',
  keywords: 'Репозитории git',
  h1: 'Репозитории git',
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
