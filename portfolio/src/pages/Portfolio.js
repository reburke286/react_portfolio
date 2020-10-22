import React from "react";
import { MDBContainer, MDBRow} from "mdbreact";

function Portfolio() {
  return (
    <div>
      <MDBContainer>
        <MDBRow title={"Portfolio"}>
          <div className="row">
            <div className="col-md-4">
              <div className="canisters">
                <h3>Canisters</h3>
              </div>
            </div>
          </div>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Portfolio;
