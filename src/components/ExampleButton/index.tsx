import React from 'react';
import locale from './locale.json';

interface ButtonProps {
  currentLang?: 'en' | 'sv';
  variant?: 'primary' | 'secondary';
}

export function ExampleButton({ currentLang = 'en', variant = 'primary' }: ButtonProps) {
  const t = locale[currentLang] || locale['en'];
  const bg = variant === 'primary' ? '#db2777' : '#1e293b';

  return (
    <button style={{ 
      height: '44px', 
      padding: '0 24px', 
      backgroundColor: bg, 
      color: '#fff', 
      border: 'none', 
      borderRadius: '12px', 
      fontSize: '11px', 
      fontWeight: '900', 
      textTransform: 'uppercase', 
      letterSpacing: '0.1em',
      cursor: 'pointer'
    }}>
      {t.button_text}
    </button>
  );
}
