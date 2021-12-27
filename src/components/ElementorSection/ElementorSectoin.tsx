import { elemtorData } from "../../services/fakeApi/fakeApi";
import ElementorCart from "./ElementorCart";
import "./ElementorSection.css";

export default function ElementorSectoin() {
  return (
    <div>
      <div className="container px-1">
        <div className="row gx-5">
          {elemtorData.map((data) => (
            <ElementorCart data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
