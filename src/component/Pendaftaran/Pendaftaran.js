import React, { Component } from "react";
import "./Pendaftaran.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

class Ticket extends Component {
  render() {
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
              <form>
                <div className="form-group">
                  <label>NAMA</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Masukkan Nama Anda"
                  />
                </div>
                <div className="form-group">
                  <label>NOMOR TELFON</label>
                  <input
                    type="TEXT"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Contoh : 0813XXXXXXX"
                  />
                </div>

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
}

export default Ticket;
