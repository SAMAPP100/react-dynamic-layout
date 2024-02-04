/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import "./App.css";
import ReactJSONEditor from "react-jsoneditor-wrapper";
import { LayoutContainer } from "./components/Layout";
import { useState } from "react";
import { opt } from "./json";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "./components/ui/drawer";
import { Button } from "./components/ui/button";

function App() {
  const [state, setState] = useState(opt);
  // const jsoneditorref = useRef();

  return (
    <div className="grid grid-cols-1 h-screen">
      <div>
        <LayoutContainer layout={state} />
      </div>

      <Drawer closeThreshold={1} modal={false}>
        <DrawerTrigger className="absolute bottom-5 right-5">
          <Button>Open editor</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div>
            {" "}
            <ReactJSONEditor
              //@ts-expect-error not provided properly by package
              onChangeText={(props: any): void => setState(JSON.parse(props))}
              json={state}
              name="properties"
              mode="code"
            />
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default App;
