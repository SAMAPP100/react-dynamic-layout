// import { useState } from "react";
// import "./App.css";
import ReactJSONEditor from "react-jsoneditor-wrapper";
import { LayoutContainer } from "./components/Layput";
import { useState } from "react";
import { opt } from "./json";

function App() {
  const [state, setState] = useState(opt);
  // const jsoneditorref = useRef();

  return (
    <div className="grid grid-cols-1 h-screen">
      <div>
        {" "}
        <ReactJSONEditor
          onChangeText={(v: string) => setState(JSON.parse(v))}
          className="h-4/5"
          json={state}
          name="properties"
          mode="code"
          // onChange={() => console.log(getJson())}

          // ref={(ref) => (jsoneditorref = ref)}
        />
        {/* <textarea className="border w-full h-4/5" /> */}
      </div>
      <div>
        <LayoutContainer layout={state} />
      </div>
    </div>
  );
}

export default App;
