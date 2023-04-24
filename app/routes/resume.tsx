import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";

export default function Resume(){
  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}