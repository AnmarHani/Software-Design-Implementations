package routers

import (
	"github.com/gin-gonic/gin"
	"anmar/first-backend-api/controllers"
)

type ProductRouter struct {
	Router *gin.Engine
}

func (object *ProductRouter) GetGroup() gin.RouterGroup {
	RouterGroup := object.Router.Group("/products")
	{
		RouterGroup.GET("/", controllers.GetAllProducts)
		RouterGroup.GET("/:id", controllers.GetOneProduct)

		RouterGroup.POST("/create", controllers.CreateProduct)

		RouterGroup.PUT("/update/:id", controllers.UpdateProduct)
		
		RouterGroup.DELETE("/delete/:id", controllers.DeleteProduct)
	}

	return *RouterGroup
}