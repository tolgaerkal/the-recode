/**
 * THE RECODE — Content File
 * 
 * Copyright © 2025. All rights reserved.
 * This content (sequences, titles, descriptions, and visual design system)
 * is proprietary and may NOT be reproduced, distributed, or modified
 * without explicit written permission from the author.
 * 
 * The source code that renders this content is separately MIT licensed.
 * See LICENSE for details.
 */

const RECODE_META = {
  title: "THE RECODE",
  subtitle: "From stuck thinking to model-native mind",
  tagline: "32 sequences to rewire how you think, build, and lead in the age of models.",
  premise: {
    heading: "You are not broken. You are running outdated code.",
    body: [
      "Every assumption you hold, every reflex you have, every way you solve a problem — is a line of code written in a different era, for a different world.",
      "This book does not add new information on top of old thinking. It rewrites the source.",
    ],
    footer: "32 sequences. 4 phases. One complete rewrite. From stuck in old thinking — to model-native."
  }
};

const RECODE_SECTIONS = [
  {
    id: "delete",
    number: "01",
    code: "DELETE",
    tagline: "Uninstalling the assumptions that no longer serve you. You cannot install new code on a corrupted system.",
    range: "Sequences 01 — 08",
    sequences: [
      {
        id: "SEQ_01",
        featured: true,
        title: "Your expertise is a ceiling, not a floor.",
        body: "The deeper your mastery of the old way, the harder it is to see the new one. The expert is often last to cross the threshold — not because they lack intelligence, but because they have too much invested in the current answer.",
        tag: "DELETE · Expertise Trap",
        diagram: "expertise_ceiling"
      },
      {
        id: "SEQ_02",
        title: "The map you're using was drawn for a different territory.",
        body: "Mental models are built from past experience. When the world changes faster than your model updates, you navigate confidently — in the wrong direction.",
        tag: "DELETE · Mental Models"
      },
      {
        id: "SEQ_03",
        title: "Certainty is a comfort. Accuracy is a discipline.",
        body: "We mistake confidence for correctness. The old paradigm rewards those who sound sure. The new one rewards those who are right — even when it's uncomfortable to say \"I don't know yet.\"",
        tag: "DELETE · False Certainty"
      },
      {
        id: "SEQ_04",
        title: "Busy is not productive. It is a very convincing disguise.",
        body: "The industrial age trained us to equate motion with value. Model-native thinking measures outputs, not effort. The question is never \"did I work hard?\" It's \"did anything change?\"",
        tag: "DELETE · Productivity Myth"
      },
      {
        id: "SEQ_05",
        title: "Knowing more is not the same as thinking better.",
        body: "Information is no longer scarce. The bottleneck has moved — from access to synthesis, from data to judgment. Hoarding knowledge is an obsolete strategy.",
        tag: "DELETE · Knowledge Hoarding"
      },
      {
        id: "SEQ_06",
        title: "Your job title is not your identity.",
        body: "When you define yourself by what you do, you become fragile the moment that role changes. In a world of constant transformation, identity must be built on how you think — not what you know.",
        tag: "DELETE · Role Identity"
      },
      {
        id: "SEQ_07",
        title: "Disruption does not destroy. It devalues.",
        body: "Most of what you know still works. It just no longer commands a premium. The shift is not that your old skills are useless — it is that they are no longer sufficient.",
        tag: "DELETE · Disruption Fear"
      },
      {
        id: "SEQ_08",
        title: "Unlearning costs more than learning. Budget for it.",
        body: "We allocate time to acquire new skills, but almost no time to release old ones. The resistance to the new is almost always a refusal to let go of the old — not a failure of intelligence.",
        tag: "DELETE · Unlearning"
      }
    ]
  },
  {
    id: "debug",
    number: "02",
    code: "DEBUG",
    tagline: "Finding where you're broken. You cannot fix what you refuse to see. This section is the audit.",
    range: "Sequences 09 — 16",
    sequences: [
      {
        id: "SEQ_09",
        featured: true,
        title: "Every belief you hold is a hypothesis, not a fact.",
        body: "The moment you treat a belief as settled, you stop testing it. Model-native thinkers hold their own assumptions lightly — not from insecurity, but from intellectual honesty. The best thinkers are perpetually in beta.",
        tag: "DEBUG · Belief Systems",
        diagram: "belief_loop"
      },
      {
        id: "SEQ_10",
        title: "Your blind spots are invisible to you by definition.",
        body: "The hardest bugs to find are the ones that don't throw errors — they just quietly produce the wrong output for years. Build systems to surface what you cannot see yourself.",
        tag: "DEBUG · Blind Spots"
      },
      {
        id: "SEQ_11",
        title: "Comfort is the leading indicator of stagnation.",
        body: "When everything feels smooth, nothing is growing. Friction is not a problem to be eliminated — it is often the signal that you are at the edge of your current model, which is exactly where growth begins.",
        tag: "DEBUG · Comfort Trap"
      },
      {
        id: "SEQ_12",
        title: "The emotion you avoid is usually the data you need.",
        body: "Frustration, confusion, and resistance are not signs of weakness. They are diagnostic signals — pointing directly at the gap between your current model and reality.",
        tag: "DEBUG · Emotional Data"
      },
      {
        id: "SEQ_13",
        title: "You cannot solve a problem at the level it was created.",
        body: "Most intractable problems persist not because solutions don't exist, but because we keep applying the same level of thinking that created them. The upgrade is always in the framing, not the fix.",
        tag: "DEBUG · Problem Framing"
      },
      {
        id: "SEQ_14",
        title: "Speed without direction is just fast failure.",
        body: "Efficiency is a multiplier. Multiply it by the wrong strategy and you arrive at the wrong destination faster. Debug the direction before you optimize the engine.",
        tag: "DEBUG · Misdirected Speed"
      },
      {
        id: "SEQ_15",
        title: "What you measure is what you optimize for — whether you intend to or not.",
        body: "Every metric is a choice. And every choice signals what the system values. Audit your metrics before they quietly shape everything downstream.",
        tag: "DEBUG · Metrics"
      },
      {
        id: "SEQ_16",
        title: "The question you didn't ask is usually the most important one.",
        body: "Every answer is bounded by the question that preceded it. The deepest bugs in human thinking are not wrong answers — they are unasked questions that no one even noticed were missing.",
        tag: "DEBUG · Question Design"
      }
    ]
  },
  {
    id: "recode",
    number: "03",
    code: "RECODE",
    tagline: "Installing the new operating system. New syntax for thinking, deciding, and building in a model-native world.",
    range: "Sequences 17 — 24",
    sequences: [
      {
        id: "SEQ_17",
        featured: true,
        title: "Think in systems, not in solutions.",
        body: "A solution fixes a symptom. A systems view changes the conditions that produce the symptom. Model-native thinkers do not ask \"what is the answer?\" They ask \"what are the inputs, feedback loops, and second-order effects?\" The solution then becomes obvious.",
        tag: "RECODE · Systems Thinking",
        diagram: "systems_diagram"
      },
      {
        id: "SEQ_18",
        title: "Probability is the new precision.",
        body: "Replace \"this will happen\" with \"this is most likely.\" It is not weakness — it is honesty. Decisions made with calibrated probability beat decisions made with false certainty, every time, over time.",
        tag: "RECODE · Probabilistic Thinking"
      },
      {
        id: "SEQ_19",
        title: "The frame is the answer. Most people skip straight to the content.",
        body: "How you define a problem determines every solution you will ever find for it. Reframe the problem and an entirely new solution space opens up — one that was always there but invisible under the old framing.",
        tag: "RECODE · Problem Framing"
      },
      {
        id: "SEQ_20",
        title: "Iteration is not failure. It is the method.",
        body: "The prototype mindset treats every version as a step, not a verdict. You are not wrong when the first version doesn't work. You are working. The goal is not to be right — it is to converge on right, faster than anyone else.",
        tag: "RECODE · Iteration"
      },
      {
        id: "SEQ_21",
        title: "Synthesis is the new genius.",
        body: "In an age of information abundance, the rarest skill is not knowing more — it is connecting what is already known in ways no one else has. The synthesizer sees what the specialist misses.",
        tag: "RECODE · Synthesis"
      },
      {
        id: "SEQ_22",
        title: "Ask better questions. Everything else follows.",
        body: "The quality of your thinking is determined entirely by the quality of the questions you ask. A better question is not a sharper version of the same question — it is a different question entirely. Train this like a muscle.",
        tag: "RECODE · Question Design"
      },
      {
        id: "SEQ_23",
        title: "Models augment judgment. They do not replace it.",
        body: "A model is a mirror — it shows you patterns at scale you could never see alone. But mirrors do not decide. That is still yours. The most dangerous mistake of this era is outsourcing judgment to a tool that has none.",
        tag: "RECODE · Human + Model"
      },
      {
        id: "SEQ_24",
        title: "Your lived experience is training data no model has.",
        body: "Every scar, every failure, every moment of joy you've navigated — these are irreplaceable inputs. Do not abandon your intuition. Upgrade it. The goal is human intelligence sharpened by model intelligence, not replaced by it.",
        tag: "RECODE · Human Value"
      }
    ]
  },
  {
    id: "run",
    number: "04",
    code: "RUN",
    tagline: "Living and leading from the new code. The rewrite means nothing until it changes how you show up — every day, in every room.",
    range: "Sequences 25 — 32",
    sequences: [
      {
        id: "SEQ_25",
        featured: true,
        title: "You cannot drag people into a new paradigm. You can only make the new world so visible they want to cross over.",
        body: "Leadership in a paradigm shift is not persuasion — it is demonstration. Build the thing. Show the result. Embody the thinking. People move toward what they can see working, not toward what they are told to believe.",
        tag: "RUN · Leadership",
        diagram: "threshold_diagram"
      },
      {
        id: "SEQ_26",
        title: "Adaptability is not a personality trait. It is a practice.",
        body: "You do not become adaptable by deciding to be. You become adaptable by building daily habits of exposure, reflection, and iteration until flexibility becomes your default state — not a response to crisis.",
        tag: "RUN · Adaptability"
      },
      {
        id: "SEQ_27",
        title: "Empathy cannot be automated. Double down on it.",
        body: "As models absorb more cognitive tasks, the irreducibly human skills command a higher premium. The ability to understand what another person feels — and act on it wisely — is the rarest and most durable competitive advantage of this era.",
        tag: "RUN · Human Edge"
      },
      {
        id: "SEQ_28",
        title: "Build your learning stack like a product, not an accident.",
        body: "Most people learn reactively — whatever they stumble into. Model-native thinkers design their inputs intentionally: what to read deeply, what to scan broadly, and what to experience directly. Curate your own curriculum.",
        tag: "RUN · Intentional Learning"
      },
      {
        id: "SEQ_29",
        title: "Culture changes one conversation at a time. Start yours.",
        body: "Paradigm shifts do not begin with policies or announcements. They begin with someone, somewhere, choosing to speak differently. You are not waiting for permission to introduce a new way of thinking — you are the permission.",
        tag: "RUN · Culture Change"
      },
      {
        id: "SEQ_30",
        title: "Wisdom is knowing when not to use the tool.",
        body: "Model-native does not mean model-dependent. The most powerful skill in a world of infinite tools is discernment — knowing when to reach for the model, and when to trust the irreplaceable texture of human judgment instead.",
        tag: "RUN · Discernment"
      },
      {
        id: "SEQ_31",
        title: "The goal is not to master the new world. It is to stay curious enough to keep up with it.",
        body: "Mastery implies a destination. But in an era of continuous transformation, the highest achievement is not to arrive — it is to remain in motion. Curiosity is not a starting point. It is the entire journey.",
        tag: "RUN · Perpetual Motion"
      },
      {
        id: "SEQ_32",
        featured: true,
        title: "The model doesn't replace you. It reveals you.",
        body: "Every tool you use becomes a mirror. In a world of powerful models, what they amplify — your curiosity or your laziness, your wisdom or your bias, your creativity or your rigidity — is entirely up to you. The Recode was never about the technology. It was always about who you choose to become.",
        tag: "RUN · The Rewrite Complete",
        diagram: "mirror_diagram"
      }
    ]
  }
];
