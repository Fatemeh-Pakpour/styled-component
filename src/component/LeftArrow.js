import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Consumer } from "./Context";

const LeftArrow = ({className}) => {
  return (
    <Consumer>
      {context => (
        <div  className = {className} onClick={context.actions.goToPrevSlide}>
          <FontAwesomeIcon icon={faBackward} />
        </div>
      )}
    </Consumer>
  );
};

const StyleLeftArrow = styled(LeftArrow)`
   font-size:2rem;
   color:black;
   float:left;
   margin-top: 8rem;
 
`

export default StyleLeftArrow ;
