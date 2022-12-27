package main

import (
	// "fmt"
	// "net/http"

	// "encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"anmar/first-backend-api/routers"
)

func main() {
	router := gin.Default();
	productRouter := routers.ProductRouter{router}
	productRouter.GetGroup()
	router.Use(cors.Default())
	router.Run("0.0.0.0:8080")
}
