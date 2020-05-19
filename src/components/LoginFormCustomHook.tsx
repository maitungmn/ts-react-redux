import React from 'react'

function useFormFields<T>(initialValues: T) {
  const [formFields, setFormFields] = React.useState<T>(initialValues);

  const createChangeHandler = (key: keyof T) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.persist()
    return setFormFields((prev: T) => {
      return { ...prev, [key]: e && e.target && e.target.value ? e.target.value : '' }
    });
  }
  return { formFields, createChangeHandler };
}

export function LoginForm() {
  const { formFields, createChangeHandler } = useFormFields({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formFields.email)
    console.log(formFields.password)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login form with custom hook</h3>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formFields.email}
          onChange={createChangeHandler("email")}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formFields.password}
          onChange={createChangeHandler("password")}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}