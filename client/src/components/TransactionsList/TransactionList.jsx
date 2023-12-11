export function TransactionList({ transactions }) {
  return (
    <div data-testid="transaction-list">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map(({ id, amount, date }) => (
          <li key={id} data-testid="transaction">
            On {date} you purchased items for ${amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
