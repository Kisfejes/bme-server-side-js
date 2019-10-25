# Middlewares

## Auth MWs

* **auth-check**: Checking authentication information, redirect to login if no auth
* **role-check**: Checking if the user's role is enough for the page
* **login-with-google**: Redirect to authenticate with google, handle google's redirect response
* **logout**: Clear authentication information about the user

## Session MWs

* **session-create**: Create session
* **session-delete**: Delete session
* **session-get**: Get session
* **session-list**: List sessions
* **session-update**: Update session

## Song MWs

* **song-create**: Create session
* **song-delete**: Delete session
* **song-get**: Get session
* **song-list**: List sessions
* **song-update**: Update session

## Render MWs

* **render**: Render the given template

# Routes

## Auth, Main page

GET /
* auth-check
* role-check

GET /login
* render

GET /login-with-google
* login-with-google

GET /logout
* logout

## Sessions

GET /sessions
* auth-check
* role-check
* session-list
* session-delete (admin)
* render

GET PATCH DELETE /sessions/:session-id
* auth-check
* role-check
* session-get
* session-update
* render

GET POST /sessions-create
* auth-check
* role-check
* session-create
* render

## Songs

GET /songs
* auth-check
* role-check
* song-list
* song-delete (admin)
* render

GET PATCH DELETE /songs/:song-id
* auth-check
* role-check
* song-get
* song-update
* render

GET POST /song-create
* auth-check
* role-check
* song-create
* render