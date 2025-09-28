'use server'

import type { FormState } from "@/app/componentes/Login";
import { signIn } from "../../../../auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const loginAction = async (_prevState: any, formData: FormData) => {
  try {
    await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: false,
    });
    return {success: true}
  } catch (error) {
    console.log(error)
    return { success: false, message: 'Dados de login incorretos' }
  }
}
// finally {
//   redirect('/dashboard')
// }
