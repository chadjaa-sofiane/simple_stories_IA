import { SignIn } from "@clerk/nextjs";
import style from "../page.module.css"


const Page = async ({ searchParams }: any) => {
  const { redirectUrl } = searchParams;
  return (
    <section>
      <div className={style["signing_container"]}>
        <SignIn redirectUrl={redirectUrl || "/"}></SignIn>
      </div>
    </section>
  );
};

export default Page;
