const getProduct ="select * from product";
const getProductByColour="select * from colour";
const getattribute_option="select* from attribute_option";
const getattribute_type="select * from attribute_type";
const getByBrand="select*from brand";
const product_attribute="select * from product_attribute";
const product_category ="select * from product_category";
const product_image="select * from product_image";
const product_item="select * from product_item";
const product_variation="select * from product_variation";
const size_category= "select * from size_category";
const size_option="select * from size_option";



// adding queries
const checkColour="select colour_name from colour colour_name where colour_name=$1";
const add_colour="insert into colour (colour_id,colour_name) values($1,$2)";

const checkSizeExist="Select size_name from size_option where size_name=$1";
const add_size="insert into size_option (size_id,size_name,sort_order,size_category_id) values($1,$2,$3,$4)";




module.exports={
    checkSizeExist,
    add_size,
    add_colour,
    checkColour,
    product_item,
    product_variation,
    size_category,
    size_option,
    product_image,
    product_category,
    product_attribute,
    getByBrand,
    getattribute_type,
    getProductByColour,
    getProduct,
    getattribute_option,
};