
## Thesis Management System

## Requirements

1. Node 12 or higher
2. Npm
3. Postgresql

## Scripts

- Start Dev Server
  ```
  yarn start
  ```

- Build deployable code
  ```
  yarn build
  ```

- Create new migration file
  ```
  yarn migrate:create [filename]
  ```

- Execute a migration
  ```
  yarn migrate:up [filename] [-c 21]
  ```

- Reset all migration
  ```
  yarn migrate:reset
  ```
