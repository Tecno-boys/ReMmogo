import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <SideBar />
      <Main />
    </>
  );
}
