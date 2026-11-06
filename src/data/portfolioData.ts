export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Ministration' | 'Projects' | 'Inspiration';
  src: string;
  duration?: string;
  year: string;
  location: string;
  tag: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: 'Pulpit & Ministration' | 'Church Building & Projects' | 'Outreaches & Evangelism' | 'Crusades & Mass Gatherings' | 'Leadership & Honors';
  year: string;
  location: string;
  description: string;
  featured?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface ServicePillar {
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const BIO_DATA = {
  name: "Pst Okewu Emmanuel",
  titles: "Pastor · Entrepreneur · Counselor · Public Administration Scholar",
  yearsOfExperience: 9,
  email: "okewuemmanuel3998@gmail.com",
  phone: "+234 811 961 483 7437", // formatted from user's TikTok handle context & direct contact
  shortBio: "Pst Okewu Emmanuel is a dynamic minister, seasoned counselor, and pragmatic entrepreneur with over 9 years of dedicated pastoral leadership. Driven by a deep commitment to raising men and women into their divine purpose, he couples spiritual authority with academic acumen in public administration and transnational diplomacy.",
  fullBio: `For over nine years, Pastor Okewu Emmanuel has served at the forefront of transformative ministry, pastoral governance, and community empowerment. His ministry has pioneered worship auditoriums, trained emerging pastors, and ignited youth revivals across Nigeria.

Equipped with a Bachelor of Science (B.Sc) in Public Administration (2010) and a Master of Science (M.Sc) in Public Administration (2025), alongside a Master of Arts in International Relations in view, Pst Okewu bridges spiritual leadership with strategic organizational administration and cross-border diplomacy.

From Makurdi in Benue State to New Karu in Nasarawa State, and currently in Kurudu, Federal Capital Territory (FCT) Abuja, his visionary leadership has repeatedly constructed God's houses and developed leaders. As he expands his sphere into Europe for professional engagement and global ministry, Pst Okewu continues to inspire believers worldwide through apostolic zeal, compassionate counseling, and kingdom enterprise.`,
  degrees: [
    {
      degree: "B.Sc in Public Administration",
      year: "2010",
      institution: "Accredited University",
      status: "Graduated",
      field: "Administrative Governance & Policy Formulation"
    },
    {
      degree: "M.Sc in Public Administration",
      year: "2025",
      institution: "Graduate School",
      status: "Graduated",
      field: "Strategic Leadership & Public Sector Management"
    },
    {
      degree: "M.A. in International Relations",
      year: "In View",
      institution: "Diplomatic Studies",
      status: "In Progress",
      field: "Transnational Policy, Cross-Border Relations & Diplomacy"
    }
  ],
  quote: "Battles are part of life; it is only through winning that we continue to live and fulfill our God-given destiny."
};

export const MILESTONES: Milestone[] = [
  {
    year: "2015",
    title: "Pioneering Ministry & Auditorium Construction",
    location: "Makurdi (MKD), Benue State",
    description: "Inaugurated dedicated full-time ministry in Makurdi, Benue State. Led the congregation to construct a permanent worship auditorium and actively raised a core company of men and women who are now licensed pastors and ministers.",
    highlights: ["Built physical church auditorium", "Mentored and ordained next-generation ministers", "Established discipleship training curriculum"],
    icon: "Building"
  },
  {
    year: "2022",
    title: "Pastoral Transition & City-Wide Revival",
    location: "New Karu, Nasarawa State",
    description: "Transferred to lead Dunamis Int'l Gospel Centre New Karu Central and Youth Church. Mobilized thousands through street evangelism campaigns, 'Spice of Love' singles & marriage conferences, and intense youth prayer summits.",
    highlights: ["Led Dunamis New Karu Central & Youth Church", "Pioneered 'When Teens Pray' youth movement", "Massive street evangelism across Nasarawa districts"],
    icon: "Flame"
  },
  {
    year: "2025",
    title: "Kurudu Sanctuary Construction & Community Expansion",
    location: "Kurudu, Federal Capital Territory (FCT) Abuja",
    description: "Moved to FCT Kurudu, Abuja to oversee ongoing expansion. Built a brand-new multi-span church auditorium for God's people, supervising structural steel roofing, foundation works, and growing a vibrant congregation.",
    highlights: ["Constructed & roofed Kurudu FCT worship auditorium", "Supervised engineering & community labor forces", "Expanded kingdom mentorship across Abuja FCT"],
    icon: "Hammer"
  },
  {
    year: "Present & Ahead",
    title: "Global Horizon: Europe Ministry & Career Assignment",
    location: "Europe & International Mission Fields",
    description: "Stepping into international ministry and cross-border professional assignments across Europe. Bringing seasoned pastoral mentorship, organizational leadership, and international relations expertise to European communities and African diaspora networks.",
    highlights: ["Global speaking & revival tours", "Cross-border administrative & enterprise consulting", "Inter-cultural gospel outreaches"],
    icon: "Globe"
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    title: "Pastoral Leadership & Impartation",
    tagline: "Raising men into divine purpose",
    description: "Preaching the unadulterated Word with apostolic boldness, prophetic deliverance, and healing grace. Discipling emerging leaders to assume ministerial responsibility.",
    deliverables: ["Pulpit Ministration & Guest Preaching", "Prophetic Deliverance & Impartation Services", "Youth Conventions & Revival Summits", "Church Leadership Seminars"],
    icon: "Church"
  },
  {
    title: "Life, Destiny & Relationship Counseling",
    tagline: "Unlocking God's blueprint for your life",
    description: "Empathetic, biblical, and psychologically sound counseling for individuals, couples, and youths navigating identity, spiritual warfare, marital decisions, and life transitions.",
    deliverables: ["One-on-One Spiritual & Destiny Guidance", "'Spice of Love' Relationship & Pre-Marital Mentorship", "Career & Purpose Clarification", "Grief, Healing & Spiritual Deliverance"],
    icon: "HeartHandshake"
  },
  {
    title: "Entrepreneurship & Public Governance",
    tagline: "Kingdom principles in the marketplace",
    description: "Drawing upon 9+ years of business experience, B.Sc & M.Sc Public Administration degrees to mentor entrepreneurs, establish ethical enterprise systems, and advise on organizational policy.",
    deliverables: ["Business Startup & Growth Mentorship", "Public Administration & Policy Advisory", "Cross-Border Business Communication", "Ethical Governance Workshops"],
    icon: "Briefcase"
  },
  {
    title: "Sanctuary Construction & Project Management",
    tagline: "Hands-on kingdom infrastructure",
    description: "Proven track record of building two church auditoriums (Makurdi 2015 & Kurudu FCT 2025). Guiding ministries through site development, resource stewardship, and project execution.",
    deliverables: ["Church Building Feasibility & Planning", "Auditorium Design & Structural Oversight", "Project Budgeting & Community Engagement", "Sanctuary Dedication & Mobilization"],
    icon: "Layers"
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "video-ministration",
    title: "Ministration Video",
    subtitle: "Youth Impartation & Deliverance at 'When Teens Pray'",
    description: "Watch Pst Okewu Emmanuel ministering with divine power and fervency at 'When Teens Pray'. Under a strong prophetic mantle, chains are broken, demons commanded out, and fresh fire released upon the youth.",
    category: "Ministration",
    src: "/assets/aistudio/WhatsApp_Video_2026-11-06_at_2.25.02_PM_7ccb3e31.mp4",
    duration: "4:02",
    year: "2024",
    location: "Dunamis Centre, New Karu",
    tag: "Holding Microphone Ministration"
  },
  {
    id: "video-auditorium-project",
    title: "Church Building Auditorium Video Project at Kurudu FCT Abuja 2025",
    subtitle: "Sanctuary Construction, Structural Steel & Roofing Progress",
    description: "Actual on-site video footage of the church building auditorium project at Kurudu, FCT Abuja in 2025. Illustrating the physical construction, roofing sheets installation, concrete casting, and community mobilization.",
    category: "Projects",
    src: "/assets/aistudio/WhatsApp_Video_2026-11-06_at_2.25.01_PM_bf9b41b1.mp4",
    duration: "0:20",
    year: "2025",
    location: "Kurudu, FCT Abuja",
    tag: "Kurudu Auditorium 2025"
  },
  {
    id: "video-exhortation",
    title: "Divine Exhortation: God's Thoughts of Peace",
    subtitle: "Jeremiah 29:11 - What If Your Delay Is Divine Preparation?",
    description: "Pst Okewu delivers a potent exhortation holding the Holy Scriptures: reminding you that God has not forgotten you, working behind the scenes to give you an expected end. Thoughts of peace and not of evil.",
    category: "Inspiration",
    src: "/assets/aistudio/WhatsApp_Video_2026-11-06_at_2.25.01_PM__1__d937157b.mp4",
    duration: "0:38",
    year: "2024",
    location: "Digital Studio Exhortation",
    tag: "Motivational & Pastoral Exhortation"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  // PULPIT & MINISTRATION
  {
    id: "gal-pulpit-1",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.36.41_PM_9e452391.jpeg",
    title: "Preaching with Authority & Grace",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Dunamis New Karu Central",
    description: "Pst Okewu Emmanuel delivering a potent message on divine destiny and kingdom manifestation.",
    featured: true
  },
  {
    id: "gal-pulpit-2",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.36.41_PM__2__72cde56e.jpeg",
    title: "Live Worship & Stage Ministration",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Dunamis Centre Ministration",
    description: "Pst Okewu Emmanuel leading high-energy praise, worship, and vocal ministration with the choir team.",
    featured: true
  },
  {
    id: "gal-pulpit-3",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.36.42_PM__1__f790e5bf.jpeg",
    title: "Heartfelt Worship & Ministry",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Thanksgiving Service",
    description: "Pst Okewu Emmanuel lifting holy hands in deep thanksgiving and reverence to God.",
    featured: false
  },
  {
    id: "gal-pulpit-4",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.36.43_PM_a68283f9.jpeg",
    title: "Kneeling in Total Consecration",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Dunamis Sanctuary",
    description: "Altar prayer for the saints and dedication of the congregation into God's presence.",
    featured: true
  },
  {
    id: "gal-pulpit-5",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.10_PM__1__4207a4a6.jpeg",
    title: "Altar Call & Pastoral Ministration",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Dunamis New Karu",
    description: "Pst Okewu ministering personally to seekers and praying over lives.",
    featured: false
  },
  {
    id: "gal-pulpit-6",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.10_PM__2__e4d611ac.jpeg",
    title: "Impartation & Hand Laying",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Graduation & Impartation Service",
    description: "Anointing young leaders and graduates for divine impact and societal influence.",
    featured: true
  },
  {
    id: "gal-pulpit-7",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.11_PM_60db8a5e.jpeg",
    title: "Altar Ministration for Youths",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Youth Convention",
    description: "Laying hands on students and youth leaders to release them into higher callings.",
    featured: false
  },
  {
    id: "gal-pulpit-8",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.18_PM_8cacd1a7.jpeg",
    title: "Praise & Worship Leadership",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Live Praise Night",
    description: "Pst Okewu singing with the worship choir, leading souls in lively celebration.",
    featured: false
  },
  {
    id: "gal-pulpit-9",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.19_PM_7a2f438d.jpeg",
    title: "Spiritual Warfare & Apostolic Charge",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Praise Jam",
    description: "Declaring breakthrough and spiritual release over the congregation.",
    featured: false
  },
  {
    id: "gal-pulpit-10",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.26_PM_95fd9a43.jpeg",
    title: "Traditional Attire Thanksgiving Service",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Dunamis Centre",
    description: "Celebrating African heritage and thanksgiving while leading the church in worship.",
    featured: true
  },
  {
    id: "gal-pulpit-11",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.25_PM_46041eef.jpeg",
    title: "Preaching with Passion and Conviction",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Thanksgiving Service 2024",
    description: "Illustrating the triumph of faith and overcoming demonic assignments.",
    featured: false
  },
  {
    id: "gal-pulpit-12",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.24_PM_cf7670ec.jpeg",
    title: "Prophetic Proclamation",
    category: "Pulpit & Ministration",
    year: "2024",
    location: "Dunamis Auditorium",
    description: "Extending hands in blessings over families and church members.",
    featured: false
  },

  // CRUSADES & MASS GATHERINGS
  {
    id: "gal-crusade-1",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.14_PM_f9e06f67.jpeg",
    title: "Kaduna Healing & Deliverance Crusade (Day One)",
    category: "Crusades & Mass Gatherings",
    year: "2024",
    location: "Kaduna Stadium Arena",
    description: "Massive sea of worshippers holding lights during the healing and deliverance crusade.",
    featured: true
  },
  {
    id: "gal-crusade-2",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.13_PM__2__59c9aab8.jpeg",
    title: "Stadium Illuminations & Mass Worship",
    category: "Crusades & Mass Gatherings",
    year: "2024",
    location: "Kaduna Crusade",
    description: "Tens of thousands lifting phone lights into the night sky, praying for divine healing.",
    featured: true
  },
  {
    id: "gal-crusade-3",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.13_PM__1__fb0f7e34.jpeg",
    title: "Crusade Field Overview",
    category: "Crusades & Mass Gatherings",
    year: "2024",
    location: "Kaduna Stadium",
    description: "Crowds filling the arena stands and field in hunger for spiritual transformation.",
    featured: false
  },
  {
    id: "gal-crusade-4",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.13_PM_e23c6ec8.jpeg",
    title: "Ministers' Front Row at Crusade",
    category: "Crusades & Mass Gatherings",
    year: "2024",
    location: "Kaduna Crusade Altar Platform",
    description: "Pst Okewu Emmanuel seated alongside senior clergy and visiting church fathers.",
    featured: false
  },
  {
    id: "gal-crusade-5",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.12_PM__2__69dc0603.jpeg",
    title: "Stadium Podium Ministration",
    category: "Crusades & Mass Gatherings",
    year: "2024",
    location: "Kaduna Crusade Stage",
    description: "Pst Okewu Emmanuel speaking from the main crusade podium to the massive gathering.",
    featured: true
  },
  {
    id: "gal-crusade-6",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.09_PM_30c3b080.jpeg",
    title: "Sanctuary Packed with Seekers",
    category: "Crusades & Mass Gatherings",
    year: "2024",
    location: "Dunamis Centre",
    description: "Auditorium filled to capacity with congregants lifting hands in deep spiritual resonance.",
    featured: false
  },
  {
    id: "gal-crusade-7",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.06_PM_9d751533.jpeg",
    title: "Overflowing Crowd in Prayer",
    category: "Crusades & Mass Gatherings",
    year: "2024",
    location: "New Karu Regional Convention",
    description: "Congregation standing shoulder to shoulder in intense united prayer.",
    featured: false
  },

  // OUTREACHES & EVANGELISM
  {
    id: "gal-outreach-1",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.04_PM__1__30f4ffa0.jpeg",
    title: "Street Evangelism & City Campaign",
    category: "Outreaches & Evangelism",
    year: "2023",
    location: "New Karu Markets & Streets",
    description: "Leading the Dunamis youth army on street evangelism holding banners: 'Jesus Loves You!' and 'No Sin Is Too Big to be Forgiven'.",
    featured: true
  },
  {
    id: "gal-outreach-2",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.03_PM_7f954da1.jpeg",
    title: "Street Preaching with Megaphone",
    category: "Outreaches & Evangelism",
    year: "2023",
    location: "Main Street, Nasarawa State",
    description: "Pst Okewu preaching the gospel directly to market traders, commuters, and youth.",
    featured: true
  },
  {
    id: "gal-outreach-3",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.03_PM__1__43578486.jpeg",
    title: "Street Anointing & Breakthrough Prayer",
    category: "Outreaches & Evangelism",
    year: "2023",
    location: "Market Junction Outreach",
    description: "Anointing vehicles, business grounds, and roads with oil, speaking peace over the community.",
    featured: true
  },
  {
    id: "gal-outreach-4",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.02_PM__1__c5c1934a.jpeg",
    title: "Youth with Purpose Evangelism Brigade",
    category: "Outreaches & Evangelism",
    year: "2023",
    location: "New Karu",
    description: "Mobilizing dozens of youth evangelists carrying gospel banners throughout the town.",
    featured: false
  },
  {
    id: "gal-outreach-5",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.02_PM_ff0a60b2.jpeg",
    title: "Street Salvation Crusade Procession",
    category: "Outreaches & Evangelism",
    year: "2023",
    location: "Nasarawa Highways",
    description: "Marching for Jesus with banners proclaiming 'The Grace of God Has Appeared to All'.",
    featured: false
  },
  {
    id: "gal-outreach-6",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.11_PM__1__9c1fd908.jpeg",
    title: "Community Outreach & Personal Witness",
    category: "Outreaches & Evangelism",
    year: "2023",
    location: "Local Community Visit",
    description: "Pst Okewu speaking intimately with mothers and young girls in local residential compounds.",
    featured: false
  },
  {
    id: "gal-outreach-7",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.12_PM__1__508c7716.jpeg",
    title: "Hospital & Home Sick Visits",
    category: "Outreaches & Evangelism",
    year: "2023",
    location: "Home Visit & Healing Prayer",
    description: "Holding hands with an ailing elder, offering fervent prayer for total restoration.",
    featured: true
  },

  // CHURCH BUILDING & PROJECTS
  {
    id: "gal-build-1",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.33_PM_43ed8e2c.jpeg",
    title: "Anointing New Building Grounds",
    category: "Church Building & Projects",
    year: "2025",
    location: "Kurudu Sanctuary Project, Abuja",
    description: "Pst Okewu pouring consecration oil over the door posts and premises of the new building.",
    featured: true
  },
  {
    id: "gal-build-2",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.32_PM__1__ab975039.jpeg",
    title: "Dedication of New Facility",
    category: "Church Building & Projects",
    year: "2025",
    location: "Abuja Building Dedication",
    description: "Leading the ceremonial prayer of dedication for newly built kingdom facilities.",
    featured: false
  },
  {
    id: "gal-build-3",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.34_PM_90a227b9.jpeg",
    title: "Gate Dedication & Building Consecration",
    category: "Church Building & Projects",
    year: "2025",
    location: "Sanctuary Entrance",
    description: "Ceremonial blessing of the entrance gates with oil, praying for all who will enter.",
    featured: false
  },
  {
    id: "gal-build-4",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.36_PM_d240932c.jpeg",
    title: "Blessing the Foundation & Household",
    category: "Church Building & Projects",
    year: "2025",
    location: "Building Interior",
    description: "Praying for the elders, builders, and families involved in the construction.",
    featured: false
  },
  {
    id: "gal-build-5",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.31_PM_200968f7.jpeg",
    title: "Sanctuary Interior Dedication",
    category: "Church Building & Projects",
    year: "2025",
    location: "Auditorium Interior",
    description: "Walking through the completed rooms, speaking prophetic words of prosperity.",
    featured: false
  },

  // LEADERSHIP, HONORS & FAMILY
  {
    id: "gal-honor-1",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.31_PM_200968f7.jpeg",
    title: "High-Level Chaplaincy Engagement: Nigerian Air Force",
    category: "Leadership & Honors",
    year: "2024",
    location: "Headquarters Nigerian Air Force Directorate of Chaplaincy",
    description: "Official courtesy visit and strategic fellowship with Air Commodore Chaplain and senior officers.",
    featured: true
  },
  {
    id: "gal-honor-2",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.29_PM__2__cd043926.jpeg",
    title: "Honorary Fellowship with Armed Forces Leadership",
    category: "Leadership & Honors",
    year: "2024",
    location: "Air Force Chaplaincy Headquarters",
    description: "Pst Okewu Emmanuel standing alongside Air Force Chaplains and senior military directors.",
    featured: true
  },
  {
    id: "gal-honor-3",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.29_PM__1__2440a830.jpeg",
    title: "Handshake of Honor with Armed Forces Chaplains",
    category: "Leadership & Honors",
    year: "2024",
    location: "Directorate of Chaplaincy",
    description: "Bridging church leadership with institutional national security chaplaincy.",
    featured: false
  },
  {
    id: "gal-honor-4",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.16_PM__2__cb510dc8.jpeg",
    title: "'Spice of Love' Singles & Married Conference",
    category: "Leadership & Honors",
    year: "2024",
    location: "Dunamis Youth Church New Karu",
    description: "Pst Emmanuel & Mrs. Plangnaan Okewu ministering together to empower couples and young singles.",
    featured: true
  },
  {
    id: "gal-honor-5",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.16_PM__1__a07489fd.jpeg",
    title: "Partners in Ministry & Life",
    category: "Leadership & Honors",
    year: "2024",
    location: "New Karu Central",
    description: "Pst Emmanuel and wife Mrs. Plangnaan Okewu worshipping and leading God's people in harmony.",
    featured: false
  },
  {
    id: "gal-honor-6",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.15_PM__1__6f8c4a5b.jpeg",
    title: "Praise & Joy with Congregation",
    category: "Leadership & Honors",
    year: "2024",
    location: "Youth Convention",
    description: "Joyful celebration of God's goodness alongside church elders and worshippers.",
    featured: false
  },
  {
    id: "gal-honor-7",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.10_PM_1ad9d9cc.jpeg",
    title: "Official Apostolic Portrait",
    category: "Leadership & Honors",
    year: "2024",
    location: "Portrait Studio",
    description: "Pst Okewu Emmanuel in fine tailored royal blue suit, reflecting excellence and dignity.",
    featured: true
  },
  {
    id: "gal-honor-8",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.09_PM_30c3b080.jpeg",
    title: "Senior Clergy Anointing Service",
    category: "Leadership & Honors",
    year: "2023",
    location: "Dunamis Sanctuary",
    description: "Dr. Pst Paul Enenche pouring anointing oil over Pst Okewu and his wife in spiritual commissioning.",
    featured: true
  }
];

export const INSPIRATIONAL_QUOTES = [
  {
    quote: "There is an enemy assigned for your life, there is another one that ensures you don't manifest your destiny. Rise up and overcome through faith in Christ.",
    author: "Pst Emmanuel Okewu",
    source: "Activating the Supernatural Series"
  },
  {
    quote: "Battles are part of life; it is only through winning that we continue to live.",
    author: "Pst Emmanuel Okewu",
    source: "Dunamis New Karu Central"
  },
  {
    quote: "If God has enemies, you have more enemies for serving God. It is deception to believe that you don't have an enemy. Be armed and vigilant.",
    author: "Pst Emmanuel Okewu",
    source: "Activating the Supernatural"
  },
  {
    quote: "Shalom: The Hebrew word for peace means wholeness, completeness, tranquility, and nothing missing. That is God's plan for your destiny.",
    author: "Pst Emmanuel Okewu",
    source: "Peace by the Blood Teaching"
  }
];
