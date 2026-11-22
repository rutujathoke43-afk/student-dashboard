# Student Dashboard Management System

A Vue 3 student dashboard prototype with registration, login, logout, and protected dashboard pages. This project was extended for the Week 2 User Authentication Module task.

## Features

- Student registration with name, email, and password
- Login using a registered email and password
- Logout and protected dashboard routes
- Form validation and helpful error messages
- Pinia store for authentication and session state
- Vue Router navigation between login, registration, and dashboard pages
- Student dashboard sections for courses, attendance, assignments, profile, and settings

## Technology

- Vue 3
- Vite
- Pinia
- Vue Router
- JavaScript
- CSS

## Requirements

Install the Node.js LTS version before running the project.

## Run locally

Open a terminal in the project folder and run:

```sh
npm install
npm run dev
# Week 5: Unit Testing & Quality Assurance

## 1. Objective

The objective of Week 5 was to implement unit testing for the Vue.js Student Dashboard Management System using Vitest and Vue Test Utils. The purpose was to verify individual components and application functionalities and improve software quality.

## 2. Testing Tools Used

- Vitest
- Vue Test Utils
- jsdom
- Vue 3
- Pinia

## 3. Test Cases Implemented

### A. Authentication Store Tests

1. Verify successful registration with valid user details.
2. Reject registration with an invalid email address.
3. Reject passwords shorter than eight characters.
4. Verify login and logout functionality.
5. Reject login with an incorrect password.

### B. SummaryCard Component Tests

1. Verify that the component displays the correct title, value, and description.
2. Verify that the component contains the correct section and card class.

## 4. Test Results

- Total Test Cases: 7
- Passed Tests: 7
- Failed Tests: 0
- Testing Status: Successful

All seven unit tests passed successfully.

## 5. How to Run Tests

First, install the project dependencies:

```bash
npm install
```

To execute all unit tests once, run:

```bash
npm test -- --run
```

## 6. Quality Assurance

Unit tests were created to check normal and invalid input scenarios. Authentication tests verified registration, login, logout, and validation behavior. SummaryCard tests verified the correct display of component data.

## 7. Conclusion

Week 5 successfully introduced unit testing into the Student Dashboard Management System using Vitest and Vue Test Utils. A total of seven test cases were implemented and all seven passed successfully. This task improved understanding of software testing, error detection, code reliability, and quality assurance practices.

## Week 6: Deployment, Documentation & Code Review

### Live Deployment

The Student Dashboard Management System has been successfully deployed using Vercel.

**Live Website:** <https://student-dashboard-seven-phi.vercel.app>

### Deployment Configuration

- Hosting Platform: Vercel
- Framework: Vue 3 with Vite
- Build Command: npm run build
- Output Directory: dist
- Deployment Source: GitHub Repository

### Continuous Integration

GitHub Actions has been configured to:

- Install project dependencies.
- Run unit tests using Vitest.
- Build the production application.
- Verify changes pushed to the main branch.

### Production Build

The production build was successfully generated using:

`npm run build`

The build completed successfully in 553ms.

### Deployment Testing

The deployed website was opened successfully. The Student Dashboard interface was visible on the live website.

### Maintenance

The application can be updated by pushing new changes to the connected GitHub repository. Vercel can automatically deploy updates from the configured branch.

### Conclusion

The Student Dashboard Management System was successfully prepared for production deployment using Vercel. Deployment configuration, automated testing, and documentation were added to improve project maintainability and reliability.
