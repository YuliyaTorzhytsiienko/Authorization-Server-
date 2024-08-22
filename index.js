const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use("/", router);

const start = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://YuliyaKhula:1009@cluster0.vlf4nan.mongodb.net/auth_roles?retryWrites=true&w=majority&appName=Cluster0`
        );
        app.listen(PORT, () => console.log(`Server starded on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
start();
