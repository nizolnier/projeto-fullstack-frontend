import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../services/user'

function SignUpPage() {
  const { form, onChange, reset } = useForm({ name: "", email: "", nickname: "", password: "", profilePicture: "" })
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const handleSubmission = (e) => {
    e.preventDefault()
    signUp(form, history, setLoading)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input placeholder="name" onChange={onChange} value={form.name} name="name" />
        <input placeholder="email" type="email" onChange={onChange} value={form.email} name="email" />
        <input placeholder="nickname" onChange={onChange} value={form.nickname} name="nickname" />
        <input placeholder="password" type="password" onChange={onChange} value={form.password} name="password" />
        <input placeholder="profile pic" onChange={onChange} value={form.profilePicture} name="profilePicture" />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SignUpPage;