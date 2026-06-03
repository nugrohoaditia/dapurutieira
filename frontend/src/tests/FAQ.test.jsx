import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

beforeEach(() => {
    localStorage.clear();
});

test("FAQ questions open and close answers", async () => {
    const user = userEvent.setup();
    render(<App />);

    const question = screen.getByRole("button", { name: /Berapa lama makanan beku/i });
    await user.click(question);
    expect(screen.getByText(/Umumnya produk dapat disimpan/i)).toBeInTheDocument();

    await user.click(question);
    await waitFor(() => {
        expect(screen.queryByText(/Umumnya produk dapat disimpan/i)).not.toBeInTheDocument();
    });
});
