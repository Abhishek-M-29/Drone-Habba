import { 
  Plane, 
  Target, 
  FileText, 
  Egg, 
  PenTool,
  Shield,
  Zap,
  Award,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Camera,
  Navigation,
  Package,
  MapPin,
  Crosshair,
  Truck,
  FileSearch,
  Radio,
  CloudSun,
  Brain,
  Scale,
  Ruler,
  Wind
} from 'lucide-react';

export const events = [
  {
    id: 1,
    title: "Drone Competition",
    shortTitle: "Drone Racing",
    icon: Plane,
    tagline: "Civil & Defense UAV Missions",
    description: "Design and pilot your UAV through challenging civil and defense-oriented missions. Show your skills in racing, payload delivery, and autonomous navigation.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80",
    teamSize: "3-6 members",
    eligibility: "Diploma / UG / PG Students",
    categories: [
      {
        name: "Civil Categories",
        icon: Zap,
        items: [
          { title: "Racing / Obstacle Navigation", icon: Navigation, description: "High-speed drone racing through obstacle courses" },
          { title: "Payload Delivery", icon: Package, description: "Precision delivery of payloads to target locations" },
          { title: "Autonomous Waypoint Mission", icon: MapPin, description: "GPS-guided autonomous navigation missions" }
        ]
      },
      {
        name: "Defense Category (Simulation)",
        icon: Shield,
        items: [
          { title: "Surveillance & Reconnaissance", icon: Camera, description: "Real-time monitoring and intelligence gathering" },
          { title: "Target Identification / Geo-tagging", icon: Crosshair, description: "Precision target marking and identification" },
          { title: "Precision Supply Drop", icon: Truck, description: "Simulated logistics support missions" }
        ]
      }
    ],
    technicalRequirements: [
      "Maximum Takeoff Weight (MTOW) compliance",
      "Mandatory pre-flight inspection and weight verification",
      "Approved RF frequency allocation only",
      "Functional failsafe/kill switch required",
      "Defense UAVs: surveillance camera, GPS logging, encrypted telemetry"
    ],
    evaluationCriteria: [
      { name: "Mission Accuracy", weight: 25 },
      { name: "Completion Time", weight: 25 },
      { name: "Stability & Control", weight: 20 },
      { name: "Technical Innovation", weight: 20 },
      { name: "Safety Compliance", weight: 10 }
    ],
    awards: [
      "Overall Winner",
      "Category Winners",
      "Best Defense UAV",
      "Best Innovation",
      "Best Safety Compliance"
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Aircraft Accident Investigation",
    shortTitle: "Investigation",
    icon: FileSearch,
    tagline: "ICAO Annex 13 Simulation",
    description: "Analyze real-world accident scenarios using Flight Data Recorder and Cockpit Voice Recorder data. Apply ICAO investigation methodologies to determine probable cause.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80",
    teamSize: "3-5 members",
    eligibility: "Diploma / UG / PG Students",
    categories: [
      {
        name: "Evidence Analysis",
        icon: FileSearch,
        items: [
          { title: "FDR Parameter Analysis", icon: Radio, description: "Flight Data Recorder parameters evaluation" },
          { title: "CVR Transcript Review", icon: FileText, description: "Cockpit Voice Recorder analysis" },
          { title: "Weather & ATC Data", icon: CloudSun, description: "Environmental factors assessment" }
        ]
      },
      {
        name: "Investigation Process",
        icon: Target,
        items: [
          { title: "Wreckage Documentation", icon: Camera, description: "Site sketch and debris mapping" },
          { title: "Human Factors Analysis", icon: Brain, description: "CRM, fatigue, decision-making assessment" },
          { title: "Root Cause Determination", icon: Crosshair, description: "Evidence-based probable cause" }
        ]
      }
    ],
    technicalRequirements: [
      "Classify occurrence as per ICAO Annex 13",
      "Structured wreckage documentation plan",
      "Chain-of-custody protocol for evidence",
      "Clear differentiation of assumptions vs verified evidence",
      "Systematic analysis of all available data"
    ],
    evaluationCriteria: [
      { name: "Technical Accuracy", weight: 30 },
      { name: "Logical Reasoning & Evidence Linkage", weight: 25 },
      { name: "Depth of Analysis", weight: 20 },
      { name: "Practical Safety Recommendations", weight: 15 },
      { name: "Professional Documentation", weight: 10 }
    ],
    awards: [
      "Best Investigation Procedure Award",
      "Runner-Up",
      "Best Technical Analysis",
      "Best Safety Recommendations"
    ],
    submissionFormat: "3-5 page investigation report + 10-15 min presentation",
    color: "from-amber-500 to-orange-400"
  },
  {
    id: 3,
    title: "Poster Presentation",
    shortTitle: "Posters",
    icon: FileText,
    tagline: "Aerospace Innovations",
    description: "Present your research on cutting-edge aerospace technologies including sustainable aviation, electric propulsion, hypersonic vehicles, and AI in aviation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    teamSize: "1-3 members",
    eligibility: "Diploma / UG / PG Students",
    themes: [
      "Sustainable Aviation Fuel",
      "Electric/Hybrid Propulsion",
      "Hypersonic Vehicles",
      "UAV Swarm Technology",
      "Space Propulsion",
      "AI in Aviation",
      "Advanced Composites",
      "Reusable Launch Systems"
    ],
    posterSpecs: {
      size: "A1 (594mm × 841mm)",
      orientation: "Portrait",
      minFont: "24pt",
      readableDistance: "1-1.5 meters"
    },
    mandatorySections: [
      "Title & Authors (with Institution)",
      "Problem Statement / Industry Gap",
      "Description of Innovation",
      "Technical Methodology / Concept Model",
      "Performance Benefits (with data/figures)",
      "Future Scope & Applications"
    ],
    evaluationCriteria: [
      { name: "Technical Innovation & Originality", weight: 30 },
      { name: "Engineering Feasibility", weight: 25 },
      { name: "Analytical Depth & Data Support", weight: 20 },
      { name: "Clarity of Presentation", weight: 15 },
      { name: "Visual Quality & Formatting", weight: 10 }
    ],
    awards: [
      "Best Innovation Poster Award",
      "Runner-Up Award",
      "Special Recognition - Sustainability",
      "Special Recognition - Space Technology",
      "Special Recognition - Defense Innovation"
    ],
    presentationTime: "7-8 minutes + 3 min Q&A",
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 4,
    title: "Egg Parachute Challenge",
    shortTitle: "Egg Drop",
    icon: Egg,
    tagline: "Engineering Precision Landing",
    description: "Design and fabricate a parachute system to safely land a raw egg from heights of 10-20 meters. Test your aerodynamic design and engineering skills.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    teamSize: "2-4 members",
    eligibility: "Diploma / UG / PG Students",
    technicalSpecs: {
      maxWeight: "500 grams (including egg)",
      dropHeight: "10-20 meters",
      deployment: "Self-deploying (no manual assistance)",
      attempts: "One official drop"
    },
    allowedMaterials: [
      "Fabric",
      "Plastic sheets",
      "Paper",
      "Strings",
      "Biodegradable materials"
    ],
    prohibitedMaterials: [
      "Metal cages",
      "Pre-packaged protective shells",
      "Shock-absorbing gels"
    ],
    evaluationCriteria: [
      { name: "Egg Survival (No Crack)", weight: 40 },
      { name: "Descent Stability & Controlled Landing", weight: 20 },
      { name: "Design Innovation & Engineering Concept", weight: 20 },
      { name: "Weight Efficiency", weight: 10 },
      { name: "Team Explanation & Technical Justification", weight: 10 }
    ],
    awards: [
      "Winner",
      "Runner-Up",
      "Best Innovative Design"
    ],
    color: "from-green-500 to-emerald-400"
  },
  {
    id: 5,
    title: "Aircraft Design Parameters",
    shortTitle: "Aircraft Design",
    icon: PenTool,
    tagline: "Wing & Fuselage Optimization",
    description: "Design optimal wing and fuselage parameters for a specified mission profile. Apply aerodynamic principles to create efficient aircraft configurations.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&auto=format&fit=crop&q=80",
    teamSize: "2-4 members",
    eligibility: "Diploma / UG / PG Students",
    missionProfiles: [
      "4-Seater Trainer Aircraft",
      "UAV Platform",
      "Regional Transport"
    ],
    wingParameters: [
      { param: "Wing Area (S)", icon: Scale },
      { param: "Aspect Ratio (AR)", icon: Ruler },
      { param: "Wingspan (b)", icon: Ruler },
      { param: "Taper Ratio & Sweep", icon: Wind },
      { param: "Airfoil Selection", icon: Wind },
      { param: "Wing Loading (W/S)", icon: Scale }
    ],
    fuselageParameters: [
      "Fuselage Length & Diameter",
      "Fineness Ratio",
      "Cabin Layout / Payload Arrangement",
      "Structural Configuration Concept"
    ],
    submissionFormat: {
      report: "10-15 pages",
      presentation: "10 min + 5 min Q&A",
      requirements: [
        "Mission specification",
        "Design methodology",
        "Sizing calculations",
        "Performance estimation",
        "CAD model or layout sketch"
      ]
    },
    evaluationCriteria: [
      { name: "Accuracy of Engineering Calculations", weight: 30 },
      { name: "Design Methodology & Assumptions", weight: 20 },
      { name: "Feasibility & Performance Justification", weight: 20 },
      { name: "Innovation & Optimization Approach", weight: 15 },
      { name: "Technical Presentation & Documentation", weight: 15 }
    ],
    awards: [
      "Best Overall Aircraft Design",
      "Best Aerodynamic Optimization",
      "Best Technical Presentation"
    ],
    color: "from-red-500 to-rose-400"
  }
];

export default events;
