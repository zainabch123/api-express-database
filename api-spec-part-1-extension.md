# Part 1 Extensions

## Extension 1
Update the `GET /pets` API you implemented in part 1 to support paging using the following additional parameters. You will need to use [LIMIT](https://www.postgresql.org/docs/9.3/queries-limit.html) and [OFFSET](https://www.postgresql.org/docs/9.3/queries-limit.html) in your calls to the backend.

Parameter | Value | Required | Description
-|-|-|-
`page` | Number | No | https://www.postgresql.org/docs/9.3/queries-limit.html
`per_page` | Number | No | The number of records to return per page. Maximum should be 50, minimum is 10.

## Extension 2
Update your `POST /pets` API to validate the json provided in the request body. If any field is missing, or has an invalid type or length, return an appropriate error message and response code to the client. You can implement this logic yourself, or use another library such as [express validator](https://express-validator.github.io/docs/)

## Extension 3
So far we've been including all our database code directly in our route handlers. In a real application, this would become difficult to maintain as the code base grows.

It is considered best practice in express split your code into different *layers*. This helps keep our code decoupled. Rather than your route handler implementing all your logic, you can introduce controller functions that handle your routes as well as specific functions for calling the database. There is no single "correct" approach, but here are some examples:

* [MDN Express controllers and routes](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
* [Express REST API structure](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)

Reach these examples, and implement some of these patterns in to your code, specifically focussing on controller functions to implement request and response handling logic and database functions that encapsulate database access and SQL.