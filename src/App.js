import axios from "axios";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    axios.get('https://platepartners.in/data').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
