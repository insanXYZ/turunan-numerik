import { MathJax, MathJaxContext } from "better-react-mathjax";

function render({ formula }) {
  return (
    <MathJaxContext
      config={{
        options: {
          enableMenu: false,
        },
      }}
    >
      <MathJax hideUntilTypeset="first">{formula}</MathJax>
    </MathJaxContext>
  );
}

export default render;
