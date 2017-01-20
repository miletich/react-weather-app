import React from 'react';
import { Link } from 'react-router';

const Examples = () =>
  <div>
    <h1 className="page-title">Examples</h1>
    <p>Here are a few example locations to try out</p>
    <ol style={{listStylePosition: 'inside', paddingLeft: '0'}}>
      <li>
        <Link to='/?location=Belgrade'>Belgrade</Link>
      </li>
      <li>
        <Link to='/?location=Smederevo'>Smederevo</Link>
      </li>
    </ol>
  </div>

export default Examples;
