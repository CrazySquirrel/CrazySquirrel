import * as React from 'react';

import App from 'components/App';
import Code from 'components/Code';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Правильный sitemap.xml',
  title: 'Правильный sitemap.xml',
  description: 'Файл sitemap.xml — это xml файл, содержащий в себе полную карту сайта. Данный фал позволяет указать все страницы сайта и некоторые их свойства для улучшения работы поисковых роботов.',
  keywords: 'Правильный sitemap.xml',
  h1: 'Правильный sitemap.xml',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Файл sitemap.xml — это xml файл, содержащий в себе полную карту сайта. Данный фал
          позволяет указать все страницы сайта и некоторые их свойства для улучшения работы
          поисковых роботов.</p>
        <p>Sitemap.xml состоит из следующих частей</p>
        <ul>
          <li>
            {'<?xml version="1.0" encoding="UTF-8"?>'} — указатель версии и кодировки xml файла
          </li>
          <li>
            {'<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">'} — контейнер перечня
            страниц с указанием на версию стандарта sitemap файлов
          </li>
          <li>
            <ul>
              <li>
                {'<url>'} — открытие контейнера описания одной страницы
              </li>
              <li>
                <ul>
                  <li>
                    {'<loc>https://crazysquirrel.ru/</loc>'} — абсолютный адрес страницы сайта
                  </li>
                  <li>
                    {'<lastmod>2013-06-28</lastmod>'} — дата последней модификации страницы
                    (должна
                    быть в формате W3C Datetime.)
                  </li>
                  <li>
                    {'<changefreq>daily</changefreq>'} — частота изменений страницы
                    (always,hourly,daily,weekly,monthly,yearly,never)
                  </li>
                  <li>
                    {'<priority>1</priority>'} — важность страницы в общем контенте сайта
                    (величина
                    от 0 до 1)
                  </li>
                </ul>
              </li>
              <li>
                {'</url>'} — закрытие контейнера описания одной страницы
              </li>
            </ul>
          </li>
          <li>
            {'</urlset>'} — закрытие контейнера перечня страниц
          </li>
        </ul>
        <p>Наиболее оптимальным является решения, когда sitemap содержит
          {'<url>'} с указанием
          {'<loc>'} и
          {'<priority>'} <br/>
          Пример файла sitemap.xml (укороченная версия):</p>
        <Code
            src='./examples/example-1.example.txt'
            data={require('./examples/example-1.example.txt')}
        />
        <p>Проверить sitemap.xml можно с&nbsp;помощью инструментов Яндекса.</p>
        <p><Link to='/tools/generators/sitemap/'>Сгенерируйте sitemap.xml</Link> для своего сайта.
        </p>
      </App>
  );
}
