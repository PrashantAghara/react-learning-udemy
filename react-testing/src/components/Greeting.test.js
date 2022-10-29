import { render, screen } from "@testing-library/react";
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
});
