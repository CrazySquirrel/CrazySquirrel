import * as React from 'react';

import App from 'components/App';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Генераторы',
  title: 'Генераторы',
  description: 'Генераторы',
  keywords: 'Генераторы',
  h1: 'Генераторы',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Генераторы, представленные на сайте позволят создать новые и полезные элементы для
          вашего сайта.</p>
        <p>Так с помощью<Link to='/tools/generators/map-area/'>map area</Link>можно создать
          необычные навигационные элементы (фигурные элементы меню, использование карты для
          навигации, использование «витражей» для навигации и т.д.).</p>
        <p>С помощью<Link to='/tools/generators/sprite/'>спрайтов</Link>вы можете оптимизировать
          загрузку большого количества иконок или анимации (поместив текстуры мелких элементов в
          один спрайт).</p>
        <p><Link to='/tools/generators/sitemap/'>Sitemap.xml</Link>позволит вам быстрее рассказать
          поисковому роботу обо всех страницах вашего сайте и ускорить их попадание в поисковый
          индекс.</p>
      </App>
  );
}
