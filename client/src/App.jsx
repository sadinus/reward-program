import { useTransactions } from "./api/useTransactions";
import { ErrorPage } from "./components/ErrorPage";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { PointsSummary } from "./components/PointsSummary";
import { TransactionList } from "./components/TransactionsList";

export default function App() {
  const { data: transactions, isLoading, isError } = useTransactions();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;

  return (
    <>
      <h1>Reward System</h1>
      <PointsSummary transactions={transactions} />
      <TransactionList transactions={transactions} />
    </>
  );
}
