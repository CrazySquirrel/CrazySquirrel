import {routs as RoutsArticles} from './articles/routs';
import {routs as RoutsSolutions} from './solutions/routs';
import {routs as RoutsTests} from './tests/routs';
import {routs as RoutsTools} from './tools/routs';
import {routs as RoutsContacts} from './contacts/routs';
import {routs as RoutsBooks} from './books/routs';
import {routs as RoutsSearch} from './search/routs';

import {default as PageI, metadata as MetadataI} from './index';
import {default as Page404, metadata as Metadata404} from './404';

export default {
  '/': {
    page: PageI,
    metadata: MetadataI,
  },
  ...RoutsArticles,
  ...RoutsSolutions,
  ...RoutsTests,
  ...RoutsTools,
  ...RoutsBooks,
  ...RoutsContacts,
  ...RoutsSearch,
  '*': {
    page: Page404,
    metadata: Metadata404,
  },
};
