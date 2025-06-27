What to build in our project ???

1. create an account
2. login
3. update your profile
4. feed page - explore
5. send connections request
6. see our matches
7. see the request we have send/ received
8. update your profile

Tech planning
2 micro services to our project - we are using microservices to build our application

1. Frontend - React
2. Backend - Nodejs, MongoDB

LLD: Low Level Design

1. Database design
   Think about collections and documents in MongoDb how you store your data

- User collections
- FirstName
- LastName
- EmailId
- Password
- age
- gender etc
- Connection Request
- from UserId
- to UserId
- status = pending

Rewquest can be 4 types:

- pending - accepted - rejected
- ignored
- blocked

2. API design {Rest API}

- Frontend API
- Backend API
- GET
- POST
- PUT
- PATCH
- DELETE
- The above all are HTTP methods

- POST
  /signUp
  /logIn
  /profile - GET
  /profile
  /sendrequest
  /ignore
  /interest
  /reviewrequest
  /accept
  /reject

- GET
  /allRequest
  /connections

- PATCH
  /profile

- DELETE
  /profile

CRUD operations
