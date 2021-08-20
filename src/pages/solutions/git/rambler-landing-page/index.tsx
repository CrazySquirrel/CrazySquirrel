import * as React from 'react';

import App from 'components/App';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Rambler-Landing-Page',
  title: 'Rambler-Landing-Page',
  description: 'Rambler-Landing-Page',
  keywords: 'Rambler-Landing-Page',
  h1: 'Rambler-Landing-Page',
  author: siastrebov,
  type: MetadataType.ARTICLE,
  badges: [
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page/badges/gpa.svg',
      alt: 'maintainability',
      width: 144,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page/badges/coverage.svg',
      alt: 'coverage',
      width: 157,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page/coverage',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page/badges/issue_count.svg',
      alt: 'issues',
      width: 189,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page',
    },
    {
      img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
      alt: 'donate',
      width: 68,
      height: 20,
      link: 'https://money.yandex.ru/to/41001951616035',
    },
  ],
};

export default function () {
  return (
      <App {...metadata}>
        <p>The repository for <Link to='/jobs/javascript-developer/'>Rambler Landing Page</Link></p>
        <p>For work project should contain pm2 settings
          file <strong>server.config.json</strong> with env variables:</p>
        <ul>
          <li>STATIC_FOLDER</li>
          <li>CV_FOLDER</li>
          <li>SENTRY_JS</li>
          <li>SENTRY_NODE</li>
          <li>EMAIL_HOST</li>
          <li>EMAIL_PORT</li>
          <li>EMAIL_LOGIN</li>
          <li>EMAIL_PASSWORD</li>
          <li>EMAIL_FROM</li>
          <li>EMAIL_TO</li>
        </ul>
      </App>
  );
}
