import { Link } from "react-router-dom";
import { authLogOut } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const auth = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button style={auth ? { background: "green" } : { background: "red" }}>
          {auth ? "O'tdi" : "Register"}
        </button>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/"}>Home</Link>
        <button onClick={() => dispatch(authLogOut())}>Access</button>
        <br />
        <br />
        <br />
      </div>
      <div>Dashboard</div>
    </div>
  );
}

export default Dashboard;
