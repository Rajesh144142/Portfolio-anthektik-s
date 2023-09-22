import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdPadding, MdSchool } from "react-icons/md";
const Experience = () => {
  const textShadowStyle = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };
  return (
    <div className="m-auto w-[98%] ">
            <style>
            {`
          /* Remove the scrollbar */
          ::-webkit-scrollbar {
            width: 0;
            height: 0;
            background-color: transparent;
          }
        `}
          </style>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            background: "linear-gradient(to right, #3e497a, #e90052)",
            color: "#fff",
          }}
          icon={<MdSchool />}
          date="2017 - 2018"
        >
          <h3
            className="vertical-timeline-element-title"
            style={textShadowStyle}
          >
            Bongaon High School,Bongaon, North 24 Parganas.
          </h3>
          <p style={textShadowStyle}>Madhyamik Exam </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            background: "linear-gradient(to right, #3e497a, #e90052)",
            color: "#fff",
          }}
          icon={<MdSchool />}
        >
          <h3
            style={textShadowStyle}
            className="vertical-timeline-element-title"
          >
            Bongaon High School,Bongaon, North 24 Parganas.
          </h3>

          <h4
            style={textShadowStyle}
            className="vertical-timeline-element-subtitle"
          >
            Higher Secondary
          </h4>

          <p style={textShadowStyle}> Pure Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            background: "linear-gradient(to right, #3e497a, #e90052)",
            color: "#fff",
          }}
          icon={<MdSchool />}
        >
          <h3
            style={textShadowStyle}
            className="vertical-timeline-element-title"
          >
            Government College of Engineering & Textile Technology,
            Berhampore,Murshidabad.
          </h3>

          <h4
            style={textShadowStyle}
            className="vertical-timeline-element-subtitle "
          >
            Btech
          </h4>

          <p style={textShadowStyle}>Computer Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
