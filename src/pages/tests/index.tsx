import * as React from 'react';

import App from 'components/App';
import SubMenu from 'components/SubMenu';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Тесты',
  title: 'Тесты',
  description: 'Тесты',
  keywords: 'Тесты',
  h1: 'Тесты',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Результаты различных тестов, представленных на сайте расскажут вам о влиянии на
          практике того или иного подхода в web разработке.</p>
        <p>Тесты проведенные на данный момент:</p>
        <SubMenu/>
      </App>
  );
}
