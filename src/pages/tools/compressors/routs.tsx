import {routs as RoutsCSS} from './css/routs';
import {routs as RoutsJS} from './js/routs';
import {routs as RoutsPictures} from './pictures/routs';

import {default as PageC, metadata as MetadataC} from './index';

export const routs = {
  '/tools/compressors/': {
    page: PageC,
    metadata: MetadataC,
  },
  ...RoutsCSS,
  ...RoutsJS,
  ...RoutsPictures,
};
