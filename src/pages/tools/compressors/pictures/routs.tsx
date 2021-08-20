import {routs as RoutsJPEG} from './jpeg/routs';
import {routs as RoutsPNG} from './png/routs';
import {routs as RoutsGIF} from './gif/routs';
import {routs as RoutsSVG} from './svg/routs';

import {default as PageP, metadata as MetadataP} from './index';

export const routs = {
  '/tools/compressors/pictures/': {
    page: PageP,
    metadata: MetadataP,
  },
  ...RoutsJPEG,
  ...RoutsPNG,
  ...RoutsGIF,
  ...RoutsSVG,
};
