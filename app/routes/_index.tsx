import type { V2_MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import {BsGithub} from "react-icons/bs";

import styles from "../styles/header.css";
import Header from "../components/Header";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <Header />
      <div className="main">

      </div>
    </>
  );
}
