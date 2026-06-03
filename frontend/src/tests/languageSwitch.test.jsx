import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";
import { LANGUAGE_KEY } from "../hooks/useLanguage.js";

beforeEach(() => {
    localStorage.clear();
});

test("default language is Indonesian and can switch to English and back", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole("heading", { name: /Lauk Rumahan Beku/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "en" }));
    expect(screen.getByRole("heading", { name: /Practical, Delicious/i })).toBeInTheDocument();
    expect(localStorage.getItem(LANGUAGE_KEY)).toBe("en");

    await user.click(screen.getByRole("button", { name: "id" }));
    expect(screen.getByRole("heading", { name: /Lauk Rumahan Beku/i })).toBeInTheDocument();
    expect(localStorage.getItem(LANGUAGE_KEY)).toBe("id");
});

test("saved language is restored", () => {
    localStorage.setItem(LANGUAGE_KEY, "en");
    render(<App />);

    expect(screen.getByRole("heading", { name: /Practical, Delicious/i })).toBeInTheDocument();
});
