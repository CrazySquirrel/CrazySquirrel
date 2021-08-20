import * as React from 'react';

import {block as bem} from 'bem-cn';

import Analytics from 'utils/Analytics';

const block = bem('share');

import './index.scss';

export default class Share extends React.Component<{}, {}> {
  public render() {
    return (
        <div className={block()}>
          <div
              className={block('item', {type: 'vk'})}
              onClick={this.handleClick.bind(this, 'vkontakte')}
          />
          <div
              className={block('item', {type: 'ok'})}
              onClick={this.handleClick.bind(this, 'odnoklassniki')}
          />
          <div
              className={block('item', {type: 'facebook'})}
              onClick={this.handleClick.bind(this, 'facebook')}
          />
          <div
              className={block('item', {type: 'twitter'})}
              onClick={this.handleClick.bind(this, 'twitter')}
          />
          <div
              className={block('item', {type: 'google'})}
              onClick={this.handleClick.bind(this, 'google')}
          />
        </div>
    );
  }

  private handleClick(type: string, e: React.MouseEvent<HTMLDivElement>) {
    let title;
    let description;
    let img;

    Analytics.event({
      category: 'share',
      action: 'share',
      label: type,
    });

    if (e.currentTarget.getAttribute('data-title')) {
      title = e.currentTarget.parentElement.getAttribute('data-title');
    } else if (window.document.querySelector('meta[type=\'og:title\']')) {
      title = window.document.querySelector('meta[type=\'og:title\']').getAttribute('content');
    } else if (window.document.querySelector('.og-title')) {
      title = window.document.querySelector('.og-title').getAttribute('data-title');
    } else {
      title = window.document.querySelector('title').innerText;
    }

    if (e.currentTarget.parentElement.getAttribute('data-description')) {
      description = e.currentTarget.parentElement.getAttribute('data-description');
    } else if (window.document.querySelector('meta[type=\'og:description\']')) {
      description = window.document.querySelector('meta[type=\'og:description\']').getAttribute('content');
    } else if (window.document.querySelector('meta[type=\'description\']')) {
      description = window.document.querySelector('meta[type=\'description\']').getAttribute('content');
    } else if (window.document.querySelector('.og-description')) {
      description = window.document.querySelector('.og-description').getAttribute('data-description');
    } else {
      description = '';
    }

    if (e.currentTarget.parentElement.getAttribute('data-image')) {
      img = e.currentTarget.parentElement.getAttribute('data-image');
    } else if (window.document.querySelector('meta[type=\'og:image\']')) {
      img = window.document.querySelector('meta[type=\'og:image\']').getAttribute('content');
    } else if (window.document.querySelector('.og-image')) {
      img = window.document.querySelector('.og-image').getAttribute('data-image');
    } else if (window.document.querySelector('.logo img')) {
      img = location.protocol + '//' + location.host + window.document.querySelector('link[rel=\'icon\'][sizes=\'192x192\']').getAttribute('href');
    }

    const u = e.currentTarget.parentElement.getAttribute('data-url') || location.href;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';

    let k = '';

    for (let i = 0; i < 5; i++) {
      k += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    let url = '';
    url += 'https://share.pluso.ru/process?';
    url += 'act=share';
    url += '&u=' + encodeURIComponent(u);
    url += '&w=' + screen.width;
    url += '&h=' + screen.height;
    url += '&ref=';
    url += '&uid=1364166423835';
    url += '&k=' + k;
    url += '&type=' + type;
    url += '&t=' + encodeURIComponent(title);
    url += '&s=' + encodeURIComponent(description);
    url += '&img=' + encodeURIComponent(img);

    window.open(url, type, 'toolbar=0,status=0,width=' + Math.min(626, screen.width) + ',height=' + Math.min(436, screen.height) + '');

    e.preventDefault();
  }
}
