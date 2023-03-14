const mongoose = require("mongoose")

const dburl = "mongodb://127.0.0.1:27017/7nov";

mongoose.connect(dburl).then(()=>{
    console.log("db connected successfully");
}).catch(err=>{
    console.log(err);
})


const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    qty:{
        type:Number,
        default:0
    }
})


const Product = new mongoose.model("Product",productSchema);

const addProduct=()=>{
    const p1=new Product({name:"fan",price:500,company:"usha"})
    p1.save().then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
}
// addProduct();


const addManyProduct=()=>{
    const p1=new Product({name:"fan",price:1300,qty:4})
    const p2=new Product({name:"tv",price:5400,qty:8})
    const p3=new Product({name:"laptop",price:44500,qty:6})

    Product.insertMany([p1,p2,p3]).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
}
// addManyProduct();



const viewProduct= async ()=>{
    // Product.find().then(data=>{
    //     console.log(data);
    // }).catch(err=>{
    //     console.log(err);
    // })

    try {
        const data= await Product.find({name:"tv"});
        console.log(data[0].price);
    } catch (error) {
        console.log(err);
    }
}
// viewProduct()



const viewFilter=async ()=>{
    try {
        const data=await Product.findOne({name:"tv"})
        console.log(data.price);
    } catch (error) {
     console.log(error);   
    }
}
// viewFilter()



const deleteProduct=async ()=>{
    try {
        const data=await Product.findByIdAndDelete({_id:"63abc92cc7ba54048e1a5ff9"})
        // const data=await Product.deleteMany({name:"tv"})
        // const data=await Product.deleteOne({name:"fan"})
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// deleteProduct()



const updateProduct=async ()=>{
    try {
        const data=await Product.findByIdAndUpdate( "63abc92cc7ba54048e1a5ff9",{qty:10})
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// updateProduct()



















