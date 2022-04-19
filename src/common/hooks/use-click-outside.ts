import { useEffect } from 'react';

import { IFunction } from '../utility';

export const useClickOutside = (element: any, callback: IFunction) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (element.current && !element.current.contains(event.target as any)) {
        // eslint-disable-next-line callback-return
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};
