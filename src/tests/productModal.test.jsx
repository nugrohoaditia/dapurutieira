import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductModal from "../components/ProductModal.jsx";
import { products } from "../data/products.js";
import { translations } from "../data/translations.js";

test("product modal shows product details and closes with Escape", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();

    render(
        <ProductModal
            product={products[0]}
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
