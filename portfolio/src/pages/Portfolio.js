import React from "react";
import Row from "../components/Row";
import Container from "../components/Container";

function Portfolio() {
  return (
    <div>
      <Container>
        <Row title={"Portfolio"}>
          <div className="row">
            <div className="col-md-4">
              <div className="canisters">
                <h3>Canisters</h3>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
