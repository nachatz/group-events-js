# Group Events

This is a social media group events coordination web application, deprecated from production use. 

The front-end is React w/ MobX and the backend is all C# .NET Core


# API Documentation

## Introduction

This document outlines the endpoints and functionality of the API provided by this service. The API facilitates various operations related to activities and user management.

## Base URL

The base URL for all API requests is: `api.groupevents.com/api`


## Authentication

Authentication is required for certain endpoints. Authentication is done via bearer token authentication. The token should be included in the `Authorization` header of the request.

## Endpoints

### Activities

#### Retrieve Activities List

- **URL:** `/activities`
- **Method:** `GET`
- **Description:** Retrieves a list of activities.
- **Authorization:** Required
- **Response:** An array of activity objects.

#### Retrieve Activity Details

- **URL:** `/activities/:id`
- **Method:** `GET`
- **Description:** Retrieves details of a specific activity.
- **Parameters:** `id` (string) - ID of the activity to retrieve details for.
- **Authorization:** Required
- **Response:** An activity object.

#### Create Activity

- **URL:** `/activities`
- **Method:** `POST`
- **Description:** Creates a new activity.
- **Authorization:** Required
- **Request Body:** Activity object.
- **Response:** None

#### Update Activity

- **URL:** `/activities/:id`
- **Method:** `PUT`
- **Description:** Updates an existing activity.
- **Parameters:** `id` (string) - ID of the activity to update.
- **Authorization:** Required
- **Request Body:** Updated activity object.
- **Response:** None

#### Delete Activity

- **URL:** `/activities/:id`
- **Method:** `DELETE`
- **Description:** Deletes an existing activity.
- **Parameters:** `id` (string) - ID of the activity to delete.
- **Authorization:** Required
- **Response:** None

### Account

#### Retrieve Current User

- **URL:** `/account`
- **Method:** `GET`
- **Description:** Retrieves details of the current user.
- **Authorization:** Required
- **Response:** User object.

#### User Login

- **URL:** `/account/login`
- **Method:** `POST`
- **Description:** Authenticates a user.
- **Authorization:** Not required
- **Request Body:** User credentials.
- **Response:** User object.

#### User Registration

- **URL:** `/account/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Authorization:** Not required
- **Request Body:** User details.
- **Response:** User object.

## Error Handling

The API returns appropriate HTTP status codes and error messages. Common error responses include:

- 400 Bad Request
- 401 Unauthorized
- 404 Not Found
- 500 Internal Server Error


