import "@testing-library/jest-dom";

class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}

class IntersectionObserverMock {
    constructor(callback) {
        this.callback = callback;
    }

    observe() {
        this.callback([{ isIntersecting: true }]);
    }

    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserverMock;
window.IntersectionObserver = IntersectionObserverMock;
window.scrollTo = jest.fn();

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }))
});
