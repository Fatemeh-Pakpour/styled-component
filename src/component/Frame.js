import React from "react";
import styled from "styled-components";
import { Consumer } from "./Context";
import Slide from "./Slide";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

let translate = 0;

const Frame = ({ className }) => {
  return (
    <Consumer>
    
      {context => (
        <div className={className}>
          {context.images.map(img => (
            <Slide 
            key={img.id} 
            src={img.src}
            />
          ))}
          <LeftArrow/>
          <RightArrow />
        </div>
      )}
      
      
    </Consumer>
   
    
  );
};

const StyleFrame = styled(Frame)`
  margin: 4rem 15rem;
  display: flex;
  width:500px;
  background :red;
  position:relative;
  transform: translateX(${.translateValue}px);
  transition: 'transform ease-out 0.45s' 
`;

export default StyleFrame;
