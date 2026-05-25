import { render, screen } from "@testing-library/react";
import App from "../App.jsx";

beforeEach(() => {
    localStorage.clear();
});

test("contact section shows WhatsApp-only ordering CTA", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Siap Menyiapkan Stok/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Pesan Lewat WhatsApp/i })).toBeInTheDocument();

    const whatsappLink = screen.getByRole("link", { name: /Pesan via WhatsApp: 0812-8182-2881/i });
    expect(whatsappLink).toHaveAttribute("href", "https://wa.me/6281281822881");
    expect(screen.queryByRole("button", { name: /Kirim Pesan/i })).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Nama")).not.toBeInTheDocument();
});
