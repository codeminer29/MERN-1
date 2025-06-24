const { z } = require("zod");

//creating an object schema.
const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is require" })
        .trim()
        .min(3, { message: "Name must be atleast 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is require" })
        .trim()
        .email({ message: "Invalid Email address" })
        .min(3, { message: "Email must be atleast 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    phone: z
        .string({ required_error: "Phone is require" })
        .trim()
        .min(10, { message: "Phone must be atleast 10 characters" })
        .max(20, { message: "Phone must not be more than 20 characters" }),
    password: z
        .string({ required_error: "Password is require" })
        .min(7, { message: "Password must be atleast 7 characters" })
        .max(1024, { message: "Password must not be more than 1024 characters" }),
});

module.exports = signupSchema;