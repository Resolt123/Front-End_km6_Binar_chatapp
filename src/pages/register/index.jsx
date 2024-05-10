import { Form, redirect } from "react-router-dom";

export async function registerAction() {
  const user = await Register();
  return redirect("/");
}

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: ".5rem",
        }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="image">Profile Image</label>
        <input type="file" name="image" id="image" required />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" required />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
