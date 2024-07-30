# Batch3:Mission02:Apollo-Flix

**Mongoose Express CRUD Mastery**

**Objective:** Develop a Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for effective data management. Ensure data integrity through validation using Joi/Zod.

### Set up the Project

- Create a new Express project.
- Set up a MongoDB database using Mongoose for storing user and order data.

### Define Data Models

- Create Mongoose models for Movie data based on the provided data structure. (You can follow sample-data.json file for ideas)
- Define appropriate data types, validations etc.

## **Movie Collection Management API**

### **1. Create a New Movie**

- **Endpoint**: **`/api/movies`**
- **Method: `POST`**
- **Sample Request Body**:

```json
{
  "title": "Inception",
  "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
  "releaseDate": "2010-07-16",
  "genre": "Thriller",
  "isDeleted": false,
  "viewCount": 0,
  "reviews": [
    {
      "email": "example1@example.com",
      "rating": 5,
      "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
    },
    {
      "email": "example2@example.com",
      "rating": 4,
      "comment": "Impressive storyline and great performances, though a bit complex to follow."
    }
  ]
}
```

- **Sample Response**:

```json
{
  "success": true,
  "message": "Movie created successfully!",
  "data": {
    "title": "Inception",
    "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
    "releaseDate": "2010-07-16",
    "genre": "Thriller",
    "isDeleted": false,
    "viewCount": 0,
    "reviews": [
      {
        "email": "example1@example.com",
        "rating": 5,
        "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
      },
      {
        "email": "example2@example.com",
        "rating": 4,
        "comment": "Impressive storyline and great performances, though a bit complex to follow."
      },
      {
        "email": "example3@example.com",
        "rating": 4.5,
        "comment": "Absolutely brilliant! Keeps you guessing until the very end."
      }
    ]
  }
}
```

### **2. Retrieve a List of All Movies**

- **Endpoint**: **`/api/movies`**
- **Method: `GET`**
- **Response**:

```json
{
  "success": true,
  "message": "Movies fetched successfully!",
  "data": [
    {
      "title": "Inception",
      "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
      "releaseDate": "2010-07-16",
      "genre": "Sci-Fi, Action, Thriller",
       "isDeleted": false,
       "viewCount":0,
      "reviews": [
        {
          "email": "example1@example.com",
          "rating": 5,
          "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
        },
        {
          "email": "example2@example.com",
          "rating": 4,
          "comment": "Impressive storyline and great performances, though a bit complex to follow."
        },
        {
          "email": "example3@example.com",
          "rating": 4.5,
          "comment": "Absolutely brilliant! Keeps you guess
         }
    ]
```

### **3. Retrieve a Specific Movie by ID**

- **Endpoint**: **`/api/movies/:movieId`**
- **Method: `GET`**
- **Response**:

```json
{
  "success": true,
  "message": "Movie fetched successfully!",
  "data": {
    "title": "Inception",
    "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
    "releaseDate": "2010-07-16",
    "genre": "Thriller",
    "isDeleted": false,
    "viewCount": 0,
    "reviews": [
      {
        "email": "example1@example.com",
        "rating": 5,
        "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
      },
      {
        "email": "example2@example.com",
        "rating": 4,
        "comment": "Impressive storyline and great performances, though a bit complex to follow."
      },
      {
        "email": "example3@example.com",
        "rating": 4.5,
        "comment": "Absolutely brilliant! Keeps you guessing until the very end."
      }
    ]
  }
}
```

### **4. Update Movie Information**

- **Endpoint**: **`/api/movies/:movieId`**
- **Method: `PUT`**
- **Request Body**:

```json
{
  "title": "Inception",
  "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
  "releaseDate": "2010-07-16",
  "genre": "Sci-Fi, Action, Thriller",
  "isDeleted": false,
  "viewCount": 0,
  "reviews": [
    {
      "email": "example1@example.com",
      "rating": 5,
      "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
    },
    {
      "email": "example2@example.com",
      "rating": 4,
      "comment": "Impressive storyline and great performances, though a bit complex to follow."
    },
    {
      "email": "example3@example.com",
      "rating": 4.5,
      "comment": "Absolutely brilliant! Keeps you guessing until the very end."
    }
  ]
}
```

- **Response**:

