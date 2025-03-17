import { MathJax, MathJaxContext } from "better-react-mathjax"
import { useState } from "react"

function render(formula) {
    const [isMathJaxReady , setMathJaxReady] = useState(false)

    return (
        <MathJaxContext onLoad={() => setMathJaxReady(true)}>
            {isMathJaxReady &&  (
                <MathJax>
                    {formula}
                </MathJax>
            )}
        </MathJaxContext>
    )
}

export {
    render
}
