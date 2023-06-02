import { SignUp } from "@clerk/nextjs";
import style from "../page.module.css";

const Page = async () => {
  return (
    <section>
      <div className={style["signing_container"]}>
        <SignUp />
      </div>
    </section>
  );
};

export default Page;
