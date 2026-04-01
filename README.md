# JupiterToys

This repository contains the test automation for the Jupiter Toys web application, built with Cypress and TypeScript. Includes UI automation for Contacts page fields validations and assertions for flaky tests, Cart Page Items - item name, quantity, unit price, subtotal and total calculations, and CI/CD pipeline integration with best automation practices like Page Object Model

## About Project

Jupiter Toys UI Test: Following tests are automated in this framework

**Test case 1:**

1. From the home page, go to the contact page
2. Click the submit button without populating any fields
3. Verify error messages and alert header
4. Populate mandatory fields
5. Validate all validation errors are cleared

**Test case 2:**

1. From the home page go to contact page
2. Populate all mandatory fields
3. Click submit button
4. Validate successful submission message
   Note: Run this test 5 times to confirm 100% pass rate

**Test case 3:**

1. Buy 2 Stuffed Frog,5 Fluffy Bunny, 3 Valentine Bear
2. Navigate to the cart page
3. Verify the subtotal for each product is correct
4. Verify the unit price for each product
5. Verify that total is sum of all the subtotal

## Code Structure:-

As Jupiter Toys is a Web application, I have used cypress with typescript tool for UI automation with page object model

The page object files are present under _/pages/_ directory
The test spec files are present under the _/e2e/_ directory
The execution reports can be found under _/reports/_ directory

## Tools/Libraries used

    1.VS Code Version: 1.113.0 (user setup)
            Commit: cfbea10c5ffb233ea9177d34726e6056e89913dc
            Date: 2026-03-24T15:07:18+01:00
            Electron: 39.8.3
            ElectronBuildId: 13620978
            Chromium: 142.0.7444.265
            Node.js: 22.22.1
            V8: 14.2.231.22-electron.0
            OS: Windows_NT x64 10.0.26200
    2.node 20.0
    3.cypress 15.13.0
    4.cypress-mochawesome-reporter 3.1.0
    5.dependancies
      mochawesome 7.1.4
      typescript 5.1
    4.github for CI and remote code repository

## Pre-requisites

1. Install node version from terminal within VS code
   nvm install 20.0.0 or from [node.js website](https://nodejs.org/en) LTS version

2. Install cypress with node package manager

   Initialize a package.json

   npm init -y

   Install Cypress locally

   npm install cypress --save-dev

3. Install dependancies - mochawesome reporter and typescript

   TypeScript

   npm install typescript @types/node --save-dev

   Mochawesome reporter

   npm install cypress-mochawesome-reporter --save-dev

4. .github directory for CI
   mkdir -p .github/workflows

## Installation

Clone the code from the following GitHub repository: <TBC>

## Instructions

**Run locally**

Open a command-prompt and navigate to project directory where package.json file is located

Here are the commands to run the test cases:

1. To run all the test cases:

npm run build && cypress run --env envFile=prod --config specPattern=[e2e/**/*.cy.ts] --reporter mochawesome --reporter-options reportDir=./reports,reportFilename=all-tests-report,json=false,overwrite=false,html=true

2. To run the tests using a specific tests:
   -- runs only contact tests  
   npm run build && cypress run --env envFile=prod --config specPattern=[e2e/contact/*.cy.ts] --reporter mochawesome --reporter-options reportDir=./reports,reportFilename=contact-tests-report,json=false,overwrite=false,html=true

   -- runs only shop & cart tests
   npm run build && cypress run --env envFile=prod --config specPattern=[e2e/shop-and-cart/*.cy.ts] --reporter mochawesome --reporter-options reportDir=./reports,reportFilename=shop-cart-tests-report,json=false,overwrite=false,html=true

**Run with CI**

1. Trigger on push or pull request to main
1. Uses Node 20
1. Install npm dependencies
1. Run TypeScript build
1. Execute all Cypress tests
1. Upload your reports/ folder as artifacts

## Test Results

Execution reports are generated under ./reports directory under project directory

## Assumptions, trade-offs, or known issues

1. Cypress tool known limitations - autowaits vs explicit waits and race conditions
2. TypeScript and node version configuration mismatch
3. Html elements and locator handling

## AI Usage

To resolve cypress config errors, troubleshooting mismatch of typescript and node versions, web application locators/elements handling, pipeline template references and better readability
