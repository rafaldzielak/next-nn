import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ea sed! Sequi obcaecati deleniti
        fuga. Ducimus quisquam itaque blanditiis aspernatur consequuntur mollitia animi maiores totam odit
        corporis deleniti obcaecati necessitatibus, quas dicta! Nulla aspernatur tempore quam explicabo
        quisquam blanditiis itaque!
      </p>
      <Link href='/ninjas'>
        <a>See Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
