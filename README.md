<div align="center">

# CreatorHub 

AI-Powered Content Creation & Community Platform

![Last Commit](https://img.shields.io/github/last-commit/yourusername/creatorhub?style=flat-square)
![Languages](https://img.shields.io/github/languages/top/yourusername/creatorhub?style=flat-square&color=blue)
![Database](https://img.shields.io/badge/Database-Neon_Postgres-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Frontend](https://img.shields.io/badge/Frontend-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

*Built with modern AI & cloud technologies:*

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![ClipDrop](https://img.shields.io/badge/ClipDrop-AI_Image_Tools-purple?style=flat-square)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=flat-square&logo=clerk&logoColor=white)

 **Frontend Live on Vercel**  
 **Backend deployed on Vercel**
Deployed Link: https://creator-hub-nine.vercel.app/
</div>

---

##  Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [AI Capabilities](#ai-capabilities)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Authentication](#authentication)
- [Performance](#performance)
- [Author](#author)

---

## Overview

**CreatorHub** is a full-stack AI SaaS platform that enables users to:

- Create AI-generated content
- Generate and edit images
- Enhance productivity with AI tools
- Share creations with the community
- Like and engage with other users’ creations

The platform is built using the **PERN stack** and integrates multiple AI services for text and image processing.

---

## Key Features

###  AI Tools
- **Article & content generation**
-  **AI image generation**
-  **Background removal** (ClipDrop)
-  **Object removal** from images
-  **Smart prompt-based workflows**

###  Community & Engagement
- Public community feed
- Like / unlike system
- Published creations
- User profiles

###  User Experience
- Secure authentication (Clerk)
- User-specific dashboards
- Protected routes
- Responsive UI (mobile & desktop)

---

## Tech Stack

### Frontend
- **React (Vite)**
- **Tailwind CSS**
- **Axios**
- **React Router**
- **Clerk Authentication**
- **Lucide Icons**
- **React Hot Toast**

### Backend
- **Node.js**
- **Express.js**
- **PostgreSQL (Neon)**
- **OpenAI API** (text generation)
- **ClipDrop API** (image tools)
- **Cloudinary** (image storage)

### Deployment
- **Frontend**: Vercel  
- **Backend**:  Vercel  
- **Database**: Neon PostgreSQL  

---

## Architecture

```txt
CreatorHub/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── main.jsx
│
├── server/                 # Express Backend
│   ├── configs/
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   └── multer.js
│   ├── controllers/
│   │   ├── aiController.js
│   │   └── userController.js
│   ├── routes/
│   │   ├── aiRoutes.js
│   │   └── userRoutes.js
│   └── server.js
