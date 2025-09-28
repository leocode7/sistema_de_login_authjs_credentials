'use client'

import { useActionState, useEffect } from "react";
import styles from "./Login.module.css"
import { loginAction } from "./loginAction";
import { useRouter } from "next/navigation";

export type FormState = {
  success: boolean;
  message?: string;
}

const initialState: FormState = {
  success: false,
  message: undefined,
}

const Login = () => {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);
  const router = useRouter();

  if (state.success) {
    router.replace('/dashboard')
  }

  return (
    <div className={styles.container}>
      <form className={styles.formulario} action={formAction}>
        {state.message && <p className={styles.error_message}>{state.message}</p>}
        <label htmlFor="">Email</label>
        <input name="email" type="email" placeholder="exemplo@exemplo.com" />
        <label htmlFor="password">Senha</label>
        <input name="password" type="password" placeholder="****" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login;
