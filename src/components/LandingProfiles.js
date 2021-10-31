import React from "react";
import "../styles/LandingPage.css";

const LandingProfiles = () => {
  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div
              className="section_heading text-center wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <h3>
                Our Creative <span> Team</span>
              </h3>
              <p>Meet the team members that made this project possible.</p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-3 justify-content-between">
          <div>
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                />
              </div>
              <div className="single_advisor_details_info">
                <h6>Swanand Wagh</h6>
                <p className="designation">Team leader</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt=""
                />
              </div>
              <div className="single_advisor_details_info">
                <h6>Vivek Nathani</h6>
                <p className="designation">Team member</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt=""
                />
              </div>
              <div className="single_advisor_details_info">
                <h6>Amish Singh</h6>
                <p className="designation">Team member</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt=""
                />
              </div>
              <div className="single_advisor_details_info">
                <h6>Shraddha Suryawanshi</h6>
                <p className="designation">Team member</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar8.png"
                  alt=""
                />
              </div>
              <div className="single_advisor_details_info">
                <h6>Paulami Bhattacharya</h6>
                <p className="designation">Team member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingProfiles;
