import * as React from 'react';

import App from 'components/App';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Конверторы',
  title: 'Конверторы',
  description: 'Конверторы',
  keywords: 'Конверторы',
  h1: 'Конверторы',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Конверторы позволяют работать с различными данными, например,<Link
            to='/tools/converters/idn/'>преобразовывать не англоязычная названия доменов</Link>в
          правильный или читаемый формат,<Link to='/tools/converters/image-to-base64/'>создавать
            инлайновые изображения</Link>, или<Link to='/tools/converters/base64/'>работать с
            base64</Link></p>
      </App>
  );
}
