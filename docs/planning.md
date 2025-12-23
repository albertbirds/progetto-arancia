# Progetto Arancia – Planning

## 1. Project Scope

### In scope (MVP)
- User authentication (6 users total)
- One team per user
- Credit-based team creation
- Public leaderboard
- Admin panel for manual score management

### Out of scope (for now)
- Notifications
- Chat
- Advanced statistics
- Historical score editing
- Mobile native app

---

## 2. Game Rules

### Users
- Total users: 6
- Roles: USER, ADMIN
- Only admins can manage scores

### Teams
- One team per user
- Team name is required
- Team composition is locked once the game starts

### Credits
- Initial credits: 100
- Each player has a fixed cost
- Teams cannot exceed their available credits

### Scoring
- Scores are assigned manually by an admin
- Each scoring event includes:
  - Team
  - Points (+ / -)
  - Reason
  - Timestamp

---

## 3. Roles & Permissions

### USER
Can:
- Log in
- Create and manage their team (before lock)
- View leaderboard and scores

Cannot:
- Assign or edit scores
- Access admin panel

### ADMIN
Can:
- Perform all USER actions
- Assign and remove points
- View score event logs

---

## 4. Application Pages

| Route | Access | Description |
|------|------|------------|
| /login | Public | User login |
| /dashboard | USER | Team overview |
| /team | USER | Team management |
| /leaderboard | USER | Global ranking |
| /admin | ADMIN | Score management |

---

## 5. Data Model (Draft)

### User
- id
- email
- passwordHash
- role

### Team
- id
- name
- userId
- creditsRemaining

### Player
- id
- name
- cost

### TeamPlayer
- teamId
- playerId

### ScoreEvent
- id
- teamId
- points
- reason
- createdAt

---

## 6. Technical Decisions (Locked)

- Frontend: React + Vite + TypeScript + Tailwind CSS
- Backend: Node.js + Express
- Database: PostgreSQL
- ORM: Prisma
- Authentication: JWT
- Hosting:
  - Frontend: Vercel
  - Backend: Render
  - Database: Supabase

---

## 7. Milestones Overview

- Planning – completed
- Project Setup
- Frontend Base
- Backend Base
- Authentication
- Core Game
- Admin Panel
- Integration
- Testing & Polishing
- Final Deployment
