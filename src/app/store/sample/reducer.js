import { SET_FOO } from './types';
import defaultState from './state';

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_FOO:
      return {
        ...state,
        foo: action.foo
      };

    default:
      return state;
  }
};
