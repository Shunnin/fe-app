import { createActionType, createAsyncActionType, createActionCreator, createAsyncActionCreator } from '../index';

describe('createActionType()', () => {
  it('returns type with only pass the type value', () => {
    const ACTION_TYPE = createActionType('ACTION_TYPE');

    expect(ACTION_TYPE).toEqual('ACTION_TYPE');
  });

  it('returns module/type with pass type and module', () => {
    const ACTION_TYPE = createActionType('ACTION_TYPE', 'MODULE');

    expect(ACTION_TYPE).toEqual('MODULE/ACTION_TYPE');
  });
});

describe('createAsyncActionType()', () => {
  it('returns type with only pass the type value', () => {
    const expectedActionType = {
      REQUEST: 'ACTION_TYPE_REQUEST',
      SUCCESS: 'ACTION_TYPE_SUCCESS',
      ERROR: 'ACTION_TYPE_ERROR',
    };

    const ACTION_TYPE = createAsyncActionType('ACTION_TYPE');

    expect(ACTION_TYPE).toEqual(expectedActionType);
  });

  it('returns module/type with pass type and module', () => {
    const expectedActionType = {
      REQUEST: 'MODULE/ACTION_TYPE_REQUEST',
      SUCCESS: 'MODULE/ACTION_TYPE_SUCCESS',
      ERROR: 'MODULE/ACTION_TYPE_ERROR',
    };

    const ACTION_TYPE = createAsyncActionType('ACTION_TYPE', 'MODULE');

    expect(ACTION_TYPE).toEqual(expectedActionType);
  });
});

describe('createActionCreator()', () => {
  it('returns only type when provide the type value', () => {
    const expectedAction = {
      type: 'ACTION_TYPE',
    };
    const ACTION_TYPE = createActionType('ACTION_TYPE');

    const action = createActionCreator(ACTION_TYPE);

    expect(action()).toEqual(expectedAction);
  });

  it('returns type when provide the type value', () => {
    const expectedAction = {
      type: 'ACTION_TYPE',
    };
    const ACTION_TYPE = createActionType('ACTION_TYPE');

    const action = createActionCreator(ACTION_TYPE, 'payload');

    expect(action()).toEqual(expectedAction);
  });

  it('returns type and payload when provide the type value', () => {
    const expectedAction = {
      type: 'ACTION_TYPE',
      payload: 'dummyPayload',
    };
    const ACTION_TYPE = createActionType('ACTION_TYPE');

    const action = createActionCreator(ACTION_TYPE, 'payload');

    expect(action(expectedAction.payload)).toEqual(expectedAction);
  });
});

describe('createAsyncActionCreator()', () => {
  it('returns 3 actions', () => {
    const expectedAction = {
      error: 'ACTION_TYPE',
    };
    const ACTION_TYPE = createActionType('ACTION_TYPE');

    const action = createAsyncActionCreator(ACTION_TYPE);

    expect(action).toHaveProperty('request');
    expect(action.error).toBeInstanceOf(Function);
    expect(action).toHaveProperty('success');
    expect(action.success).toBeInstanceOf(Function);
    expect(action).toHaveProperty('error');
    expect(action.error).toBeInstanceOf(Function);
  });
});
