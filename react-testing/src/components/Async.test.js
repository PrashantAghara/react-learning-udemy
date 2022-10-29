import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders post if request succeeds", async () => {
    //Overide Fetch/Async Function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "title" }],
    });

    render(<Async />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
