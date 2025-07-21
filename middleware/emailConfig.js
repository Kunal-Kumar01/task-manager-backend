import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "kunal.lohano@gmail.com",
        pass: "qxwd ulyb brol hfkb"
    }
});

export default transporter;
