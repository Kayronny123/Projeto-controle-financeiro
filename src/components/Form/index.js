import React, { useState } from "react";
import * as C from "./style";
import Grid from "../Grid";

const Form = ({ handleAdd, setTransationsList, transationsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição do valor");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo");
      return;
    }
    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense
    };
    handleAdd(transaction);
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input value={amount} onChange={(e) => setAmount(e.target.value)} />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entradas </C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saídas </C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transationsList} setItens={setTransationsList} />
    </>
  );
};
export default Form;
