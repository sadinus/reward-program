import React from "react";
import { vi, describe, it, expect, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { useTransactions as mockUseTransactions } from "./api/useTransactions";
import mockTransactions from "./tests/transactions.json";

vi.mock("./api/useTransactions");

afterEach(() => {
  vi.clearAllMocks();
});

describe("App Component", () => {
  it("renders LoadingSpinner while data is loading", async () => {
    mockUseTransactions.mockReturnValueOnce({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<App />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders ErrorPage when there is an error", async () => {
    mockUseTransactions.mockReturnValueOnce({
      data: null,
      isLoading: false,
      isError: true,
    });
    render(<App />);
    expect(screen.getByTestId("error-page")).toBeInTheDocument();
  });

  it("renders PointsSummary and TransactionList when data is loaded", async () => {
    mockUseTransactions.mockReturnValueOnce({
      data: mockTransactions,
      isLoading: false,
      isError: false,
    });
    render(<App />);

    expect(screen.getByText("Reward System")).toBeInTheDocument();
    expect(screen.getByTestId("points-summary")).toBeInTheDocument();
    expect(screen.getByTestId("transaction-list")).toBeInTheDocument();
  });
});
