import {routs as RoutsAnalyzers} from './analyzers/routs';
import {routs as RoutsCompressors} from './compressors/routs';
import {routs as RoutsConverters} from './converters/routs';
import {routs as RoutsGenerators} from './generators/routs';

import {default as PageT, metadata as MetadataT} from './index';

export const routs = {
  '/tools/': {
    page: PageT,
    metadata: MetadataT,
  },
  ...RoutsAnalyzers,
  ...RoutsCompressors,
  ...RoutsConverters,
  ...RoutsGenerators,
};
