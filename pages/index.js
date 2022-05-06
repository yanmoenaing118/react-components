import Button from "../components/Button";
import { ICON_RIGH_ARROW } from "../icons";

export default function Home() {
  return (
    
    <div>

      <Button text="Add to card" fill={false} onClick={() => console.log('clicked')}/>
      <Button text="Click here to get" fill={false} icon={ICON_RIGH_ARROW} />

      <div className="box">
        <h1>This is header</h1>
        <Button text="Login to get access!" full />
      </div>

      <style jsx>{`
        div {
          margin: 30px;
        }

        .box {
          border: 1px solid gray;
          max-width: 380px;
        }
      `}</style>
    </div>
    
  )
}
