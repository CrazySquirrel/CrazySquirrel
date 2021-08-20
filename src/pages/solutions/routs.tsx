import {routs as RoutsJQueryPlugins} from './jquery-plugins/routs';
import {routs as RoutsNPM} from './npm/routs';
import {routs as RoutsGit} from './git/routs';

import {default as PageS, metadata as MetadataS} from './index';

export const routs = {
  '/solutions/': {
    page: PageS,
    metadata: MetadataS,
  },
  ...RoutsJQueryPlugins,
  ...RoutsNPM,
  ...RoutsGit,
};
