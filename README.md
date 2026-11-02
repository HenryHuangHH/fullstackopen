# Full Stack Open

My exercise solutions for the [Full Stack Open](https://fullstackopen.com/en/) course from the University of Helsinki.

## Contents

| Directory | Course part | Description |
| --- | --- | --- |
| [part1/courseinfo](part1/courseinfo) | 1 | React basics: components, props |
| [part1/unicafe](part1/unicafe) | 1 | Feedback app using component state |
| [part1/ancedotes](part1/ancedotes) | 1 | Random anecdotes with voting |
| [part2/courseinfo2](part2/courseinfo2) | 2 | Rendering collections and modules |
| [part2/phonebook](part2/phonebook) | 2 | Phonebook with forms, filtering, and a JSON server |
| [part3/example](part3/example) | 3 | Minimal Express notes backend |
| [phonebook](phonebook) | 3 | Full stack phonebook: Express + MongoDB backend, React frontend |
| [blogList](blogList) | 4 | Blog list REST API with Express, Mongoose, and tests |

## Tech stack

- **Frontend:** React 19, Vite, Axios
- **Backend:** Node.js, Express 5, Mongoose (MongoDB)
- **Testing:** `node:test`, Supertest
- **Linting:** ESLint

## Running the projects

Every project is a separate npm package. Install dependencies in the project's directory before running it:

```bash
cd <project-directory>
npm install
```

### React apps (part1, part2, phonebook/frontend)

```bash
npm run dev      # start the Vite dev server
npm run build    # production build
```

### Phonebook (full stack)

Create `phonebook/backend/.env`:

```
MONGODB_URI=<your MongoDB connection string>
PORT=3001
```

Then:

```bash
cd phonebook/backend
npm install
npm run dev        # start the backend with --watch
npm run build:ui   # build the frontend and copy it into the backend
npm run lint
```

API endpoints:

| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/persons` | List all people |
| GET | `/api/persons/:id` | Get one person |
| POST | `/api/persons` | Add a person |
| DELETE | `/api/persons/:id` | Delete a person |
| GET | `/info` | Phonebook summary |

### Blog list

Create `blogList/.env`:

```
URL=<MongoDB connection string>
TEST_URL=<MongoDB connection string for the test database>
PORT=3003
```

Then:

```bash
cd blogList
npm install
npm run dev     # development mode with --watch
npm start       # production mode
npm test        # run the API tests against TEST_URL
```

API endpoints:

| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/blogs` | List all blogs |
| POST | `/api/blogs` | Create a blog |
