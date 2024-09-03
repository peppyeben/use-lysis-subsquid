---

# Project Setup and Deployment Guide

This guide walks you through the steps to set up, compile, and run the application. The application is designed to create a Docker environment on your local machine and expose a port for the frontend application.

## Prerequisites

Before getting started, ensure you have the following installed on your local machine:

- **Yarn**: A package manager for JavaScript.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## Installation and Setup

Follow the steps below to install dependencies, generate code, compile, and start the application:

### 1. Install Dependencies

To install all necessary dependencies for the project, run the following command:

```bash
yarn
```

This command will read the `package.json` file and install all the required packages listed in the `dependencies` and `devDependencies` sections.

### 2. Generate Code

Next, generate models based on the schema (schema.graphql):

```bash
yarn gen
```

This command will execute the model generation process.

### 3. Compile the Project

To compile the project, run:

```bash
yarn compile
```

If you encounter any errors during the compilation process, comment out everything in the `src/main.ts` file and rerun the `yarn compile` command:

```bash
// src/main.ts
// Comment out all code if compilation fails

yarn compile
```

This step is crucial for ensuring that your project compiles correctly before moving on to Docker setup.

### 4. Start Docker Environment

To set up the Docker environment, run:

```bash
yarn docker-start
```

Ensure that Docker is installed and running on your system (Windows, macOS, or Linux). This command will start the Docker containers as specified in the Docker configuration (docker-compose.yaml).

### 5. Generate Migrations

After the Docker environment is up and running, generate the database migrations:

```bash
yarn gen-mig
```

This command will create the migration files based on the database schema.

### 6. Apply Migrations

Once the migrations are generated, apply them to the database:

```bash
yarn apply-mig
```

This command will execute the migration files and update database schema accordingly.

### 7. Generate ABI Files

Generate the ABI (Application Binary Interface) files for the project by running:

```bash
yarn gen-abi
```

The ABI files are essential for interacting with smart contracts.

### 8. Uncomment the `src/main.ts` File

After the compilation and migration steps are complete, uncomment the code in the `src/main.ts` file:

```typescript
// src/main.ts
// Uncomment the code that was previously commented out
```

### 9. Recompile the Project

With the `src/main.ts` file uncommented, recompile the project to ensure everything is working correctly:

```bash
yarn compile
```

### 10. Start the Application

To start the application, run:

```bash
yarn start
```

This command will launch subsquid's indexing service.

### 11. Start the GraphQL server

In a new terminal window, start the frontend application by running:

```bash
yarn serve
```

This command will start the graphql server and expose an endpoint accessible via a web browser or in your frontend application.

--- 
