import React from 'react';

type Props = {
  name: string;
  type: string;
  isRequired?: boolean;
};

export default function Param({ name, type, isRequired }: Props) {
  return (
    <>
      <code className="mr-2">
        <strong>{name}</strong>
        {isRequired === false && '?'}: {type}
      </code>
      {isRequired && <span className="text-[--ifm-color-danger] font-semibold">(Required)</span>}
    </>
  );
}
