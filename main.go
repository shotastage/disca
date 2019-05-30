package main

import (
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func port() string {
	port := os.Getenv("PORT")
	if len(port) == 0 {
		port = "8080"
	}
	return ":" + port
}

func main() {

	// Initialize configurator
	// ===========================================================================
	err := config.Init("Cloudfile")
	if err != nil {
		panic("E2001: Configuration failure!")
	}

	// Startup database connection
	// ===========================================================================
	db.Init()
	if err != nil {
		panic("E2001: Database connection failure!")
	}

	migrations.Migrate()

	defer db.Sess().Close()

	// Start server
	// ===========================================================================
	e := routerMaker()

	// Setup middleware
	// ===========================================================================
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	// Setup logger
	// ===========================================================================
	e.HideBanner = true
	e.Logger.Fatal(e.Start(port()))
}
