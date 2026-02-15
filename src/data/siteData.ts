import { Bot, Workflow, BarChart3, Cog, Brain, Zap } from "lucide-react";

export const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description: "Deploy intelligent conversational agents that handle customer inquiries 24/7, reducing response times by up to 80%.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline repetitive business processes with AI-driven workflows that eliminate manual tasks and reduce errors.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Leverage machine learning models to forecast trends, optimize operations, and make data-driven decisions.",
  },
  {
    icon: Cog,
    title: "Workflow Optimization",
    description: "Redesign and automate complex workflows using AI to increase throughput and operational efficiency.",
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Extract insights from unstructured data, automate document processing, and enable semantic search capabilities.",
  },
  {
    icon: Zap,
    title: "Intelligent Integration",
    description: "Connect your existing tools and platforms with AI-powered middleware for seamless data flow and automation.",
  },
];

export const useCases = [
  {
    id: "fintech-fraud-detection",
    title: "Real-Time Fraud Detection System",
    client: "Global FinTech Corp",
    industry: "Financial Services",
    challenge: "The client was losing millions annually to fraudulent transactions that their rule-based system couldn't detect. False positive rates were extremely high, causing friction for legitimate customers.",
    solution: "We implemented a machine learning pipeline that analyzes transaction patterns in real-time. The system uses anomaly detection and behavioral biometrics to identify fraudulent activity with unprecedented accuracy.",
    results: [
      "94% reduction in fraudulent transactions",
      "75% decrease in false positives",
      "$12M saved in the first year",
      "Processing 50,000+ transactions per second",
    ],
    summary: "ML-powered fraud detection reducing losses by 94% and saving $12M annually.",
  },
  {
    id: "healthcare-patient-triage",
    title: "AI-Powered Patient Triage Platform",
    client: "MedFlow Health Systems",
    industry: "Healthcare",
    challenge: "Emergency departments were overwhelmed with patient volume, leading to long wait times and inconsistent triage decisions. Staff burnout was at an all-time high.",
    solution: "We built an AI triage assistant that evaluates patient symptoms, medical history, and vital signs to recommend priority levels. The system integrates with existing EHR systems and provides real-time decision support.",
    results: [
      "40% reduction in average wait times",
      "98.5% accuracy in critical case identification",
      "30% improvement in staff efficiency",
      "Deployed across 15 hospitals",
    ],
    summary: "AI triage system reducing ER wait times by 40% with 98.5% accuracy.",
  },
  {
    id: "retail-supply-chain",
    title: "Predictive Supply Chain Optimization",
    client: "RetailMax International",
    industry: "Retail & E-Commerce",
    challenge: "The client struggled with inventory management across 200+ locations, resulting in frequent stockouts and overstock situations costing millions in lost revenue and waste.",
    solution: "We developed a predictive analytics platform that forecasts demand at the SKU level, optimizes inventory allocation, and automates reorder decisions based on real-time sales data and external factors.",
    results: [
      "35% reduction in stockout incidents",
      "28% decrease in excess inventory",
      "$8.5M annual cost savings",
      "ROI achieved within 6 months",
    ],
    summary: "Predictive inventory system saving $8.5M annually across 200+ locations.",
  },
  {
    id: "manufacturing-quality-control",
    title: "Computer Vision Quality Inspection",
    client: "PrecisionTech Manufacturing",
    industry: "Manufacturing",
    challenge: "Manual quality inspection was slow, inconsistent, and couldn't keep pace with production volume. Defective products were reaching customers, damaging brand reputation.",
    solution: "We deployed a computer vision system using deep learning models trained on thousands of product images to detect defects in real-time on the production line, automatically flagging and routing defective items.",
    results: [
      "99.7% defect detection accuracy",
      "60% faster inspection speed",
      "85% reduction in customer returns",
      "Full ROI in 4 months",
    ],
    summary: "CV-based quality control achieving 99.7% accuracy and 85% fewer returns.",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    title: "CTO",
    company: "Global FinTech Corp",
    quote: "The AI fraud detection system transformed our security posture entirely. We went from reactive to proactive, and the results speak for themselves — $12M saved in year one alone.",
    avatar: "SC",
  },
  {
    name: "Dr. James Rivera",
    title: "Chief Medical Officer",
    company: "MedFlow Health Systems",
    quote: "The triage AI has been nothing short of revolutionary for our emergency departments. Our staff can now focus on what matters most — patient care — while the AI handles the initial assessment.",
    avatar: "JR",
  },
  {
    name: "Michelle Park",
    title: "VP of Operations",
    company: "RetailMax International",
    quote: "We struggled with supply chain inefficiencies for years. Their predictive analytics platform gave us visibility we never had before and paid for itself within six months.",
    avatar: "MP",
  },
  {
    name: "Thomas Andersen",
    title: "Head of Innovation",
    company: "PrecisionTech Manufacturing",
    quote: "The computer vision quality system exceeded every benchmark we set. It's faster, more accurate, and more consistent than manual inspection could ever be.",
    avatar: "TA",
  },
  {
    name: "Elena Vasquez",
    title: "COO",
    company: "LogiStream Enterprises",
    quote: "Working with this team was seamless. They understood our challenges deeply and delivered an automation solution that genuinely transformed how we operate day to day.",
    avatar: "EV",
  },
];
