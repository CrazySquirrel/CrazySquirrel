import {routs as RoutsA} from './animationframe/routs';
import {routs as RoutsC} from './csdebug/routs';
import {routs as RoutsC2} from './cslogger/routs';
import {routs as RoutsE} from './evercookie/routs';
import {routs as RoutsU} from './userid/routs';
import {routs as RoutsU2} from './utils/routs';
import {routs as RoutsV} from './viewability/routs';

import {default as PageN, metadata as MetadataN} from './index';

export const routs = {
  '/solutions/npm/': {
    page: PageN,
    metadata: MetadataN,
  },
  ...RoutsA,
  ...RoutsC,
  ...RoutsC2,
  ...RoutsE,
  ...RoutsU,
  ...RoutsU2,
  ...RoutsV,
};
