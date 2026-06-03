import "@testing-library/jest-dom";

class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}

let intersectionObservers = [];

class IntersectionObserverMock {
    constructor(callback) {
        this.callback = callback;
        intersectionObservers.push(this);
    }

    observe(target) {
        this.target = target;
    }

    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserverMock;
window.IntersectionObserver = IntersectionObserverMock;
window.scrollTo = jest.fn();
window.__triggerIntersection = (isIntersecting = true) => {
    intersectionObservers.forEach((observer) => {
        observer.callback([{ isIntersecting, target: observer.target }]);
    });
};
window.__getIntersectionObserverCount = () => intersectionObservers.length;

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

beforeEach(() => {
    intersectionObservers = [];
    window.fetch = jest.fn(() => Promise.reject(new Error("Strapi unavailable in tests")));
});
