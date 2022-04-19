import { useSelector } from "react-redux";
function Analyze() {
  const state = useSelector((state) => state.UserReducer);
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
          <button className="btn-A">
            <a href="">Reveal the truth behind it...</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Analyze;
