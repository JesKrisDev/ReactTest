import React, { Suspense } from 'react';
import Alert from 'react-bootstrap/Alert';
//import UncontrolledExample from './Carousel';
const UncontrolledExample = React.lazy(() => import('./Carousel'));
function Home() {
  return (
      <div>
      <Suspense fallback={<div>Loading...</div>}>
      <>
      <br></br>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
      </Suspense>
    </div>
  );
}

export default Home;
