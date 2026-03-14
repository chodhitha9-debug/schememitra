import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Scheme, getDaysUntilDeadline } from '@/lib/schemes';
import { Language, t } from '@/lib/translations';
import { ExternalLinkWarning } from './ExternalLinkWarning';

interface SchemeDetailViewProps {
  scheme: Scheme;
  lang: Language;
  onBack: () => void;
}

export const SchemeDetailView: React.FC<SchemeDetailViewProps> = ({ scheme, lang, onBack }) => {
  const days = getDaysUntilDeadline(scheme.deadline);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.25 }}
      className="max-w-2xl mx-auto px-4 py-8"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6 btn-press"
      >
        <ArrowLeft className="w-4 h-4" />
        {t('back', lang)}
      </button>

      {/* Header Card */}
      <div className="scheme-card mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {scheme.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium bg-primary-light text-primary">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-slate-900 font-semibold text-xl leading-snug text-balance mb-2">
          {scheme.name}
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">{scheme.description}</p>

        {scheme.deadline && (
          <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${days !== null && days <= 7 ? 'bg-warning/10' : 'bg-muted'}`}>
            {days !== null && days <= 7 && <span className="pulse-warning" />}
            <span className="text-sm font-medium text-slate-700 tabular">
              {t('deadline', lang)}: {new Date(scheme.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              {days !== null && days > 0 && (
                <span className="ml-2 text-warning font-semibold">({days} {t('daysLeft', lang)})</span>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Official Website */}
      <div className="scheme-card mb-4">
        <p className="field-label mb-3">{t('officialWebsite', lang)}</p>
        <ExternalLinkWarning url={scheme.officialUrl} lang={lang}>
          <div className="w-full flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/15 hover:bg-primary/10 transition-colors duration-200 btn-press">
            <span className="text-sm font-medium text-primary truncate">{scheme.officialUrl}</span>
            <ExternalLink className="w-4 h-4 text-primary flex-shrink-0 ml-2" />
          </div>
        </ExternalLinkWarning>
      </div>

      {/* How to Apply Steps */}
      <div className="scheme-card">
        <p className="field-label mb-4">{t('howToApply', lang)}</p>
        <div className="space-y-3">
          {scheme.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, ease: [0.4, 0, 0.2, 1], duration: 0.25 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center">
                <span className="text-primary font-semibold text-sm tabular">{i + 1}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pt-1 text-pretty">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
