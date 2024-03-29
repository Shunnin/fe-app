import { trimStart, isUndefined } from 'lodash-es';

import { IFunction } from '../../utility';

const DELIMITER = '/';
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

interface IAsyncActionType {
  REQUEST: string;
  SUCCESS: string;
  ERROR: string;
}

interface IAsyncActionCreator {
  request: IFunction;
  success: IFunction;
  error: IFunction;
}

export const createActionType = (type: string, module = '') => {
  return trimStart(`${module}${DELIMITER}${type}`, DELIMITER);
};

export const createAsyncActionType = (type: string, module = ''): IAsyncActionType => {
  return [REQUEST, SUCCESS, ERROR].reduce(
    (acc, asyncType) => {
      const actionType = `${type}_${asyncType}`;

      return Object.assign(acc, {
        [asyncType]: createActionType(actionType, module),
      });
    },
    {
      REQUEST: '',
      SUCCESS: '',
      ERROR: '',
    },
  );
};

export const createActionCreator = (type: string, ...argNames: string[]) => {
  return (...args) => {
    const action = { type };

    argNames.forEach((arg, index) => {
      if (!isUndefined(args[index])) {
        action[argNames[index]] = args[index];
      }
    });

    return action;
  };
};

export const createAsyncActionCreator = (asyncActionType: IAsyncActionType): IAsyncActionCreator => ({
  request: createActionCreator(asyncActionType.REQUEST, 'payload'),
  success: createActionCreator(asyncActionType.SUCCESS, 'response', 'payload'),
  error: createActionCreator(asyncActionType.ERROR, 'error', 'payload'),
});
