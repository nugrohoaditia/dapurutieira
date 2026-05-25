import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

beforeEach(() => {
    localStorage.clear();
});

test("renders exactly 9 products with names and prices", () => {
    render(<App />);

    expect(screen.getAllByTestId("product-card")).toHaveLength(9);
    expect(screen.getByRole("heading", { name: "Ayam Gule" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Rendang Paru" })).toBeInTheDocument();
    expect(screen.getAllByText("Rp 35.000").length).toBeGreaterThan(0);
});

test("product detail button opens and closes modal", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole("button", { name: /Lihat Detail/i })[0]);

    expect(screen.getByRole("dialog", { name: /Detail produk: Ayam Gule/i })).toBeInTheDocument();
    expect(screen.getByText(/Instruksi Memasak/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Tutup/i }));
    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});
