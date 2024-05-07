import React, { FormEvent, useEffect, useRef, useState } from 'react';

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputNameRef);
  }, [inputNameRef]);

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault()
    
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);
    
  }

  return (
    <form onSubmit={(event) => handleOnSubmit(event)} style={{ padding: '2rem' }}>
      <h1>UseRef</h1>

      <br />
      <input type="text" placeholder="Nome Completo" ref={inputNameRef} />
      <input type="email" placeholder='E-Mail' ref={inputNameRef} />
      <input type="password"placeholder='Senha' ref={inputNameRef} />

      <br />
      <button type='submit'>Submeter</button>
    </form>
  );
};

export default Refs;
