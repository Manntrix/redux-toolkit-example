import { render, screen } from "@testing-library/react";
import ThankYouPage from "./ThankYouPage";

test("renders learn react link", () => {
  render(<ThankYouPage />);
  const text = screen.getByText(/thanks for your query/i);
  expect(text).toBeInTheDocument();
});
