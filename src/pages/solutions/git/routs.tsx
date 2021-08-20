import {routs as RoutsR} from './rambler-landing-page/routs';
import {routs as RoutsU} from './uniquetransport/routs';

import {default as PageG, metadata as MetadataG} from './index';

export const routs = {
  '/solutions/git/': {
    page: PageG,
    metadata: MetadataG,
  },
  ...RoutsR,
  ...RoutsU,
};
