import React from 'react';
import { Language, LANGUAGES } from '@/lib/translations';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  current: Language;
  onChange: (lang: Language) => void;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  current,
  onChange,
  className,
}) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onChange(lang.code)}
          className={cn(
            'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 btn-press',
            current === lang.code
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-surface text-muted-foreground shadow-card hover:text-foreground hover:shadow-card-hover'
          )}
          aria-pressed={current === lang.code}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.nativeLabel}
        </button>
      ))}
    </div>
  );
};
