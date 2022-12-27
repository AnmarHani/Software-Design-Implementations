package controllers

import (
	"anmar/first-backend-api/configs"
	"anmar/first-backend-api/models"
	"github.com/gin-gonic/gin"
	"net/http"
	"fmt"
)


func GetAllProducts(ctx *gin.Context){
	configs.DatabaseConnection()
	rows, err := configs.Database.Query("SELECT * from products")
	fmt.Println(rows, err)
	// if err != nil {
		// 	return nil, err
		// }
		
		defer rows.Close()
		
		var products []models.Product
		
		for rows.Next() {
			var oneProduct models.Product
			err = rows.Scan(&oneProduct.Id, &oneProduct.Title, &oneProduct.Description, &oneProduct.Price)
			fmt.Println(err)
			
			// if err != nil {
			// 	return nil, err
			// }
			
			products = append(products, oneProduct)
		}
	
	err = rows.Err()
	fmt.Println(err, products)
	
	// if err != nil {
	// 	return nil, err
	// }
	
	ctx.JSON(http.StatusOK, products)
	// return products, err
}

func GetOneProduct(ctx *gin.Context){
	configs.DatabaseConnection()
	id := ctx.Param("id")
	rows, err := configs.Database.Query(fmt.Sprintf("SELECT * from products WHERE id=%v", id))
	fmt.Println(rows, err)
	// if err != nil {
		// 	return nil, err
		// }
		
		defer rows.Close()
		
		var products []models.Product
		
		for rows.Next() {
			var oneProduct models.Product
			err = rows.Scan(&oneProduct.Id, &oneProduct.Title, &oneProduct.Description, &oneProduct.Price)
			fmt.Println(err)
			
			// if err != nil {
			// 	return nil, err
			// }
			
			products = append(products, oneProduct)
		}
	
	err = rows.Err()
	fmt.Println(err, products)
	
	// if err != nil {
	// 	return nil, err
	// }
	
	ctx.JSON(http.StatusOK, products)
	// return products, err
}

func CreateProduct(ctx *gin.Context){
	configs.DatabaseConnection()
	var newProduct models.Product;
	ctx.BindJSON(&newProduct)
	_, err := configs.Database.Exec(fmt.Sprintf("INSERT INTO products VALUES (%v, '%v', '%v', %v)", newProduct.Id,newProduct.Title,newProduct.Description,newProduct.Price))
	fmt.Println(err)
	ctx.JSON(http.StatusCreated, newProduct)
}

func UpdateProduct(ctx *gin.Context){
	configs.DatabaseConnection()
	id := ctx.Param("id")
	var updatedProduct models.Product;
	ctx.BindJSON(&updatedProduct)
	_, err := configs.Database.Exec(fmt.Sprintf("UPDATE products SET title='%v', description='%v', price=%v WHERE id=%v", updatedProduct.Title,updatedProduct.Description,updatedProduct.Price, id))
	fmt.Println(err)
	ctx.JSON(http.StatusOK, updatedProduct)
}

func DeleteProduct(ctx *gin.Context){
	configs.DatabaseConnection()
	id := ctx.Param("id")
	_, err := configs.Database.Exec(fmt.Sprintf("DELETE FROM products WHERE id=%v", id))
	fmt.Println(err)
	ctx.JSON(http.StatusOK, "Deleted")
}