## Project Proposal: Travel Journal App

### Tech Stack

- **Frontend:** React.js (with Tailwind CSS for styling)
- **Backend:** Node.js with Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JSON Web Tokens (JWT)
- **Image Uploads:** Multer (Node.js middleware), with images stored locally or on a cloud service (e.g., AWS S3)
- **Hosting:** Backend on Render or Heroku; Frontend on Vercel or Netlify


### Focus of the Project

The project will be an **evenly focused full-stack application**, integrating both frontend and backend components. The aim is to create a seamless and engaging user experience for travelers to document, organize, and share their journeys.

### Project Type

- **Website:** A responsive web application accessible through modern browsers on desktop and mobile devices.


### Project Goal

The goal of the project is to **enable users to create digital travel journals**, upload photos, write stories, and optionally share their experiences with others or keep them private. The app will help users preserve memories, visualize their travels, and connect with a community of fellow travelers.

### User Demographic

The primary users of the app will be:

- **Travelers:** Individuals who wish to record and revisit their journeys.
- **Friends \& Family:** People interested in following or commenting on travel stories.
- **Potential Expansion:** Travel bloggers and content creators looking to share experiences.


### Data and API

- **Data:** User accounts, travel entries (title, description, location, date), uploaded photos, optional comments, and likes.
- **Data Collection:** All data will be created and managed by users within the app. No external APIs are required for core data, but integration with a maps API (e.g., Google Maps) is possible for location tagging.
- **API:** A custom REST API will be built to handle all CRUD operations, authentication, image uploads, and user interactions.


## Project Approach

### 1. Database Schema

- **User:** username, email, password (hashed), profile picture, bio
- **JournalEntry:** user reference, title, description, location, date, array of image URLs, tags, privacy setting (public/private), createdAt, updatedAt
- **Comment:** entry reference, user reference, text, createdAt
- **Like:** entry reference, user reference


### 2. Potential API Issues

- **Image upload handling:** Ensuring secure and efficient storage and retrieval of user images.
- **Data validation and security:** Preventing unauthorized access to private journals.
- **Rate limiting:** To prevent spam or abuse of public endpoints.
- **Scaling:** Efficiently handling a growing number of users and media files.


### 3. Sensitive Information

- **User credentials:** Must be securely hashed and never exposed.
- **Private journals:** Access control to ensure only authorized users can view or edit.


### 4. Functionality

- User registration and authentication (JWT)
- Create, read, update, delete (CRUD) journal entries
- Upload and display images
- Mark entries as public/private
- Search and filter entries by location, date, or tags
- Comment and like features for public entries (optional)
- User profile management
- Responsive design for mobile and desktop


### 5. User Flow

- **Landing Page:** Introduction and call-to-action (sign up or log in)
- **Dashboard:** List of user’s journals, with options to create or edit entries
- **Create/Edit Entry:** Form to add text, upload images, and tag locations
- **View Entry:** Display journal entry with images, location map, comments, and likes
- **Profile:** Manage user information and view all personal entries
- **Explore (optional):** Browse public entries from other users


### 6. Stretch Goals

- **Map integration:** Visualize travel locations on an interactive map
- **Social sharing:** Share public entries via unique links or social media
- **Export to PDF/print:** Allow users to download or print their journals
- **Push/email notifications:** Notify users of comments or likes
- **Mobile app version:** Build with React Native


## Breaking Down the Project

| Task Name | Description | Label Type | Difficulty |
| :-- | :-- | :-- | :-- |
| Design Database Schema | Define models for users, entries, comments, likes | Backend | Medium |
| Source Your Data | Set up user-generated data and optional map API integration | Backend | Easy |
| User Flows | Design user experience from sign-up to journal sharing | Fullstack | Medium |
| Set Up Backend \& DB | Initialize Express app, connect MongoDB, configure environment | Backend | Easy |
| Set Up Frontend | Bootstrap React app, connect to backend with API calls | Frontend | Easy |
| User Authentication | Implement JWT-based authentication (sign up, login) | Fullstack | Medium |
| CRUD Journal Entries | Build endpoints and UI for creating, editing, deleting entries | Fullstack | Medium |
| Image Uploads | Integrate Multer, handle file storage for uploaded images | Backend | Medium |
| Responsive UI | Style with Tailwind, ensure mobile and desktop support | Frontend | Medium |
| Map Integration | Add Google Maps for location tagging | Fullstack | Stretch Goal |
| Social Features | Enable comments and likes on public entries | Fullstack | Stretch Goal |
| Export/Print Feature | Allow PDF export or print of journals | Fullstack | Stretch Goal |

**GitHub repository** will be created for this Capstone Project. All code, documentation, and progress will be tracked and labeled accordingly.

