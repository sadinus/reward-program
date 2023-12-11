import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TransactionList } from "./TransactionList";
import transactions from "../../tests/transactions.json";

const renderComponent = () => {
  return render(<TransactionList transactions={transactions} />);
};

it("should display corrent number of transactions", () => {
  renderComponent();

  expect(screen.getAllByTestId("transaction")).toHaveLength(4);
});
