import React, { Suspense } from 'react';
//import UncontrolledExample from './Carousel';
const UncontrolledExample = React.lazy(() => import('./Carousel'));
function Home() {
  return (
      <div>
      <Suspense fallback={<div>Loading...</div>}>
      <UncontrolledExample />
      </Suspense>
    </div>
  );
}

export default Home;
