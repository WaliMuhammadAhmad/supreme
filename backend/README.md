# Supreme Backend API

A professional MVC Express application built for Vercel serverless deployment.

## 📁 Project Structure

```
backend/
├── models/              # Mongoose models
│   ├── User.js
│   ├── Admin.js
│   ├── Project.js
│   └── Slides.js
├── controllers/         # Business logic
│   ├── userController.js
│   ├── adminController.js
│   ├── projectController.js
│   ├── slidesController.js
│   └── authController.js
├── routes/             # API routes
│   ├── userRoutes.js
│   ├── adminRoutes.js
│   ├── projectRoutes.js
│   ├── slidesRoutes.js
│   └── authRoutes.js
├── config/             # Configuration files
│   └── database.js
├── app.js              # Express app configuration
├── server.js           # Local development server
├── index.js            # Vercel serverless entry point
├── vercel.json         # Vercel configuration
├── package.json
└── .env.example        # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.x
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost:27017/supreme
PORT=8080
NODE_ENV=development
```

### Local Development

Run the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:8080`

### Production Build

```bash
npm start
```

## 🌐 Vercel Deployment

### Deploy to Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy:

```bash
vercel
```

### Environment Variables on Vercel

Set the following environment variable in your Vercel project settings:

- `MONGODB_URI`: Your MongoDB connection string (use MongoDB Atlas for production)

You can set environment variables via:
- Vercel Dashboard: Project Settings → Environment Variables
- Vercel CLI: `vercel env add MONGODB_URI`

## 📚 API Endpoints

### Authentication

- `POST /signin` - User sign in

### Users

- `GET /user` - Get all users
- `GET /user/:userId` - Get specific user
- `POST /user/create` - Create new user
- `PUT /user/:id` - Update user
- `PUT /user/review/:id` - Post user review
- `POST /user/delete` - Delete user

### Admins

- `GET /admin` - Get all admins
- `POST /admin/create` - Create new admin
- `PUT /admin/:id` - Update admin
- `POST /admin/delete` - Delete admin

### Projects

- `GET /projects` - Get all projects
- `GET /project/:Id` - Get projects by user ID
- `POST /project/create` - Create new project
- `PUT /project/:id` - Update project
- `POST /project/delete` - Delete project

### Slides

- `GET /slides` - Get all slides
- `POST /slide/create` - Create new slide
- `PUT /slide/:id` - Update slide
- `POST /slide/delete` - Delete slide

## 🏗️ Architecture

### MVC Pattern

- **Models**: Define data structure and database schema using Mongoose
- **Views**: API responses (JSON format)
- **Controllers**: Handle business logic and request/response flow
- **Routes**: Define API endpoints and map them to controllers

### Key Features

- ✅ Clean MVC architecture
- ✅ Separated concerns
- ✅ Environment-based configuration
- ✅ Vercel serverless ready
- ✅ MongoDB connection pooling
- ✅ Error handling middleware
- ✅ CORS enabled
- ✅ Cookie parser support

## 🔧 Development

### Adding New Routes

1. Create a model in `models/`
2. Create a controller in `controllers/`
3. Create routes in `routes/`
4. Import and use routes in `app.js`

### Database Connection

The application uses a singleton pattern for MongoDB connection to optimize serverless performance. The connection is established once and reused across requests.

## 📝 Notes

- For local development, use `server.js` which starts a traditional Express server
- For Vercel deployment, `index.js` is used as the serverless entry point
- All routes are accessible at the root level (e.g., `/user`, `/admin`, etc.)
- The database connection is optimized for serverless environments

## 🛡️ Security Recommendations

Before deploying to production:

1. Implement password hashing (use bcrypt)
2. Add JWT authentication
3. Implement rate limiting
4. Add input validation and sanitization
5. Use HTTPS only
6. Implement proper error handling without exposing sensitive data
7. Add request validation middleware
8. Set up proper CORS origins

## 📄 License

ISC

