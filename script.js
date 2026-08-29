// --- Complete JEE Main Syllabus Data Tree ---
const syllabusData = {
  physics: [
    {
      id: "phy_1",
      name: "Rotational Motion",
      weightage: "High",
      topics: ["Centre of Mass & Momentum", "Moment of Inertia Theorems", "Torque & Angular Momentum", "Rolling Motion Dynamics"]
    },
    {
      id: "phy_2",
      name: "Modern Physics",
      weightage: "High",
      topics: ["Photoelectric Effect & Dual Nature", "Bohr Model & Hydrogen Spectrum", "Nuclear Binding Energy & Decay", "Semiconductors & Logic Gates"]
    },
    {
      id: "phy_3",
      name: "Current Electricity",
      weightage: "High",
      topics: ["Ohm's Law & Drift Velocity", "Kirchhoff's Laws & Circuit Analysis", "Wheatstone Bridge & Potentiometer", "RC Circuits & Heating Effects"]
    },
    {
      id: "phy_4",
      name: "Thermodynamics & KTG",
      weightage: "High",
      topics: ["Zeroth & First Law", "Heat Engine & Carnot Cycle", "Kinetic Theory of Gases", "Specific Heat & Mean Free Path"]
    },
    {
      id: "phy_5",
      name: "Ray & Wave Optics",
      weightage: "Medium",
      topics: ["Reflection, Refraction & TIR", "Lenses, Prisms & Optical Instruments", "Interference & Young's Double Slit", "Diffraction & Polarisation"]
    },
    {
      id: "phy_6",
      name: "Electrostatics & Capacitance",
      weightage: "Medium",
      topics: ["Coulomb's Law & Electric Field", "Gauss's Law Applications", "Electrostatic Potential & Energy", "Dielectrics & Capacitance Networks"]
    },
    {
      id: "phy_7",
      name: "Kinematics & Laws of Motion",
      weightage: "Medium",
      topics: ["1D & 2D Motion (Projectiles)", "Newton's Laws & Friction", "Circular Motion & Centripetal Force"]
    },
    {
      id: "phy_8",
      name: "Gravitation & Properties of Matter",
      weightage: "Low",
      topics: ["Gravitational Potential & Orbital Velocity", "Elasticity & Hooke's Law", "Fluid Mechanics & Bernoulli's Theorem", "Viscosity & Surface Tension"]
    }
  ],
  chemistry: [
    {
      id: "chem_1",
      name: "Chemical Bonding & Molecular Structure",
      weightage: "High",
      topics: ["VSEPR Theory & Molecular Shapes", "Hybridization & Dipole Moments", "Molecular Orbital Theory (MOT)", "Hydrogen Bonding & Resonance"]
    },
    {
      id: "chem_2",
      name: "Coordination Compounds",
      weightage: "High",
      topics: ["Werner's Theory & IUPAC Naming", "Isomerism in Complexes", "Crystal Field Theory (CFT)", "Magnetic Properties & Colours"]
    },
    {
      id: "chem_3",
      name: "Aldehydes, Ketones & Carboxylic Acids",
      weightage: "High",
      topics: ["Nucleophilic Addition Reactions", "Aldol & Cannizzaro Reactions", "Reduction & Oxidation Reactions", "Acidity & Decarboxylation"]
    },
    {
      id: "chem_4",
      name: "Solutions & Electrochemistry",
      weightage: "High",
      topics: ["Raoult's Law & Colligative Properties", "Van't Hoff Factor", "Nernst Equation & Cell Potential", "Kohlrausch's Law & Conductance"]
    },
    {
      id: "chem_5",
      name: "Chemical Kinetics & Equilibrium",
      weightage: "Medium",
      topics: ["Rate Laws & Integrated Rate Equations", "Arrhenius Equation & Catalysis", "Le Chatelier's Principle", "pH, Buffer Solutions & Solubility Product (Ksp)"]
    },
    {
      id: "chem_6",
      name: "Hydrocarbons & Haloalkanes",
      weightage: "Medium",
      topics: ["Electrophilic Aromatic Substitution", "Markovnikov & Anti-Markovnikov Addition", "SN1 and SN2 Mechanisms", "Elimination Reactions (E1/E2)"]
    },
    {
      id: "chem_7",
      name: "d and f Block Elements",
      weightage: "Medium",
      topics: ["Electronic Configurations & Variable Oxidation States", "Lanthanoid Contraction", "KMnO4 and K2Cr2O7 Reactions"]
    },
    {
      id: "chem_8",
      name: "Atomic Structure & Mole Concept",
      weightage: "Low",
      topics: ["Quantum Numbers & Electronic Config", "De Broglie & Heisenberg Uncertainty", "Concentration Terms (M, m, X)", "Stoichiometry & Limiting Reagent"]
    }
  ],
  maths: [
    {
      id: "math_1",
      name: "Vectors & 3D Geometry",
      weightage: "High",
      topics: ["Dot & Cross Products, Scaler Triple", "Direction Cosines & Lines in 3D", "Shortest Distance Between Lines", "Equation of Planes & Intersections"]
    },
    {
      id: "math_2",
      name: "Definite Integrals & Area",
      weightage: "High",
      topics: ["King's Property & Periodic Integrals", "Leibniz Rule of Differentiation", "Area Bounded Between Curves", "Integration by Parts & Reductions"]
    },
    {
      id: "math_3",
      name: "Coordinate Geometry (Conics)",
      weightage: "High",
      topics: ["Circles & Tangent Conditions", "Parabola (Standard & Parametric)", "Ellipse (Properties & Eccentricity)", "Hyperbola & Asymptotes"]
    },
    {
      id: "math_4",
      name: "Matrices & Determinants",
      weightage: "High",
      topics: ["Properties of Determinants", "Adjoint, Inverse & System of Equations", "Cramer's Rule", "Cayley-Hamilton Theorem Applications"]
    },
    {
      id: "math_5",
      name: "Differential Calculus",
      weightage: "Medium",
      topics: ["Limits & Indeterminate Forms (L'Hopital)", "Continuity & Differentiability", "Monotonicity & Maxima-Minima", "Tangents & Normals"]
    },
    {
      id: "math_6",
      name: "Probability & Statistics",
      weightage: "Medium",
      topics: ["Conditional Probability & Bayes Theorem", "Independent Events & Bernoulli Trials", "Variance & Standard Deviation Calculation"]
    },
    {
      id: "math_7",
      name: "Sequences, Series & Binomial",
      weightage: "Medium",
      topics: ["AP, GP and AGP Series", "Sigma Notations & Telescoping Sums", "General & Middle Term in Binomial", "Binomial Coefficients Properties"]
    },
    {
      id: "math_8",
      name: "Complex Numbers & Quadratics",
      weightage: "Low",
      topics: ["Euler's Form & Modulus-Argument", "Cube Roots of Unity & Geometry of Z", "Roots & Coefficients Relations", "Common Roots & Location of Roots"]
    }
  ]
};

