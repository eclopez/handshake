import Index from "../../pages/Index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Index", () => {
  it("renders a heading", () => {
    render(<Index />);
    expect(screen.getByText("Hello world.")).toBeInTheDocument();
  });
});
