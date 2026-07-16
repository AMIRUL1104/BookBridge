# 📚 BookBridge

BookBridge is a community-driven platform that helps people buy, sell, and donate used academic books. The platform connects students with affordable learning resources while reducing book waste. Users can easily browse available books, create listings, send book requests, and manage their activities through a personalized dashboard.

## 🌐 Live Website

https://bookbridgebd.vercel.app

---

## 🚀 Features

### Authentication

- Secure authentication using Better Auth
- User registration and login
- Protected routes
- Role-based access (User & Admin)

### Book Management

- Add new book posts
- Edit own book posts
- Delete own book posts
- Upload book images with ImgBB
- View detailed book information

### Browse Books

- Browse all available books
- Search books
- Filter by category
- Filter by condition
- Filter by listing type (Sell/Donate)
- Sort books

### Book Request System

- Send book requests
- Prevent duplicate requests
- Seller can accept requests
- Accepted book automatically becomes sold
- Remaining pending requests become cancelled
- Restore availability if accepted request is cancelled

### User Dashboard

- Dashboard overview
- Manage profile
- Manage own posts
- View incoming requests
- View sent requests

### Admin Dashboard

- Dashboard overview
- Manage users
- Manage book posts
- Soft delete inappropriate posts

### Responsive Design

- Mobile-friendly interface
- Tablet support
- Desktop optimized

---

## 🛠️ Tech Stack

### Frontend

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- HeroUI v3
- React Hook Form
- Zod
- React Toastify

### Backend

- Express.js
- MongoDB
- Better Auth

### Image Hosting

- ImgBB

### Deployment

- Vercel
- Render

---

## 📂 Project Structure

```text
app/
components/
services/
types/
hooks/
lib/
utils/
public/
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/AMIRUL1104/BookBridge.git
```

### Navigate to the project

```bash
cd BookBridge
```

### Install dependencies

```bash
npm install
```

### Create a `.env.local` file

```env
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_API_URL=
BETTER_AUTH_URL=
CLIENT_URL=
```

### Start the development server

```bash
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## ▶️ Run Production

```bash
npm start
```

---

## 🔑 Environment Variables

```env
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_API_URL=
BETTER_AUTH_URL=
CLIENT_URL=
```

---

## 👤 Demo Credentials

### User

```
Email:
Password:
```

### Admin

```
Email:
Password:
```

---

## 📸 Screenshots

You can add screenshots of:

- Home Page
- Browse Books
- Book Details
- User Dashboard
- Admin Dashboard

---

## 🔗 Repositories

### Frontend

https://github.com/AMIRUL1104/BookBridge

### Backend

https://github.com/AMIRUL1104/BookBridge-Server

---

## 📈 Future Improvements

- Real-time notifications
- Chat system
- Wishlist
- Payment integration
- Delivery tracking
- Ratings & Reviews
- Email notifications

---

## 👨‍💻 Author

**Amirul Islam**

- Portfolio: https://amirul-islam.vercel.app
- GitHub: https://github.com/AMIRUL1104
- LinkedIn: https://linkedin.com/in/amirulislam1104

---

## 📄 License

This project is created for educational purposes.
