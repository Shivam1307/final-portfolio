import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface DashboardContentProps {}

const DashboardContent: FunctionComponent<DashboardContentProps> = () => {
  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div className="content fs-6 d-flex flex-column-fluid" id="kt_content">
        <Container fluid>
          <div className="row g-0 g-xl-5 g-xxl-8">
            <div className="col-xl-4">
              <div className="card card-stretch mb-5 mb-xxl-8">
                <div className="card-body pb-0 ">
                  <div className="d-flex flex-column h-100">
                    <h3 className="text-dark text-center fs-1 fw-bolder pt-15 lh-lg">
                      Kickstart
                      <br />
                      Mobile Application
                    </h3>

                    <div className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card card-stretch mb-5 mb-xxl-8">
                <div className="card-body pt-2 pb-0 mt-n3">
                  <div className="d-flex flex-column h-100">
                    <h3 className="text-dark text-center fs-1 fw-bolder pt-15 lh-lg">
                      Kickstart
                      <br />
                      Mobile Application
                    </h3>
                    <div className="text-center pt-7">
                      <a className="btn btn-primary fw-bolder fs-6 px-7 py-3">
                        Create App
                      </a>
                    </div>
                    <div className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Row className="">
            <Col>test</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DashboardContent;
