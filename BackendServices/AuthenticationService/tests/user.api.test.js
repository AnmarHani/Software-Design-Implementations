// const mongoose = require("mongoose");
const request = require("supertest");

// jest.setTimeout()
  
describe("GET /products", () => {
    it("should get all products on the db", async () => {
      const res = await request(`localhost:8081`).get("/products/")
      expect(res.statusCode).toBe(200);
      // expect(res.body.length).toBeGreaterThan(0);
      expect(res.body).not.toBe("");
    });
  });  
  // const res = await request(app).post("/products/create").send({
  //   id: 1,
  //   title: "Product 2",
  //   price: 1009,
  //   description: "Description 2",
  // })

  