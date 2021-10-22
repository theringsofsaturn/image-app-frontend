import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Edit from "./pages/Edit";
import Gallery from "./pages/Gallery";
import "./App.css";
import { dataURLtoFile } from "./utils/image";
import { createRef, useEffect } from "react";
function App() {
  const editor = createRef();
  const fileInput = createRef();
  useEffect(() => {
    if (editor.current) {
      console.log(editor);
    }
  }, [editor]);

  const onSave = () => {
    const base64 = editor.current.imageEditorInst.toDataURL();
    const file = dataURLtoFile(base64, "image.png");
    console.log(file);
  };
  const onChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };
  const onUplaod = () => {
    fileInput.current.click();
  };
  return (
    <div className="App">
      <Router>
        <NavBar onUpload={onUplaod} onSave={onSave} />
        <input
          onChange={onChange}
          ref={fileInput}
          type="file"
          accept="image/*"
          hidden
        />
        <Switch>
          <Route path="/" exact component={Gallery} />
          <Route
            path="/edit/:id"
            exact
            render={(props) => <Edit {...props} ref={editor} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
