import { MathJax, MathJaxContext } from "better-react-mathjax"

function render({formula}) {
    return (
        <MathJaxContext >
            <MathJax hideUntilTypeset="first">
                {formula}
            </MathJax>
        </MathJaxContext>
    )
}

export default render;