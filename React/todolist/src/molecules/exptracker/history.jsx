import { useContext } from "react";
import { expContext } from "../../organisms/exptracker/exptrackerApp";

function History() {
  const { hist, hlist } = useContext(expContext);
  console.log(hlist);
  return (
    <div>
      {hist &&
        hlist.map((item, index) => (
          <div key={index}>
            <h1>{item[0]}</h1>
            <h1>{item[1]}</h1>
            <h1>{item[2]}</h1>
          </div>
        ))}
    </div>
  );
}

export default History;
