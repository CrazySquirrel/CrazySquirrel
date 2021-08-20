import * as React from 'react';

import App from 'components/App';
import Code from 'components/Code';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'CSTiles',
  title: 'CSTiles',
  description: 'CSTiles',
  keywords: 'CSTiles',
  h1: 'CSTiles',
  author: siastrebov,
  type: MetadataType.ARTICLE,
  badges: [
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/CSTiles/badges/gpa.svg',
      alt: 'maintainability',
      width: 144,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/CSTiles',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/CSTiles/badges/coverage.svg',
      alt: 'coverage',
      width: 157,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/CSTiles/coverage',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/CSTiles/badges/issue_count.svg',
      alt: 'issues',
      width: 189,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/CSTiles',
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
        <p>The JavaScript tiles component.</p>
        <h2>Build</h2>
        <p>The repository contains pre-compiled files, but if you want to add your files and
          compile, then run the following commands in the repository folder.</p>
        <ul>
          <li>npm install</li>
          <li>npm run production</li>
        </ul>
        <p>or</p>
        <ul>
          <li>npm run development</li>
        </ul>
        <p>The build required NodeJs version 6 or higher.</p>
        <h2>Usage</h2>
        <Code
            src='./examples/example-1.example.txt'
            data={require('./examples/example-1.example.txt')}
        />
        <h3>Parameters</h3>
        <Code
            src='./examples/example-2.example.txt'
            data={require('./examples/example-2.example.txt')}
        />
        <h2>Example</h2>
        <Code
            src='./examples/example-3.example.ts'
            data={require('./examples/example-3.example.ts')}
        />
      </App>
  );
}
