# URL_shortener
A small full-stack application for shortening URLs.

## Description
This is a personal project to allow me to better understand the MEAN stack, replacing MongoDB with MySQL. As well as how URL shorteners work.

## Tech Stack
- Angular (Front-end)
- Node.js + Express (Backend)
- MySQL

## Getting Started
> Make sure node.js and mysql is installed in your system
Backend
```
clone https://github.com/Mgalinri/URL_shortener.git
cd backend
npm install
node index.ts
```
Frontend
```
cd url_shortener
npm install
ng_serve
```
## Features
1. Maps URLs to a key and generates shortened links
2. A simple UI

## API Endpoints (Backend)
| Method | Endpoint   | Description                         | Parameters           | Response   |
|--------|------------|-------------------------------------|----------------------|------------|
| POST   | /createKey | Creates a short key and stores it   | `url: string` (body) | JSON       |
| GET    | /{key}     | Redirects to the original long URL  | `key: string` (path) | Redirect   |

## Images
<img width="568" height="480" alt="image" src="https://github.com/user-attachments/assets/70f79b31-7b0a-4d1d-9e35-85b2b9364055" />

## License
Licensed under MIT license
