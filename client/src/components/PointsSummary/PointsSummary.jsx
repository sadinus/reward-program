import {
  getPointsPerMonth,
  getTotalPoints,
} from "../../utils/pointsCalculator";

export function PointsSummary({ transactions }) {
  const totalPoint = getTotalPoints(transactions);
  const monthlyTransactions = getPointsPerMonth(transactions);

  return (
    <div data-testid="points-summary">
      <h2>Total points: {totalPoint}</h2>
      <ul>
        {monthlyTransactions.map(
          ({ month, points }) =>
            points > 0 && (
              <li key={month} data-testid={"points-in-month"} value={points}>
                You scored {points} points in {month}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
