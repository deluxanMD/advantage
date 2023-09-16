import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("should contains a wrapper", () => {
    render(<App />);
    const wrapper = screen.getByTestId("App.Container");
    expect(wrapper).toBeInTheDocument();
  });
});
