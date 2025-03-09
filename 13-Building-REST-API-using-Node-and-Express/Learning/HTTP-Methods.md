## GET:

- Used to retrieve data from the server.
- Data is typically included in the URL (query parameters).
- Safe: and idempotent (multiple identical requests have the same effect).
- Examples: Fetching a product list, displaying a user profile.

## POST:

- Used to create new data on the server.
- Data is sent in the request body (e.g., JSON).
- Not idempotent: (multiple identical requests might have different effects).
- Examples: Submitting a form, creating a new user account.

## PUT:

- Used to update or replace an entire existing resource on the server.
- Data is sent in the request body.
- Idempotent: (multiple identical requests have the same effect).
- Examples: Updating a user profile, replacing a product's details.

# 1. Thinking first,code second.

## Building REST-API (low level planning)

- get/users/id1 - get the user1 data
- get/users/id2 - get the user2 data
- get/users/id3 - get the user3 data
- post/users - insert the new data of user
- put/users/id1 - update and entire existing data on server
- delete/users/id - Used to create new data on the server.

## 2. Follow : Best practices for REST API design

- always follow client-side architecture
- always respect all https methods
- Maintain good security practices
- Cache data to improve performance
- Versioning our APIs

## Why?
 REST APIs are one of the most common kinds of web interfaces available today. They allow various clients including browser apps to communicate with services via the REST API. Therefore, it's very important to design REST APIs properly so that we won't run into problems down the road. We have to take into account security, performance, and ease of use for API consumers.
