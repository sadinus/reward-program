import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PointsSummary } from "./PointsSummary";
import transactions from "../../tests/transactions.json";

const TOTAL_POINTS = 115;

const renderComponent = () => {
  return render(<PointsSummary transactions={transactions} />);
};

it("should display number of total points", () => {
  renderComponent();

  const totalPointsText = new RegExp(`Total points: ${TOTAL_POINTS}`, "i");
  expect(screen.getByText(totalPointsText)).toBeVisible();
});

it("should display only month with scored points", () => {
  renderComponent();

  expect(screen.getAllByTestId("points-in-month")).toHaveLength(2);
});

it("total points should be the sum of month points", () => {
  renderComponent();

  const pointsInMonth = screen.getAllByTestId("points-in-month");
  const sumOfMonthPoints = pointsInMonth.reduce(
    (sum, current) => (sum += Number(current.getAttribute("value"))),
    0
  );

  expect(sumOfMonthPoints).toBe(TOTAL_POINTS);
});
