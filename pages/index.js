import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ea sed! Sequi obcaecati deleniti
        fuga. Ducimus quisquam itaque blanditiis aspernatur consequuntur mollitia animi maiores totam odit
        corporis deleniti obcaecati necessitatibus, quas dicta! Nulla aspernatur tempore quam explicabo
        quisquam blanditiis itaque!
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Listing</a>
      </Link>
    </div>
  );
}