// --- State Management ---
let currentSubject = "physics";
let completedTopics = JSON.parse(localStorage.getItem("jee_completed_topics")) || {};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  setupCountdown();
  setupTabs();
  renderChapters();
  updateAllCalculations();
});

// --- Target Countdown Feature ---
function setupCountdown() {
  const dateInput = document.getElementById("targetDateInput");
  const daysDisplay = document.getElementById("daysRemaining");

  if (!dateInput || !daysDisplay) return;

  const savedDate = localStorage.getItem("jee_target_date");
  const defaultDate = savedDate || new Date(new Date().getFullYear() + 1, 0, 24).toISOString().split("T")[0];
  dateInput.value = defaultDate;

  function calculateDays() {
    const target = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const diffTime = target - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    daysDisplay.textContent = diffDays >= 0 ? diffDays : 0;
    localStorage.setItem("jee_target_date", dateInput.value);
  }

  dateInput.addEventListener("change", calculateDays);
  calculateDays();
}

// --- Tabs Switcher ---
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      currentSubject = button.dataset.subject;
      renderChapters();
      updateSubjectOverview();
    });
  });
}

// --- Render Chapter Accordion ---
function renderChapters() {
  const container = document.getElementById("chaptersList");
  if (!container) return;
  const chapters = syllabusData[currentSubject];
  container.innerHTML = "";

  chapters.forEach((chapter) => {
    const chapterCard = document.createElement("div");
    chapterCard.className = "chapter-card";

    const totalTopics = chapter.topics.length;
    const completedCount = chapter.topics.filter((_, topicIndex) => {
      const topicId = `${chapter.id}_${topicIndex}`;
      return !!completedTopics[topicId];
    }).length;

    const badgeClass = `badge-${chapter.weightage.toLowerCase()}`;

    chapterCard.innerHTML = `
      <div class="chapter-header">
        <div class="chapter-left">
          <span class="badge ${badgeClass}">${chapter.weightage}</span>
          <span class="chapter-title">${chapter.name}</span>
        </div>
        <div class="chapter-right">
          <span class="chapter-ratio" id="ratio_${chapter.id}">${completedCount}/${totalTopics}</span>
          <span class="chevron">▼</span>
        </div>
      </div>
      <div class="topics-list">
        ${chapter.topics.map((topic, topicIndex) => {
          const topicId = `${chapter.id}_${topicIndex}`;
          const isChecked = !!completedTopics[topicId];
          return `
            <label class="topic-item">
              <input type="checkbox" data-topic-id="${topicId}" data-chapter-id="${chapter.id}" ${isChecked ? "checked" : ""}>
              <span class="topic-text">${topic}</span>
            </label>
          `;
        }).join("")}
      </div>
    `;

    const header = chapterCard.querySelector(".chapter-header");
    header.addEventListener("click", () => {
      chapterCard.classList.toggle("open");
    });

    container.appendChild(chapterCard);
  });

  container.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", handleTopicToggle);
  });
}

