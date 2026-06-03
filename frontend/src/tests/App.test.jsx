import { render, screen } from "@testing-library/react";
import App from "../App.jsx";

beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
});

test("App renders all required sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Lauk Rumahan Beku/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Solusi Makan Harian/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Produk Beku Siap Simpan/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Dari Pilih Menu/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Dipercaya untuk Hari-Hari Sibuk/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Pertanyaan Umum/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Siap Menyiapkan Stok/i })).toBeInTheDocument();
    expect(screen.getAllByText("Dapur Utieira").length).toBeGreaterThan(0);
});
