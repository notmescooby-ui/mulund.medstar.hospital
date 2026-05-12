export const SITE = {
  name: "Medstar Multispeciality Hospital and ICU",
  short: "Medstar Hospital",
  tagline: "A Star in Health Care",
  phone: "099200 14466",
  phoneLink: "tel:+919920014466",
  whatsapp: "https://wa.me/919920014466",
  email: "contactmulundmedstar@gmail.com",
  address:
    "Medstar Multispeciality Hospital and ICU, Dindayal Upadhyay Marg, Mulund West, Mumbai, Maharashtra 400080",
  shortAddress: "Mulund West, Mumbai",
  mapsEmbed: "https://www.google.com/maps?q=Medstar+Multispeciality+Hospital+and+ICU+Mulund+West+Mumbai&output=embed",
  mapsLink:
    "https://maps.google.com/?q=Medstar+Multispeciality+Hospital+and+ICU,+Dindayal+Upadhyay+Marg,+Mulund+West,+Mumbai",
};

export type Doctor = {
  name: string;
  role?: string;
  gender: "male" | "female";
};

export type Department = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  services: string[];
  highlights: { title: string; body: string }[];
  doctors?: Doctor[];
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: "Bone",
    tagline: "Mobility, restored.",
    description:
      "Advanced bone, joint, and spine care delivered by experienced orthopaedic surgeons using minimally invasive techniques.",
    services: [
      "Joint replacement",
      "Fracture management",
      "Sports injury treatment",
      "Spine care",
      "Arthritis treatment",
      "Physiotherapy support",
    ],
    highlights: [
      { title: "Modern OT", body: "Laminar-flow operation theatres for safer surgeries." },
      { title: "Quick recovery", body: "Enhanced recovery protocols and physiotherapy." },
    ],
    doctors: [
      { name: "Dr. Prafulla Herode", role: "Orthopaedic Surgeon", gender: "male" },
      { name: "Dr. Sourabh Jatkar", role: "Orthopaedic Surgeon", gender: "male" },
      { name: "Dr. Vishal Acharya", role: "Orthopaedic Surgeon", gender: "male" },
    ],
  },
  {
    slug: "oncology",
    name: "Oncology",
    icon: "Ribbon",
    tagline: "Compassion through every step.",
    description:
      "Comprehensive cancer care with early screening, multidisciplinary planning and personalised treatment pathways.",
    services: [
      "Cancer screening",
      "Chemotherapy consultation",
      "Surgical oncology",
      "Follow-up care",
    ],
    highlights: [
      { title: "Tumour board", body: "Joint experts review every case." },
      { title: "Supportive care", body: "Counselling, nutrition and pain management." },
    ],
    doctors: [{ name: "Dr. Makarand Bhole", role: "Onco Surgeon", gender: "male" }],
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "HeartPulse",
    tagline: "Care your heart can feel.",
    description:
      "Preventive, diagnostic and interventional cardiac care backed by 24×7 emergency response.",
    services: [
      "ECG & 2D Echo",
      "Stress test (TMT)",
      "Angiography consult",
      "Heart failure care",
      "Hypertension management",
    ],
    highlights: [
      { title: "24×7 cardiac team", body: "Rapid response for chest pain & MI." },
      { title: "Preventive screens", body: "Heart-health packages for every age." },
    ],
    doctors: [{ name: "Dr. Ankit Mehta", role: "Cardiologist", gender: "male" }],
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "Brain",
    tagline: "Expert care for brain & nerves.",
    description:
      "Complete diagnosis and treatment for stroke, epilepsy, headache disorders and neuromuscular conditions.",
    services: [
      "Stroke care",
      "Epilepsy management",
      "Headache & migraine clinic",
      "Neuro rehabilitation",
      "EEG / NCV",
    ],
    highlights: [
      { title: "Stroke ready", body: "Time-critical thrombolysis pathway." },
      { title: "Rehab focus", body: "Restoring independence after illness." },
    ],
    doctors: [{ name: "Dr. Bhavin Pujara", role: "Neurologist", gender: "male" }],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    icon: "Activity",
    tagline: "Digestive health, simplified.",
    description:
      "Diagnosis & treatment for gastric, liver and intestinal conditions including endoscopic procedures.",
    services: [
      "Endoscopy & colonoscopy",
      "Liver disease care",
      "Acidity & ulcer treatment",
      "IBS clinic",
      "Pancreatic care",
    ],
    highlights: [
      { title: "Day-care endoscopy", body: "Same-day discharge for most procedures." },
      { title: "Diet & lifestyle", body: "Holistic plans with our dieticians." },
    ],
    doctors: [{ name: "Dr. Shubham Gupta", role: "Gastroenterologist", gender: "male" }],
  },
  {
    slug: "ent",
    name: "ENT",
    icon: "Ear",
    tagline: "Ear, nose & throat experts.",
    description: "Modern ENT care for hearing, sinus, voice and sleep disorders for all ages.",
    services: [
      "Hearing evaluation",
      "Sinus surgery",
      "Tonsil & adenoid care",
      "Snoring & sleep apnea",
      "Vertigo clinic",
    ],
    highlights: [
      { title: "Endoscopic surgery", body: "Faster recovery, minimal scarring." },
      { title: "Pediatric ENT", body: "Gentle care for the little ones." },
    ],
    doctors: [
      { name: "Dr. Anil Harisinghani", role: "ENT Specialist", gender: "male" },
      { name: "Dr. Yogesh Narkhade", role: "ENT Specialist", gender: "male" },
    ],
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    icon: "Eye",
    tagline: "Clearer vision for life.",
    description:
      "Complete eye care from routine vision tests to advanced cataract and retina services.",
    services: ["Cataract surgery", "Retina care", "LASIK consultation", "Vision testing"],
    highlights: [
      { title: "Phaco cataract", body: "Stitch-less, day-care surgery." },
      { title: "Retina screening", body: "Diabetic & macular evaluation." },
    ],
    doctors: [
      {
        name: "Dr. Shailendra Nanaware",
        role: "Ophthalmologist · Managing Director",
        gender: "male",
      },
    ],
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    icon: "Scissors",
    tagline: "Skilled hands, gentle care.",
    description: "Routine and complex general surgical procedures with laparoscopic expertise.",
    services: [
      "Laparoscopic surgery",
      "Hernia repair",
      "Gallbladder surgery",
      "Appendix surgery",
      "Piles & fistula care",
    ],
    highlights: [
      { title: "Minimally invasive", body: "Smaller cuts, quicker recovery." },
      { title: "Trained team", body: "Experienced surgeons & anaesthetists." },
    ],
    doctors: [
      { name: "Dr. Ram Pawar", role: "General Surgeon", gender: "male" },
      { name: "Dr. Vaibhav Lokhande", role: "General Surgeon", gender: "male" },
      { name: "Dr. Shridhar Radhakrishnan", role: "General Surgeon", gender: "male" },
    ],
  },
  {
    slug: "plastic-surgery",
    name: "Plastic Surgery",
    icon: "Sparkles",
    tagline: "Reconstructive & aesthetic care.",
    description:
      "Reconstructive, hand and aesthetic surgery delivered with precision and discretion.",
    services: ["Reconstructive surgery", "Burn care", "Hand surgery", "Cosmetic consultation"],
    highlights: [
      { title: "Personal plans", body: "Outcome-focused, honest counselling." },
      { title: "Safe protocols", body: "Strict sterility and monitoring." },
    ],
    doctors: [
      { name: "Dr. Abhijit Sawant", role: "Plastic & Reconstructive Surgeon", gender: "male" },
    ],
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    icon: "Baby",
    tagline: "Care for your little stars.",
    description: "Newborn, child and adolescent care including immunisation and growth monitoring.",
    services: [
      "Newborn care",
      "Immunisation",
      "Growth & nutrition",
      "Childhood illness care",
      "Pediatric emergency",
    ],
    highlights: [
      { title: "Friendly clinic", body: "A warm, child-first environment." },
      { title: "24×7 support", body: "Always available for emergencies." },
    ],
    doctors: [{ name: "Dr. Kaustubh Shah", role: "Paediatrician", gender: "male" }],
  },
  {
    slug: "gynecology",
    name: "Gynecology",
    icon: "Flower2",
    tagline: "Women's health, every stage.",
    description:
      "Complete women's health from adolescence to menopause with sensitive, expert care.",
    services: [
      "Antenatal & delivery",
      "Infertility consultation",
      "PCOS & hormone care",
      "Cancer screening",
      "Menopause clinic",
    ],
    highlights: [
      { title: "Birthing suites", body: "Comfortable & safe delivery rooms." },
      { title: "Privacy first", body: "Respectful, confidential care." },
    ],
    doctors: [
      { name: "Dr. Anagha Adulkar", role: "Gynaecologist & Obstetrician", gender: "female" },
      { name: "Dr. Sunita Gogate", role: "Gynaecologist & Obstetrician", gender: "female" },
    ],
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "Waves",
    tagline: "Expert urinary & kidney care.",
    description:
      "Diagnosis & treatment of urinary, kidney and prostate conditions including endo-urology.",
    services: ["Kidney stone treatment", "Prostate care", "UTI management", "Endo-urology"],
    highlights: [
      { title: "Stone clinic", body: "Latest lithotripsy techniques." },
      { title: "Men's health", body: "Sensitive, expert consultation." },
    ],
    doctors: [
      { name: "Dr. Sachin Pandey", role: "Urologist", gender: "male" },
      { name: "Dr. Jay Bhanushali", role: "Urologist", gender: "male" },
    ],
  },
  {
    slug: "icu-emergency",
    name: "ICU & Emergency Care",
    icon: "Siren",
    tagline: "Always on. Always ready.",
    description:
      "State-of-the-art ICU and 24×7 emergency department staffed by trained intensivists and emergency physicians.",
    services: [
      "24×7 emergency",
      "Adult ICU",
      "Trauma care",
      "Ventilator support",
      "Cardiac monitoring",
    ],
    highlights: [
      { title: "Modern ICU", body: "Multi-parameter monitoring & advanced ventilators." },
      { title: "Rapid response", body: "Trained doctors and paramedics, around the clock." },
    ],
  },
  {
    slug: "spine-surgery",
    name: "Spine Surgery",
    icon: "PersonStanding",
    tagline: "Precision care for your spine.",
    description:
      "Advanced spinal surgery and non-surgical management for disc disorders, scoliosis, spinal stenosis and traumatic spine injuries.",
    services: [
      "Disc surgery",
      "Spinal fusion",
      "Minimally invasive spine surgery",
      "Scoliosis correction",
      "Spinal stenosis treatment",
      "Trauma management",
    ],
    highlights: [
      { title: "Minimally invasive", body: "Faster recovery with smaller incisions." },
      { title: "Expert surgeons", body: "Dedicated spine specialists on team." },
    ],
    doctors: [{ name: "Dr. Aakash Jain", role: "Spine Surgeon", gender: "male" }],
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    icon: "Stethoscope",
    tagline: "Your everyday health partner.",
    description:
      "Comprehensive internal medicine and family health consultations including chronic disease management, preventive care and acute illness treatment.",
    services: [
      "Internal medicine",
      "Diabetes & BP care",
      "Fever & infection care",
      "Preventive health checks",
      "Chronic disease management",
      "Lifestyle counselling",
    ],
    highlights: [
      { title: "Trusted advice", body: "Long-term patient relationships." },
      { title: "One stop", body: "Diagnostics & pharmacy on site." },
    ],
    doctors: [
      { name: "Dr. Amol Nanaware", role: "General Physician", gender: "male" },
      { name: "Dr. Shailesh Patil", role: "General Physician", gender: "male" },
      { name: "Dr. Mrinalini Singh", role: "General Physician", gender: "female" },
    ],
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    icon: "Droplets",
    tagline: "Expert kidney care, every step.",
    description:
      "Diagnosis and management of chronic kidney disease, dialysis support, hypertensive nephropathy and kidney stone disorders.",
    services: [
      "CKD management",
      "Dialysis support",
      "Kidney stone care",
      "Hypertensive nephropathy",
      "Electrolyte disorders",
      "Renal diet counselling",
    ],
    highlights: [
      { title: "Kidney specialists", body: "Experienced nephrologists on team." },
      { title: "Dialysis ready", body: "In-house dialysis support facility." },
    ],
    doctors: [{ name: "Dr. Nilesh Charawande", role: "Nephrologist", gender: "male" }],
  },
  {
    slug: "neurosurgery",
    name: "Neurosurgery",
    icon: "Zap",
    tagline: "Precision surgery for brain & spine.",
    description:
      "Advanced surgical care for brain tumours, spinal conditions, head trauma, hydrocephalus and cerebrovascular disorders.",
    services: [
      "Brain tumour surgery",
      "Head trauma care",
      "Hydrocephalus treatment",
      "Cerebrovascular surgery",
      "Peripheral nerve surgery",
      "Spinal cord surgery",
    ],
    highlights: [
      { title: "Precision surgery", body: "Neuro-navigation aided procedures." },
      { title: "Post-op care", body: "Dedicated neuro ICU and rehab." },
    ],
    doctors: [{ name: "Dr. Shrikant Balasubramanyam", role: "Neurosurgeon", gender: "male" }],
  },
];

export const STATS = [
  { value: 35, suffix: "", label: "In-patient Beds" },
  { value: 10, suffix: "", label: "(10 bed ICU)" },
  { value: 1000, suffix: "+", label: "Patients Treated" },
  { value: 17, suffix: "", label: "Specialist Departments" },
  { value: 24, suffix: "×7", label: "Emergency Support" },
];

export const INSURERS = [
  "Mediassist",
  "Tata AIG",
  "ACKO",
  "Bajaj Allianz",
  "Health Insurance",
  "Care Health",
  "Heritage",
];
