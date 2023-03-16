import React from "react";

export default function Title({ text }) {
  return <h1 className='title text-center'>{!text ? "Title" : text}</h1>;
}
