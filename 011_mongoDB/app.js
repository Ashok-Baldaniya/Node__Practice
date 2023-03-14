
const mongoClient = require("mongodb").MongoClient
const dbname = "ashok"
const dburl = "mongodb://127.0.0.1:27017"

mongoClient.connect(dburl, (err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("db connected...");

    const db = client.db(dbname)
    console.log("connected with database success.....");



    /*   **************** create collection ***************  */


    // db.createCollection("emp", (err, resp) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    //     console.log("collection created successfully....");
    // })



    /*   **************** for insert single data ***************  */


    // db.collection("emp").insertOne({ name: "ashok", sal: 50000 }, (err, resp) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    //     console.log(resp);
    // })



    /*   **************** for insert multiple data ***************  */

    // var dt=[{ name: "ashok", sal: 100000 },{name: "vivek", sal: 30000},{name: "ramesh", sal: 80000}]
    // db.collection("emp").insertMany(dt,(err, resp) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    //     console.log(resp);
    // })


    /*   **************** for find data ***************  */

    // db.collection("emp").find({}).toArray((err, result) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    //     console.log(result);
    // })


    /*  ************ for find data with projection **********  */

    // db.collection("emp").find({},{projection:{name:1,_id:0}}).toArray((err, result) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    //     console.log(result);
    // })


    /*  ********* for find data with perticular char  *********  */

    /* for find Ex. :-->

        any place  pa -> /pa/
        start with pa -> /^pa/ 
        end with pa   -> /pa$/
        3rd char h    -> /^..h/
        */


        // db.collection("emp").find({name:/^..h/}).toArray((err, result) => {
        //     if (err) {
        //         console.log(err);
        //         return
        //     }
        //     console.log(result);
        // })



        /*  ************ for find data with projection **********  */


    // db.collection("emp").find({}).sort({name:1}).toArray((err, result) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    //     console.log(result);
    // })



    /*  ************ for delete data  ************  */

    // db.collection("emp").deleteOne({name:"ashok"},(err, result) => {
    //             if (err) {
    //                 console.log(err);
    //                 return
    //             }
    //             console.log(result);
    //         })

            // db.collection("emp").deleteMany({name:"ashok"},(err, result) => {
            //     if (err) {
            //         console.log(err);
            //         return
            //     }
            //     console.log(result);
            // })        

    


    /*  ************ for update data  ************  */


    // db.collection("emp").updateOne({name:"vivek"},{$set:{sal:60000}},(err, result) => {
    //             if (err) {
    //                 console.log(err);
    //                 return
    //             }
    //             console.log(result);
    //         })

            // db.collection("emp").updateMany({name:"vivek"},{$set:{sal:3000}},(err, result) => {
            //     if (err) {
            //         console.log(err);
            //         return
            //     }
            //     console.log(result);
            // })
})





