module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "",
    "host": "",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "db",
    "host": "123.456.789",
    "dialect": "mysql"
  }
}
