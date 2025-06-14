
export interface Formula {
  id: string;
  title: string;
  latex: string;
  description: string;
  category: string;
  difficulty: number;
  examTags: string[];
}

export const mathFormulas: Formula[] = [
  {
    id: "quad-1",
    title: "Quadratic Formula",
    latex: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    description: "Solutions of quadratic equation ax² + bx + c = 0",
    category: "Algebra",
    difficulty: 3,
    examTags: ["JEE", "EAMCET", "IPE"]
  },
  {
    id: "deriv-1",
    title: "Power Rule",
    latex: "\\frac{d}{dx}(x^n) = nx^{n-1}",
    description: "Derivative of x raised to power n",
    category: "Calculus",
    difficulty: 2,
    examTags: ["JEE", "IPE"]
  },
  {
    id: "trig-1",
    title: "Pythagorean Identity",
    latex: "\\sin^2\\theta + \\cos^2\\theta = 1",
    description: "Fundamental trigonometric identity",
    category: "Trigonometry",
    difficulty: 1,
    examTags: ["JEE", "EAMCET", "IPE"]
  },
  {
    id: "int-1",
    title: "Integration by Parts",
    latex: "\\int u\\,dv = uv - \\int v\\,du",
    description: "Method for integrating products of functions",
    category: "Calculus",
    difficulty: 4,
    examTags: ["JEE"]
  }
];

export const physicsFormulas: Formula[] = [
  {
    id: "force-1",
    title: "Newton's Second Law",
    latex: "F = ma",
    description: "Force equals mass times acceleration",
    category: "Mechanics",
    difficulty: 2,
    examTags: ["JEE", "EAMCET", "IPE"]
  },
  {
    id: "energy-1",
    title: "Kinetic Energy",
    latex: "KE = \\frac{1}{2}mv^2",
    description: "Kinetic energy of a moving object",
    category: "Mechanics",
    difficulty: 2,
    examTags: ["JEE", "EAMCET", "IPE"]
  },
  {
    id: "wave-1",
    title: "Wave Equation",
    latex: "v = f\\lambda",
    description: "Velocity equals frequency times wavelength",
    category: "Waves",
    difficulty: 2,
    examTags: ["JEE", "EAMCET", "IPE"]
  },
  {
    id: "electric-1",
    title: "Coulomb's Law",
    latex: "F = k\\frac{q_1q_2}{r^2}",
    description: "Force between two point charges",
    category: "Electromagnetism",
    difficulty: 3,
    examTags: ["JEE", "EAMCET"]
  }
];

export const chemistryFormulas: Formula[] = [
  {
    id: "ideal-1",
    title: "Ideal Gas Law",
    latex: "PV = nRT",
    description: "Relationship between pressure, volume, and temperature",
    category: "Physical Chemistry",
    difficulty: 2,
    examTags: ["JEE", "EAMCET", "IPE"]
  },
  {
    id: "ph-1",
    title: "pH Formula",
    latex: "pH = -\\log[H^+]",
    description: "Measure of acidity or basicity",
    category: "Physical Chemistry",
    difficulty: 3,
    examTags: ["JEE", "EAMCET", "IPE"]
  },
  {
    id: "molarity-1",
    title: "Molarity",
    latex: "M = \\frac{n}{V}",
    description: "Moles of solute per liter of solution",
    category: "Physical Chemistry",
    difficulty: 2,
    examTags: ["JEE", "EAMCET", "IPE"]
  },
  {
    id: "enthalpy-1",
    title: "Enthalpy Change",
    latex: "\\Delta H = H_{products} - H_{reactants}",
    description: "Change in enthalpy during a reaction",
    category: "Physical Chemistry",
    difficulty: 3,
    examTags: ["JEE", "EAMCET"]
  }
];
