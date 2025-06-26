const User = require("../models/user-model");
const bcrypt = require("bcryptjs")

//
//
//      Home Logic
//
//

const home = async (req, res) => {
    try {
        res.status(200).send("Hello, welcome to codeminer29 using router");
    } catch (error) {
        console.log(error);
    }
};

//
//
//      registration Logic
//
//

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        //hash password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password });

        res.status(201).json({ msg: "Registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() });
    } catch (error) {
        // res.status(500).json("internal server error");
        next(error);
    }
};

//
//
//      Login Logic
//
//

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExits = await User.findOne({ email });
        console.log(userExits);


        if (!userExits) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // const user = await bcrypt.compare(password, userExits.password);

        const user = await userExits.comparePassword(password);

        if (user) {
            res.status(200).json({ msg: "Login successful", token: await userExits.generateToken(), userId: userExits._id.toString() });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }

    } catch (error) {
        // res.status(500).json("Internal server error");
        next(error)
    }
}

module.exports = { home, register, login };