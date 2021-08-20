import * as React from 'react';

import App from 'components/App';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Инструменты',
  title: 'Инструменты',
  description: 'Инструменты',
  keywords: 'Инструменты',
  h1: 'Инструменты',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Вы можете воспользоваться различными полезными инструментами для улучшения своего
          сайта, такими как:</p>
        <ul>
          <li>
            <Link to='/tools/generators/'>генераторы</Link>
            <ul>
              <li><Link to='/tools/generators/map-area/'>map area</Link>- позволит создать новые и
                необычные элементы навигации на вашем сайте
              </li>
              <li><Link to='/tools/generators/sprite/'>спрайты</Link>– позволят уменьшить время
                загрузки маленьких изображения (например иконок) за счет объединения их в одно
                большое изображение
              </li>
              <li><Link to='/tools/generators/sitemap/'>sitemap</Link>– позволит поисковым роботам
                быстрее проиндексировать новые страницы на вашем сайте
              </li>
            </ul>
          </li>
          <li>
            <Link to='/tools/compressors/'>компрессоры</Link>&nbsp;– позволят сократить
            размеры служебных файлов и сократить «вес» и время загрузки вашего сайта
            <ul>
              <li><Link to='/tools/compressors/js/'>JS</Link></li>
              <li><Link to='/tools/compressors/css/'>CSS</Link></li>
              <li><Link to='/tools/compressors/pictures/jpg/'>JPG</Link></li>
              <li><Link to='/tools/compressors/pictures/png/'>PNG</Link></li>
              <li><Link to='/tools/compressors/pictures/gif/'>GIF</Link></li>
              <li><Link to='/tools/compressors/pictures/svg/'>SVG</Link></li>
            </ul>
          </li>
          <li>
            <Link to='/tools/analyzers/'>анализаторы</Link>– проверят ваш сайт и скажут вам
            о недостатках, которые можно поправить.
          </li>
        </ul>
      </App>
  );
}
