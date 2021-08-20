import {routs as RoutsW} from './web-development-from-scratch/routs';
import {routs as RoutsC} from './configure-htaccess/routs';
import {routs as RoutsC2} from './correct-sitemap-xml/routs';
import {routs as RoutsC3} from './correct-robots-txt/routs';

import {default as PageA, metadata as MetadataA} from './index';

export const routs = {
  '/articles/': {
    page: PageA,
    metadata: MetadataA,
  },
  ...RoutsW,
  ...RoutsC,
  ...RoutsC2,
  ...RoutsC3,
};
