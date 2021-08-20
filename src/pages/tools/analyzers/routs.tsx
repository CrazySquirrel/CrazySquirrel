import {routs as RoutsComplete} from './complete/routs';

import {default as PageA, metadata as MetadataA} from './index';

export const routs = {
  '/tools/analyzers/': {
    page: PageA,
    metadata: MetadataA,
  },
  ...RoutsComplete,
};
