import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/root.css";
import bodyStyles from "./styles/body.css";
import headerStyles from "./styles/header.css";
import navStyles from "./styles/navbar.css";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles },
          { rel: "stylesheet", href: headerStyles},
          { rel: "stylesheet", href: navStyles},
          { rel: "stylesheet", href: bodyStyles},];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div className="mainGrid">
          <NavBar />
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
//Deployed at https://portfolio-jacobbartlett24.vercel.app/