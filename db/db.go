package db

import (
	"log"
	"disca/config"

	"github.com/jinzhu/gorm"
)

var db *gorm.DB

var err error

func configLoad() string {

	c := config.Config.Database

	ssl := ""

	if c.Ssl == "false" {
		ssl = " sslmode=disable"
	} else {
		ssl = ""
	}

	return "host=" + c.Host + " port=" + c.Port + " user=" + c.User + " dbname=" + c.Name + ssl + " password=" + c.Password
}

// Init is a initializer function that setup database connection
func Init() error {
	db, err = gorm.Open("postgres", configLoad())

	if err != nil {
		log.Println(err)
		panic("E2001: failed to connect database")
	}

	//db.LogMode(true)

	return nil
}

// Sess is a getter of database connection
func Sess() *gorm.DB {
	return db
}
