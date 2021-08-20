import * as React from 'react';

import {connect} from 'react-redux';
import {block as bem} from 'bem-cn';

import Aside, {Side as AsideSide} from 'components/Aside';
import Main from 'components/Main';
import Footer from 'components/Footer';

import SubMenu from 'components/SubMenu';
import BreadCrumb from 'components/BreadCrumb';
import Badges from 'components/Badges';
import Share from 'components/Share';
import Comments from 'components/Comments';

import {Publisher, Author} from 'components/Metatags';

import {State as StoreTree} from 'store/index';
import {updateLocation} from 'actions/router';
import {updateAside} from 'actions/aside';
import {search} from 'actions/search';
import {Type} from 'models/aside';

import './index.scss';

import {Metadata, MetadataImage, MetadataType} from 'types/index';

declare const webmanifest: any;
declare const locale: string;

interface Props extends Metadata {
  location?: string;
  modified?: string;

  searchText?: string;
  searchResult?: string[];

  update?: (location: string) => any;
  search?: (searchText: string, searchResult: string[]) => any;
}

interface State {
  href: string;
  pathname: string;
}

const block = bem('app');

export class App extends React.Component<Props, State> {
  private readonly images: any[];

  public constructor(props: Props) {
    super(props);

    const siteUrl = webmanifest.start_url.replace(/\/$/ig, '');

    this.images = props.images || webmanifest.icons.map((v: MetadataImage) => {
      const sizes = v.sizes.split('x');

      return {
        src: siteUrl + v.src,
        type: v.type,
        width: sizes[0],
        height: sizes[1],
        alt: v.alt || props.title,
      };
    });

    this.state = {
      href: '',
      pathname: '',
    };
  }

  public componentDidMount() {
    this.props.update(location.pathname);

    this.setState({
      href: location.href,
      pathname: location.pathname,
    });

    // Remove old meta
    [
      'title',
      'meta[last-modified]',
      'meta[name="description"]',
      'meta[name="keywords"]',
      'meta[name="author"]',
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[property="og:type"]',
      'meta[property="og:url"]',
      'meta[property="og:locale"]',
      'meta[property="og:site_name"]',
      'meta[property="og:updated_time"]',
      'meta[property="og:image"]',
      'meta[property="og:image:type"]',
      'meta[property="og:image:width"]',
      'meta[property="og:image:height"]',
      'meta[property="og:image:alt"]',
      'meta[property="og:video"]',
      'meta[property="og:video:type"]',
      'meta[property="og:video:width"]',
      'meta[property="og:video:height"]',
      'meta[property="og:audios"]',
      'meta[property="og:audios:type"]',
    ].forEach((selector) => Array.from(document.head.querySelectorAll(selector)).forEach((node) => document.head.removeChild(node)));

    function addMeta(params: {name?: string, content?: string, property?: string, lastModified?: string}) {
      const meta = document.createElement('meta');
      if (params.name) {
        meta.name = params.name;
      }
      if (params.content) {
        meta.content = params.content;
      }
      if (params.property) {
        meta.setAttribute('property', params.property);
      }
      if (params.lastModified) {
        meta.setAttribute('last-modified', params.lastModified);
      }
      document.head.appendChild(meta);
    }

    if (this.props.title) {
      const title = document.createElement('title');
      title.innerText = this.props.title;
      document.head.appendChild(title);
    }

    if (this.props.description) {
      addMeta({name: 'description', content: this.props.description});
    }

    if (this.props.keywords) {
      addMeta({name: 'keywords', content: this.props.keywords});
    }

    if (this.props.modified) {
      addMeta({lastModified: this.props.modified});
    }

    if (this.props.author) {
      addMeta({name: 'author', content: this.props.author.name});
    }

    if (this.props.title) {
      addMeta({property: 'og:title', content: this.props.title});
    }

    if (this.props.description) {
      addMeta({property: 'og:description', content: this.props.description});
    }

    if (webmanifest.start_url) {
      addMeta({property: 'og:type', content: 'website'});
      addMeta({property: 'og:url', content: webmanifest.start_url + this.props.location});
    }

    if (locale) {
      addMeta({property: 'og:locale', content: locale});
    }

    if (webmanifest.short_name) {
      addMeta({property: 'og:site_name', content: webmanifest.short_name});
    }

    if (this.props.modified) {
      addMeta({property: 'og:updated_time', content: this.props.modified});
    }

    if (this.props.images) {
      for (const {src, type, width, height, alt} of this.props.images) {
        addMeta({property: 'og:image', content: src});
        addMeta({property: 'og:image:type', content: type});
        addMeta({property: 'og:image:width', content: width});
        addMeta({property: 'og:image:height', content: height});
        addMeta({property: 'og:image:alt', content: alt});
      }
    }

    if (this.props.videos) {
      for (const {src, type, width, height} of this.props.videos) {
        addMeta({property: 'og:video', content: src});
        addMeta({property: 'og:video:type', content: type});
        addMeta({property: 'og:video:width', content: width});
        addMeta({property: 'og:video:height', content: height});
      }
    }

    if (this.props.audios) {
      for (const {src, type} of this.props.audios) {
        addMeta({property: 'og:audios', content: src});
        addMeta({property: 'og:audios:type', content: type});
      }
    }
  }

