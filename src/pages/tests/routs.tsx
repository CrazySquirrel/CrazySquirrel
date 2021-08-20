import {routs as RoutsRubleSign} from './ruble-sign/routs';

import {default as PageT, metadata as MetadataT} from './index';

export const routs = {
  '/tests/': {
    page: PageT,
    metadata: MetadataT,
  },
  ...RoutsRubleSign,
};