```json
{
  "success": true,
  "message": "Movie updated successfully!",
  "data": {
    "title": "Inception",
    "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
    "releaseDate": "2010-07-16",
    "genre": "Sci-Fi, Action, Thriller",
    "isDeleted": false,
    "viewCount": 0,
    "reviews": [
      {
        "email": "example1@example.com",
        "rating": 5,
        "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
      },
      {
        "email": "example2@example.com",
        "rating": 4,
        "comment": "Impressive storyline and great performances, though a bit complex to follow."
      },
      {
        "email": "example3@example.com",
        "rating": 4.5,
        "comment": "Absolutely brilliant! Keeps you guessing until the very end."
      }
    ]
  }
}
```

### **5. Delete a Movie**

- **Endpoint`/api/movies/:movieId`**
- **Response**:

```json
{
    "success": true,
    "message": "Movie deleted successfully!",
    "data": null}
}
```

### **6. Search Movies by Title,Description & Genre**

- **Endpoint**: **`GET /api/movies/search?title=searchTerm`**
- **Response**:

```json
{
  "success": true,
  "message": "Movies fetched successfully!",
  "data": [
    {
      "title": "Inception",
      "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
      "releaseDate": "2010-07-16",
      "genre": "Sci-Fi, Action, Thriller",
       "isDeleted": false,
      "viewCount":0,
      "reviews": [
        {
          "email": "example1@example.com",
          "rating": 5,
          "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
        },
        {
          "email": "example2@example.com",
          "rating": 4,
          "comment": "Impressive storyline and great performances, though a bit complex to follow."
        },
        {
          "email": "example3@example.com",
          "rating": 4.5,
          "comment": "Absolutely brilliant! Keeps you guessing until the very end."
        }
      ]
    },
    {
      "title": "The Dark Knight",
      "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      "releaseDate": "2008-07-18",
      "genre": "Action, Crime, Drama",
       "isDeleted": false,
       "viewCount":0,
      "reviews": [
        {
          "email": "reviewer1@example.com",
          "rating": 5,
          "comment": "Heath Ledger's Joker is iconic! A must-watch for any fan of superhero movies."
        },
        {
          "email": "reviewer2@example.com",
          "rating": 4.5,
          "comment": "An intense and gripping film. Heath Ledger's performance steals the show."
        }
      ]
    }
    // Additional movies can be added here...

```

### **7. Retrieve Trending Movies (Movies that has viewCount greater than 5 )**

- **Endpoint**: **`GET /api/movies/trending`**
- **Response**:

```json
{
  "success": true,
  "message": "Trending movies fetched successfully!",
  "data": [
    {
      "title": "Inception",
      "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
      "releaseDate": "2010-07-16",
      "genre": "Sci-Fi, Action, Thriller",
      "isDeleted": false,
      "viewCount": 0,
      "reviews": [
        {
          "email": "example1@example.com",
          "rating": 5,
          "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
        },
        {
          "email": "example2@example.com",
          "rating": 4,
          "comment": "Impressive storyline and great performances, though a bit complex to follow."
        },
        {
          "email": "example3@example.com",
          "rating": 4.5,
          "comment": "Absolutely brilliant! Keeps you guessing until the very end."
        }
      ]
    },
    {
      "title": "The Dark Knight",
      "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      "releaseDate": "2008-07-18",
      "genre": "Action, Crime, Drama",
      "isDeleted": false,
      "viewCount": 0,
      "reviews": [
        {
          "email": "reviewer1@example.com",
          "rating": 5,
          "comment": "Heath Ledger's Joker is iconic! A must-watch for any fan of superhero movies."
        },
        {
          "email": "reviewer2@example.com",
          "rating": 4.5,
          "comment": "An intense and gripping film. Heath Ledger's performance steals the show."
        }
      ]
    }
    // Additional trending movies can be added here...
  ]
}
```

### **8. Retrieve Upcoming Movies (H/W)**

- **Endpoint**: **`GET /api/movies/upcoming`**
- **Response**:

