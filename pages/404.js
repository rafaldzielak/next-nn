import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), 2000);
  }, []);

  return (
    <div className='not-found'>
      <h1>Oooops...</h1>
      <h2>Page not found!</h2>
      <p>
        Go back to the{" "}
        <Link href='/'>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
