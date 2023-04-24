import type { V2_MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "../styles/header.css";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <div>
      </div>
    </>
  );
}
