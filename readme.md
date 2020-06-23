# lets-plan-to-chill(Server-side)

# Models

### event model
#### chat
- content
- user

#### event
- location 
- pic
- description
- date
- things
- chats
- user



### user
#### user
- firstname
- lastname
- email
- password
- pic
- admin


**in controllers/auth.js**

| Method | path | purpose |
| ----| ------------------------- | --------------- |
| POST  | `/auth/login` | find and validate user; send token |
| POST  | `/auth/signup` | create user; generate token |
| create  | `/` | create user |


**in controllers/event.js**

| Method | path | purpose |
| ----| ------------------------- | --------------- |
| get | `/` | get events |
| POST  | `/new` | make new event |
| get  | `/singleEvent/:id` | get single event |
| post  | `/singleEvent/:id` | add event |
| delete  | `/:id` | delete event |
| get  | `/edit` | get edit page |
| put  | `/edit/:id` | update a event |

**in controllers/profile.js**

| Method | path | purpose |
| ----| ------------------------- | --------------- |
| get  | `/` | User should be logged in to access this route |

