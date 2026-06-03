import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";
import { THEME_KEY } from "../hooks/useTheme.js";

beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
});

test("theme toggle changes dark mode and saves preference", async () => {
    const user = userEvent.setup();
    render(<App />);

    const toggle = screen.getByRole("button", { name: /ganti tema/i });
    expect(toggle).toBeInTheDocument();

    await user.click(toggle);

    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem(THEME_KEY)).toBe("dark");
});

test("saved theme is restored", () => {
    localStorage.setItem(THEME_KEY, "dark");
    render(<App />);

    expect(document.documentElement).toHaveClass("dark");
});
