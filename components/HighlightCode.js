
import highlight from 'highlight.js';
import { useEffect, useRef } from 'react';

const HighlightCode = ({children, language}) => {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current) {
            highlight.highlightElement(codeRef.current);
        }
    }, [children, language])

    return (
        <pre>
            <code
                ref={codeRef}
                className={language}>
                    {children}
            </code>
        </pre>
    )
}

export default HighlightCode;
