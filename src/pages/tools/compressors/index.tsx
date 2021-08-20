import * as React from 'react';

import App from 'components/App';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Компрессоры',
  title: 'Компрессоры',
  description: 'Компрессоры',
  keywords: 'Компрессоры',
  h1: 'Компрессоры',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Компрессоры позволят минифицировать ваши файлы и ускорить таким образом загрузку вашего
          сайта.</p>
        <p>На текущий момент на сайте представлены следующие компрессоры файлов:</p>
        <ul>
          <li><Link to='/tools/compressors/js/'>JavaScript компрессоры</Link></li>
          <li><Link to='/tools/compressors/css/'>CSS компрессоры</Link></li>
          <li><Link to='/tools/compressors/pictures/'>Компрессор изображений</Link>
            <ul>
              <li><Link to='/tools/compressors/pictures/jpeg/'>JPEG компрессоры</Link></li>
              <li><Link to='/tools/compressors/pictures/png/'>PNG компрессоры</Link></li>
              <li><Link to='/tools/compressors/pictures/gif/'>GIF компрессоры</Link></li>
              <li><Link to='/tools/compressors/pictures/svg/'>SVG компрессоры</Link></li>
            </ul>
          </li>
        </ul>
        {/*TODO add Compressor*/}
      </App>
  );
}
