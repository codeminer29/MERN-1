const { z } = require("zod");
const contactSchema = z.object({
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
    message: z
        .string({ required_error: "message is require" })
        .trim()
        .min(3, { message: "message must be atleast 3 characters" })
        .max(255, { message: "message must not be more than 255 characters" }),
    
});

module.exports = contactSchema;