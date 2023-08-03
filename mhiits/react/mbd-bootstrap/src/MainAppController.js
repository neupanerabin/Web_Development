
import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const mainController = () => {
  return (
    <div>
      <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
      </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default mainController