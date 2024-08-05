const client = require("../../db/index");

const getAllBooks = async () => {
  try {
    const response = await client.query("SELECT * FROM books");
    return response.rows;
  } catch (error) {
    console.log("Error:", error);
  }
};

const createBook = async (book) => {
  try {
    const response = await client.query(`
      INSERT INTO books (title, type, author, topic, publication_date, pages)
      VALUES
      ('${book.title}', '${book.type}', '${book.author}', '${book.topic}', '${book.publication_date}', '${book.pages}' ) returning *
    `);
    return response.rows;
  } catch (error) {
    console.log("Error:", error);
  }
};

const getBookById = async (id) => {
  try {
    const response = await client.query(`SELECT * FROM books WHERE id = ${id}`);
    return response.rows[0];
  } catch (error) {
    console.log("Error:", error);
  }
};

const updateBook = async (id, bookInfo) => {
  try {
    const response = await client.query(`UPDATE books
      SET title = '${bookInfo.title}', type = '${bookInfo.type}', author = '${bookInfo.author}', topic = '${bookInfo.topic}', publication_date = '${bookInfo.publication_date}', pages = '${bookInfo.pages}'
      WHERE id = ${id} RETURNING *`);

    return response.rows[0];
  } catch (error) {
    console.log("Error:", error);
  }
};

const deleteBook = async (id) => {
    try {
      const response = await client.query(
        `DELETE FROM books WHERE id = ${id} RETURNING *`
      );
      return response.rows;
    } catch (error) {
      console.log("Error:", error);
    }
}
module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook
};
