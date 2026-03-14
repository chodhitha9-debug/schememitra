import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { Scheme, getDaysUntilDeadline } from '@/lib/schemes';
import { Language, t } from '@/lib/translations';
import { cn } from '@/lib/utils';

interface SchemeCardProps {
  scheme: Scheme;
  lang: Language;
  onClick: () => void;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.3 },
  },
};

export const SchemeCard: React.FC<SchemeCardProps> = ({
  scheme,
  lang,
  onClick,
  index,
}) => {
  const days = getDaysUntilDeadline(scheme.deadline);
  const isUrgent = days !== null && days <= 7 && days > 0;
  const isExpired = days !== null && days <= 0;

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className="scheme-card cursor-pointer group relative"
      aria-label={`View details for ${scheme.name}`}
    >
      {/* Top Row: Status Badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          {isExpired ? (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
              Closed
            </span>
          ) : isUrgent ? (
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-warning/10 text-warning-foreground">
              <span className="pulse-warning" />
              {t('openUntil', lang)}: {new Date(scheme.deadline!).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              <span className="tabular text-warning font-semibold ml-1">
                ({days} {t('daysLeft', lang)})
              </span>
            </span>
          ) : scheme.deadline ? (
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-primary/8 text-primary">
              <Calendar className="w-3 h-3" />
              <span className="tabular">
                {t('openUntil', lang)}: {new Date(scheme.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-success/10 text-success">
              {t('ongoing', lang)}
            </span>
          )}
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-primary-light text-primary">
          {t('eligible', lang)}
        </span>
      </div>

      {/* Scheme Name & Description */}
      <h3 className="text-slate-900 font-semibold text-base leading-snug mb-1.5 text-balance group-hover:text-primary transition-colors duration-200">
        {scheme.name}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed text-pretty">
        {scheme.shortDesc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {scheme.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-muted text-muted-foreground"
          >
            <Tag className="w-2.5 h-2.5" />
            {tag}
          </span>
        ))}
      </div>

      {/* CTA arrow */}
      <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
        <span className="text-xs font-medium text-primary">
          {t('viewDetails', lang)}
        </span>
        <span className="text-primary text-sm transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </motion.div>
  );
};
