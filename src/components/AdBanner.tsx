import React from 'react';

/**
 * Simple advertisement banner displayed on every game page.
 * In a real project this would load ads from a provider.
 */
export default function AdBanner() {
  return (
    <div className="border p-4 text-center mb-4 bg-gray-100">
      Publicité - merci de désactiver votre bloqueur de pubs
    </div>
  );
}
