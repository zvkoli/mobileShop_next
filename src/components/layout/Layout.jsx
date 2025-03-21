import { useRouter } from "next/router";
import Navbar from "@/module/Navbar";
import Providers from "@/redux_toolkit/Providers";

const Layout = ({ children }) => {
  const router = useRouter();

  const isLoginOrRegister =
    router.pathname === "/auth/signin" || router.pathname === "/auth/signup";

  return (
    <Providers>
      <div className="max-lg:hidden max-md:hidden max-sm:hidden">
        {!isLoginOrRegister && (
          <header className="w-full h-24 absolute">
            <Navbar />
          </header>
        )}
        <main>{children}</main>
      </div>
    </Providers>
  );
};

export default Layout;
