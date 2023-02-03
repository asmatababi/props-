import "./App.css";
import Profile from "./profile/profile";
import image from "./profile/asma.jpg";
function App() {
  const name = "Asma Tababi";
  const bio = "holds a bachelor's degree in economics and management";
  const profession = "Full-Stack Javascript Bootcamp student at GoMyCode";

  const handleName = () => {
    alert(name);
  };

  return (
    <div className="App">
      <Profile
        myName={name}
        aboutMe={bio}
        myProfession={profession}
        handleName={handleName}
      >
        <img src={image} alt="" />
      </Profile>
    </div>
  );
}

export default App;
