import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { Language, t } from '@/lib/translations';

interface ExternalLinkWarningProps {
  url: string;
  lang: Language;
  children: React.ReactNode;
  className?: string;
}

export const ExternalLinkWarning: React.FC<ExternalLinkWarningProps> = ({
  url,
  lang,
  children,
  className,
}) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleContinue = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowWarning(false);
  };

  return (
    <>
      <button
        onClick={() => setShowWarning(true)}
        className={className}
        type="button"
      >
        {children}
      </button>

      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
            style={{ background: 'rgba(15,23,42,0.4)' }}
            onClick={(e) => e.target === e.currentTarget && setShowWarning(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.25 }}
              className="bg-surface rounded-2xl shadow-card-hover w-full max-w-md p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-warning" />
                </div>
                <button
                  onClick={() => setShowWarning(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-foreground font-semibold mb-2">
                {t('officialWebsite', lang)}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                {t('externalLinkWarning', lang)}
              </p>
              <p className="text-xs text-muted-foreground tabular font-medium mt-2 mb-6 break-all">
                {url}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowWarning(false)}
                  className="flex-1 py-3 rounded-xl border border-border text-foreground font-medium text-sm transition-all duration-200 hover:bg-muted btn-press"
                >
                  {t('cancel', lang)}
                </button>
                <button
                  onClick={handleContinue}
                  className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:bg-primary-hover btn-press flex items-center justify-center gap-2"
                >
                  {t('continueToPortal', lang)}
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
