import * as React from 'react';

import App from 'components/App';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: '404 Страница не найдена',
  title: 'Страница не найдена',
  description: 'Страница не найдена',
  keywords: 'Страница не найдена',
  h1: '404 Страница не найдена',
  author: siastrebov,
  type: MetadataType.NONE,
};

export default function () {
  return (
      <App {...metadata}>
        <img src={require('images/cat.gif')} alt='Cat' style={{
          margin: '0 auto',
          display: 'block',
          maxWidth: '100%',
        }}/>
        {/*TODO add search*/}
      </App>
  );
}
