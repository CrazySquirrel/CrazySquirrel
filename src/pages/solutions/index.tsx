import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';
import SubMenu from 'components/SubMenu';

export const metadata: Metadata = {
  menu: 'Готовые решения',
  title: 'Готовые решения',
  description: 'Готовые решения',
  keywords: 'Готовые решения',
  h1: 'Готовые решения',
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
