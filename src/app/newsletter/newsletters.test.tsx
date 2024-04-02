import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

test("loads and displays Newsletters", async () => {
  // ARRANGE
  render(<Page />);

  // ACT
  const headerTitle = await screen.findByText("newsletters");

  // ASSERT
  expect(screen).toMatchSnapshot();
  expect(headerTitle).toBeDefined();
});
