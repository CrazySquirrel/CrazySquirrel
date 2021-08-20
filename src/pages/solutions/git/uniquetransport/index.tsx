import * as React from 'react';

import App from 'components/App';
import Code from 'components/Code';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'UniqueTransport',
  title: 'UniqueTransport',
  description: 'UniqueTransport',
  keywords: 'UniqueTransport',
  h1: 'UniqueTransport',
  author: siastrebov,
  type: MetadataType.ARTICLE,
  badges: [
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport/badges/gpa.svg',
      alt: 'maintainability',
      width: 144,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport/badges/coverage.svg',
      alt: 'coverage',
      width: 157,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport/coverage',
    },
    {
      img: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport/badges/issue_count.svg',
      alt: 'issues',
      width: 189,
      height: 20,
      link: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport',
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
        <p>This plugin is designed to deliver a message from Alice to Bob at any cost.</p>
        <h2>Description</h2>
        <p>The basic idea of the script is that there are two devices (client Alice and the server
          Bob).
          Alice needs to send a message to Bob and get his data. While there is a third party that
          monitors the traffic between Alice and Bob and does some queries.</p>
        <p>Thus to send the message using multiple channels:</p>
        <ul>
          <li><strong>xhr</strong> support http methods GET, POST, PUT, PATH and data transfer
            path, file name, parameters, headers and request body.
          </li>
          <li><strong>fetch</strong> - support http methods GET, POST, PUT, PATH and data transfer
            path, file name, parameters, headers and request body.
          </li>
          <li><strong>iframe</strong> - data communication path, the file name and parameters.
          </li>
          <li><strong>script</strong> - data communication path, the file name and parameters.
          </li>
          <li><strong>image</strong> - data communication path, the file name and parameters.</li>
          <li><strong>style</strong> - with data transfer in the path, the file name and
            parameters.
          </li>
        </ul>
        <p>Channel transmission method and transmission parts data are selected randomly. Data
          requests are performed until.</p>
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
        <p>For details, see /src/ts/.</p>
        <h2>Usage</h2>
        <h3>Client</h3>
        <Code
            src='./examples/example-1.example.ts'
            data={require('./examples/example-1.example.ts')}
        />
        <h3>Server</h3>
        <Code
            src='./examples/example-2.example.ts'
            data={require('./examples/example-2.example.ts')}
        />
        <h2>Settings</h2>
        <h3>Client</h3>
        <p>Main settings</p>
        <Code
            src='./examples/example-3.example.txt'
            data={require('./examples/example-3.example.txt')}
        />
        <p>Emit settings</p>
        <Code
            src='./examples/example-4.example.txt'
            data={require('./examples/example-4.example.txt')}
        />
        <h3>Server</h3>
        <p>Main settings</p>
        <Code
            src='./examples/example-5.example.txt'
            data={require('./examples/example-5.example.txt')}
        />
      </App>
  );
}
