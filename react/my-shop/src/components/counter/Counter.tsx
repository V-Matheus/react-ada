import React, { useState } from 'react'

const Counter:React.FC = () => {

  const [value, setValue] = useState(0)

  return (
    <section>
      <h1>{value}</h1>

      <div>
        <button onClickCapture={() => setValue(value - 1)}>diminuir</button>
        <button onClickCapture={() => setValue(value + 1)}>aumentar</button>
      </div>
    </section>
  )
}

export default Counter