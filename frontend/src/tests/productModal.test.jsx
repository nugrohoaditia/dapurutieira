import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductModal from "../components/ProductModal.jsx";
import { translations } from "../data/translations.js";

test("product modal shows product details and closes with Escape", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    const product = {
        id: 1,
        name: "Ayam Gule",
        category: "Lauk Ayam",
        price: "Rp 35.000",
        fullDescription: "Ayam gule rumahan.",
        cookingInstruction: "",
        storageInstruction: "",
        productImages: [{
            id: 1,
            url: "/images/product-1.jpg",
            alternativeText: "Ayam Gule"
        }]
    };

    render(
        <ProductModal
            product={product}
            language="id"
            t={translations.id}
            onClose={onClose}
        />
    );

    expect(screen.getByRole("dialog", { name: /Detail produk: Ayam Gule/i })).toBeInTheDocument();
    expect(screen.getByText("Rp 35.000")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
});

test("product modal slideshow displays gallery controls for multiple images", async () => {
    const user = userEvent.setup();
    const product = {
        id: 2,
        name: "Produk Galeri",
        category: "CMS",
        price: "Rp 55.000",
        fullDescription: "Produk dengan galeri.",
        cookingInstruction: "",
        storageInstruction: "",
        productImages: [
            { id: 1, url: "/uploads/one.webp", alternativeText: "Image one" },
            { id: 2, url: "/uploads/two.webp", alternativeText: "Image two" }
        ]
    };

    render(<ProductModal product={product} language="id" t={translations.id} onClose={jest.fn()} />);

    expect(screen.getByRole("button", { name: /Next product image/i })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Next product image/i }));
    expect(screen.getAllByAltText("Image two").length).toBeGreaterThan(0);
});
