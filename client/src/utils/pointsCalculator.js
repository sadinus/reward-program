import { format, getMonth } from "date-fns";
import { groupBy } from "./groupBy";

export const getTotalPoints = (transactions) => {
  const pointsPerMonth = getPointsPerMonth(transactions);

  const totalPoints = pointsPerMonth.reduce(
    (sum, month) => sum + month.points,
    0
  );

  return totalPoints;
};

export const getPointsPerMonth = (transactions) => {
  const groupedTransactions = groupTransactionsByMonth(transactions);

  const months = Object.entries(groupedTransactions).map(
    ([month, monthTransactions]) => {
      const points = calculateRewardPoints(monthTransactions);

      return {
        month,
        points,
      };
    }
  );

  return months;
};

function groupTransactionsByMonth(transactions) {
  return groupBy(transactions, ({ date }) => {
    const month = format(new Date(date), "MMMM yyyy");
    return month;
  });
}

function calculateRewardPoints(transactions) {
  if (!transactions) return 0;

  const totalAmount = transactions.reduce(
    (total, { amount }) => total + Number(amount),
    0
  );

  const pointsOver100 = Math.max(0, totalAmount - 100) * 2;
  const points50to100 = Math.min(Math.max(0, totalAmount - 50), 50);

  const totalPoints = pointsOver100 + points50to100;
  return totalPoints;
}
