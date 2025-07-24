import PersonalDetails from "./components/PersonalDetails/PersonalDetails.tsx";
import Education from "./components/Education/Education.tsx";
import Resume from "./components/Resume.tsx";
// import Experience from "./components/Experience/Experience.tsx";
import "./App.css";

function App() {
  return (
    <div>
      <PersonalDetails />
      <Education />
      {/* <Experience /> */}
      <Resume />
    </div>
  );
}

export default App;
