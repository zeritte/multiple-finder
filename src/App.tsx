import "./App.css";
import NumberButton from "./components/NumberButton";

const MAX_NUMBER = 144;
const NUMBERS_ARRAY = [...Array(MAX_NUMBER + 1).keys()].slice(1);

function App() {
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [multiples, setMultiples] = useState<number[]>([]);
  return (
    <main className="main">
      <div className="container">
      </div>
    </main>
  );
}

export default App;
