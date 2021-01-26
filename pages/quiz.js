import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';

export default function quiz() {

  const [name, setName] = useState('');

  useEffect(() => {
    function getQueryName() {
      const params = (new URL(window.location)).searchParams;
      const nameFromQuery = params.get('name');
      setName(nameFromQuery);
    }
    getQueryName();
  }, []);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Fifa 21</title>
      </Head>
      <h1>
        Olá
        {name}
      </h1>
    </QuizBackground>
  );
}
