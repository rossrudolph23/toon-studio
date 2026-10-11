// Cartoon styles for the dropdown. "prompt" is the extra description we
// hand the AI so every clip in a video looks the same.
const CARTOON_STYLES = [
  { group: 'Animated movies & TV', items: [
    { id: 'pixar3d',    name: '3D family movie (Pixar-like)', prompt: 'polished 3D animated feature film style, soft lighting, expressive big-eyed characters' },
    { id: 'disney2d',   name: 'Classic hand-drawn fairytale', prompt: 'classic 2D hand-drawn animation, lush painted backgrounds, fairytale feel' },
    { id: 'simpsons',   name: 'Yellow sitcom cartoon',        prompt: 'flat 2D adult sitcom cartoon style, bold outlines, bright yellow-skinned characters' },
    { id: 'southpark',  name: 'Paper cut-out cartoon',        prompt: 'crude construction-paper cut-out animation, simple shapes, flat colors' },
    { id: 'saturday',   name: '90s Saturday morning',         prompt: '1990s Saturday morning cartoon, thick outlines, saturated colors, zany energy' },
    { id: 'rubberhose', name: '1930s rubber-hose',            prompt: '1930s black and white rubber-hose animation, film grain, bouncy limbs' },
    { id: 'adventure',  name: 'Modern adventure cartoon',     prompt: 'modern 2D TV adventure cartoon, rounded shapes, pastel palette, simple faces' },
  ]},
  { group: 'Anime & manga', items: [
    { id: 'anime',      name: 'Anime',                        prompt: 'Japanese anime style, cel shading, dramatic lighting, detailed eyes' },
    { id: 'ghibli',     name: 'Cozy countryside anime',       prompt: 'gentle hand-painted anime film style, cozy countryside, warm watercolor skies' },
    { id: 'chibi',      name: 'Chibi (tiny cute)',            prompt: 'chibi anime style, tiny bodies, huge heads, super cute expressions' },
    { id: 'shonen',     name: 'Action anime',                 prompt: 'high-energy action anime, speed lines, intense poses, glowing effects' },
    { id: 'manga',      name: 'Black & white manga',          prompt: 'black and white manga panels come to life, screentone shading, ink lines' },
  ]},
  { group: 'Handmade looks', items: [
    { id: 'clay',       name: 'Claymation',                   prompt: 'stop-motion claymation, visible fingerprints in clay, miniature sets' },
    { id: 'felt',       name: 'Felt & yarn puppets',          prompt: 'stop-motion felt and yarn puppets, fuzzy textures, handmade props' },
    { id: 'papercraft', name: 'Papercraft',                   prompt: 'layered papercraft diorama animation, paper textures, soft shadows' },
    { id: 'lego',       name: 'Toy brick world',              prompt: 'stop-motion plastic toy brick figures and sets, glossy bricks' },
    { id: 'crayon',     name: 'Crayon kid drawing',           prompt: 'child crayon drawing animated, wobbly lines, white paper background' },
    { id: 'chalk',      name: 'Chalkboard',                   prompt: 'chalk drawings on a dark green chalkboard, dusty strokes' },
  ]},
  { group: 'Art styles', items: [
    { id: 'comic',      name: 'Comic book',                   prompt: 'American comic book style, halftone dots, bold inks, dramatic panels' },
    { id: 'watercolor', name: 'Watercolor storybook',         prompt: 'soft watercolor storybook illustration, paper texture, gentle colors' },
    { id: 'pixel',      name: 'Pixel art video game',         prompt: '16-bit pixel art, retro video game look, limited palette' },
    { id: 'lowpoly',    name: 'Low-poly 3D',                  prompt: 'low-poly 3D, faceted geometric shapes, flat shading, bright colors' },
    { id: 'vaporwave',  name: 'Neon vaporwave',               prompt: 'neon vaporwave cartoon, pink and cyan glow, retro 80s grid' },
    { id: 'noir',       name: 'Film noir cartoon',            prompt: 'black and white noir cartoon, deep shadows, rain, venetian blind light' },
    { id: 'sticker',    name: 'Cute sticker / kawaii',        prompt: 'kawaii sticker style, thick white outlines, pastel colors, smiling faces' },
    { id: 'minimal',    name: 'Simple doodle / stick figures', prompt: 'minimalist doodle animation, simple stick figures, clean white background' },
  ]},
  { group: 'Just for fun', items: [
    { id: 'pets',       name: 'Talking pets',                 prompt: 'cute cartoon animals that talk with expressive mouths, playful 3D look' },
    { id: 'meme',       name: 'Meme-style reaction',          prompt: 'exaggerated meme-style cartoon, big reactions, comedic timing' },
    { id: 'horror',     name: 'Spooky (not too scary)',       prompt: 'spooky-cute cartoon, purple night, friendly ghosts, gothic whimsy' },
    { id: 'scifi',      name: 'Space adventure',              prompt: 'colorful sci-fi cartoon, spaceships, glowing planets, retro-futurism' },
  ]},
];
