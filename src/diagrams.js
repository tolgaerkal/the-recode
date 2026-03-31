/**
 * THE RECODE — Diagram Render Functions
 *
 * SVG diagram render functions for the interactive experience.
 * MIT Licensed — see LICENSE for details.
 */

const DIAGRAMS = {
  expertise_ceiling: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none">
    <rect x="1" y="1" width="238" height="238" stroke="#333" stroke-width="1"/>
    <line x1="120" y1="20" x2="120" y2="220" stroke="#333" stroke-width="0.5"/>
    <line x1="20" y1="120" x2="220" y2="120" stroke="#333" stroke-width="0.5"/>
    <line x1="40" y1="60" x2="200" y2="60" stroke="#c8401a" stroke-width="2" stroke-dasharray="6 3"/>
    <text x="170" y="52" font-family="Space Mono" font-size="8" fill="#c8401a">CEILING</text>
    <path d="M 40 200 Q 80 180 110 120 Q 130 80 140 62" stroke="#f2ede6" stroke-width="2" fill="none"/>
    <circle cx="140" cy="62" r="4" fill="#c8401a"/>
    <path d="M 140 62 Q 160 40 200 20" stroke="#c8401a" stroke-width="1.5" stroke-dasharray="4 4" fill="none"/>
    <text x="48" y="218" font-family="Space Mono" font-size="7" fill="#555">time</text>
    <text x="24" y="48" font-family="Space Mono" font-size="7" fill="#555">mastery</text>
  </svg>`,

  belief_loop: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none">
    <rect x="1" y="1" width="238" height="238" stroke="#333" stroke-width="1"/>
    <circle cx="120" cy="120" r="80" stroke="#333" stroke-width="1" stroke-dasharray="4 4"/>
    <text x="120" y="90" font-family="Space Mono" font-size="8" fill="#f2ede6" text-anchor="middle">OBSERVE</text>
    <text x="170" y="128" font-family="Space Mono" font-size="8" fill="#f2ede6" text-anchor="middle">TEST</text>
    <text x="120" y="160" font-family="Space Mono" font-size="8" fill="#f2ede6" text-anchor="middle">REVISE</text>
    <text x="68" y="128" font-family="Space Mono" font-size="8" fill="#f2ede6" text-anchor="middle">HOLD</text>
    <path d="M 140 48 Q 190 70 198 110" stroke="#c8401a" stroke-width="1.5" fill="none"/>
    <path d="M 198 130 Q 190 170 150 192" stroke="#c8401a" stroke-width="1.5" fill="none"/>
    <path d="M 100 192 Q 50 170 42 130" stroke="#c8401a" stroke-width="1.5" fill="none"/>
    <path d="M 42 110 Q 50 70 100 48" stroke="#c8401a" stroke-width="1.5" fill="none"/>
    <text x="120" y="124" font-family="Space Mono" font-size="9" fill="#c8401a" text-anchor="middle">BETA</text>
    <text x="120" y="138" font-family="Space Mono" font-size="7" fill="#555" text-anchor="middle">always</text>
  </svg>`,

  systems_diagram: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none">
    <rect x="1" y="1" width="238" height="238" stroke="#333" stroke-width="1"/>
    <rect x="30" y="100" width="50" height="40" stroke="#c8401a" stroke-width="1.5" fill="none"/>
    <text x="55" y="124" font-family="Space Mono" font-size="7" fill="#c8401a" text-anchor="middle">INPUT</text>
    <rect x="95" y="80" width="50" height="80" stroke="#f2ede6" stroke-width="1.5" fill="none"/>
    <text x="120" y="124" font-family="Space Mono" font-size="7" fill="#f2ede6" text-anchor="middle">SYSTEM</text>
    <rect x="160" y="100" width="50" height="40" stroke="#c8401a" stroke-width="1.5" fill="none"/>
    <text x="185" y="124" font-family="Space Mono" font-size="7" fill="#c8401a" text-anchor="middle">OUTPUT</text>
    <line x1="80" y1="120" x2="95" y2="120" stroke="#f2ede6" stroke-width="1.5"/>
    <line x1="145" y1="120" x2="160" y2="120" stroke="#f2ede6" stroke-width="1.5"/>
    <path d="M 185 140 Q 185 185 120 185 Q 55 185 55 140" stroke="#c8401a" stroke-width="1" stroke-dasharray="4 4" fill="none"/>
    <text x="120" y="200" font-family="Space Mono" font-size="7" fill="#666" text-anchor="middle">feedback loop</text>
    <line x1="185" y1="100" x2="185" y2="60" stroke="#555" stroke-width="1" stroke-dasharray="2 4"/>
    <text x="185" y="52" font-family="Space Mono" font-size="7" fill="#555" text-anchor="middle">2nd order</text>
  </svg>`,

  threshold_diagram: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none">
    <rect x="1" y="1" width="238" height="238" stroke="#333" stroke-width="1"/>
    <line x1="120" y1="20" x2="120" y2="220" stroke="#333" stroke-width="1.5"/>
    <text x="60" y="40" font-family="Space Mono" font-size="8" fill="#555" text-anchor="middle">OLD</text>
    <text x="180" y="40" font-family="Space Mono" font-size="8" fill="#c8401a" text-anchor="middle">NEW</text>
    <circle cx="60" cy="80" r="6" fill="#8a8078"/>
    <circle cx="45" cy="110" r="6" fill="#8a8078"/>
    <circle cx="75" cy="130" r="6" fill="#8a8078"/>
    <circle cx="55" cy="160" r="6" fill="#8a8078"/>
    <circle cx="80" cy="90" r="6" fill="#8a8078"/>
    <circle cx="165" cy="120" r="8" fill="#c8401a"/>
    <text x="165" y="148" font-family="Space Mono" font-size="7" fill="#c8401a" text-anchor="middle">YOU</text>
    <path d="M 90 110 Q 105 110 112 115" stroke="#c8401a" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
    <path d="M 90 130 Q 105 128 112 122" stroke="#c8401a" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
  </svg>`,

  mirror_diagram: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none">
    <rect x="1" y="1" width="238" height="238" stroke="#333" stroke-width="1"/>
    <rect x="90" y="40" width="60" height="160" stroke="#c8401a" stroke-width="2" fill="none"/>
    <circle cx="55" cy="80" r="12" stroke="#f2ede6" stroke-width="1.5" fill="none"/>
    <line x1="55" y1="92" x2="55" y2="140" stroke="#f2ede6" stroke-width="1.5"/>
    <line x1="55" y1="108" x2="35" y2="125" stroke="#f2ede6" stroke-width="1.5"/>
    <line x1="55" y1="108" x2="75" y2="125" stroke="#f2ede6" stroke-width="1.5"/>
    <line x1="55" y1="140" x2="40" y2="170" stroke="#f2ede6" stroke-width="1.5"/>
    <line x1="55" y1="140" x2="70" y2="170" stroke="#f2ede6" stroke-width="1.5"/>
    <circle cx="185" cy="80" r="12" stroke="#c8401a" stroke-width="2" fill="none"/>
    <line x1="185" y1="92" x2="185" y2="140" stroke="#c8401a" stroke-width="2"/>
    <line x1="185" y1="108" x2="165" y2="125" stroke="#c8401a" stroke-width="2"/>
    <line x1="185" y1="108" x2="205" y2="125" stroke="#c8401a" stroke-width="2"/>
    <line x1="185" y1="140" x2="170" y2="170" stroke="#c8401a" stroke-width="2"/>
    <line x1="185" y1="140" x2="200" y2="170" stroke="#c8401a" stroke-width="2"/>
    <text x="120" y="218" font-family="Space Mono" font-size="7" fill="#666" text-anchor="middle">MIRROR</text>
  </svg>`,
};
