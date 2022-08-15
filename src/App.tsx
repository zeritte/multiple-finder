import { useEffect, useState } from "react";
import "./App.css";
import NumberButton from "./components/NumberButton";

const MAX_NUMBER = 144;
const NUMBERS_ARRAY = [...Array(MAX_NUMBER + 1).keys()].slice(1);

function App() {
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [multiples, setMultiples] = useState<number[]>([]);

  useEffect(() => {
    if (!selectedNumber) return;
    setMultiples(
      NUMBERS_ARRAY.filter((n) => !(n % selectedNumber) && n > selectedNumber)
    );
  }, [selectedNumber]);

  const onButtonClick = (num: number) => {
    setSelectedNumber(num);
  };

  return (
    <main className="main">
      <div className="container">
        {NUMBERS_ARRAY.map((number) => (
          <NumberButton
            key={number}
            number={number}
            isSelected={number === selectedNumber}
            isInMultiples={multiples.includes(number)}
            onClick={onButtonClick}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
