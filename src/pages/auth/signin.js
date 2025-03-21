import Head from "next/head";
import SigninForm from "@/templates/form/SigninForm";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import AboutMessage from "@/module/AboutMessage";

const Signin = () => {
  const router = useRouter();

  const signInHandler = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.status === 200) {
      AboutMessage({ message: "خوش آمدید" });
      router.push("/");
    } else {
      const errorMessage = res.error.replace("Error: ", "");
      AboutMessage({ message: errorMessage });
    }
  };

  return (
    <>
      <Head>
        <title>Signin</title>
      </Head>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-5 bg-[#242424]">
        <SigninForm signInHandler={signInHandler} />
      </div>
    </>
  );
};

export default Signin;
