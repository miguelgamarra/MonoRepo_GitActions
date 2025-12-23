import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders the main callout", () => {
    render(<Home />);

    expect(
      screen.getByText("To get started, edit the page.tsx file."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Next.js logo" }),
    ).toBeInTheDocument();
  });

  it("exposes primary navigation links", () => {
    render(<Home />);

    expect(
      screen.getByRole("link", { name: /Deploy Now/i }),
    ).toHaveAttribute("href", expect.stringContaining("vercel.com/new"));
    expect(
      screen.getByRole("link", { name: "Documentation" }),
    ).toHaveAttribute("href", expect.stringContaining("nextjs.org/docs"));
  });
});
