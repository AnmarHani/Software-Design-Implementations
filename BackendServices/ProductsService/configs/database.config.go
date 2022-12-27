package configs

import (
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
)

var Database *sql.DB

func DatabaseConnection() error {
	db, err := sql.Open("sqlite3", "../products.db")
	if err != nil {
		return err
	}
	db.Exec("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), price INTEGER)")
	Database = db
	return nil
}
