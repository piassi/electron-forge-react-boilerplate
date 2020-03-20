import React from 'react';
import { useDispatch } from 'react-redux';
import { setFoo } from '../../store/sample/actions';
import './styles.css';

export default function UpdateStateButton() {
  const dispatch = useDispatch();

  function updateState() {
    dispatch(setFoo('State updated successfully!'));
  }

  return (
    <button className="UpdateStateButton" onClick={updateState}>
      Update state
    </button>
  );
}
