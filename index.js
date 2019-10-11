const { Pool } = require('pg')

const config = {
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'library',
  port: 5434
}

const pool = new Pool(config)

const getBooks = async () => {
  try {
    const { rows } = await pool.query('select * from books')
    pool.end()
  } catch (error) {
    console.log('getBooksError', error)
  }
}

const insertUser = async () => {
  try {
    const text = 'INSERT INTO users(username, password) VALUES ($1, $2)'
    const values = ['john', 'john123']
    const res = await pool.query(text, values)
    console.log(res)
    pool.end()
  } catch (error) {
    console.log('insertUserError', error)
  }
}

const deleteUser = async () => {
  try {
    const text = 'DELETE FROM users WHERE username = $1'
    const values = ['john']
    const res = await pool.query(text, values)
    console.log(res)
    pool.end()
  } catch (error) {
    console.log('deleteUserError', error)
  }
}

const editUser = async () => {
  try {
    const text = 'UPDATE users SET username = $1, password = $2 WHERE username = $3'
    const values = ['bruce', 'bruce123', 'John']
    const res = await pool.query(text, values)
    console.log(res)
    pool.end()
  } catch (error) {
    console.log('editUserError', error)
  }
}

// getBooks()
// insertUser()
// deleteUser()
editUser()