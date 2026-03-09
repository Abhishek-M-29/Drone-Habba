import { 
  Plane, 
  Wind,
  FileSearch,
  PenTool,
  Presentation
} from 'lucide-react';

export const events = [
  {
    id: 1,
    title: "Drone Flying Competition",
    shortTitle: "Drone",
    icon: Plane,
    tagline: "Build. Fly. Dominate the Skies.",
    description: "Participants must build and fly a drone autonomously with geofencing capabilities. The drone must follow pre-programmed waypoints without manual control during the mission and stay within a predefined virtual boundary. The maximum altitude that can be attained is 30 metres from the surface, and the drone should be able to hover and hold onto respective positions.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80",
    color: "from-gray-300 to-gray-500",
    teamSize: "Max 10 per team",
    eligibility: "All college/university students",
    technicalRequirements: [
      "Maximum drone weight (including payload): 2 kg",
      "Must be capable of autonomous operation with geofencing",
      "Must follow pre-programmed waypoints without manual control",
      "Frame type is participant's choice (quadcopter, hexacopter, etc.)",
      "Maximum altitude: 30 metres from the surface",
      "Must be able to hover and hold position"
    ],
    evaluationCriteria: [
      { name: "Autonomous Flight Accuracy", weight: 30 },
      { name: "Geofencing Compliance", weight: 25 },
      { name: "Hover Stability", weight: 20 },
      { name: "Build Quality & Safety", weight: 15 },
      { name: "Overall Innovation", weight: 10 }
    ],
    awards: ["1st Place - Rs. 30,000/-", "2nd Place - Rs. 20,000/-"],
    registrationFee: "Rs. 1,000/- per team",
    feeAmount: 1000,
    whatsappLink: "https://chat.whatsapp.com/Iz9x5v5ZIxq8XAHlaZyhFW?mode=gi_t"
  },
  {
    id: 2,
    title: "Egg Parachute Competition",
    shortTitle: "Parachute",
    icon: Wind,
    tagline: "Design. Drop. Protect the Egg.",
    description: "All required materials to build the parachute will be provided at the venue. Participants must come with a basic idea or concept for their parachute design. During the competition, they will be given a limited amount of time to build the parachute using the provided materials. The goal is to design a parachute system that allows the egg to land safely without breaking when dropped from a height (height will be intimated at the venue).",
    image: "https://images.unsplash.com/photo-1591126992157-8f85b3913a7f?w=800&auto=format&fit=crop&q=80",
    color: "from-gray-400 to-gray-600",
    teamSize: "Max 2 per team",
    eligibility: "All college/university students",
    technicalRequirements: [
      "All materials will be provided at the venue",
      "Participants must come with a design concept/idea",
      "Build within the allotted time using provided materials only",
      "Egg must land safely without breaking from the drop height",
      "Drop height will be announced at the venue"
    ],
    evaluationCriteria: [
      { name: "Safe Landing (Egg Intact)", weight: 40 },
      { name: "Design Creativity", weight: 25 },
      { name: "Build Quality", weight: 20 },
      { name: "Time Management", weight: 15 }
    ],
    awards: ["1st Place - Rs. 3,000/-", "2nd Place - Rs. 2,000/-"],
    registrationFee: "Rs. 300/- per team",
    feeAmount: 300,
    whatsappLink: "https://chat.whatsapp.com/LgM4SFNccG5GdiuWLAEmg2?mode=gi_t"
  },
  {
    id: 3,
    title: "Aircraft Accident Investigation",
    shortTitle: "Investigation",
    icon: FileSearch,
    tagline: "Analyze. Investigate. Uncover the Truth.",
    description: "Participants will be shown a random video of an aircraft accident or incident. Based on the video, teams must analyze the situation and investigate the possible causes of the accident. The objective is to test the participants' analytical thinking, understanding of aviation principles, and problem-solving skills. Teams will need to observe the video carefully, identify possible technical or operational issues, and present their conclusions about what may have led to the accident.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80",
    color: "from-gray-500 to-gray-700",
    teamSize: "Max 2 per team",
    eligibility: "All college/university students",
    technicalRequirements: [
      "Random aircraft accident video will be provided",
      "Teams must analyze and identify possible causes",
      "Present conclusions about what led to the accident",
      "Understanding of aviation principles is essential",
      "Problem-solving and analytical thinking skills required"
    ],
    evaluationCriteria: [
      { name: "Analytical Accuracy", weight: 35 },
      { name: "Aviation Knowledge", weight: 25 },
      { name: "Problem-Solving Approach", weight: 20 },
      { name: "Presentation & Clarity", weight: 20 }
    ],
    awards: ["1st Place - Rs. 3,000/-", "2nd Place - Rs. 2,000/-"],
    registrationFee: "Rs. 300/- per team",
    feeAmount: 300,
    whatsappLink: "https://chat.whatsapp.com/CBcJkVHIlNIBYpWP9ir8aR?mode=gi_t"
  },
  {
    id: 4,
    title: "Aircraft Designing & Sketching",
    shortTitle: "Design",
    icon: PenTool,
    tagline: "Imagine. Design. Engineer the Future.",
    description: "Participants will be given specific parameters related to an aircraft component or part (such as wing, fuselage, tail, or propulsion system). Based on these given requirements, teams must design an aircraft or modify the aircraft configuration accordingly. The objective of this task is to evaluate participants' understanding of aircraft design principles, creativity, and ability to apply engineering concepts to meet the specified parameters.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&auto=format&fit=crop&q=80",
    color: "from-gray-300 to-gray-400",
    teamSize: "Max 2 per team",
    eligibility: "All college/university students",
    technicalRequirements: [
      "Specific design parameters will be provided at the venue",
      "Design aircraft or modify configuration based on requirements",
      "Must demonstrate understanding of aircraft design principles",
      "Creativity and engineering application will be evaluated",
      "Parameters may relate to wing, fuselage, tail, or propulsion system"
    ],
    evaluationCriteria: [
      { name: "Design Accuracy", weight: 30 },
      { name: "Engineering Knowledge", weight: 25 },
      { name: "Creativity & Innovation", weight: 25 },
      { name: "Presentation Quality", weight: 20 }
    ],
    awards: ["1st Place - Rs. 3,000/-", "2nd Place - Rs. 2,000/-"],
    registrationFee: "Rs. 300/- per team",
    feeAmount: 300,
    whatsappLink: "https://chat.whatsapp.com/L65JjOpTcjo9Z0dsYxPD8Y?mode=gi_t"
  },
  {
    id: 5,
    title: "Aircraft Poster Presentation",
    shortTitle: "Poster",
    icon: Presentation,
    tagline: "Research. Create. Present Your Vision.",
    description: "Participants are required to prepare a poster on any topic related to aircraft or aviation — including aircraft design, propulsion systems, aerodynamics, avionics, sustainability in aviation, future aircraft concepts, accident analysis, or emerging aerospace technologies. The poster should clearly explain the chosen topic using diagrams, illustrations, charts, and concise technical explanations. During the competition, participants will present their poster to a panel of judges, explaining the concept, methodology, and significance of their topic. They should demonstrate their understanding and answer questions from the judges.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&auto=format&fit=crop&q=80",
    color: "from-gray-500 to-gray-400",
    teamSize: "4-5 per team",
    eligibility: "All college/university students",
    technicalRequirements: [
      "Poster on any topic related to aircraft or aviation",
      "Use diagrams, illustrations, charts, and technical explanations",
      "Present to a panel of judges and answer questions",
      "Topics: design, propulsion, aerodynamics, avionics, sustainability, etc.",
      "Must demonstrate understanding and practical relevance"
    ],
    evaluationCriteria: [
      { name: "Clarity of Content", weight: 25 },
      { name: "Technical Accuracy", weight: 25 },
      { name: "Creativity & Visual Design", weight: 25 },
      { name: "Presentation & Explanation", weight: 25 }
    ],
    awards: ["1st Place - Rs. 3,000/-", "2nd Place - Rs. 2,000/-"],
    registrationFee: "Rs. 400/- to Rs. 500/-",
    feeAmount: 500,
    whatsappLink: "https://chat.whatsapp.com/B5sv5litxYPDCVWNI6gYLZ?mode=gi_t"
  }
];

export default events;
