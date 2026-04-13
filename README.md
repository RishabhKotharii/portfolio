# Rishabh Kothari - MERN Portfolio

A full-stack portfolio website built with **MongoDB**, **Express**, **React**, and **Node.js** (MERN stack).

## Features

- 📱 **Responsive Design** - Mobile-friendly portfolio layout
- ✨ **GSAP Animations** - Smooth logo animations and transitions
- 📧 **Contact Form** - Full-featured contact form with MongoDB storage
- 💅 **Modern Styling** - Clean, professional UI with CSS Grid and Flexbox
- 🎯 **Tech Stack Showcase** - Interactive tech stack carousel
- 📊 **Experience & Projects** - Detailed sections for work experience and projects
- 🎓 **Education** - Educational background and CGPA display
- 🔐 **MongoDB Integration** - Secure message storage and retrieval

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **GSAP** - Animation library
- **React Icons** - Icon components

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

## Project Structure

```
.
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main component
│   │   ├── App.css        # Styling
│   │   └── main.jsx       # Entry point
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── routes/
│   │   ├── contact.js     # Contact form routes
│   │   ├── projects.js    # Projects routes
│   │   └── experience.js  # Experience routes
│   ├── models/
│   │   └── Message.js     # Message schema
│   ├── server.js          # Main server file
│   ├── .env               # Environment variables (not in repo)
│   └── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

## Environment Variables

Create a `server/.env` file with:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio
PORT=5000
```

**Note:** `.env` file is git-ignored for security reasons.

## Running the Project

### Backend (from `server/` directory)
```bash
npm run dev
```
Server runs on `http://localhost:5000`

### Frontend (from `client/` directory)
```bash
npm run dev
```
Frontend runs on `http://localhost:5173`

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `GET /api/health` - Server health check

## Features in Detail

### Contact Form
- Name, Email, Subject, Message fields
- Form validation
- MongoDB storage
- Toast notifications (success/error)
- Auto-dismiss after 3 seconds

### Tech Stack Animation
- Logo carousel with smooth scrolling
- Alternating up-and-down floating animation
- Responsive design

### Portfolio Sections
- **Hero** - Name, profile image, and contact links
- **Skills** - Organized by category
- **Experience** - Detailed work experience
- **Projects** - Showcase of past projects
- **Education** - Degree and CGPA
- **Tech Stack** - Technologies used
- **Contact** - Message form with MongoDB backend

## Deployment

### Frontend
- Deploy with Vercel, Netlify, or GitHub Pages

### Backend
- Deploy with Heroku, render.com, or Railway

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contact

- Email: kothari.rishabh17@gmail.com
- GitHub: [RishabhKotharii](https://github.com/RishabhKotharii)
- LinkedIn: [Rishabhh](https://www.linkedin.com/in/Rishabhh)

---

Built with ❤️ by Rishabh Kothari
