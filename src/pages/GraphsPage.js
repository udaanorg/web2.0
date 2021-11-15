import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import "../styles/GraphsPage.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";

const GraphsPage = () => {
  return (
    <>
      <HomeNavbar page="graphs" />
      <div className="charts_container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    Material Bought vs Months
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Material Used vs Days</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Material Left vs Months</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    Material Left vs Kitchen
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <FormControl
                    style={{ position: "absolute", left: "70%", top: "-10px" }}
                  >
                    <Select variant="outlined" className="" value="2021">
                      <MenuItem value="2021">2021</MenuItem>
                    </Select>
                  </FormControl>
                  <img
                    src={process.env.PUBLIC_URL + "/g1.png"}
                    className="graph-img"
                    alt=""
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <FormControl
                    style={{ position: "absolute", left: "59%", top: "-10px" }}
                  >
                    <Select variant="outlined" className="" value="NOVEMBER">
                      <MenuItem value="NOVEMBER">November</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    style={{ position: "absolute", left: "72%", top: "-10px" }}
                  >
                    <Select variant="outlined" className="" value="2021">
                      <MenuItem value="2021">2021</MenuItem>
                    </Select>
                  </FormControl>
                  <img
                    src={process.env.PUBLIC_URL + "/g2.png"}
                    className="graph-img"
                    alt=""
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <FormControl
                    style={{ position: "absolute", left: "70%", top: "-10px" }}
                  >
                    <Select variant="outlined" className="" value="2021">
                      <MenuItem value="2021">2021</MenuItem>
                    </Select>
                  </FormControl>
                  <img
                    src={process.env.PUBLIC_URL + "/g3.png"}
                    className="graph-img"
                    alt=""
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <FormControl
                    style={{ position: "absolute", left: "70%", top: "-10px" }}
                  >
                    <Select variant="outlined" className="" value="2021">
                      <MenuItem value="2021">2021</MenuItem>
                    </Select>
                  </FormControl>
                  <img
                    src={process.env.PUBLIC_URL + "/g4.png"}
                    className="graph-img"
                    alt=""
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <Footer page="homee" />
    </>
  );
};

export default GraphsPage;
