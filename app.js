const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/Users');
const Product = require('./db/product');

const Jwt = require('jsonwebtoken');
const JwtKey = 'e-comm';

//setting up port number
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, JwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: "Something went wrong, Please try after some time" });
        }
        resp.send({result, auth: token });
    })
});

app.post('/login', async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, JwtKey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: "Something went wrong, Please try after some time" });
                }
                resp.send({user, auth: token });
            })
        } else {
            resp.send({ result: " No user Found" });
        }
    } else {
        resp.send({ result: " No user Found" });
    }
});

app.post("/add-product", async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result)
})

app.get('/products', async (req, resp) => {
    let products = await Product.find()
    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "No products Found" })
    }
})

app.delete('/products/:id', async (req, resp) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
    console.log(result);
})

app.get("/products/:id", async (req, resp) => {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
        resp.send(result);
    } else {
        resp.send({ result: "No data Update" });
    }
})


app.put("/products/:id", async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result);
});

app.get("/search/:key", async (req, resp) => {
    let result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { price: { $regex: req.params.key } },
            { category: { $regex: req.params.key } },
            { company: { $regex: req.params.key } }
        ]
    });
    resp.send(result);
})

app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
});  