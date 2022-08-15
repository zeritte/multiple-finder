type NumberButtonProps = {
  number: number;
  isSelected: boolean;
  isInMultiples: boolean;
  onClick: (value: number) => void;
};

export default function NumberButton({
  number,
  onClick,
  isSelected,
  isInMultiples,
}: NumberButtonProps) {
  return (
    <button
      onClick={() => onClick(number)}
      className={`number-button
                ${isSelected ? "highlight-selected" : ""}
                ${isInMultiples ? "highlight-multiple" : ""}`}
      key={number}
      data-testid={`select-number-${number}`}
    >
      {number}
    </button>
  );
}
