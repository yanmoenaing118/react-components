import Button from "../components/Button";
import Form from "../components/form";
import TextInput from "../components/form/TextInput";
import EmailInput from "../components/form/EmailInput";
import { ICON_RIGH_ARROW } from "../icons";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    console.log("Form data ", data);
  }

  return (
    <main>
      <section>
        <h1>Home page Components</h1>
        <div className="components">
          <div>
            <Button text="Shop Now" fill={false} />
          </div>
          <div>
            <Button text="sign up free" icon={ICON_RIGH_ARROW} />
          </div>
        </div>
      </section>

      <section>
        <h1>Login, Register, forgot password</h1>
        <div className="components">
          <div>
            <Button type="submit" text="login" full size="lg" disabled />
          </div>
          <div>
            <Button type="submit" text="sign up" full size="lg" />
          </div>
          <div>
            <Button type="submit" text="forgot password" full size="lg" />
          </div>
        </div>
      </section>

      <section>
        <h1>Product Detail Page Components</h1>
        <div className="components">
          <div>
            <Button text="add to card" fill />
          </div>
          <div></div>
        </div>
      </section>

      <section>
        <div className="form-contianer">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              defaultValue="Yan"
              register={register}
              name="firstName"
              label="First Name"
              errorMessage={errors.firstName && "First Name is required!"}
            />

            <TextInput
              register={register}
              name="lastName"
              label="Last Name"
              errorMessage={errors.lastName && "Last Name is required"}
            />

            <EmailInput
              register={register}
              name="email"
              label="Email"
              errorMessage={errors.email && "Invalid email"}
            />
            <Button text="Submit" type="submit" />
          </Form>
        </div>
      </section>
      <style jsx>{`
        main {
          margin: 30px;
        }
        section {
          padding: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid lightgray;
        }

        .components > div {
          margin: 10px;
        }
        .box {
          border: 1px solid gray;
          max-width: 380px;
        }

        .form-contianer {
          max-width: 380px;
        }
      `}</style>
    </main>
  );
}
