import React from 'react'

export function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData.get('email'))
    console.log(formData.get('password'))
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login form with Form data</h3>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button>Log in</button>
    </form>
  );
}