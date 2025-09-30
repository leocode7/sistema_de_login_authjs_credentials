'use client'

import { useActionState, useEffect } from "react";
import styles from "./Login.module.css"
import { loginAction } from "./loginAction";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    //router.replace('/dashboard')
    router.refresh()
  }

  return (
    <div className={styles.container}>
      <form className={styles.formulario} action={formAction}>
        <Image className={styles.avatar} src='/avatar.svg' alt="Avatar profile" width={84} height={84} priority={true}/>
        {state.message && <p className={styles.error_message}>{state.message}</p>}
        <input name="email" type="email" placeholder="Digite seu email" />
        <input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login;
