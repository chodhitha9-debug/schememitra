import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Language, t } from '@/lib/translations';

export interface ProfileData {
  name: string;
  ageGroup: string;
  occupation: string;
  caste: string;
  income: string;
  state: string;
  location: 'rural' | 'urban';
  disabled: boolean;
}

interface ProfileFormProps {
  lang: Language;
  onLangChange: (l: Language) => void;
  onSubmit: (data: ProfileData) => void;
}

const STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab',
  'Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh',
  'Uttarakhand','West Bengal',
];

const fieldAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ease: [0.4, 0, 0.2, 1], duration: 0.25 } },
};

export const ProfileForm: React.FC<ProfileFormProps> = ({ lang, onLangChange, onSubmit }) => {
  const [form, setForm] = useState<ProfileData>({
    name: '', ageGroup: '', occupation: '', caste: '',
    income: '', state: '', location: 'rural', disabled: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileData, boolean>>>({});

  const set = (key: keyof ProfileData, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const required: (keyof ProfileData)[] = ['name', 'ageGroup', 'occupation', 'caste', 'income', 'state'];
    const errs: typeof errors = {};
    required.forEach((k) => { if (!form[k]) errs[k] = true; });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  const labelClass = 'field-label block mb-2';
  const inputClass = 'w-full touch-input px-4 py-3 rounded-lg border border-border bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 placeholder:text-muted-foreground';
  const selectClass = inputClass + ' cursor-pointer';
  const errorClass = 'text-destructive text-xs mt-1';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface shadow-card sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-slate-900 font-semibold text-lg tracking-tight">{t('appName', lang)}</h1>
            <p className="text-muted-foreground text-xs">{t('tagline', lang)}</p>
          </div>
          <LanguageSwitcher current={lang} onChange={onLangChange} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-4 py-8 space-y-8">
        {/* Name */}
        <motion.div variants={fieldAnim} initial="hidden" animate="visible">
          <label className={labelClass}>{t('yourName', lang)}</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder={t('namePlaceholder', lang)}
            className={inputClass + (errors.name ? ' border-destructive' : '')}
          />
          {errors.name && <p className={errorClass}>{t('requiredField', lang)}</p>}
        </motion.div>

        {/* Age */}
        <motion.div variants={fieldAnim} initial="hidden" animate="visible" transition={{ delay: 0.05 }}>
          <label className={labelClass}>{t('ageGroup', lang)}</label>
          <select value={form.ageGroup} onChange={(e) => set('ageGroup', e.target.value)} className={selectClass + (errors.ageGroup ? ' border-destructive' : '')}>
            <option value="">{t('selectPlaceholder', lang)}</option>
            <option value="below25">{t('below25', lang)}</option>
            <option value="25to60">{t('age25to60', lang)}</option>
            <option value="above60">{t('above60', lang)}</option>
          </select>
          {errors.ageGroup && <p className={errorClass}>{t('requiredField', lang)}</p>}
        </motion.div>

        {/* Occupation */}
        <motion.div variants={fieldAnim} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
          <label className={labelClass}>{t('occupation', lang)}</label>
          <select value={form.occupation} onChange={(e) => set('occupation', e.target.value)} className={selectClass + (errors.occupation ? ' border-destructive' : '')}>
            <option value="">{t('selectPlaceholder', lang)}</option>
            <option value="student">{t('student', lang)}</option>
            <option value="farmer">{t('farmer', lang)}</option>
            <option value="worker">{t('worker', lang)}</option>
            <option value="unemployed">{t('unemployed', lang)}</option>
          </select>
          {errors.occupation && <p className={errorClass}>{t('requiredField', lang)}</p>}
        </motion.div>

        {/* Caste */}
        <motion.div variants={fieldAnim} initial="hidden" animate="visible" transition={{ delay: 0.15 }}>
          <label className={labelClass}>{t('caste', lang)}</label>
          <select value={form.caste} onChange={(e) => set('caste', e.target.value)} className={selectClass + (errors.caste ? ' border-destructive' : '')}>
            <option value="">{t('selectPlaceholder', lang)}</option>
            {['OC','EWS','BC','OBC','SC','ST'].map((c) => (
              <option key={c} value={c.toLowerCase()}>{c}</option>
            ))}
          </select>
          {errors.caste && <p className={errorClass}>{t('requiredField', lang)}</p>}
        </motion.div>

        {/* Income */}
        <motion.div variants={fieldAnim} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <label className={labelClass}>{t('incomeLevel', lang)}</label>
          <select value={form.income} onChange={(e) => set('income', e.target.value)} className={selectClass + (errors.income ? ' border-destructive' : '')}>
            <option value="">{t('selectPlaceholder', lang)}</option>
            <option value="below">{t('incomeBelow', lang)}</option>
            <option value="mid">{t('incomeMid', lang)}</option>
            <option value="above">{t('incomeAbove', lang)}</option>
          </select>
          {errors.income && <p className={errorClass}>{t('requiredField', lang)}</p>}
        </motion.div>

        {/* State */}
        <motion.div variants={fieldAnim} initial="hidden" animate="visible" transition={{ delay: 0.25 }}>
          <label className={labelClass}>{t('state', lang)}</label>
          <select value={form.state} onChange={(e) => set('state', e.target.value)} className={selectClass + (errors.state ? ' border-destructive' : '')}>
            <option value="">{t('selectPlaceholder', lang)}</option>
            {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.state && <p className={errorClass}>{t('requiredField', lang)}</p>}
        </motion.div>

        {/* Location */}
        <motion.div variants={fieldAnim} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <label className={labelClass}>{t('location', lang)}</label>
          <div className="grid grid-cols-2 gap-3">
            {(['rural', 'urban'] as const).map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => set('location', loc)}
                className={`radio-touch flex items-center justify-center gap-2 rounded-lg border text-sm font-medium transition-all duration-200 btn-press ${
                  form.location === loc
                    ? 'border-primary bg-primary-light text-primary'
                    : 'border-border bg-surface text-muted-foreground hover:border-primary/40'
                }`}
              >
                <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${form.location === loc ? 'border-primary' : 'border-muted-foreground'}`}>
                  {form.location === loc && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </span>
                {t(loc, lang)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Disability */}
        <motion.div variants={fieldAnim} initial="hidden" animate="visible" transition={{ delay: 0.35 }}>
          <label className={labelClass}>{t('disability', lang)}</label>
          <div className="grid grid-cols-2 gap-3">
            {([true, false] as const).map((val) => (
              <button
                key={String(val)}
                type="button"
                onClick={() => set('disabled', val)}
                className={`radio-touch flex items-center justify-center gap-2 rounded-lg border text-sm font-medium transition-all duration-200 btn-press ${
                  form.disabled === val
                    ? 'border-primary bg-primary-light text-primary'
                    : 'border-border bg-surface text-muted-foreground hover:border-primary/40'
                }`}
              >
                {t(val ? 'yes' : 'no', lang)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div variants={fieldAnim} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-200 hover:bg-primary-hover btn-press shadow-sm"
          >
            {t('findSchemes', lang)}
          </button>
        </motion.div>
      </form>
    </div>
  );
};
