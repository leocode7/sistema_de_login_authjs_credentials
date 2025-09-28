import styles from "./page.module.css";
import Login from "./componentes/Login";
import { auth } from "../../auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div>
      <Login />
    </div>
  );
}
