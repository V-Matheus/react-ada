import React, { useMemo, useState } from 'react';

interface MemorizationProps {
  financeData: {
    incomes: number[];
    outcomes: number[];
  };
}

const Memorization: React.FC<MemorizationProps> = ({ financeData }) => {
  const [showsValues, setShowsValues] = useState(true);

  const totalIncomes = useMemo(() => {
    return financeData.incomes.reduce((total, income) => {
      return (total += income);
    }, 0);
  }, [financeData.incomes])

  const totalOutcomes = useMemo(() => {
    return financeData.outcomes.reduce((total, outcome) => {
      return (total += outcome);
    }, 0);
  }, [financeData.outcomes])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Memorization</h1>

      <h2>useMemo</h2>

      <p>{`Total de Receita: R$${showsValues ?totalIncomes : 'XXXXX'}`}</p>
      <br />
      <p>{`Total de Despesas: R$${showsValues ? totalOutcomes : 'XXXXX'}`}</p>

      <br />
      <br />
      <button onClick={() => setShowsValues(!showsValues)}>
        {showsValues ? 'Ocutar Valores' : 'Mostrar Valores'}
      </button>
    </div>
  );
};

export default Memorization;
