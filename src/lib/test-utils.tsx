// @ts-nocheck
// Testing utilities for React components
import * as React from "react";

// Mock data for testing
export const mockContactFormData = {
  valid: {
    name: "John Doe",
    email: "john.doe@example.com",
    organization: "Test Organization",
    message: "This is a test message for SafeTap Ghana.",
  },
  invalid: {
    name: "",
    email: "invalid-email",
    organization: "",
    message: "Short",
  },
};

export const mockImpactStats = {
  communities: "24",
  waterDispensed: "400k L",
  facilities: "42",
  illnessReduction: "45%",
  studentsServed: "12k+",
};

// Test helpers
export const createMockEvent = (name: string, value: string) =>
  ({
    target: { name, value },
    preventDefault: jest.fn(),
  }) as any;

export const createMockFormEvent = () =>
  ({
    preventDefault: jest.fn(),
  }) as any;

// Accessibility testing helpers
export const checkAccessibility = {
  hasAriaLabel: (element: HTMLElement) => element.hasAttribute("aria-label"),
  hasRole: (element: HTMLElement) => element.hasAttribute("role"),
  hasAltText: (element: HTMLImageElement) => element.hasAttribute("alt"),
  isKeyboardAccessible: (element: HTMLElement) => {
    const tabIndex = element.getAttribute("tabindex");
    return (
      tabIndex !== "-1" &&
      (element.tagName === "BUTTON" ||
        element.tagName === "A" ||
        element.tagName === "INPUT" ||
        tabIndex !== null)
    );
  },
};

// Performance testing helpers
export const measurePerformance = {
  startTimer: () => performance.now(),
  endTimer: (start: number) => performance.now() - start,
  checkImageLoading: (img: HTMLImageElement) => img.complete && img.naturalHeight !== 0,
};
