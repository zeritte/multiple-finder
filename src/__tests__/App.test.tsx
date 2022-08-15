import { fireEvent, render, screen } from "@testing-library/react";
import App, { MAX_NUMBER } from "../App";

describe("Test App component", () => {
  test("SHOULD render the numbers from 1 to 144", () => {
    render(<App />);
    for (let i = 1; i <= MAX_NUMBER; i++) {
      const buttonElement = screen.getByText(i);
      expect(buttonElement).toBeInTheDocument();
    }
  });

  test("SHOULD render the main tag", () => {
    render(<App />);
    const mainTag = screen.getByTestId("main");
    expect(mainTag).toBeInTheDocument();
  });

  test("SHOULD render the container tag", () => {
    render(<App />);
    const containerTag = screen.getByTestId("container");
    expect(containerTag).toBeInTheDocument();
  });

  test("SHOULD add the css to a button on click", () => {
    render(<App />);
    const number = 3;
    const numberButton = screen.getByTestId(`select-number-${number}`);
    expect(numberButton).toBeInTheDocument();
    fireEvent.click(numberButton);
    expect(numberButton).toHaveClass("highlight-selected");
  });

  test("SHOULD add the css to the multiples on click", () => {
    render(<App />);
    const number = 10;
    const numberButton = screen.getByTestId(`select-number-${number}`);
    expect(numberButton).toBeInTheDocument();
    fireEvent.click(numberButton);
    expect(numberButton).toHaveClass("highlight-selected");

    for (let i = 20; i <= MAX_NUMBER; i += 10) {
      const multipleButton = screen.getByTestId(`select-number-${i}`);
      expect(multipleButton).toHaveClass("highlight-multiple");
    }
  });
});