  public render() {
    return (
        <section className={block()}>
          <Main>
            {this.getContent()}
            <Footer>
              <Comments
                  href={this.state.href}
                  pathname={this.state.pathname}
                  title={this.props.title}
              />
              <Share/>
            </Footer>
          </Main>
          <Aside side={AsideSide.LEFT}/>
        </section>
    );
  }

  private getContent() {
    if (this.props.type === MetadataType.ARTICLE) {
      const siteUrl = webmanifest.start_url.replace(/\/$/ig, '');

      return (
          <div itemScope={true} itemType='https://schema.org/Article'>
            <BreadCrumb/>
            <h1 itemProp='name headline about'>{this.props.h1}</h1>
            <SubMenu/>

            {!!this.props.badges && (<Badges badges={this.props.badges}/>)}

            <div itemProp='articleBody' className={block('content')}>
              {this.props.children}
            </div>

            <meta itemProp='datePublished' content={this.props.modified}/>
            <meta itemProp='dateModified' content={this.props.modified}/>
            <meta itemProp='keywords' content={this.props.keywords}/>
            <meta itemProp='description' content={this.props.description}/>
            <meta itemProp='isFamilyFriendly' content='True'/>
            <meta itemProp='inLanguage' content='ru_RU'/>
            <meta itemProp='mainEntityOfPage' content={`${siteUrl}${this.props.location}`}/>

            <Author name='Сергей Ястребов' url='https://plus.google.com/u/0/102372703586362573921'/>
            <Publisher/>

            {this.images && this.images.map((v: MetadataImage) => {
              return (
                  <span key={v.src} itemScope={true} itemProp='image'
                        itemType='https://schema.org/ImageObject'>
                    <link itemProp='contentUrl' href={v.src}/>
                    <link itemProp='url' href={v.src}/>
                    <meta itemProp='width' content={v.width}/>
                    <meta itemProp='height' content={v.height}/>
                  </span>
              );
            })}
          </div>
      );
    } else {
      return (
          <div>
            <BreadCrumb/>
            <h1>{this.props.h1}</h1>
            <SubMenu/>
            <div className={block('content')}>
              {this.props.children}
            </div>
          </div>
      );
    }
  }
}

export default connect(
    (state: StoreTree) => ({
      location: state.router.location,
      modified: state.router.modified,
      searchText: state.search.searchText,
      searchResult: state.search.searchResult,
    }),
    (dispatch) => ({
      update: (location: string) => {
        dispatch(updateLocation(location));
        dispatch(updateAside(Type.NONE));
      },
      search: (searchText: string, searchResult: string[]) => dispatch(search(searchText, searchResult)),
    }),
)(App);

