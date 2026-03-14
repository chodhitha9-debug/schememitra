export type Occupation = 'student' | 'farmer' | 'worker' | 'unemployed';

export interface Scheme {
  id: string;
  occupation: Occupation[];
  name: string;
  shortDesc: string;
  description: string;
  officialUrl: string;
  tags: string[];
  deadline: string | null; // ISO date string or null for ongoing
  incomeFilter?: ('below' | 'mid' | 'above')[];
  steps: string[];
}

export const SCHEMES: Scheme[] = [
  // ── STUDENT ──────────────────────────────────────────────────────────────────
  {
    id: 'nsp',
    occupation: ['student'],
    name: 'National Scholarship Portal (NSP)',
    shortDesc: 'Scholarships for higher studies from central & state ministries.',
    description:
      'NSP is a one-stop platform for all central and state government scholarships. It offers merit-based and means-based scholarships for students from Class 1 to postgraduate level.',
    officialUrl: 'https://scholarships.gov.in',
    tags: ['Student', 'Scholarship', 'All Castes'],
    deadline: '2025-10-31',
    incomeFilter: ['below', 'mid'],
    steps: [
      'Go to scholarships.gov.in and click "New Registration".',
      'Select your state, student type (Fresh/Renewal), and academic year.',
      'Fill in personal details — name, Aadhaar, bank account.',
      'Upload documents: mark sheet, income certificate, Aadhaar, caste certificate.',
      'Submit the application and note down the Application ID.',
      'Your institution verifies the application online.',
      'Track status at NSP portal using Application ID.',
    ],
  },
  {
    id: 'skill-india',
    occupation: ['student', 'unemployed', 'worker'],
    name: 'Skill India Mission',
    shortDesc: 'Free skill development and vocational training programs.',
    description:
      'Skill India provides certified short-term vocational training across 40+ sectors including IT, healthcare, construction, and agriculture through NSDC-affiliated training centers.',
    officialUrl: 'https://www.skillindia.gov.in',
    tags: ['Student', 'Worker', 'Unemployed', 'Free Training'],
    deadline: null,
    steps: [
      'Visit skillindia.gov.in or the nearest Skill Development Centre.',
      'Create an account using mobile number and Aadhaar.',
      'Browse courses by sector and preferred language.',
      'Enroll in your chosen course — most are free of cost.',
      'Complete training and appear for the assessment.',
      'Download the NSDC-certified skill certificate upon passing.',
    ],
  },
  {
    id: 'digital-india',
    occupation: ['student'],
    name: 'Digital India – Online Learning',
    shortDesc: 'Free digital literacy and online learning resources for all.',
    description:
      'Digital India offers DIKSHA, SWAYAM, and other e-learning portals with free courses from IITs and central universities accessible via mobile or computer.',
    officialUrl: 'https://digitalindia.gov.in',
    tags: ['Student', 'Digital', 'Free'],
    deadline: null,
    steps: [
      'Visit digitalindia.gov.in or install the DIKSHA app.',
      'Choose your state board or CBSE/NCERT curriculum.',
      'Browse digital textbooks, videos, and practice tests.',
      'Enroll in SWAYAM MOOCs for higher-education courses.',
      'Complete courses at your own pace and earn certificates.',
    ],
  },
  {
    id: 'pm-evidya',
    occupation: ['student'],
    name: 'PM e-Vidya',
    shortDesc: 'Digital education for school children via TV, radio & DIKSHA.',
    description:
      'PM e-Vidya is a multi-mode digital education program for school children. It includes one class-one channel DTH TV education, radio programs, and digital content on DIKSHA.',
    officialUrl: 'https://pmevid.ya.gov.in',
    tags: ['Student', 'School', 'Free', 'Digital'],
    deadline: null,
    steps: [
      'Access DIKSHA portal at diksha.gov.in or the DIKSHA app.',
      'Select your state, class, and subject.',
      'Watch educational videos or tune into dedicated DTH TV channels (Swayam Prabha).',
      'Download course content for offline access.',
      'Take practice quizzes and track your progress.',
    ],
  },

  // ── FARMER ───────────────────────────────────────────────────────────────────
  {
    id: 'pm-kisan',
    occupation: ['farmer'],
    name: 'PM Kisan Samman Nidhi',
    shortDesc: '₹6,000 per year direct income support to farmer families.',
    description:
      'PM-KISAN provides ₹2,000 every 4 months (₹6,000/year) directly into the bank accounts of small and marginal farmer families who own cultivable land.',
    officialUrl: 'https://pmkisan.gov.in',
    tags: ['Farmer', '₹6,000/year', 'Direct Benefit'],
    deadline: null,
    incomeFilter: ['below', 'mid'],
    steps: [
      'Visit pmkisan.gov.in or your nearest Common Service Centre (CSC).',
      'Click "New Farmer Registration" and enter Aadhaar number.',
      'Select your state and fill in land ownership and bank details.',
      'Upload documents: Aadhaar, land record (Khatoni), bank passbook.',
      'Submit and note the registration number.',
      'Verification is done by State Government records.',
      'Funds are credited directly to your Aadhaar-linked bank account.',
    ],
  },
  {
    id: 'soil-health',
    occupation: ['farmer'],
    name: 'Soil Health Card Scheme',
    shortDesc: 'Free soil testing with crop-specific fertilizer recommendations.',
    description:
      'The Soil Health Card scheme provides farmers with a card that contains crop-wise recommendations on nutrients and fertilizers required for their soil to improve soil health and its fertility.',
    officialUrl: 'https://soilhealth.dac.gov.in',
    tags: ['Farmer', 'Soil Health', 'Free'],
    deadline: null,
    steps: [
      'Contact your nearest Agriculture Department or Krishi Vigyan Kendra.',
      'Request a soil sample collection — an officer visits your farm.',
      'Soil is tested at the nearest Soil Testing Laboratory.',
      'Receive your Soil Health Card with nutrient levels and crop recommendations.',
      'Follow the recommended fertilizer schedule for better yield.',
      'Cards are valid for 3 years; renew by requesting fresh testing.',
    ],
  },
  {
    id: 'pm-fasal-bima',
    occupation: ['farmer'],
    name: 'PM Fasal Bima Yojana',
    shortDesc: 'Affordable crop insurance against natural calamities & pests.',
    description:
      'PMFBY provides comprehensive risk coverage against crop loss due to unforeseen events like natural calamities, pests and diseases. The farmer pays only 1.5–2% of the sum insured as premium.',
    officialUrl: 'https://pmfby.gov.in',
    tags: ['Farmer', 'Insurance', 'Low Premium'],
    deadline: '2025-07-31',
    steps: [
      'Visit pmfby.gov.in or nearest bank branch/CSC before the sowing season.',
      'Fill the crop insurance form with details of crop, land, and bank account.',
      'Pay the nominal premium (1.5% for Kharif, 2% for Rabi crops).',
      'Get the policy document and insurance number.',
      'In case of crop loss, inform the insurance company or bank within 72 hours.',
      'Claim amount is assessed by a government survey team and credited to your account.',
    ],
  },
  {
    id: 'kcc',
    occupation: ['farmer'],
    name: 'Kisan Credit Card (KCC)',
    shortDesc: 'Easy short-term credit for farm inputs at low interest rates.',
    description:
      'KCC provides flexible and simplified credit access to farmers for cultivation, post-harvest expenses, and allied activities. Interest subvention brings the effective rate to as low as 4% p.a.',
    officialUrl: 'https://www.nabard.org/content1.aspx?id=572',
    tags: ['Farmer', 'Credit', 'Low Interest'],
    deadline: null,
    steps: [
      'Visit your nearest bank (nationalized/cooperative) with land documents.',
      'Submit the KCC application form with Aadhaar, land records, and passport photo.',
      'Bank assesses credit limit based on landholding and crop type.',
      'On approval, a KCC is issued within 7–14 working days.',
      'Use the card/passbook to withdraw funds as needed for farming expenses.',
      'Repay within the crop season to avail 4% interest benefit.',
    ],
  },

  // ── WORKER ───────────────────────────────────────────────────────────────────
  {
    id: 'atal-pension',
    occupation: ['worker'],
    name: 'Atal Pension Yojana (APY)',
    shortDesc: 'Guaranteed pension of ₹1,000–₹5,000/month after age 60.',
    description:
      'APY is a government-backed pension scheme for workers in the unorganized sector. Contributing a small monthly amount guarantees a fixed pension between ₹1,000 and ₹5,000 per month after turning 60.',
    officialUrl: 'https://npscra.nsdl.co.in/scheme-details.php',
    tags: ['Worker', 'Pension', '₹1K–₹5K/month'],
    deadline: null,
    incomeFilter: ['below', 'mid'],
    steps: [
      'Visit any nationalized bank or post office with a savings account.',
      'Fill the APY subscription form with Aadhaar, bank account, and mobile number.',
      'Choose your desired pension amount (₹1,000 to ₹5,000) and contribution frequency.',
      'Set up auto-debit from your savings account for monthly contributions.',
      'Receive a PRAN (Permanent Retirement Account Number).',
      'Track your account via the NPS app or net banking.',
    ],
  },
  {
    id: 'rsby',
    occupation: ['worker', 'unemployed'],
    name: 'Rashtriya Swasthya Bima Yojana (RSBY)',
    shortDesc: 'Free health insurance for BPL families up to ₹30,000/year.',
    description:
      'RSBY provides smart-card based cashless health insurance to Below Poverty Line (BPL) households, covering hospitalization costs up to ₹30,000 per year per family.',
    officialUrl: 'https://www.rsby.gov.in',
    tags: ['Worker', 'Unemployed', 'BPL', 'Health Insurance'],
    deadline: null,
    incomeFilter: ['below'],
    steps: [
      'Check with your District Collector office if your BPL family is enrolled.',
      'If not enrolled, apply at the Block Development Office with BPL ration card.',
      'Biometric enrollment is done at a government camp near you.',
      'Receive a smart card (RSBY card) for your entire family.',
      'At the time of hospitalization, show the card at any empanelled hospital.',
      'Cashless treatment is provided up to ₹30,000 per year.',
    ],
  },
  {
    id: 'mnrega',
    occupation: ['worker', 'unemployed'],
    name: 'MNREGA (MGNREGS)',
    shortDesc: '100 days of guaranteed paid work per year for rural households.',
    description:
      'MNREGA guarantees at least 100 days of wage employment per year to every rural household whose adult members volunteer to do unskilled manual work. Wages are paid within 15 days.',
    officialUrl: 'https://nrega.nic.in',
    tags: ['Worker', 'Rural', 'Employment', 'Guaranteed Income'],
    deadline: null,
    steps: [
      'Apply for a Job Card at your Gram Panchayat with Aadhaar and photo.',
      'Receive the MGNREGS Job Card within 15 days of application.',
      'Submit a written work demand application to the Gram Panchayat.',
      'Work is allocated within 15 days, or unemployment allowance is paid.',
      'Attend the worksite and complete assigned tasks.',
      'Wages are credited directly to your Aadhaar-linked bank/post office account within 15 days.',
    ],
  },
  {
    id: 'eshram',
    occupation: ['worker'],
    name: 'e-SHRAM Portal',
    shortDesc: 'Digital ID card for unorganized workers with ₹2L accident insurance.',
    description:
      'e-SHRAM is a national database for unorganized workers. Registering gives a Universal Account Number (UAN), a digital worker ID, and ₹2 lakh accidental insurance under PM Suraksha Bima Yojana.',
    officialUrl: 'https://eshram.gov.in',
    tags: ['Worker', 'Free Registration', '₹2L Insurance'],
    deadline: null,
    steps: [
      'Visit eshram.gov.in or call 14434 (helpline).',
      'Click "Register on e-SHRAM" and enter mobile number linked to Aadhaar.',
      'Verify via OTP and fill in personal, occupation, and bank details.',
      'Self-register or get help at the nearest CSC center (free).',
      'Download your e-SHRAM card with the UAN number.',
      'Automatic enrollment in PM Suraksha Bima Yojana for accident insurance.',
    ],
  },

  // ── UNEMPLOYED ───────────────────────────────────────────────────────────────
  {
    id: 'pmkvy',
    occupation: ['unemployed', 'worker', 'student'],
    name: 'PM Kaushal Vikas Yojana (PMKVY)',
    shortDesc: 'Free short-term skill training with government certification.',
    description:
      'PMKVY provides free skill training for youth across 300+ job roles in sectors like healthcare, retail, IT, and construction. Includes a monetary reward and placement assistance after certification.',
    officialUrl: 'https://pmkvyofficial.org',
    tags: ['Unemployed', 'Student', 'Free Training', 'Certificate'],
    deadline: null,
    steps: [
      'Find a PMKVY Training Centre near you at pmkvyofficial.org/find-a-tc.',
      'Register with your Aadhaar and select a job role/course.',
      'Attend the free training (typically 2–6 months).',
      'Appear for the skill assessment exam conducted by an assessment body.',
      'On passing, receive a government-recognized skill certificate and monetary reward.',
      'Avail placement assistance through the training center.',
    ],
  },
  {
    id: 'startup-india',
    occupation: ['unemployed', 'worker'],
    name: 'Startup India',
    shortDesc: 'Tax benefits, funding, and mentorship for entrepreneurs.',
    description:
      'Startup India provides a simplified registration process, 3-year income tax exemption, patent fee rebates, and access to ₹10,000 crore Fund of Funds for startups recognized by DPIIT.',
    officialUrl: 'https://www.startupindia.gov.in',
    tags: ['Unemployed', 'Entrepreneur', 'Tax Benefit', 'Funding'],
    deadline: null,
    steps: [
      'Register your business (Pvt Ltd, LLP, or Partnership) on the MCA portal.',
      'Apply for DPIIT Startup Recognition at startupindia.gov.in.',
      'Upload incorporation certificate, business description, and PAN.',
      'Receive recognition within 2 working days.',
      'Apply for 3-year income tax exemption under Section 80-IAC.',
      'Access mentorship, incubators, and funding portals through the Startup India Hub.',
    ],
  },
  {
    id: 'ncs',
    occupation: ['unemployed', 'worker', 'student'],
    name: 'NCS – National Career Service Portal',
    shortDesc: 'India\'s largest online job portal with free placement services.',
    description:
      'NCS is a centralized online employment exchange connecting job seekers with employers, career counselors, and training institutes. Job seekers can register and search jobs for free.',
    officialUrl: 'https://www.ncs.gov.in',
    tags: ['Unemployed', 'Student', 'Job Portal', 'Free'],
    deadline: null,
    steps: [
      'Visit ncs.gov.in and click "Job Seeker Registration".',
      'Fill in personal details, education, and work experience.',
      'Upload your resume and set job preferences.',
      'Browse thousands of job listings across India.',
      'Apply directly and track application status on the portal.',
      'Use career guidance and skill gap assessment tools available free.',
    ],
  },
  {
    id: 'standup-india',
    occupation: ['unemployed'],
    name: 'Stand-Up India Scheme',
    shortDesc: 'Bank loans of ₹10L–₹1 Cr for SC/ST and women entrepreneurs.',
    description:
      'Stand-Up India facilitates bank loans between ₹10 lakh and ₹1 crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up greenfield enterprises.',
    officialUrl: 'https://www.standupmitra.in',
    tags: ['Unemployed', 'SC/ST', 'Women', 'Business Loan'],
    deadline: null,
    steps: [
      'Visit standupmitra.in and register as a borrower.',
      'Select a branch of a scheduled commercial bank.',
      'Prepare a business plan for your greenfield enterprise.',
      'Apply for loan with Aadhaar, PAN, business plan, and caste/gender certificate.',
      'Bank evaluates the application and sanctions the loan.',
      'Loan can be for manufacturing, services, or trading sector.',
      'Repay in 7 years with 18-month moratorium period.',
    ],
  },
];

export function getMatchingSchemes(occupation: string): Scheme[] {
  const occ = occupation.toLowerCase() as Occupation;
  return SCHEMES.filter((s) => s.occupation.includes(occ));
}

export function getDaysUntilDeadline(deadline: string | null): number | null {
  if (!deadline) return null;
  const today = new Date();
  const dl = new Date(deadline);
  const diff = Math.ceil((dl.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}
