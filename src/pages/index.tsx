import Link from 'next/link';
import React from 'react';

const games = [
  {
    slug: 'maths',
    name: 'Maths',
    image: 'https://via.placeholder.com/150/92c952',
  },
  {
    slug: 'history',
    name: 'Histoire',
    image: 'https://via.placeholder.com/150/771796',
  },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6">Choisir un jeu</h1>
      <ul className="space-y-8">
        {games.map((g) => (
          <li key={g.slug} className="flex flex-col items-start">
            <Link
              href={`/game/${g.slug}`}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {g.name}
            </Link>
            <img
              src={g.image}
              alt={`Illustration pour ${g.name}`}
              className="mt-2 w-48 h-32 object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
