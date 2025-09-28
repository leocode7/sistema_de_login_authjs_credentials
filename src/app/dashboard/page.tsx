import { redirect } from "next/navigation";
import { auth, signOut } from "../../../auth";

const Dashboard = async () => {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  return (
    <>
      <div>
        <form action={
          async (formData) => {
            'use server'
            await signOut();
          }
        }>
          <button type="submit">Sair</button>
        </form>
      </div>
      <div>Olá! Bem vindo ao Dashboard</div>
    </>
  )
}

export default Dashboard;
