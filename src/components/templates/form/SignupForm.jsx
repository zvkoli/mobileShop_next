import { Formik, Form } from "formik";
import FieldForm from "@/module/FieldForm";
import Link from "next/link";
import { Button } from "antd";

const SignupForm = ({ signUpHandler }) => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirm_password: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.fullName) {
          errors.fullName = "لطفا نام و نام خانوادگی خود را وارد کنید";
        } else if (!/^[\u0600-\u06FF\s]+$/.test(values.fullName)) {
          errors.fullName =
            "نام و نام خانوادگی فقط باید شامل حروف فارسی و فاصله باشد";
        }

        if (!values.email) {
          errors.email = "لطفا ایمیل خود را وارد کنید";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "آدرس ایمیل را به درستی وارد کنید";
        }

        if (!values.password) {
          errors.password = "لطفا رمز عبور خود را وارد کنید";
        } else if (!/^.*$/.test(values.password)) {
          errors.password = "رمز عبور را به درستی وارد کنید";
        }

        if (!values.confirm_password) {
          errors.confirm_password = "لطفا تکرار رمز عبور را وارد کنید";
        } else if (values.password !== values.confirm_password) {
          errors.confirm_password = "رمز عبور و تکرار آن باید یکسان باشند";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        signUpHandler(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-5/12 h-auto flex flex-col justify-start items-center gap-6 rounded-[0.375rem] bg-[#1A1A1A] py-10">
          <h1 className="text-xl text-[#FBCB07] cursor-default">ثبت نام</h1>
          <div className="w-5/6 h-auto flex flex-col justify-center items-center gap-2">
            <FieldForm
              type="text"
              name="fullName"
              minLength="6"
              maxLength=""
              placeholder="نام و نام خانوادگی"
            />
            <FieldForm
              type="text"
              name="email"
              minLength="6"
              maxLength=""
              placeholder="ایمیل"
            />
            <FieldForm
              type="text"
              name="password"
              minLength="6"
              maxLength="12"
              placeholder="رمز عبور"
            />
            <FieldForm
              type="text"
              name="confirm_password"
              minLength="6"
              maxLength="12"
              placeholder="تکرار رمز عبور"
            />
            <Link
              href={"/auth/signin"}
              className="w-full h-full flex flex-row justify-start items-center text-[0.60rem] text-[#FBCB07]"
            >
              حساب کاربری دارید؟ وارد شوید!
            </Link>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            className="w-4/12 h-auto flex flex-row justify-center items-center rounded-md p-3 text-[#C3C4C5] !shadow-none text-sm bg-[#242424] transition-all duration-500 hover:!bg-[#FBCB07] hover:!text-black"
            loading={isSubmitting}
          >
            ثبت نام
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
