import logo from "./logo.svg";
import "./App.css";
import data from "./data/data.json";
import Profile from "./components/Profile/Profile";
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    setProfile(data);
  });
  return (
    <div className="App">
      {profile.map((prof) => (
        <Profile profile={prof} key={prof.id}></Profile>
      ))}
    </div>
  );
}

export default App;
