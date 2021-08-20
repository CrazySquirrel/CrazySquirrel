import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Влияние знака рубля',
  title: 'Влияние знака рубля',
  description: 'Влияние знака рубля',
  keywords: 'Влияние знака рубля',
  h1: 'Влияние знака рубля',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>В&nbsp;таблице Unicode появились новые символы валют, в&nbsp;частности, знак рубля.</p>
        <p>Мы&nbsp;можем легко вставлять данный знак с&nbsp;указанием его настоящего символа,
          с&nbsp;использованием подключаемых шрифтов, например «PT&nbsp;Sans» и&nbsp;указанием
          кода символа ₽.</p>
        <p>К&nbsp;сожалению, нигде нет информации о&nbsp;том, как данный знак интерпретируется
          поисковыми системами и&nbsp;влияет на&nbsp;позицию сайта.</p>
        <p>Данный SEO тест предназначен для решения денной задачи.</p>
        <p>Тест состоит из&nbsp;4&nbsp;одинаковых страниц с&nbsp;псевдо товаром «знак рубля»,
          который можно купить за&nbsp;1000&nbsp;рублей. Страницы отличаются только вариантами
          написания: «рублей», «руб», «р» и&nbsp;«₽».</p>
        <p>Результаты теста для Яндекса:</p>
        <ul>
          <li>Купить знак рубля за&nbsp;1000 руб</li>
          <li>Купить знак рубля за&nbsp;1000 рублей</li>
          <li>Купить знак рубля за&nbsp;1000&nbsp;₽</li>
          <li>Купить знак рубля за&nbsp;1000&nbsp;р</li>
        </ul>
        <p>Результаты теста для Google:</p>
        <ul>
          <li>Купить знак рубля за&nbsp;1000&nbsp;₽</li>
          <li>Купить знак рубля за&nbsp;1000 рублей</li>
          <li>Купить знак рубля за&nbsp;1000 руб</li>
          <li>Купить знак рубля за&nbsp;1000&nbsp;р</li>
        </ul>
      </App>
  );
}
