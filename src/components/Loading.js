import React from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
const Loading = () => {
  return (
    <div style={{height: '100vh', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ClipLoader size={150} />
    </div>
  );
};

export default Loading;
