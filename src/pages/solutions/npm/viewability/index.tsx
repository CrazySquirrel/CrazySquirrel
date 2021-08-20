import * as React from 'react';

import App from 'components/App';
import Code from 'components/Code';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'ViewAbility',
  title: 'ViewAbility',
  description: 'ViewAbility',
  keywords: 'ViewAbility',
  h1: 'ViewAbility',
  author: siastrebov,
  type: MetadataType.ARTICLE,
  badges: [
    {
      img: 'https://img.shields.io/npm/v/ViewAbility.svg',
      alt: 'package version',
      width: 133,
      height: 20,
      link: 'https://github.com/CrazySquirrel/ViewAbility',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility/badges/gpa.svg',
      alt: 'maintainability',
      width: 144,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility/badges/coverage.svg',
      alt: 'coverage',
      width: 157,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility/coverage',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility/badges/issue_count.svg',
      alt: 'issues',
      width: 189,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility',
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
        <p>Class to determine the visibility of the block.</p>
        <h2>Build</h2>
        <p>The repository contains pre-compiled files, but if you want to add your files and
          compile,
          then run the following commands in the repository folder.</p>
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
            src='./examples/example-1.example.js'
            data={require('./examples/example-1.example.js')}
        />
        <p>or</p>
        <Code
            src='./examples/example-2.example.ts'
            data={require('./examples/example-2.example.ts')}
        />
        <ul>
          <li>domBannerObject - DOM element</li>
          <li>percentage - How much of the object should be visible (0-1)</li>
          <li>time - The amount of time the object must be visible to called callback.</li>
          <li>callback - A function which will be called after the object is seen.</li>
        </ul>
      </App>
  );
}
