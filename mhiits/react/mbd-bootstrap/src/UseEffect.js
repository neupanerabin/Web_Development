import React, { useState } from "react";

import {
  MDBBtn,
  MDBBtnGroup,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

const UseEffect = () => {
  const [number, setNumber] = useState(1);

  function Increment(v) {
    setNumber(number + v);
  }

  function Decrement(v) {
    setNumber(number - v);
  }

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <h1>{number}</h1>
          <MDBCol size={"md"}>
            <MDBBtn onClick ={() =>Increment(10)}>Increment</MDBBtn>
          </MDBCol>
          <MDBCol size={"md"}>
            <MDBBtn onClick={() =>Decrement(10)}>Decrement</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default UseEffect;
