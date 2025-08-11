import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AdBanner from '../../components/AdBanner';

const gameData: Record<string, { name: string; questions: string[] }> = {
  maths: {
    name: 'Maths',
    questions: ['Combien font 2 + 2 ?', 'Combien font 3 x 3 ?', 'Combien font 10 / 2 ?'],
  },
  history: {
    name: 'Histoire',
    questions: [
      'Qui a découvert l\'Amérique ?',
      'En quelle année a eu lieu la Révolution française ?',
      'Qui était le premier président de la République française ?',
    ],
  },
};

export default function GamePage() {
  const router = useRouter();
  const { game } = router.query as { game?: string };
  const [index, setIndex] = useState(0);

  if (!game || !gameData[game]) {
    return <p>Jeu inconnu</p>;
  }

  const questions = gameData[game].questions;
  const currentQuestion = questions[index];
  const isLast = index === questions.length - 1;

  return (
    <div className="p-6">
      <AdBanner />
      <h1 className="text-xl mb-4">{gameData[game].name}</h1>
      <p className="mb-4">{currentQuestion}</p>
      {!isLast ? (
        <button
          onClick={() => setIndex(index + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Question suivante
        </button>
      ) : (
        <p>Fin du questionnaire</p>
      )}
    </div>
  );
}
