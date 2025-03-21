import { Formik, Form } from "formik";
import FieldForm from "@/module/FieldForm";
import Link from "next/link";
import { Button } from "antd";

const SigninForm = ({ signInHandler }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "لطفا ایمیل خود را وارد کنید";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "آدرس ایمیل را به درستی وارد کنید";
        }

        if (!values.password) {
          errors.password = "لطفا رمز عبور خود را وارد کنید";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await signInHandler(values);
        } catch (error) {
          console.error(error);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-5/12 h-auto flex flex-col justify-start items-center gap-6 rounded-[0.375rem] bg-[#1A1A1A] py-10">
          <h1 className="text-xl text-[#FBCB07] cursor-default">
            ورود به حساب کاربری
          </h1>
          <div className="w-5/6 h-auto flex flex-col justify-center items-center gap-2">
            <FieldForm
              type="text"
              name="email"
              minLength="6"
              placeholder="ایمیل"
            />
            <FieldForm
              type="password"
              name="password"
              minLength="6"
              maxLength="12"
              placeholder="رمز عبور"
            />
            <Link
              href={"/auth/signup"}
              className="w-full h-full flex flex-row justify-start items-center text-[0.60rem] text-[#FBCB07]"
            >
              ثبت‌ نام نکرده‌اید؟ همین حالا حساب کاربری بسازید!
            </Link>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="w-4/12 h-auto flex flex-row justify-center items-center rounded-md p-3 text-[#C3C4C5] !shadow-none text-sm bg-[#242424] transition-all duration-500 hover:!bg-[#FBCB07] hover:!text-black"
            loading={isSubmitting}
          >
            ورود
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;
