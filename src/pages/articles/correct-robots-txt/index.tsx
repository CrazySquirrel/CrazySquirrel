import * as React from 'react';

import App from 'components/App';
import Code from 'components/Code';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Правильный robots.txt',
  title: 'Правильный robots.txt',
  description: 'Файл robots.txt — это основной файл, описывающий правила обработки страниц поисковым роботов. Данный файл нужен для указания основного имени сайта, карты сайта (sitemap.xml), открытых и закрытых разделов сайта.',
  keywords: 'Правильный robots.txt',
  h1: 'Правильный robots.txt',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Файл robots.txt&nbsp;— это основной файл, описывающий правила обработки страниц
          поисковым роботов. Данный файл нужен для указания основного имени сайта, карты сайта
          (sitemap.xml), открытых и&nbsp;закрытых разделов сайта.<br/> Файл robots.txt включает
          следующие директивы:</p>
        <ul>
          <li>User-agent&nbsp;— директива указывающая для какого робота нижеследующие правила</li>
          <li>
            <ul>
              <li>* - все роботы</li>
              <li>Yandex&nbsp;— основной робот Яндекс</li>
              <li>Googlebot&nbsp;— основной робот Google</li>
              <li>StackRambler&nbsp;— поисковый робот Рамблер</li>
              <li>Aport&nbsp;— поисковый робот Апорт</li>
              <li>Slurp&nbsp;— робот Yahoo</li>
              <li>MSNBot&nbsp;— робот MSN</li>
            </ul>
          </li>
          <li>Disallow&nbsp;— директива запрета части сайта</li>
          <li>Allow&nbsp;— директива разрешения части сайта</li>
          <li>Host&nbsp;— директива указания основного имени сайта</li>
          <li>Sitemap— директива указания карты сайта (sitemap.xml)</li>
          <li>Crawl-delay&nbsp;— директива указывающая сколько секунд робот может ждать ответа
            от&nbsp;сайта (необходима на&nbsp;сильно загруженных ресурсах, чтобы робот
            не&nbsp;посчитал сайт недоступным)
          </li>
          <li>Clean-param&nbsp;— директива описывающая динамические параметры не&nbsp;влияющие
            на&nbsp;содержимое сайта
          </li>
        </ul>
        <p>Помимо директив в&nbsp;robots.txt используются спец символы:</p>
        <ul>
          <li>* - любай (в&nbsp;том числе и&nbsp;пустая) последовательность символов</li>
          <li>$&nbsp;— является ограничением правила</li>
        </ul>
        <p>Для составления robots.txt используются вышеперечисленные директивы и&nbsp;спет символы
          по&nbsp;следующему принципу:</p>
        <ul>
          <li>Указывается имя робота для которого пишется список правил<br/> (User-agent: * -
            правило для всех роботов)
          </li>
          <li>Пишется перечень запрещенных разделов сайта для указанного робота<br/> (
            Disallow:&nbsp;/ - запрет индексации всего сайта)
          </li>
          <li>Пишется перечень разрешённых разделов сайта<br/> (Allow: /home/&nbsp;— разрешен
            раздел home)
          </li>
          <li>Указывается имя сайта<br/> (Host: crazysquirrel.ru&nbsp;— основное имя сайта
            crazysquirrel.ru)
          </li>
          <li>Указывается абсолютный путь до&nbsp;файла sitemap.xml<br/> (Sitemap: https://
            crazysquirrel.ru/sitemap.xml)
          </li>
        </ul>
        <p>Если на&nbsp;сайте нет запрещенных разделов, то&nbsp;robots.txt должен состоять минимум
          из&nbsp;4&nbsp;строчек:</p>
        <Code
            src='./examples/example-1.example.txt'
            data={require('./examples/example-1.example.txt')}
        />
        <p>Проверить robots.txt и&nbsp;то, как
          он&nbsp;влияет на&nbsp;индексацию сайта можно с&nbsp;помощью инструментов Яндекса</p>
      </App>
  );
}
