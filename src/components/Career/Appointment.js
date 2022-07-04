import React from "react";
import "../../assets/styles/appointment.css";
import thinking from "../../assets/images/thinking.png";
import { Button } from "@mui/material";
class Appointment extends React.Component {
  render() {
    return (
      <div className="Appointment">
        <div className="Appointment-top">
          <div className="Appointment-left">
            <img src={thinking} />
          </div>
          <div className="Appointment-right">
            <div>
              <p>
                Confused about <br></br>Career Choices
              </p>
            </div>

            {/* <div className="Appointment-left-list">
          <ul>
         <li>One to One Counselling</li>
         <li>Learning Emotional Intelligence</li>
         <li>Improving IQ</li>
         <li>xyz</li>
      </ul>
          </div> */}

            <div className="Appointment-right-button">
              {/* <button>Book an Appointment</button> */}
              <Button variant="contained" style={{ backgroundColor: "#06283D",position:"static" }}>Book an Appointment</Button>
            </div>
          </div>
        </div>

        <div className="Appointment-services">
          <div className="Appointment-services1">
            <div className="think">
              <img src={thinking} />
            </div><div>
            <h1>One-to-one mentoring is the traditional model of mentoring in which a more senior individual is paired with a more junior individual in order to provide the younger person with guidance, support, and encouragement </h1>
          </div></div>
          <div className="Appointment-services2">
            <div className="think">
              <img src={thinking} />
            </div><div>
            <h1>One-to-one mentoring is the traditional model of mentoring in which a more senior individual is paired with a more junior individual in order to provide the younger person with guidance, support, and encouragement </h1>

            </div>
          </div>
          <div className="Appointment-services1">
            <div className="think">
              <img src={thinking} />
            </div>
            <h1>One-to-one mentoring is the traditional model of mentoring in which a more senior individual is paired with a more junior individual in order to provide the younger person with guidance, support, and encouragement </h1>
          </div>
          <div className="Appointment-services2">
            <div className="think">
              <img src={thinking} />
            </div>
            <h1>One-to-one mentoring is the traditional model of mentoring in which a more senior individual is paired with a more junior individual in order to provide the younger person with guidance, support, and encouragement </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;