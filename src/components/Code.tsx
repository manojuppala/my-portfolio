import React, { useState } from "react";

const Code = ({ snippet, lang }: { snippet: string; lang: string }) => {
  const [btnText, setBtnText] = useState("Copy");
  const codeClass = lang ? `language-${lang} code-snippet` : `code-snippet`;
  const copytext = (text: string) => {
    if (btnText !== "Copied!") {
      setBtnText("Copied!");
      navigator.clipboard.writeText(text);
      setTimeout(() => {
        setBtnText("Copy");
      }, 3000);
    }
  };

  return (
    <div className="pre-wrapper">
      <pre className="prettyprint">
        <code className={codeClass}>{snippet}</code>
      </pre>
      <button className="copy-snippet" onClick={() => copytext(snippet)}>
        {btnText === "Copy" ? <i className="fa fa-clone"></i> : null} {btnText}
      </button>
    </div>
  );
};

export default Code;
