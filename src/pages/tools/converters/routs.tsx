import {routs as RoutsIDN} from './idn/routs';
import {routs as RoutsImageToBase64} from './image-to-base64/routs';
import {routs as RoutsBase64} from './base64/routs';

import {default as PageC, metadata as MetadataC} from './index';

export const routs = {
  '/tools/converters/': {
    page: PageC,
    metadata: MetadataC,
  },
  ...RoutsIDN,
  ...RoutsImageToBase64,
  ...RoutsBase64,
};
