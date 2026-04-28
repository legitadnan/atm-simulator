# ATM Simulator

## Features Overview
- Simulate ATM transactions such as withdrawal, deposit, and balance inquiry.
- Support multiple user accounts with distinct balances.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/legitadnan/atm-simulator.git
   ```
2. Navigate into the project directory:
   ```bash
   cd atm-simulator
   ```
3. Install dependencies (if any):
   ```bash
   npm install
   ```

## Usage Guide with Examples
To run the simulator:
```bash
node atmSimulator.js
```

Examples:
- To withdraw funds:
  ```
  ATM.withdraw(accountId, amount);
  ```
- To deposit funds:
  ```
  ATM.deposit(accountId, amount);
  ```

## Sample Accounts
- **Account ID:** 123456
  - **Balance:** $1000
- **Account ID:** 654321
  - **Balance:** $500

## Transaction Types
- **Withdrawal**: Remove funds from an account.
- **Deposit**: Add funds to an account.
- **Balance Inquiry**: Check the available balance.

## Class Methods
- `withdraw(accountId, amount)` - withdraws a specified amount from the account.
- `deposit(accountId, amount)` - deposits a specified amount into the account.
- `checkBalance(accountId)` - returns the current balance of the account.

## Data Storage Format
Data is stored in JSON format, where each account is an object containing `id`, `balance`, and `transactions`.

Example:
```json
{
  "accounts": [
    {
      "id": "123456",
      "balance": 1000,
      "transactions": []
    }
  ]
}
```

## Troubleshooting Guide
- **Issue:** ATM not recognizing account.
  - **Solution:** Ensure the account ID is correct and formatted properly.

- **Issue:** Insufficient funds for withdrawal.
  - **Solution:** Check account balance before performing withdrawal operations.

- **Issue:** Unable to start the simulator.
  - **Solution:** Verify that Node.js is installed and the script is executed correctly.