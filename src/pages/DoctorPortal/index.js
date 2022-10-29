import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Display from "./display";
import './doctor.css'
import axios from "axios";

export const DoctorContext = React.createContext()

export default function Doctor(){
    const [flags,setFlags] = useState({
        upflag : "doctor-list active",
        infoflag : "doctor-list",
        schflag : "doctor-list",
        canflag : "doctor-list",
        msgflag : "doctor-list",
        pastflag : "doctor-list",
    })
    const {user,data,setData} = useContext(UserContext)
    const [level,setLevel] = useState("Upcoming_Appointments")
    const [width,setWidth] = useState("300px")
    const [marginLeft,setMarginLeft] = useState("340px")

     function helperfun() {
       axios
         .get(`http://localhost:5000/patients?email=${user.email}`)
         .then((res) => {
           setData(res.data[0]);
         });
     }

    useEffect(() => {
      helperfun();
    },[])

    return (
      <DoctorContext.Provider value={{}}>
        <div className="doctor-navigation" style={{ width: width }}>
          <ul>
            <li className={flags.upflag}>
              <div
                className="doctor-list-div"
                onClick={() => {
                  setFlags({
                    upflag: "doctor-list active",
                    infoflag: "doctor-list",
                    schflag: "doctor-list",
                    canflag: "doctor-list",
                    msgflag: "doctor-list",
                    pastflag: "doctor-list",
                  });
                  setLevel("Upcoming_Appointments");
                }}
              >
                <span className="doctor-icon">
                  <i className="fas fa-angle-double-right fa-fw"></i>
                </span>
                <span className="doctor-title">Upcoming Appointments</span>
              </div>
            </li>

            <li className={flags.infoflag}>
              <div
                className="doctor-list-div"
                onClick={() => {
                  setFlags({
                    upflag: "doctor-list",
                    infoflag: "doctor-list active",
                    schflag: "doctor-list",
                    canflag: "doctor-list",
                    msgflag: "doctor-list",
                    pastflag: "doctor-list",
                  });
                  setLevel("Info");
                }}
              >
                <span className="doctor-icon">
                  <i className="fa-solid fa-info fa-fw"></i>
                </span>
                <span className="doctor-title">Info</span>
              </div>
            </li>

            <li className={flags.schflag}>
              <div
                className="doctor-list-div"
                onClick={() => {
                  setFlags({
                    upflag: "doctor-list",
                    infoflag: "doctor-list",
                    schflag: "doctor-list active",
                    canflag: "doctor-list",
                    msgflag: "doctor-list",
                    pastflag: "doctor-list",
                  });
                  setLevel("Schedule_Manager");
                }}
              >
                <span className="doctor-icon">
                  <i className="fa-solid fa-calendar-check fa-fw"></i>
                </span>
                <span className="doctor-title">Schedule Manager</span>
              </div>
            </li>

            <li className={flags.canflag}>
              <div
                className="doctor-list-div"
                onClick={() => {
                  setFlags({
                    upflag: "doctor-list",
                    infoflag: "doctor-list",
                    schflag: "doctor-list",
                    canflag: "doctor-list active",
                    msgflag: "doctor-list",
                    pastflag: "doctor-list",
                  });
                  setLevel("Cancel_Appointment");
                }}
              >
                <span className="doctor-icon">
                  <i className="fa-solid fa-calendar-check fa-fw"></i>
                </span>
                <span className="doctor-title">Cancel Appointments</span>
              </div>
            </li>

            <li className={flags.msgflag}>
              <div
                className="doctor-list-div"
                onClick={() => {
                  setFlags({
                    upflag: "doctor-list",
                    infoflag: "doctor-list",
                    schflag: "doctor-list",
                    canflag: "doctor-list",
                    msgflag: "doctor-list active",
                    pastflag: "doctor-list",
                  });
                  setLevel("Messages");
                }}
              >
                <span className="doctor-icon">
                  <i className="fas fa-envelope fa-fw"></i>
                </span>
                <span className="doctor-title">Messages</span>
              </div>
            </li>

            <li className={flags.pastflag}>
              <div
                className="doctor-list-div"
                onClick={() => {
                  setFlags({
                    upflag: "doctor-list",
                    infoflag: "doctor-list",
                    schflag: "doctor-list",
                    canflag: "doctor-list",
                    msgflag: "doctor-list",
                    pastflag: "doctor-list active",
                  });
                  setLevel("Past_Appointment");
                }}
              >
                <span className="doctor-icon">
                  <i className="fa-solid fa-clock-rotate-left fa-fw"></i>
                </span>
                <span className="doctor-title">Past Appointments</span>
              </div>
            </li>

            <li>
              <div className="doctor-list-div">
                <span className="doctor-icon">
                  <i className="fas fa-sign-out-alt fa-fw"></i>
                </span>
                <span className="doctor-title">Logout</span>
              </div>
            </li>
          </ul>
        </div>

        <div
          style={{
            transition: "0.5s",
            marginLeft: marginLeft,
            marginTop: "20px",
          }}
        >
          <Display level={level} />
        </div>

        <div
          className="doctor-toggle"
          onClick={() => {
            if (width === "300px") {
              setWidth("74px");
              setMarginLeft("110px");
            } else {
              setWidth("300px");
              setMarginLeft("340px");
            }
          }}
        >
          <i
            className="fa-solid fa-bars"
            style={{
              color: "white",
              position: "fixed",
              top: "35px",
              right: "38px",
              fontSize: "1.2rem",
            }}
          ></i>
        </div>
      </DoctorContext.Provider>
    );
}