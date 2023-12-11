# Reward program

This is the solution for the recruitment task. I used the minimal libraries required to develop the app, keeping the code simple and readable. Tests reflects user's behavior, so I only tested parts of the application that are visible to the user. Additionally for better UX, I listed all the months in which the user received points for transactions.

## Libraries/tools used

- vite - faster than create-react-app
- json-server - simulates an API
- axios - simpler in use than fetch
- date-fns - basic operations on dates
- react-query - didn't want to use useEffect for fetching the data, which is considered a bad practice

## Possible improvements/considerations

- for simplicity I assumed that one customer uses the app
- better styling (not required in the task)
- wasn't sure if I should count just the points from the last 3 months or if the backend returns only the last 3 months (the app counts points from all transactions)

## Required software

1. Make sure that you have installed latest node version (built on v20.10.0)
2. Visual Studio Code or another code editor
3. Install the package manager pnpm [installation guide](https://pnpm.io/installation)

## How to run the app?

1. Open New Terminal, go to the /api folder, and run the command `pnpm i` and then `pnpm serve`
2. Open New Terminal, go to the /client folder, and run the command `pnpm i` and then `pnpm dev`

## How to run tests?

1. Open New Terminal, go to the /client folder, and run the command `pnpm test`

## Requirements

### Description

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar
spent between $50 and $100 in each transaction.
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
Given a record of every transaction during a three month period, calculate the reward points earned for each
customer per month and total.

- Use React JS (do not use TypeScript)
- Simulate an asynchronous API call to fetch data
- Make up a data set to best demonstrate your solution
- Check solution into GitHub

### Goal of the assignment

Showcase great craftsmanship in area of REACT JS. Solution should be
designed in a way that shows healthy architecture (solutions with 2-3 files will not be accepted).
Solution should show the data flow and good practices in working with backend from the UI
perspective

### Time required

Anywhere between 3-6h depending on proficiency

### Technical guidelines

1. Can use https://create-react-app.dev/ to get started quickly
2. avoid additional frameworks and Typescript – only REACT JS
3. Make up a data set to best demonstrate your solution (can use tools to generate data or
   manually create some data)
4. Check solution into GitHub and share the URL(Make it Public)
5. Plan your code composition structure (e.g separate service to simulate API request,
   separate file to calculate points, split UI into few readable files, etc.)
6. No hardcoded / magic numbers. Use constant definitions/dynamic props
7. Code should be clean, nicely formatted, easy to read and understand and follow best
   practices
8. UI needs to be reasonably OK. Not expecting a fancy UI.
9. No errors or warnings in runtime
10. Code must compile and run, there should be an instruction in README.md file how to
    run the application.
11. Include unit tests
12. Handle errors after loading application
13. Handle data loading – e.g. spinner
