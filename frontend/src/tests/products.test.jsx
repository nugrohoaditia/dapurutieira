import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

beforeEach(() => {
    localStorage.clear();
});

async function triggerProductsInView() {
    await waitFor(() => {
        expect(window.__getIntersectionObserverCount()).toBeGreaterThan(0);
    });

    act(() => {
        window.__triggerIntersection(true);
    });
}

test("renders exactly 9 products with names and prices", async () => {
    render(<App />);

    expect(window.fetch).not.toHaveBeenCalled();
    await triggerProductsInView();

    await waitFor(() => {
        expect(screen.getAllByTestId("product-card")).toHaveLength(9);
    });

    expect(screen.getByRole("heading", { name: "Ayam Gule" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Rendang Paru" })).toBeInTheDocument();
    expect(screen.getAllByText("Rp 35.000").length).toBeGreaterThan(0);
});

test("product detail button opens and closes modal", async () => {
    const user = userEvent.setup();
    render(<App />);
    await triggerProductsInView();

    await screen.findByRole("heading", { name: "Ayam Gule" });

    await user.click(screen.getAllByRole("button", { name: /Lihat Detail/i })[0]);

    expect(screen.getByRole("dialog", { name: /Detail produk: Ayam Gule/i })).toBeInTheDocument();
    expect(screen.getByText(/Instruksi Memasak/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Tutup/i }));
    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});

test("renders products from mocked Strapi response and does not refetch on language switch", async () => {
    const user = userEvent.setup();
    window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
            data: [{
                id: 100,
                attributes: {
                    name: "Produk CMS",
                    slug: "produk-cms",
                    shortDescription: "Deskripsi dari Strapi",
                    fullDescription: "Deskripsi lengkap dari Strapi",
                    price: "Rp 55.000",
                    category: "CMS",
                    order: 1,
                    isActive: true,
                    coverImage: {
                        data: {
                            id: 9,
                            attributes: {
                                url: "/uploads/cms-cover.webp",
                                alternativeText: "Cover CMS"
                            }
                        }
                    },
                    productImages: {
                        data: [{
                            id: 10,
                            attributes: {
                                url: "/uploads/cms-gallery.webp",
                                alternativeText: "Gallery CMS"
                            }
                        }]
                    }
                }
            }]
        })
    });

    render(<App />);
    expect(window.fetch).not.toHaveBeenCalled();

    await triggerProductsInView();
    expect(await screen.findByRole("heading", { name: "Produk CMS" })).toBeInTheDocument();
    expect(screen.getByText("Deskripsi dari Strapi")).toBeInTheDocument();
    expect(window.fetch).toHaveBeenCalledTimes(1);

    await user.click(screen.getByRole("button", { name: "en" }));
    expect(screen.getByRole("heading", { name: "Produk CMS" })).toBeInTheDocument();
    expect(window.fetch).toHaveBeenCalledTimes(1);
});
