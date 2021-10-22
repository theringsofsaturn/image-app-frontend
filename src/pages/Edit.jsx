import ImageEditor from "@toast-ui/react-image-editor";
import React from "react";
import "tui-image-editor/dist/tui-image-editor.css";

const Editor = React.forwardRef((props, ref) => (
  <ImageEditor
    ref={ref}
    includeUI={{
      loadImage: {
        path: "/lake.jpg",
        name: "Lake",
      },

      uiSize: {
        height: "100vh",
      },

      menuBarPosition: "left",
    }}
    cssMaxHeight={500}
    cssMaxWidth={700}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70,
    }}
    usageStatistics={true}
  />
));

export default Editor;
