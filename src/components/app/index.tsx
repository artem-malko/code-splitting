import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Loading } from '../loading';

const Home = React.lazy(() => import('../home'));
const Topics = React.lazy(() => import('../topics'));

export default function Root() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topics" element={<Topics />} />
            </Routes>
          </React.Suspense>
        </div>
      </Router>
    </>
  );
}
