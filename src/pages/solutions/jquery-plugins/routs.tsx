import {routs as RoutsC} from './cstiles/routs';
import {routs as RoutsC2} from './csshare/routs';
import {routs as RoutsT} from './texturedtext/routs';

import {default as PageJ, metadata as MetadataJ} from './index';

export const routs = {
  '/solutions/jquery-plugins/': {
    page: PageJ,
    metadata: MetadataJ,
  },
  ...RoutsC,
  ...RoutsC2,
  ...RoutsT,
};
