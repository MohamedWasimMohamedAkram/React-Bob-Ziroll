import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import travelData from "../data.js";

function App() {
  const journalData = travelData.map((location) => {
    return <Entry key={location.id} entry={location} />;
  });
  return (
    <>
      <Header />
      {journalData}
    </>
  );
}

export default App;
