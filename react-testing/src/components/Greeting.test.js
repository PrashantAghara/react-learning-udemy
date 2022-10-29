import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Components", () => {
  test("renders Hello World as test", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //Assert
    const element = screen.getByText("Hello World!", { exact: true });
    expect(element).toBeInTheDocument();
  });

  test("renders prashant if button not clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //Assert
    const element = screen.getByText("Prashant");
    expect(element).toBeInTheDocument();
  });
  test("renders prashant aghara if button clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const element = screen.getByText("Prashant Aghara");
    expect(element).toBeInTheDocument();
  });
  test("does not renders Prashant after button click", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const element = screen.queryByText("Prashant");
    expect(element).not.toBeInTheDocument();
  });
});
