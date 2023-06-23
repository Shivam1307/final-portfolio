import "./../../../styles/global";
import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Notes from "./notes";

export default function MyCalendar() {
  const [selectedData, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="main">
      <div className="timedata">
        <div className="time">{date.toLocaleTimeString()}</div>
        <div className="todaydate">
          {moment(new Date()).format("DD MMMM, YYYY")}
        </div>
      </div>

      <div className="calendar">
        <Calendar
          onChange={(date: any, evet: any) => {
            // donothing
            setSelectedDate(date);
          }}
        />
      </div>
      <div className="">
        <Notes date={selectedData} />
      </div>
    </div>
  );
}
