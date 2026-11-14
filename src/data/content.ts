import valueClarity from '../assets/icons/value-clarity.svg';
import valueCommunication from '../assets/icons/value-communication.svg';
import valueTransparency from '../assets/icons/value-transparency.svg';
import valueQuality from '../assets/icons/value-quality.svg';
import skillUxStrategy from '../assets/icons/skill-ux-strategy.svg';
import skillInteraction from '../assets/icons/skill-interaction.svg';
import skillUiDesign from '../assets/icons/skill-ui-design.svg';
import skillEmpathy from '../assets/icons/skill-empathy.svg';
import stepUnderstandIcon from '../assets/icons/step-understand.svg';
import stepStructureIcon from '../assets/icons/step-structure.svg';
import stepDesignIcon from '../assets/icons/step-design.svg';
import stepTestIcon from '../assets/icons/step-test.svg';
import stepUnderstandImg from '../assets/process/understand.png';
import stepStructureImg from '../assets/process/structure.png';
import stepDesignImg from '../assets/process/design.png';
import stepTestImg from '../assets/process/test.png';

/** Icon sizes are kept as drawn in Figma; they sit centred in a fixed tile. */
export const values = [
  { label: 'Clarity Above All', icon: valueClarity, iconSize: 32 },
  { label: 'Clear Communication', icon: valueCommunication, iconSize: 24 },
  { label: 'Transparent Process', icon: valueTransparency, iconSize: 24 },
  { label: 'Commitment to Quality', icon: valueQuality, iconSize: 28 },
];

export const skills = [
  { label: 'UX Strategy', percent: 92, icon: skillUxStrategy, iconSize: 29 },
  { label: 'Interaction Design', percent: 90, icon: skillInteraction, iconSize: 30 },
  { label: 'UI Design', percent: 90, icon: skillUiDesign, iconSize: 28 },
  { label: 'User Empathy', percent: 95, icon: skillEmpathy, iconSize: 28 },
];

export const processSteps = [
  {
    title: 'Understand & Define',
    text: 'I explore the problem, identify user needs, and define clear goals before moving into design.',
    image: stepUnderstandImg,
    icon: stepUnderstandIcon,
    iconSize: 28,
  },
  {
    title: 'Structure & Plan',
    text: 'I organize information, map user flows, and create intuitive structures that simplify complex experiences.',
    image: stepStructureImg,
    icon: stepStructureIcon,
    iconSize: 28,
  },
  {
    title: 'Design & Build',
    text: 'I turn ideas into clear, functional interfaces with thoughtful layouts, interactions, and visual consistency.',
    image: stepDesignImg,
    icon: stepDesignIcon,
    iconSize: 27,
  },
  {
    title: 'Test & Refine',
    text: 'I review usability, gather feedback, and improve the experience through focused iterations.',
    image: stepTestImg,
    icon: stepTestIcon,
    iconSize: 28,
  },
];
