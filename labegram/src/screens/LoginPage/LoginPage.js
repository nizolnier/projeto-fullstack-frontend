import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { goToFeed } from '../../router/coordinator';
import { login } from '../../services/user'

function LoginPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "" })
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const handleSubmission = (e) => {
    e.preventDefault()
    login(form, setLoading)
    reset()
    goToFeed(history)
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input placeholder="email" type="email" onChange={onChange} value={form.email} name="email" />
        <input placeholder="password" type="password" onChange={onChange} value={form.password} name="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;