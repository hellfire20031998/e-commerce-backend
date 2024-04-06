const pool = require('./db_product');
const queries = require('./queries_product');



const getProduct=(req,res)=>{
    // const {id} = req.params;
    pool.query(queries.getProduct,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getProductByColour=(req,res)=>{
    pool.query(queries.getProductByColour,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const getattribute_option=(req,res)=>{
    pool.query(queries.getattribute_option,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const getattribute_type=(req,res)=>{
    pool.query(queries.getattribute_type,(error,resuts)=>{
        if(error) throw error;
        res.status(200).json(resuts.rows);
    })
}

const getByBrand=(req,res)=>{
    pool.query(queries.getByBrand,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const product_attribute =(req,res)=>{
    pool.query(queries.product_attribute,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const product_category=(req,res)=>{
    pool.query(queries.product_category,(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    })
}

const product_image =(req,res)=>{
    pool.query(queries.product_image,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const product_item =(req,res)=>{
    pool.query(queries.product_item,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const product_variation=(req,res)=>{
    pool.query(queries.product_variation,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const size_category =(req,res)=>{
    pool.query(queries.size_category,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const size_option=(req,res)=>{
    pool.query(queries.size_option,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
     })
}


//  adding 

const add_colour=(req,res)=>{
    const{colour_id,colour_name}=req.body;
    pool.query(queries.checkColour,[colour_name],(error,results)=>{
        // console.log(results);
        if(error) throw error;
        if(results.rows.length){
            res.send("Colour already exist");
        }
        else{
            pool.query(queries.add_colour,[colour_id,colour_name],(error,results)=>{
                if(error)throw error;
                res.status(201).send("Colour added");
            })
        }
    })
}
const add_size_option=(req,res)=>{
    const size_order=req.body;
    pool.query(queries.checkSizeExist,[size_order],(error,results)=>{
        if(error) throw error;
        if(results.rows.length){
            res.send("size already exist");
        }
        pool.query(queries.add_size,[size_id,size_order,sort_order,size_category_id],(error,results)=>{
            if(error) throw error;
            res.status(201).send("Size added");
        })
    })
}



module.exports={
    add_size_option,
    add_colour,
    product_item,
    product_variation,
    size_category,
    size_option,
    product_image,
    product_category,
    product_attribute,
    getByBrand,
    getProduct,
    getProductByColour,
    getattribute_option,
    getattribute_type,
};