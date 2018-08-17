import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const Loader = styled.div`
  width: 60px;
  height: 20px;
`;

const InnerLine = styled.div`
  width: 60px;
  height: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  
  :before,
  :after {
    content: '';
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    background: black;
    opacity: 0;
    box-shadow: 1px 1px 4px rgba(0,0,0,.15);
    border-radius: 10px;
    animation: slideleft 3s ease-in-out infinite;
  }

  :nth-of-type(1):before { animation-delay: 0.00s }
  :nth-of-type(1):after  { animation-delay: 0.3s }

  :nth-of-type(2):before { animation-delay: 0.60s }
  :nth-of-type(2):after  { animation-delay: 0.90s }

  :nth-of-type(3):before { animation-delay: 1.20s }
  :nth-of-type(3):after  { animation-delay: 1.50s }

  @keyframes slideleft {
    10% { opacity: 0; transform: scale(0); right: 0 }
    50% { opacity: 1; transform: scale(1) }
    90% { opacity: 0; transform: scale(0); right: 100% }
  }
`;

const Loading = () => (
  <Wrapper>
    <Loader>
      <InnerLine />
      <InnerLine />
      <InnerLine />
    </Loader>
  </Wrapper>
);

export default Loading;
