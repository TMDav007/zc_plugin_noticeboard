import "./App.css";
import Header from "./components/Header/Header";
import NoticeBoard from "./components/NoticeBoard/NoticeBoard";
import { BrowserRouter as Router } from "react-router-dom";
import Centrifuge from "centrifuge";
import { useEffect, useState, createContext } from "react";
import { NoticeBoardContext } from "./components/Context/NoticeBoard";
//import { GetUserInfo } from "@zuri/control";

//Context API

const userInfo = {
  Organizations: [
    "614679ee1a5607b13c00bcb7",
    "614e1daef31a74e068e4d335",
    "614e1eebf31a74e068e4d348",
  ],
  created_at: "2021-09-18T15:16:58.18069734+02:00",
  deactivated: false,
  deactivated_at: "0001-01-01T00:00:00Z",
  email: "papajonatus10@zuri.chat",
  email_verification: null,
  first_name: "mack",
  isverified: true,
  last_name: "and cheese",
  password: "$2a$14$iWsnxY04Ikx/G1lQ/UoO1O2MgX9IzV55wDCr4.yTVRUJd7/6twePq",
  password_resets: null,
  phone: "",
  settings: null,
  time_zone: "",
  updated_at: "0001-01-01T00:00:00Z",
  workspaces: null,
};

function App() {
  const CentrifugoConnection = () => {
    const centrifuge = new Centrifuge(
      "wss://realtime.zuri.chat/connection/websocket",
      { debug: true }
    );

    centrifuge.on("connect", function (ctx) {
      console.log("connected", ctx);
    });

    centrifuge.on("disconnect", function (ctx) {
      console.log("disconnected", ctx);
    });

    centrifuge.connect();

    centrifuge.subscribe("noticeboard", (ctx) => {
      console.log(ctx);
      //option 1 write function to re-render the component that needs re-rendering
      //option 2, perform data fetch again
    });

    centrifuge.on("publish", function (ctx) {
      console.log(ctx);
    });
  };

  //console.log(GetUserInfo())

  useEffect(() => {
    CentrifugoConnection();
  });

  //states
  const [loading, setLoading] = useState(false);
  const [workSpace, setWorkSpace] = useState(userInfo.Organizations[0]);
  const [setOpenModal, openModal] = useState(false)
  const [allUsers, setAllUsers] = useState(null);

  return (
    <Router basename="/noticeboard">
      <div className="App">
        <div className="app__body">
          <span className="app__bodyFlex">
            <NoticeBoardContext.Provider
              value={{ workSpace, setAllUsers,openModal, setOpenModal, setAllUsers,allUsers }}
            >
              <Header />
              <NoticeBoard />
            </NoticeBoardContext.Provider>
          </span>
        </div>
      </div>
    </Router>
  );
}

export default App;
