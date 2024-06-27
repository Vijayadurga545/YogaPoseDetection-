import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About</h1>
      <div className="about-main">
        <p className="about-content">
          This is an realtime AI based Yoga Trainer which detects your pose how
          well you are doing. This Your personal AI-based Yoga Trainer,
          developed over a year as a college project under the mentorship of
          Durgesh Singh, detects and evaluates your poses in real-time. This
          project, designed to be both educational and practical, aims to help
          developers learn and improve their AI skills. It is deployed for
          public use, with the code available on GitHub. This is an open source
          project, The code is available on the GitHub -{" "}
          <a href="https://github.com/pri-yanka3005/YogaPoseDetection  ">
            https://github.com/pri-yanka3005/YogaPoseDetection
          </a>
          The AI first predicts the keypoints of different body parts and then
          uses a classification model to identify yoga poses. If a pose is
          detected with more than 95% accuracy, the system confirms correct
          execution by highlighting the virtual skeleton in green. The model
          leverages TensorFlow's pre-trained MoveNet to predict keypoints and a
          custom neural network to classify poses. The model, initially trained
          in Python, has been converted to TensorFlowJS to support browser
          usage. Feel free to make any additional adjustments to better fit your
          style or preferences
        </p>
        <div className="developer-info">
          <h4>About Developer</h4>
          <p className="about-content">
            I am Priyanka from the Computer Science and Engineering Department
            at Pandit Dwarka Prasad Mishra Indian Institute of Information
            Technology Design and Manufacturing, Jabalpur, Madhya Pradesh,
            India.
          </p>
          <h4>Contact</h4>
          <a href="https://www.instagram.com/_priyanka.603/">
            <p className="about-content">Instagram</p>
          </a>
          <a href="https://Linkedin.com/in/priyanka-chauhan-9ab213307">
            <p className="about-content">Linkedin</p>
          </a>
          <a href="https://github.com/pri-yanka3005">
            <p className="about-content">GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}
