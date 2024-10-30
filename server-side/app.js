const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const connectDB = require("./db/dbserver");
const productRoutes = require("./routes/product");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3001;
const url = process.env.CONNECTION_URL.replace("<db_password>", process.env.PASSWORD);


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


connectDB(url);

app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
