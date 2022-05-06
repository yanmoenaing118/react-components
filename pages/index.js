import Button from "../components/Button";
import { ICON_RIGH_ARROW } from "../icons";

export default function Home() {
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
            <Button type="submit" text="login" full size="lg" disabled/>
          </div>
          <div>
            <Button type="submit" text="sign up" full size="lg"/>
          </div>
          <div>
            <Button type="submit" text="forgot password" full size="lg"/>
          </div>
        </div>
      </section>

      <section>
        <h1>Product Detail Page Components</h1>
        <div className="components">
          <div>
            <Button text="add to card" fill />
          </div>
          <div>
           
          </div>
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
      `}</style>
    </main>
  );
}
