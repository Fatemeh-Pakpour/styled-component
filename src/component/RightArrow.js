import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { Consumer } from "./Context";

const RightArrow = ({className}) => {
  return (
    <Consumer>
      {context => (
        <div  className ={className} onClick={context.actions.goToNextSlide}>
          <FontAwesomeIcon icon={faForward} />
        </div>
      )}
    </Consumer>
  );
};

const StyleRightArrow = styled(RightArrow)`
   font-size:2rem;
   color:black;
   float:right;
  position:absolute;
  left:90%;
  top: 40%;

`

export default StyleRightArrow;
