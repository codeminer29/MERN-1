const { z } = require("zod");
const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is require" })
        .trim()
        .email({ message: "Invalid Email address" })
        .min(3, { message: "Email must be atleast 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
        .string({ required_error: "Password is require" })
        .min(7, { message: "Password must be atleast 7 characters" })
        .max(1024, { message: "Password must not be more than 1024 characters" }),
});

module.exports = loginSchema;