import * as React from 'react';

import App from 'components/App';
import Code from 'components/Code';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'CSShare',
  title: 'CSShare',
  description: 'CSShare',
  keywords: 'CSShare',
  h1: 'CSShare',
  author: siastrebov,
  type: MetadataType.ARTICLE,
  badges: [
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/CSShare/badges/gpa.svg',
      alt: 'maintainability',
      width: 144,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/CSShare',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/CSShare/badges/coverage.svg',
      alt: 'coverage',
      width: 157,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/CSShare/coverage',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/CSShare/badges/issue_count.svg',
      alt: 'issues',
      width: 189,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/CSShare',
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
        <p>jQuery plugin for making share buttons.
          This plugin allows you to create share buttons.
          You can look at other plugins and utilities for web development on the website <Link
              to='/'>CrazySquirrel.ru</Link>.</p>
        <h2>Parameters</h2>
        <h3>Parameters description</h3>
        <ul>
          <li>types - An array with the names of views share.
            May include the following values.
            ['facebook','twitter','vkontakte','odnoklassniki','google','yahoo','misterwong','moimir','friendfeed','yandex','webmoney','vkrugu','juick','pinterest','myspace','googlebookmark','stumbleupon','instapaper','email','springpad','print','linkedin','readability','pinme','surfingbird','webdiscover','memori','livejournal','blogger','liveinternet','evernote','bobrdobr','moemesto','formspring','yazakladki','moikrug','bookmark','digg','tumblr','delicious']
          </li>
        </ul>
        <h3>Setting</h3>
        <p>The options for share buttons can be specified when invoking the plugin or via data -
          attributes.
          When you call peredaetsa structured object as the default parameters.
          If you specify options via data, you can use the following values.</p>
        <ul>
          <li>data-csshare-types - Sets types where value separet by ,</li>
        </ul>
        <h3>Default parameters</h3>
        <Code
            src='./examples/example-1.example.txt'
            data={require('./examples/example-1.example.txt')}
        />
        <h2>Example</h2>
        <h3>HTML</h3>
        <Code
            src='./examples/example-2.example.html'
            data={require('./examples/example-2.example.html')}
        />
        <h3>JavaScript</h3>
        <Code
            src='./examples/example-3.example.ts'
            data={require('./examples/example-3.example.ts')}
        />
      </App>
  );
}
