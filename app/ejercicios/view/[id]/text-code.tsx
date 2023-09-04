"use client";
import { CodeBlock, dracula } from "react-code-blocks/dist";

import React from "react";

export default function TextCode(props: { text: string }) {
  return (
    <CodeBlock
      //@ts-ignore
      text={props.text}
      theme={dracula}
      language="javascript"
    />
  );
}
