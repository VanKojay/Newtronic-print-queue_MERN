import React, { useEffect, useState } from "react";
import "./Home.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001", { reconnect: true });

function Home() {
  // Messages States

  const [room, setRoom] = useState("");
  const [messageReceived, setMessageReceived] = useState({
    id: "0",
    name: "0",
  });

  useEffect(() => {
    console.log("connect :" + socket.connected);
    setRoom(3);
    socket.emit("join_room", room);
    socket.on("receive_message", (data) => {
      console.log("receive message :" + data);
      setMessageReceived(() => ({
        ...data.message,
      }));
    });
  }, [room]);

  return (
    <div className="parent">
      <div
        className="col-md-12 fixed-center"
        style={{ backgroundColor: "transparant" }}
      >
        <div className="row">
          <div className="card col-md-6">
            <label style={{ color: "black" }}>
              <h3>OPERATOR 1</h3>
            </label>
            <form>
              <div className="form-group">
                <label>
                  <h3>NOMOR ANTRIAN</h3>
                  <p>
                    <h1>
                      <b>{messageReceived.id}</b>
                    </h1>
                  </p>
                </label>
              </div>

              <div className="form-group">
                <label>
                  <h3>ATAS NAMA</h3>
                  <p>
                    <h1>
                      <b>{messageReceived.name}</b>
                    </h1>
                  </p>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
