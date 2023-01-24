import React, { useEffect, useState } from "react";
import "./Pendaftaran.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Pendaftaran() {
  //get data
  const [queue, setQueue] = useState([]);
  useEffect(() => {
    getQueue();
  }, []);
  const getQueue = async () => {
    const response = await axios.get("http://localhost:5000/queue");
    setQueue(response.data);
    console.log(response.data);
  };
  console.log("ini data " + queue);

  //set data
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const saveQueue = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/queue", {
        name,
        phone_number,
      });
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="card parent">
      {/* Center */}
      <div
        className="col-md-12 fixed-center"
        style={{ backgroundColor: "transparant" }}
      >
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <label style={{ color: "black" }}>
              <h3>AMBIL ANTRIAN TIKET</h3>
            </label>
            <form onSubmit={saveQueue}>
              <div className="form-group">
                <label>NAMA</label>
                <input
                  type="text"
                  className="form-control parent"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Nama Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>NOMOR TELFON</label>
                <input
                  type="TEXT"
                  className="form-control parent"
                  id="exampleInputPassword1"
                  placeholder="Contoh : 0813XXXXXXX"
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>NOMOR ANTRIAN</label>
                <input
                  type="TEXT"
                  className="form-control parent"
                  id="exampleInputPassword1"
                  placeholder="001"
                  readOnly
                />
              </div>

              {/* <div className="form-group">
                <label>NOMOR ANTRIAN</label>
                <input
                  type="TEXT"
                  className="form-control parent"
                  id="exampleInputPassword1"
                  placeholder="coba"
                  readOnly
                />
              </div> */}

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Pendaftaran;
