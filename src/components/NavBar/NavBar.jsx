import skillstitch from "../../assets/Skillstitch.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="logo">
        <img src={skillstitch} alt="logo" height="70px" />
      </div>
      <div className="navContainer">
        <p onClick={() => navigate("/")}>Home</p>

        <p onClick={() => navigate("/resume-templates")}>Create Resume</p>

        <p onClick={() => navigate("/form")}>Download Resume</p>
      </div>
    </div>
  );
};

export default NavBar;
