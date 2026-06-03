import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

beforeEach(() => {
    localStorage.clear();
});

test("navigation links render with correct href targets", () => {
    render(<App />);

    expect(screen.getAllByRole("link", { name: "Beranda" })[0]).toHaveAttribute("href", "#home");
    expect(screen.getAllByRole("link", { name: "Produk" })[0]).toHaveAttribute("href", "#products");
    expect(screen.getAllByRole("link", { name: "Kontak" })[0]).toHaveAttribute("href", "#contact");
});

test("mobile menu opens and closes", async () => {
    const user = userEvent.setup();
    render(<App />);

    const menuButton = screen.getByRole("button", { name: /Buka menu navigasi/i });
    await user.click(menuButton);
    const mobileNavigation = screen.getByRole("navigation", { name: /Mobile navigation/i });
    expect(mobileNavigation).toBeInTheDocument();

    await user.click(within(mobileNavigation).getByRole("link", { name: "Produk" }));
    expect(screen.queryByRole("navigation", { name: /Mobile navigation/i })).not.toBeInTheDocument();
});
