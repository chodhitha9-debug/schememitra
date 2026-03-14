import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfileForm, ProfileData } from '@/components/ProfileForm';
import { SchemeCard } from '@/components/SchemeCard';
import { SchemeDetailView } from '@/components/SchemeDetailView';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Language, t } from '@/lib/translations';
import { Scheme, getMatchingSchemes } from '@/lib/schemes';

type View = 'form' | 'results' | 'detail';

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const Index = () => {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<View>('form');
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);

  const handleFormSubmit = (data: ProfileData) => {
    setProfile(data);
    setSchemes(getMatchingSchemes(data.occupation));
    setView('results');
    window.scrollTo(0, 0);
  };

  const handleSchemeClick = (scheme: Scheme) => {
    setSelectedScheme(scheme);
    setView('detail');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {view === 'form' && (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProfileForm lang={lang} onLangChange={setLang} onSubmit={handleFormSubmit} />
          </motion.div>
        )}

        {view === 'results' && profile && (
          <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Header */}
            <div className="bg-surface shadow-card sticky top-0 z-10">
              <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
                <div>
                  <h1 className="text-slate-900 font-semibold text-lg tracking-tight">{t('appName', lang)}</h1>
                </div>
                <LanguageSwitcher current={lang} onChange={setLang} />
              </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 py-8">
              <button
                onClick={() => setView('form')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 btn-press flex items-center gap-1"
              >
                {t('back', lang)}
              </button>

              <div className="mb-6">
                <h2 className="text-slate-900 font-semibold text-2xl text-balance mb-1">
                  {t('schemesFor', lang)} <span className="text-primary">{profile.name}</span>
                </h2>
                <p className="text-muted-foreground text-sm tabular">
                  <span className="font-semibold text-foreground">{schemes.length}</span>{' '}
                  {t('schemesFound', lang)}
                </p>
              </div>

              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {schemes.map((scheme, i) => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    lang={lang}
                    index={i}
                    onClick={() => handleSchemeClick(scheme)}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}

        {view === 'detail' && selectedScheme && (
          <motion.div key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Header */}
            <div className="bg-surface shadow-card sticky top-0 z-10">
              <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-slate-900 font-semibold text-lg tracking-tight">{t('appName', lang)}</h1>
                <LanguageSwitcher current={lang} onChange={setLang} />
              </div>
            </div>
            <SchemeDetailView
              scheme={selectedScheme}
              lang={lang}
              onBack={() => { setView('results'); window.scrollTo(0, 0); }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
