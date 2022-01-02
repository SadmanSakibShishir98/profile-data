import "./App.css";
import data from "./data/data.json";
import Profile from "./components/Profile/Profile";
import { useEffect, useState } from "react";
import Summery from "./components/Profile/Summery/Summery";

function App() {
  const [profile, setProfile] = useState([]);
  const [salary, setSalary] = useState([]);
  useEffect(() => {
    setProfile(data);
  }, []);

  const handleAddProfile = (profile) => {
    const newSalary = [...salary, profile.salary];
    setSalary(newSalary);
  };
  return (
    <div className="AppInfo">
      <div className="profileSection">
        {profile.map((prof) => (
          <Profile
            profile={prof}
            key={prof.id}
            handleAddProfile={handleAddProfile}
          ></Profile>
        ))}
      </div>
      <div>
        <Summery salarySet={salary}></Summery>
      </div>
    </div>
  );
}

export default App;