```json
{
  "success": true,
  "message": "Upcoming movies fetched successfully!",
  "data": [
    {
      "title": "Dune",
      "description": "A young nobleman leads desert warriors against the galactic emperor and his father's evil nemesis when they assassinate his father and free their desert world from the emperor's rule.",
      "releaseDate": "2023-10-01",
      "genre": "Sci-Fi, Adventure, Drama",
      "isDeleted": false,
      "viewCount": 0,
      "reviews": [
        {
          "email": "reviewer1@example.com",
          "rating": 5,
          "comment": "Visually stunning with captivating storytelling. A modern sci-fi masterpiece!"
        },
        {
          "email": "reviewer2@example.com",
          "rating": 4.5,
          "comment": "Epic and immersive. The cast delivers exceptional performances."
        }
      ]
    },
    {
      "title": "Avatar 2",
      "description": "The sequel to the highest-grossing film of all time, continuing the story of the Na'vi and their world.",
      "releaseDate": "2024-12-17",
      "genre": "Sci-Fi, Action, Adventure",
      "rating": 0, // No rating yet for upcoming movie
      "reviews": [] // No reviews yet for upcoming movie
    }
    // Additional upcoming movies can be added here...
  ]
}
```

### **9. Retrieve New Releases (Movies that are released in last 7 days)**

- **Endpoint**: **`/api/movies/new-releases`**
- Method: `GET`
- **Response**:

```json
{
  "success": true,
  "message": "New releases fetched successfully!",
  "data": [
    {
      "title": "No Time to Die",
      "description": "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      "releaseDate": "2021-10-08",
      "genre": "Action, Adventure, Thriller",
      "isDeleted": false,
      "viewCount": 0,
      "reviews": [
        {
          "email": "reviewer1@example.com",
          "rating": 5,
          "comment": "Classic James Bond action with a modern twist. Daniel Craig's final outing as Bond does not disappoint!"
        },
        {
          "email": "reviewer2@example.com",
          "rating": 4,
          "comment": "Solid action and great cinematography. A fitting conclusion to Daniel Craig's tenure as James Bond."
        }
      ]
    },
    {
      "title": "Spider-Man: No Way Home",
      "description": "Peter Parker's world turns upside down when he is unmasked as Spider-Man, and his identity is revealed. With his friends and loved ones in danger, Peter must confront powerful foes while dealing with the fallout of his secret being exposed.",
      "releaseDate": "2021-12-17",
      "genre": "Action, Adventure, Fantasy",
      "isDeleted": false,
      "viewCount": 0,
      "reviews": [
        {
          "email": "reviewer3@example.com",
          "rating": 5,
          "comment": "An incredible blend of action, humor, and heart. A must-watch for Marvel fans!"
        },
        {
          "email": "reviewer4@example.com",
          "rating": 4.5,
          "comment": "Mind-blowing and nostalgic. A thrilling addition to the Spider-Man universe."
        }
      ]
    }
    // Additional new releases can be added here...
  ]
}
```

**10.API Endpoint**: **`/api/movies/update-rating` (H/W) **

**Method**: **`POST`**

**Request Body**:

```json
jsonCopy code
{
  "movieId": "12345",
  "userEmail": "newuser@example.com",
  "newRating": 4.8,
  "comment": "Fantastic movie with breathtaking visuals."
}

```

**Response**:

```json
{
  "success": true,
  "message": "Movie rating updated successfully!",
  "data": {
    "title": "Inception",
    "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
    "releaseDate": "2010-07-16",
    "genre": "Sci-Fi, Action, Thriller",
    "isDeleted": false,
    "viewCount": 0,
    "reviews": [
      {
        "email": "example1@example.com",
        "rating": 5,
        "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
      },
      {
        "email": "example2@example.com",
        "rating": 4,
        "comment": "Impressive storyline and great performances, though a bit complex to follow."
      },
      {
        "email": "example3@example.com",
        "rating": 4.5,
        "comment": "Absolutely brilliant! Keeps you guessing until the very end."
      },
      {
        "email": "newuser@example.com",
        "rating": 4.8,
        "comment": "Fantastic movie with breathtaking visuals."
      }
    ]
  }
}
```

# **Bonus: Calculate and Show Average Rating Using Mongoose Virtuals**

To display the average rating for each movie using Mongoose virtuals, follow these steps:

1. **Define the Mongoose Schema with Virtuals**:
2. **Modify the Response to Include the Virtual `avgRating`**:

Ensure that when you send a movie or list of movies as a response, the virtual field **`avgRating`** is included

**Test the Virtual Field**:

Verify that the **`avgRating`** field is correctly calculated and included in the responses by making requests to your API endpoints.

By using Mongoose virtuals, you can dynamically compute and include the average rating for each movie in your responses without storing the computed value in the database. This approach keeps your database schema clean and your calculations up-to-date.
