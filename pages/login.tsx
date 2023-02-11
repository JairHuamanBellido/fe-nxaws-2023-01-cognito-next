import Head from "next/head";
import { LoginPage } from "@/src/application/login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Helox | Login</title>
        <meta name="description" content="Authentication for Helox System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginPage />
    </>
  );
}
