import React, { useEffect, useState } from "react";
import "./Operator.css";
import io from "socket.io-client";
import axios from "axios";

const socket = io.connect("http://localhost:3001");

function Operator() {
  //GetDataTable
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    getQueue();
  }, []);

  const getQueue = async () => {
    const response = await axios.get("http://localhost:5000/queue");
    setQueue(response.data);
    console.log(response.data);
  };

  //Room State
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    setMessage("Coming Soon....");
    setRoom(3);
  }, []);
  return (
    <div className="card parent">
      <div
        className="col-md-12 fixed-center"
        style={{ backgroundColor: "transparant" }}
      >
        <div className="row">
          <div className="col-md-12">
            <label style={{ color: "black" }}>
              <h3>OPERATOR 1</h3>
            </label>
            <form>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nomor Antrian</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Nomor Telfon</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {queue.map((queue, index) => (
                    <tr key={queue.id_queue}>
                      <th scope="row">{index + 1}</th>
                      <td>{queue.name}</td>
                      <td>{queue.phone_number}</td>
                      <td>
                        <button
                          type="submit"
                          onClick={sendMessage}
                          className="btn btn-primary"
                        >
                          Panggil Antrian
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operator;
