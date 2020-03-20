import React from 'react';
import { useSelector } from 'react-redux';
import UpdateStateButton from '../../components/UpdateStateButton/';
import './styles.css';

export default function Home() {
  const sample = useSelector(state => state.sample);

  return (
    <div className="Home">
      <h1>Electron Forge React Boilerplate</h1>

      <p>
        <strong>{sample.foo}</strong>
      </p>

      <UpdateStateButton />

      <p>More info:</p>

      <ul>
        <li>
          <a target="_blank" href="https://www.electronforge.io/">
            Electron Forge
          </a>
        </li>
        <li>
          <a target="_blank" href="https://react-redux.js.org/">
            React Redux
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://reacttraining.com/react-router/web/guides/quick-start"
          >
            React Router
          </a>
        </li>
      </ul>
    </div>
  );
}
