import {routs as RoutsMapArea} from './map-area/routs';
import {routs as RoutsSitemap} from './sitemap/routs';
import {routs as RoutsSprite} from './sprite/routs';

import {default as PageG, metadata as MetadataG} from './index';

export const routs = {
  '/tools/generators/': {
    page: PageG,
    metadata: MetadataG,
  },
  ...RoutsMapArea,
  ...RoutsSitemap,
  ...RoutsSprite,
};
