import qs from 'qs';
import { join } from 'lodash-es';

export class UrlUtil {
  static buildQueryUrl = (urlApi: string, options: any): string => {
    const queries = qs.stringify(options);

    return join([urlApi, queries], '?');
  };
}
