import React from 'react';
import Aluno from './Aluno';

interface Aluno {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  idade: number;
}

export default function AlunosPage() {
  const [alunos, setAlunos] = React.useState<Aluno[]>([]);

  React.useEffect(() => {
    async function fetchAlunos() {
      try {
        const response = await fetch('http://your-api-url/alunos'); 
        const data = await response.json();
        setAlunos(data);
      } catch (error) {
        console.error(error);

      }
    }

    fetchAlunos();
  }, []);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      {alunos.map((aluno) => (
        <Aluno key={aluno.id} aluno={aluno} />
      ))}
    </div>
  );
}
