import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Главная',
  title: 'Инструменты для web мастеров, программистов, дизайнеров, верстальщиков и seo оптимизаторов',
  description: 'Множество полезных профессиональных инструментов для web специалистов разных областей – от создания до продвижения сайта',
  keywords: 'инструменты для web мастера, инструменты для программиста, инструменты для дизайнера, инструменты для верстальщика, инструменты для seo оптимизатора',
  h1: 'Инструменты для web мастеров, программистов, дизайнеров, верстальщиков и seo оптимизаторов',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Сайт CrazySquirrel – это современный развивающийся помощник, готовый предоставить
          множество полезных
          инструментов для различных web специалистов: дизайнеров, программистов, верстальщиков и
          seo-оптимизаторов.</p>
        <p>Все инструменты, представленные на сайте, предоставляются бесплатно. Инструменты разбиты
          на отдельные
          категории, в зависимости от области деятельности и представлены в левом меню.</p>
        <p>Помимо инструментов на сайте имеются полезные статьи, в которых раскрываются некоторые
          секреты web
          разработок, а также дается решение наиболее часто возникающих проблем.</p>
      </App>
  );
}
