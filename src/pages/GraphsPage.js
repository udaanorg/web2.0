import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import "../styles/GraphsPage.css";

const GraphsPage = () => {
  return (
    <>
      <HomeNavbar />
      <div className="charts_container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Chart 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Chart 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Chart 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Chart 4</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quidem explicabo inventore placeat exercitationem consectetur
                  perspiciatis totam iusto numquam deleniti accusamus, molestiae
                  magnam vel aut at adipisci dignissimos officia! Iure?
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perferendis dolor cum itaque! Rerum reprehenderit consectetur
                  voluptate exercitationem nam quisquam quas quidem ut doloribus
                  excepturi doloremque, illum repellat, laborum id et.
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas aliquid repudiandae odio fugit delectus, voluptatum
                  quam, beatae cumque optio cupiditate ducimus ad voluptate
                  adipisci, iure vel praesentium non. Suscipit, iste.
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                  aspernatur accusamus officiis. Odio voluptatem ut error
                  laborum, perferendis architecto culpa esse a quisquam quis
                  perspiciatis suscipit magni repudiandae. Animi, cumque.
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <Footer page="home" />
    </>
  );
};

export default GraphsPage;
