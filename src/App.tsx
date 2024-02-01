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
          onChangeText={(v: string): void => setState(JSON.parse(v))}
          json={state}
          name="properties"
          mode="code"
        />
      </div>
      <div>
        <LayoutContainer layout={state} />
      </div>
    </div>
  );
}

export default App;
