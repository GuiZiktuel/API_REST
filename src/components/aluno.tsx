import React from 'react';
import aluno from './components/aluno';
interface Aluno {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  idade: number;
}

export default function Aluno(props: { aluno: Aluno }) {
  const { aluno } = props;
  return (
    <li>
      <h2>{aluno.nome} {aluno.sobrenome}</h2>
      <p>Email: {aluno.email}</p>
      <p>Idade: {aluno.idade}</p>
    </li>
  );
}
