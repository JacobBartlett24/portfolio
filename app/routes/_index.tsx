import type { V2_MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "../styles/header.css";
import Body from "~/components/Body";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Jacob's Portfolio" }];
};

export default function Index() {
  return (
    <>
      <div>
        <Body />
      </div>
    </>
  );
}
