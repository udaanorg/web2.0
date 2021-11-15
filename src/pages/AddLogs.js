import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import "../styles/AddLogs.css";

const AddLogs = () => {
  const [dailyLogs, setDailyLogs] = useState({
    date: "",
    materialsUsed: "",
    plates: "",
  });
  const [monthlyLogs, setMonthlyLogs] = useState({
    date: "",
    materialsBought: "",
  });

  const SubmitDailyLogs = (e) => {
    e.preventDefault();
    console.log(dailyLogs);
  };
  const SubmitMonthlyLogs = (e) => {
    e.preventDefault();
    console.log(monthlyLogs);
  };

  return (
    <>
      <div className="addlogs">
        <HomeNavbar />
        <div className="logs_container">
        <h4>Select the type of Data you wish to add!</h4>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Daily Data</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Monthly Data</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={1}/>
              <Col sm={7}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="">
                      <form className="login_form">
                        <h1 className="login_title ">Daily Logs</h1>
                        <input
                          type="text"
                          name="date"
                          placeholder="DD-MM-YYYY"
                          value={dailyLogs.date}
                          onChange={(data) =>
                            setDailyLogs({
                              ...dailyLogs,
                              date: data.target.value,
                            })
                          }
                        />
                        <input
                          name="material"
                          placeholder="Total material used (kg)"
                          type="number"
                          value={dailyLogs.materialsUsed}
                          onChange={(data) =>
                            setDailyLogs({
                              ...dailyLogs,
                              materialsUsed: data.target.value,
                            })
                          }
                        />
                        <input
                          name="plates"
                          placeholder="No. of plates"
                          type="number"
                          value={dailyLogs.plates}
                          onChange={(data) =>
                            setDailyLogs({
                              ...dailyLogs,
                              plates: data.target.value,
                            })
                          }
                        />
                        <button
                          type="submit"
                          className="login_btn"
                          onClick={SubmitDailyLogs}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="">
                      <form className="login_form">
                        <h1 className="login_title ">Monthly Logs</h1>
                        <input
                          type="text"
                          name="date"
                          placeholder="MM-YYYY"
                          value={monthlyLogs.date}
                          onChange={(data) =>
                            setMonthlyLogs({
                              ...monthlyLogs,
                              date: data.target.value,
                            })
                          }
                        />
                        <input
                          name="material"
                          placeholder="Total materials bought this month (kg)"
                          type="number"
                          value={monthlyLogs.materialsBought}
                          onChange={(data) =>
                            setMonthlyLogs({
                              ...monthlyLogs,
                              materialsBought: data.target.value,
                            })
                          }
                        />
                        <button
                          type="submit"
                          className="login_btn"
                          onClick={SubmitMonthlyLogs}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <Footer page="home" />
      </div>
    </>
  );
};

export default AddLogs;
