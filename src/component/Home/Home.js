import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="card parent">
        {/* Center */}
        <div
          className="col-md-12 fixed-center"
          style={{ backgroundColor: "transparant" }}
        >
          <div className="row">
            <div className="col-md-6">
              <label style={{ color: "black" }}>
                <h3>OPERATOR 1</h3>
              </label>
              <form>
                <div className="form-group">
                  <label>
                    <h3>NOMOR ANTRIAN</h3>
                    <p>
                      <h1>
                        <b>000</b>
                      </h1>
                    </p>
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    <h3>ATAS NAMA</h3>
                    <p>
                      <h1>
                        <b>XXXXXXX</b>
                      </h1>
                    </p>
                  </label>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <label style={{ color: "black" }}>
                <h3>OPERATOR 2</h3>
              </label>
              <form>
                <div className="form-group">
                  <label>
                    <h3>NOMOR ANTRIAN</h3>
                    <p>
                      <h1>
                        <b>000</b>
                      </h1>
                    </p>
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    <h3>ATAS NAMA</h3>
                    <p>
                      <h1>
                        <b>XXXXXXX</b>
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
}

export default Home;
