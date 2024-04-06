const { Router } = require("express")
const controller = require("./controller_product");

const productRoute = Router();

productRoute.get("/", controller.getProduct);

productRoute.get("/colour", controller.getProductByColour);

productRoute.get("/attribute_option", controller.getattribute_option);

productRoute.get("/attribute_type",controller.getattribute_type);

productRoute.get("/brand",controller.getByBrand);

productRoute.get("/product_attribute",controller.product_attribute);

productRoute.get("/product_category",controller.product_category);

productRoute.get("/product_image",controller.product_image);

productRoute.get("/product_item",controller.product_item);

productRoute.get("/product_variation",controller.product_variation);

productRoute.get("/size_category",controller.size_category);

productRoute.get("/size_option",controller.size_option);


// add/put route

productRoute.post("/add_colour",controller.add_colour);

productRoute.post("/size_option",controller.add_size_option);

module.exports=productRoute;