import { SET_FOO } from './types';

export const setFoo = foo => async dispatch => {
  dispatch({
    type: SET_FOO,
    foo
  });
};
