# Part 1 API spec

Implement the following API methods. For the standard criteria, you do not need to implement any validation.

## Books

### GET /books

Parameter | Value | Required | Description
-|-|-|-
`type` | One of `fiction` or `nonfiction` | No | When `fiction` only return fiction books. When `nonfiction` only return non fiction books
`topic` | Any string | No | Only return books of the provided topic

Example Request
```sh
curl localhost:3030/books?type=fiction
```
Example Response
```json
{
  "books": [
    {
      "id":40,
      "title": "autem natus et nihil magnam facilis",
      "type": "Fiction",
      "author": "Ardith Schaden",
      "topic": "literary fiction",
      "publicationDate": "2020-09-13T01:03:23.774+01:00",
      "pages": 300
    },
    {
      "id": 41,
      "title": "in modi ut totam ea",
      "type": "Fiction",
      "author": "Gwen Goyette",
      "topic": "horror",
      "publicationDate": "2005-06-14T14:54:50.097+01:00",
      "pages": 300
    }
  ]
}
```

### GET /books/:id
Example Request
```sh
curl localhost:3030/books/40
```
Example Response
```json
{
  "book" : {
      "id":40,
      "title": "autem natus et nihil magnam facilis",
      "type": "Fiction",
      "author": "Ardith Schaden",
      "topic": "literary fiction",
      "publicationDate": "2020-09-13T01:03:23.774+01:00",
      "pages": 300 
    }
}
```

### POST /books

Example Request
```sh
curl -X POST localhost:3030/books \
-H 'Content-Type: application/json' \
-d '{"title": "2312", "type": "Fiction", "author":"Kim Stanley Robinson", "topic":"science fiction","publicationDate":"2020-09-13T01:03:23.774+01:00"}'
```

Example Response
```json
{
  "book" : {
      "id":42,
      "title": "2312",
      "type": "Fiction",
      "author": "Kim Stanley Robinson",
      "topic": "science fiction",
      "publicationDate": "2020-09-13T01:03:23.774+01:00",
      "pages": 300
    }
}
```

## Pets

### GET /pets

Parameter | Value | Required | Description
-|-|-|-
`type` | Any string | No | Only returns pets of the provided type (i.e. `dog`)
`microchip` | `true` or `false` | No | When `true` only return pets with a microchip. When `false`, only return pets without a microchip.

Example Request
```sh
curl localhost:3030/pets?type=dog
```

Example Response
```json
{
  "pets": [
    {
      "id":50,
      "name": "Lenora",
      "age": 3,
      "type": "dog",
      "breed": "Perro de Pastor Mallorqui",
      "microchip": false
    },
    {
      "id": 51,
      "name": "Larue",
      "age": 16,
      "type": "dog",
      "breed": "Perro de Pastor Mallorquin",
      "microchip": true
    }
  ]
}
```

### GET /pets/:id
Example Request
```sh
curl localhost:3030/pets/50
```

Example Response
```json
{
  "pet" : {
      "id":50,
      "name": "Lenora",
      "age": 3,
      "type": "dog",
      "breed": "Perro de Pastor Mallorqui",
      "microchip": false
    }
}
```

### POST /pets

Example Request
```sh
curl -X POST localhost:3030/pets \
-H 'Content-Type: application/json' \
-d '{"name": "Ollie", "age": 8, "type":"cat", "breed":"tabby","microchip":true}'
```

Example Response
```json
{
  "pet" : {
    "id":52,
    "name": "Ollie", 
    "age": 8, 
    "type":"cat", 
    "breed":"tabby",
    "microchip":true
  }
}
```