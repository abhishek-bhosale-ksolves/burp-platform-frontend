import Navbar from "./components/Navbar";
import CardsGrid from "./components/CardsGrid";
import "./index.css";

const allPositions = [
  {
    title: "Salesforce Developer",
    experience: "3 years",
    description:
      "We are looking for a skilled Salesforce Developer to join our team and drive the development, customization, and maintenance of our Salesforce platform.",
  },
  {
    title: "React Developer",
    experience: "2 years",
    description: "Join our team to develop amazing React applications.",
  },
  {
    title: "Node.js Developer",
    experience: "2 years",
    description: "We are looking for a Node.js Developer to join our team.",
  },
  {
    title: "Senior Flutter Developer",
    experience: "10 years",
    description:
      "We are looking for a skilled Senior Flutter Developer to join our team and drive the development, customization, and maintenance of our Flutter platform.",
  },
];

function App() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto p-4">
        <CardsGrid allPositions={allPositions} />
      </div>
    </div>
  );
}

export default App;
