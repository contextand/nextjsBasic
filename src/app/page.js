import Image from "next/image";
import hello from "/public/hello.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <br></br>
      <Image src={hello} alt="인사" />
    </>
  );
}
