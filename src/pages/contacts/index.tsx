import * as React from 'react';

import App from 'components/App';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Контакты',
  title: 'Контакты',
  description: 'Контакты',
  keywords: 'Контакты',
  h1: 'Контакты',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <p>Присылайте свои комментарии, идеи, замечания и т.д.</p>
        <p>Вы можете связаться со мной:</p>
        <ul>
          <li> Через форму комментариев</li>
          <li>По почте <a href='mailto:info@crazysquirrel.ru'>info@crazysquirrel.ru</a></li>
          <li>Через соц сети:
            <ul>
              <li>
                <Link to='https://vk.com/id131848924'>VK</Link>
              </li>
              <li>
                <Link to='https://www.facebook.com/yastreb.serdg'>Facebook</Link>
              </li>
              <li>
                <Link to='https://plus.google.com/102372703586362573921/posts'>GooglePlus</Link>
              </li>
            </ul>
          </li>
          <li>Прочее:
            <ul>
              <li>
                <Link to='https://github.com/CrazySquirrel'>GitHub</Link>
              </li>
              <li>
                <Link to='https://www.youtube.com/channel/UC4CFtjun6VXusZmBnApn-bQ'>YouTube</Link>
              </li>
            </ul>
          </li>
        </ul>
      </App>
  );
}
