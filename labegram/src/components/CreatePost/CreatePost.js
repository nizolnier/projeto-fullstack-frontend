import React from 'react'
import { useForm } from '../../hooks/useForm';
import { createPost } from '../../services/post'

function CreatePost(props) {
    const { form, onChange, reset } = useForm({ subtitle: "", file: "", tag: "", collection: "" })

    const handleSubmission = (e) => {
        e.preventDefault()
        createPost(form, props.update)
        reset()
    }

    return (<div>
        <form onSubmit={handleSubmission}>
          <input placeholder="subtitle" onChange={onChange} value={form.subtitle} name="subtitle" />
          <input placeholder="file" onChange={onChange} value={form.file} name="file" />
          <input placeholder="tag" onChange={onChange} value={form.tag} name="tag" />
          <input placeholder="collection" onChange={onChange} value={form.collection} name="collection" />
          <button>Login</button>
        </form>
      </div>
    )
}

export default CreatePost;