// --- Handle Checkbox Changes ---
function handleTopicToggle(e) {
  const topicId = e.target.dataset.topicId;
  const chapterId = e.target.dataset.chapterId;

  if (e.target.checked) {
    completedTopics[topicId] = true;
  } else {
    delete completedTopics[topicId];
  }

  localStorage.setItem("jee_completed_topics", JSON.stringify(completedTopics));

  const chapter = syllabusData[currentSubject].find(c => c.id === chapterId);
  const totalTopics = chapter.topics.length;
  const completedCount = chapter.topics.filter((_, idx) => completedTopics[`${chapterId}_${idx}`]).length;
  const ratioElement = document.getElementById(`ratio_${chapterId}`);
  if (ratioElement) {
    ratioElement.textContent = `${completedCount}/${totalTopics}`;
  }

  updateAllCalculations();
}

// --- Progress Calculations ---
function calculateSubjectProgress(subjectKey) {
  const chapters = syllabusData[subjectKey];
  let total = 0;
  let done = 0;

  chapters.forEach(chap => {
    total += chap.topics.length;
    chap.topics.forEach((_, idx) => {
      if (completedTopics[`${chap.id}_${idx}`]) done++;
    });
  });

  const percentage = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, percentage };
}

function updateSubjectOverview() {
  const subjectNames = { physics: "Physics", chemistry: "Chemistry", maths: "Mathematics" };
  const { done, total, percentage } = calculateSubjectProgress(currentSubject);

  const titleEl = document.getElementById("activeSubjectTitle");
  const statsEl = document.getElementById("activeSubjectStats");
  const barEl = document.getElementById("activeSubjectProgressBar");

  if (titleEl) titleEl.textContent = subjectNames[currentSubject];
  if (statsEl) statsEl.textContent = `${done} of ${total} topics completed`;
  if (barEl) barEl.style.width = `${percentage}%`;
}

function updateAllCalculations() {
  let overallTotal = 0;
  let overallDone = 0;

  ["physics", "chemistry", "maths"].forEach(sub => {
    const { done, total, percentage } = calculateSubjectProgress(sub);
    overallDone += done;
    overallTotal += total;

    const tabProgEl = document.getElementById(`${sub}TabProgress`);
    if (tabProgEl) {
      tabProgEl.textContent = `${percentage}%`;
    }
  });

  const overallPercent = overallTotal === 0 ? 0 : Math.round((overallDone / overallTotal) * 100);
  
  const overallPercEl = document.getElementById("overallPercentage");
  const overallBarEl = document.getElementById("overallProgressBar");
  const completedCountEl = document.getElementById("completedTopicsCount");
  const totalCountEl = document.getElementById("totalTopicsCount");

  if (overallPercEl) overallPercEl.textContent = `${overallPercent}%`;
  if (overallBarEl) overallBarEl.style.width = `${overallPercent}%`;
  if (completedCountEl) completedCountEl.textContent = overallDone;
  if (totalCountEl) totalCountEl.textContent = overallTotal;

  updateSubjectOverview();
}

