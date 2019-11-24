import React, { Component } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 300px;
  margin:0 5rem;
`;

class Slide extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <StyledImage src={this.props.src} alt="photos" />
      </div>
    );
  }
}
const StyledSlide = styled(Slide)`
  width: 0;
`;

export default StyledSlide;


//  import React from "react";
// import styled from "styled-components";

// const StyledSlide = styled.div`
//     background-image: url(${(props) => props.src})
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: '50% 60%'
// `;

// const Slide = ()=> {
//     return (
//       <StyledSlide></StyledSlide>
//     );
//   }


// export default Slide;
