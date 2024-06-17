import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/RegisterStudent.module.css'; // Import CSS

const RegisterStudentPage: React.FC = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const studentData = {
      id: parseInt(id), // Convert ID to integer
      nome,
      sobrenome,
      email,
      idade: parseInt(idade), // Convert age to integer
      peso: parseFloat(peso), // Convert weight to float
      altura: parseFloat(altura), // Convert height to float
    };

    try {
      const response = await axios.post('http://localhost:3000/register-student', studentData);
      console.log('Student registration successful:', response.data); // Replace with appropriate logic
      setError(''); // Clear error message
    } catch (err) {
      console.error(err);
      setError('Falha no registro de aluno'); // Display error message
    }
  };

  return (
    <div className={styles.container}>
      <h1>Registro de Aluno</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="altura">Altura (cm):</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit"
