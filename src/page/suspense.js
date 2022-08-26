import React from 'react';

const OtherComponent = React.lazy(() => import('../components/suspense/lazyConponent'));

function MyComponent (params) {
  return (
    <div>
      <React.Suspense fallback={<div>Loading</div>}>
        <OtherComponent />
      </React.Suspense>
    </div>
  )
}
export default MyComponent