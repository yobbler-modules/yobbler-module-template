import React from 'react';
import locale from './locale.json';

interface DashboardProps {
  currentLang?: 'en' | 'sv';
}

export default function Dashboard({ currentLang = 'en' }: DashboardProps) {
  const t = locale[currentLang] || locale['en'];

  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '-0.05em', fontStyle: 'italic', textTransform: 'uppercase' }}>
        {t.title}
      </h1>
      <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px', fontWeight: '500' }}>
        {t.description}
      </p>
    </div>
  );
}
