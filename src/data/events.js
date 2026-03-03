import { 
  Plane, 
  Wind,
  FileSearch,
  PenTool
} from 'lucide-react';

export const events = [
  {
    id: 1,
    title: "Drone Competition",
    shortTitle: "Drone",
    icon: Plane,
    description: "Overall weight of drone (including payload) - up to 2 kg. Must be operated autonomously with geofencing (waypoints). Frame type - your consideration.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Parachute",
    shortTitle: "Parachute",
    icon: Wind,
    description: "Materials will be provided. Come with an idea and build one within the given time.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    color: "from-green-500 to-emerald-400"
  },
  {
    id: 3,
    title: "Aircraft Investigation",
    shortTitle: "Investigation",
    icon: FileSearch,
    description: "A random video of an aircraft accident will be given. Based on that, you need to investigate and determine the cause.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80",
    color: "from-amber-500 to-orange-400"
  },
  {
    id: 4,
    title: "Design Parameters",
    shortTitle: "Design",
    icon: PenTool,
    description: "Design an aircraft based on given parameters for any given objective.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&auto=format&fit=crop&q=80",
    color: "from-red-500 to-rose-400"
  }
];

export default events;
