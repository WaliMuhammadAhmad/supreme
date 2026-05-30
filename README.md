# SUPREME

## we are supreme

This project is a fully functional freelancing website where clients can place orders for custom slides, and the admin can create and deliver those slides. Payments are processed through blockchain technology, ensuring secure and transparent transactions.

## Features

- User Authentication: Allow users to sign up, log in, and manage their accounts.
- Order Placement: Clients can place orders for custom slides with specific requirements.
- User Panel: User can view their spent amount, their placed orders and the order activity.
- Admin Panel: Admins can view and manage orders, create and deliver slides, and monitor user activity.
- Payment Integration: Integration with blockchain technology for secure and transparent payments.
- Responsive Design: The website is responsive and works seamlessly on desktop and mobile devices.
- Animation: Utilizes animations and transitions to enhance the user experience.
- Customization: TailwindCSS is used for styling, allowing for easy customization and theming.

## Technologies Used

### Frontend

- React with Vite: Fast and lightweight development environment for React applications.
- TailwindCSS: Utility-first CSS framework for building custom designs quickly.
- DaisyUI: UI parts which makes the production fast and responsive.
- Framer Motion: A library for creating fluid animations and transitions in React applications.
- Locomotive: For smooth scrolling experience.

### Backend

- Express.js: Web application framework for Node.js, providing a robust set of features for building APIs.
- Node.js: JavaScript runtime environment for server-side development.
- MongoDB: NoSQL database for storing application data, providing flexibility and scalability.

## 🏗️ Monorepo Structure

This project uses [Turborepo](https://turbo.build) for efficient monorepo management.

```txt
supreme/
├── apps/
│   ├── api/                # @supreme/api - Express.js REST API
│   │   ├── controllers/     # Business logic
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── config/          # Configuration
│   │   ├── middleware/      # Express middleware
│   │   └── utils/           # Helper functions
│   └── web/                # @supreme/web - React + Vite application
│       ├── src/             # React source code
│       ├── public/          # Static assets
│       └── components/      # React components
├── packages/                # Shared packages
│   ├── shared-utils/       # @supreme/shared-utils - Common utilities
│   └── eslint-config/      # @supreme/eslint-config - ESLint config
├── turbo.json              # Turborepo configuration
└── package.json            # Root workspace configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 10.0.0
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/WaliMuhammadAhmad/supreme.git
cd supreme
```

2. Install all dependencies (this installs for all workspaces):

```bash
npm install
```

3. Set up environment variables:

```bash
# Backend environment
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env with your MongoDB URI
```

4. Start development servers (both frontend and backend):

```bash
npm run dev
```

This single command starts:

- Frontend at `http://localhost:5173` (Vite default)
- Backend at `http://localhost:5174`

### Local MongoDB

The local backend is configured for a MongoDB URI like:

```bash
mongodb://127.0.0.1:27017/supreme
```

### Vercel Monorepo Deployment

A root `vercel.json` is included for monorepo deploys. The backend API is exposed under `/api/*`, so Vercel should provide the `MONGODB_URI` secret and use `API_BASE_PATH=/api`.

### Individual Commands

```bash
# Run only frontend
npm run dev --workspace=@supreme/web

# Run only backend
npm run dev --workspace=@supreme/api

# Build everything
npm run build

# Lint all code
npm run lint

# Format code
npm run format
```

## License

This project is licensed under the [MPL-2.0 license](LICENSE).
