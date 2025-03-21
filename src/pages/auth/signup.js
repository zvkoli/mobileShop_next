import { useRouter } from "next/router";
import Head from "next/head";
import AboutMessage from "@/module/AboutMessage";
import SignupForm from "@/templates/form/SignupForm";

const Signup = () => {
  const router = useRouter();

  const signUpHandler = async (data) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm_password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();

    if (result.status === "success") {
      AboutMessage({ message: result.message });
      router.push("/signin");
    } else if (result.status === "failed") {
      AboutMessage({ message: result.message });
    }
  };

  return (
    <>
      <Head>
        <title>Signup</title>
        <link rel="icon" href="/" />
      </Head>
      <div className="w-full h-screen flex flex-col justify-center items-center px-10 bg-[#242424]">
        <SignupForm signUpHandler={signUpHandler} />
      </div>
    </>
  );
};

export default Signup;
