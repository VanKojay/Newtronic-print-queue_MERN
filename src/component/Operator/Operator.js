import React, { Component } from "react";
import "./Operator.css";

class Operator extends Component {
  render() {
    return (
      <div className="card parent">
        <div
          className="col-md-12 fixed-center"
          style={{ backgroundColor: "transparant" }}
        >
          <div className="row">
            <div className="col-md-6">
              <label style={{ color: "black" }}>
                <h3>OPERATOR</h3>
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
            <div className="col-md-6">
              <label style={{ color: "black" }}>
                <h3>OPERATOR</h3>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Operator;
