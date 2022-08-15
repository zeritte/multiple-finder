import { fireEvent, render, screen } from "@testing-library/react";
import NumberButton from "../components/NumberButton";

describe("Test NumberButton component", () => {
  it("SHOULD render the given number", () => {
    const number = 1;
    render(
      <NumberButton
        number={number}
        isSelected={false}
        isInMultiples={false}
        onClick={() => {}}
      />
    );
    const numberButton = screen.getByTestId(`select-number-${number}`);
    expect(numberButton).toBeInTheDocument();
    expect(numberButton).toHaveTextContent(number.toString());
  });

  it("SHOULD render the given number when selected", () => {
    const number = 123;
    render(
      <NumberButton
        number={number}
        isSelected={true}
        isInMultiples={false}
        onClick={() => {}}
      />
    );
    const numberButton = screen.getByTestId(`select-number-${number}`);
    expect(numberButton).toBeInTheDocument();
    expect(numberButton).toHaveTextContent(number.toString());
    expect(numberButton).toHaveClass("highlight-selected");
  });

  it("SHOULD render the given number when in multiples", () => {
    const number = 123;
    render(
      <NumberButton
        number={number}
        isSelected={false}
        isInMultiples={true}
        onClick={() => {}}
      />
    );
    const numberButton = screen.getByTestId(`select-number-${number}`);
    expect(numberButton).toBeInTheDocument();
    expect(numberButton).toHaveTextContent(number.toString());
    expect(numberButton).toHaveClass("highlight-multiple");
  });

  it("SHOULD fire the onClick function on button press", () => {
    const number = 123;
    const mockOnClick = jest.fn();
    render(
      <NumberButton
        number={number}
        isSelected={false}
        isInMultiples={false}
        onClick={mockOnClick}
      />
    );
    const numberButton = screen.getByTestId(`select-number-${number}`);
    expect(numberButton).toBeInTheDocument();
    expect(numberButton).toHaveTextContent(number.toString());
    fireEvent.click(numberButton);
    expect(mockOnClick).toHaveBeenCalledWith(number);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
