import { INT_FIVE, INT_ONE_THOUSAND, INT_ONE } from './constant';

export const retry = (fn, retriesLeft = INT_FIVE, interval = INT_ONE_THOUSAND) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (retriesLeft === INT_ONE) {
            reject(error);

            return;
          }

          retry(fn, retriesLeft - INT_ONE, interval).then(resolve, reject);
        }, interval);
      });
  });
};
