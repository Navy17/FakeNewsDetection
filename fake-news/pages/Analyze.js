import React from "react";
class Analyze extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="input-c">
          <div className="sear">
            <h2>LETS GET INTO THE WORLD OF TRUTHS! 🔦</h2>
            <br />
            <br />
            <textarea
              className="textarea"
              placeholder="Lets get to know the truth behind it..."
            ></textarea>
          </div>
          <br />

          <div className="search">
            <button className="btn-A">Reveal the truth behind it...</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Analyze;
