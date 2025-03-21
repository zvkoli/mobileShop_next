import connectDB from "@/utils/connectDB";
import Customer from "models/Customer";
import { hashPassword } from "@/utils/auth";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل وارد شده معتبر نیست")
    .required("وارد کردن ایمیل الزامی است"),
  password: yup.string().required("رمز عبور را وارد کنید"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبور و تکرار آن باید یکسان باشند")
    .required("تکرار رمز عبور را وارد کنید"),
  fullName: yup
    .string()
    .matches(
      /^[\u0600-\u06FF\s]+$/,
      "نام و نام خانوادگی باید تنها شامل حروف فارسی و فاصله باشد"
    )
    .optional(),
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "failed", message: "Method Not Allowed" });
  }

  try {
    await connectDB();
  } catch (error) {
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
  }

  const { email, password, confirm_password, fullName } = req.body;

  try {
    await validationSchema.validate(
      { email, password, confirm_password, fullName },
      { abortEarly: false }
    );
  } catch (validationError) {
    return res.status(422).json({
      status: "failed",
      message: "Invalid Data",
      errors: validationError.errors,
    });
  }

  const existingUser = await Customer.findOne({ email: email });

  if (existingUser) {
    return res
      .status(422)
      .json({ status: "failed", message: "شما قبلا ثبت نام کرده اید" });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await Customer.create({
    email: email,
    password: hashedPassword,
    fullName: fullName,
  });

  // console.log(newUser);

  res
    .status(201)
    .json({ status: "success", message: "ثبت نام شما با موفقیت انجام شد" });
}
