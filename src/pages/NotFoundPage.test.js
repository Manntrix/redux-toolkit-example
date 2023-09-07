import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

test("renders learn react link", () => {
  render(<NotFoundPage />);
  const text = screen.getByText(/NotFoundPage/i);
  expect(text).toBeInTheDocument();
});
