import type { Service } from "./ServiceCard";
import {
  Mountain,
  FlaskConical,
  Gauge,
  Activity,
  Route,
  Waves,
  MapPinned,
  Hammer,
} from "lucide-react";
import imgGeotechnical from "@/assets/svc-geotechnical.jpg";
import imgLaboratory from "@/assets/svc-laboratory.jpg";
import imgLoadTest from "@/assets/svc-load-test.jpg";
import imgNdt from "@/assets/svc-ndt.jpg";
import imgPavement from "@/assets/svc-pavement.jpg";
import imgGeophysical from "@/assets/svc-geophysical.jpg";
import imgSurvey from "@/assets/svc-survey.jpg";
import imgPiling from "@/assets/svc-piling.jpg";

export const SERVICES: Service[] = [
  {
    num: "01",
    slug: "geotechnical-investigation",
    title: "Geotechnical Investigation",
    summary:
      "Soil drilling, sampling and in-situ testing for accurate site evaluation, foundation design and reliable construction across India.",
    icon: <Mountain className="h-5 w-5" />,
    image: imgGeotechnical,
    capabilities: [
      "Soil drilling with Auto-SPT",
      "Rock core drilling",
      "In-situ permeability & density",
      "SPT, SCPT, DCPT & vane shear",
      "Field CBR & block vibration",
    ],
    subServices: [
      {
        name: "Soil Drilling with Auto-SPT & Undisturbed Sampling",
        desc: "Collects accurate soil samples while preserving natural moisture and structure. Ideal for geotechnical investigations, foundation design and laboratory testing, ensures reliable data for safe construction projects.",
      },
      {
        name: "Rock Core Drilling",
        desc: "Provides continuous rock samples for analysing rock strength, stability and subsurface conditions. Used in tunnel design, foundation engineering and geotechnical studies.",
      },
      {
        name: "Trial Pits",
        desc: "Excavations carried out to visually inspect and assess subsurface soil conditions, groundwater levels and stratification. A direct, economical approach for shallow geotechnical investigations.",
      },
      {
        name: "Standard Penetration Test (SPT)",
        desc: "Measures soil resistance and density to determine bearing capacity and compaction quality. Widely used in foundation design, geotechnical investigations and civil engineering projects.",
      },
      {
        name: "In-Situ Soil & Rock Permeability Test",
        desc: "Measures water flow through soil and rock layers, crucial for groundwater studies, drainage design and foundation engineering, providing data on hydraulic conductivity and seepage.",
      },
      {
        name: "Field Density Test",
        desc: "Measures the in-place density and compaction of soil. Essential for embankments, pavements and foundation construction.",
      },
      {
        name: "Static Cone Penetration Test (SCPT)",
        desc: "Evaluates soil strength, stiffness and layer stratification. Used in foundation design and structural assessment for safe, cost-effective construction.",
      },
      {
        name: "Dynamic Cone Penetration Test (DCPT)",
        desc: "Measures soil penetration resistance under dynamic load. Helps assess subgrade strength, compaction quality and bearing capacity, especially for road and pavement construction.",
      },
      {
        name: "Field Vane Shear Test",
        desc: "Determines undrained shear strength of cohesive soils. Widely used in slope stability analysis, foundation design and soil-stability assessments.",
      },
      {
        name: "Field California Bearing Ratio (CBR) Test",
        desc: "Measures the load-bearing capacity of subgrade soils. Crucial for pavement design, road construction and embankment stability.",
      },
      {
        name: "Block Vibration Test",
        desc: "Evaluates soil and rock response to dynamic loads. Used in foundation design, seismic assessment and soil–structure interaction studies.",
      },
      {
        name: "Measurement of Settlement & Heave",
        desc: "Monitors vertical soil and structure movements over time. Key for foundation monitoring, retaining walls and construction safety.",
      },
      {
        name: "In-Situ Shear Test on Rock",
        desc: "Determines the shear strength of rock in natural conditions, used in tunnel design, slope stability and rock foundation analysis.",
      },
      {
        name: "In-Situ Direct Shear Test on Soil",
        desc: "Assesses shear strength and cohesion of soil layers in the field. Important for slope stability, retaining walls, embankments and foundation engineering.",
      },
    ],
  },

  {
    num: "02",
    slug: "laboratory-testing",
    title: "Laboratory Testing",
    summary:
      "Precise lab testing and soil analysis, accurate, reliable, data-driven results for safe, durable infrastructure projects to IS, ASTM and BIS standards.",
    icon: <FlaskConical className="h-5 w-5" />,
    image: imgLaboratory,
    capabilities: [
      "Soil index & strength testing",
      "Rock mechanics testing",
      "Cement & concrete testing",
      "Aggregates (fine & coarse)",
      "Bentonite testing",
    ],
    subServices: [
      // Soil
      {
        group: "Soil",
        name: "Sieve Analysis",
        desc: "Determines particle size distribution of coarse-grained soils essential for foundation design, pavement construction and compaction control.",
      },
      {
        group: "Soil",
        name: "Particle Size by Hydrometer",
        desc: "Determines fine particle distribution including silt and clay fractions, used for soil classification, settlement prediction and permeability analysis.",
      },
      {
        group: "Soil",
        name: "Specific Gravity",
        desc: "Measures the ratio of soil solids to water, helps calculate void ratio, porosity and degree of saturation.",
      },
      {
        group: "Soil",
        name: "Natural Moisture Content",
        desc: "Determines natural water content in soil, indicates strength, compressibility and workability.",
      },
      {
        group: "Soil",
        name: "Liquid Limit",
        desc: "Moisture content at which soil changes from plastic to liquid state, used in Atterberg classification.",
      },
      {
        group: "Soil",
        name: "Plastic Limit",
        desc: "Lowest moisture content at which soil can be moulded without cracking, defines plasticity index.",
      },
      {
        group: "Soil",
        name: "Shrinkage Limit",
        desc: "Lowest moisture content where further drying causes no volume change, assesses shrinkage / swelling potential.",
      },
      {
        group: "Soil",
        name: "Free Swell Index",
        desc: "Measures volume increase when soil is soaked, identifies expansive soils that may cause foundation heaving.",
      },
      {
        group: "Soil",
        name: "Heavy & Light Compaction Test",
        desc: "Determines moisture–density relationship, finds the optimum moisture for maximum compaction in road and earthwork projects.",
      },
      {
        group: "Soil",
        name: "California Bearing Ratio (CBR)",
        desc: "Assesses load-bearing capacity of soil for pavements, higher CBR means stronger subgrades for roads and highways.",
      },
      {
        group: "Soil",
        name: "Unconfined Compressive Strength (UCS)",
        desc: "Compressive strength of cohesive soils without confinement, used for foundation design and slope stability.",
      },
      {
        group: "Soil",
        name: "Triaxial Compression Test (UU, CU, CD)",
        desc: "Determines shear strength of soil under controlled drainage and confining pressure, accurate data for slope stability and foundation design.",
      },
      {
        group: "Soil",
        name: "Direct Shear Test (UU, CU, CD)",
        desc: "Measures soil shear strength under horizontal force, calculates cohesion and angle of internal friction.",
      },
      {
        group: "Soil",
        name: "Consolidation Test",
        desc: "Measures soil settlement over time under applied loads, critical for predicting foundation settlement.",
      },
      {
        group: "Soil",
        name: "Swelling Pressure Test",
        desc: "Determines pressure exerted by expansive soil when it swells upon wetting, guides foundation design and soil stabilisation.",
      },
      {
        group: "Soil",
        name: "Lab Vane Shear Test",
        desc: "Measures undrained shear strength of cohesive soils using a rotating vane, ideal for soft clays.",
      },
      {
        group: "Soil",
        name: "Silt Factor",
        desc: "Assesses fineness of soil particles, useful in designing canals, riverbeds and hydraulic structures.",
      },
      {
        group: "Soil",
        name: "Permeability by Constant Head",
        desc: "Measures water flow through coarse-grained soils under steady hydraulic head, essential for drainage design and seepage studies.",
      },
      {
        group: "Soil",
        name: "Permeability by Falling Head",
        desc: "Determines permeability of fine-grained soils where water flows slowly, for seepage and drainage design in silts and clays.",
      },
      {
        group: "Soil",
        name: "Soil & Sand Equivalent Test",
        desc: "Compares cleanliness of sand to clay-like material in soil, ensures quality of materials for road construction.",
      },

      // Rock
      {
        group: "Rock",
        name: "Compressive Strength of Natural Rock",
        desc: "Maximum load a rock can bear before failure, evaluates stone durability for construction and foundation design.",
      },
      {
        group: "Rock",
        name: "Tensile Strength of Natural Rock",
        desc: "Resistance to cracking under tension, essential for evaluating durability and structural performance of natural stones.",
      },
      {
        group: "Rock",
        name: "Porosity",
        desc: "Measures void spaces within rocks, influences permeability, durability and compressive strength.",
      },
      {
        group: "Rock",
        name: "Specific Gravity",
        desc: "Density of rocks relative to water, assesses porosity, strength and design parameters.",
      },
      {
        group: "Rock",
        name: "Water Absorption",
        desc: "Amount of water a stone can absorb, affects durability and weathering resistance.",
      },
      {
        group: "Rock",
        name: "Point Load Index",
        desc: "Measures rock strength under a concentrated load, quick, reliable evaluation of rock quality and durability.",
      },
      {
        group: "Rock",
        name: "Rock Triaxial Test",
        desc: "Evaluates shear and compressive strength of rocks under axial and lateral stresses, predicts behaviour and stability under field loading.",
      },
      {
        group: "Rock",
        name: "Brazilian Tensile Strength of Rock",
        desc: "Tensile strength via diametral compression on a cylindrical sample, for rock durability, slope stability and rock-structure design.",
      },
      {
        group: "Rock",
        name: "Transverse Strength of Natural Stones",
        desc: "Bending strength of stone beams, for designing durable pavements, slabs and structural elements.",
      },

      // Cement
      {
        group: "Cement",
        name: "Compressive Strength",
        desc: "Ability of cement to withstand axial loads, evaluates cement quality, performance and reliability in concrete structures.",
      },
      {
        group: "Cement",
        name: "Normal Consistency",
        desc: "Water required to prepare a cement paste of standard consistency, essential for proper mixing and hydration.",
      },
      {
        group: "Cement",
        name: "Density",
        desc: "Mass per unit volume of cement, for concrete mix design and quality control.",
      },
      {
        group: "Cement",
        name: "Final Setting Time",
        desc: "Time for cement paste to harden completely, ensures adequate working time and proper setting.",
      },
      {
        group: "Cement",
        name: "Initial Setting Time",
        desc: "Time for cement paste to begin stiffening, for planning mixing, transporting and placing concrete.",
      },
      {
        group: "Cement",
        name: "Soundness by Le-Chatelier",
        desc: "Evaluates cement for excessive expansion caused by unhydrated lime, ensures durability and prevents cracking.",
      },
      {
        group: "Cement",
        name: "Fineness by Dry Sieving",
        desc: "Particle size distribution of cement, ensures efficient hydration and improved strength development.",
      },

      // Fine aggregates
      {
        group: "Fine Aggregate",
        name: "Bulk Density",
        desc: "Mass of fine aggregates per unit volume, for compaction characteristics and accurate concrete mix proportions.",
      },
      {
        group: "Fine Aggregate",
        name: "Material Finer Than 75 Micron",
        desc: "Proportion of fine particles in aggregates, excess fines can affect concrete workability and strength.",
      },
      {
        group: "Fine Aggregate",
        name: "Sieve Analysis",
        desc: "Particle size distribution of fine aggregates, for proper grading, workability and durability of concrete.",
      },
      {
        group: "Fine Aggregate",
        name: "Water Absorption",
        desc: "Ability of aggregates to absorb water, for adjusting water content in concrete mix design.",
      },
      {
        group: "Fine Aggregate",
        name: "Specific Gravity",
        desc: "Density of aggregates relative to water, crucial for accurate concrete mix design and quality control.",
      },
      {
        group: "Fine Aggregate",
        name: "Sulphate Soundness (Mg & Na)",
        desc: "Durability of fine aggregates against chemical attack by sulphates, prevents expansion and deterioration.",
      },

      // Coarse aggregates
      {
        group: "Coarse Aggregate",
        name: "Flakiness Index",
        desc: "Percentage of flaky particles in coarse aggregates, assesses workability, compaction and concrete strength.",
      },
      {
        group: "Coarse Aggregate",
        name: "Elongation Index",
        desc: "Proportion of elongated particles in aggregates, excess can reduce concrete strength and durability.",
      },
      {
        group: "Coarse Aggregate",
        name: "10% Fine Value",
        desc: "Strength of coarse aggregates containing up to 10% fines, assesses durability and crushing resistance.",
      },
      {
        group: "Coarse Aggregate",
        name: "Bulk Density",
        desc: "Mass per unit volume of coarse aggregates, for concrete mix design and compaction analysis.",
      },
      {
        group: "Coarse Aggregate",
        name: "Crushing Value Test",
        desc: "Resistance of aggregates to crushing under compressive load, ensures durability for structural concrete.",
      },
      {
        group: "Coarse Aggregate",
        name: "Impact Test",
        desc: "Toughness of coarse aggregates under sudden loads, high resistance ensures durability of pavements and structures.",
      },
      {
        group: "Coarse Aggregate",
        name: "Sieve Analysis",
        desc: "Particle size distribution of coarse aggregates, proper grading ensures workability and concrete strength.",
      },
      {
        group: "Coarse Aggregate",
        name: "Specific Gravity",
        desc: "Density of coarse aggregates relative to water, for accurate concrete mix design and quality control.",
      },
      {
        group: "Coarse Aggregate",
        name: "Water Absorption",
        desc: "Water retention capacity of aggregates, essential for adjusting water content in concrete mixes.",
      },
      {
        group: "Coarse Aggregate",
        name: "Sulphate Soundness (Mg & Na)",
        desc: "Durability of coarse aggregates against sulphate attack, ensures resistance to expansion and cracking.",
      },
      {
        group: "Coarse Aggregate",
        name: "Material Finer Than 75 Micron",
        desc: "Proportion of fine particles passing the 75-micron sieve, for quality control and concrete mix design.",
      },

      // Concrete
      {
        group: "Concrete",
        name: "Compressive Strength of Cube",
        desc: "Concrete's ability to withstand axial loads, verifies quality and confirms strength of structural elements.",
      },
      {
        group: "Concrete",
        name: "Compressive Strength of Core",
        desc: "Compressive strength of hardened concrete from existing structures, assesses in-situ concrete quality and durability.",
      },
      {
        group: "Concrete",
        name: "Longitudinal, Flexural & Torsional Resonance",
        desc: "Non-destructive resonance test for stiffness and elasticity, assesses structural integrity without damaging the concrete.",
      },
      {
        group: "Concrete",
        name: "Pull-Out Test — Reinforced Concrete",
        desc: "Bond strength between concrete and embedded reinforcement, ensures structural stability and effective load transfer.",
      },
      {
        group: "Concrete",
        name: "Dynamic Modulus of Elasticity",
        desc: "Stiffness of concrete using vibration techniques, assesses performance and behaviour under dynamic loads.",
      },
      {
        group: "Concrete",
        name: "Petrographic Analysis (Concrete)",
        desc: "Examines composition and microstructure of concrete, identifies defects and assesses durability.",
      },

      // Bentonite
      {
        group: "Bentonite",
        name: "Natural Moisture Content",
        desc: "Moisture present in bentonite, essential for swelling properties and suitability for sealing, drilling and industrial applications.",
      },
      {
        group: "Bentonite",
        name: "Sand Content",
        desc: "Proportion of sand in bentonite, high sand content reduces swelling efficiency and performance.",
      },
      {
        group: "Bentonite",
        name: "Liquid Limit",
        desc: "Water content at which bentonite changes from plastic to liquid, evaluates swelling and compaction behaviour.",
      },
    ],
  },

  {
    num: "03",
    slug: "field-load-testing",
    title: "Field Load Testing",
    summary:
      "Pile and foundation load testing, onshore and offshore, delivering precise, data-backed insights for safe, durable structural design.",
    icon: <Gauge className="h-5 w-5" />,
    image: imgLoadTest,
    capabilities: [
      "Static & dynamic pile load tests",
      "Lateral & cyclic load tests",
      "Plate, footing & subgrade tests",
      "Bridge, slab & rock anchor tests",
      "Stone column verification",
    ],
    subServices: [
      {
        name: "Static Vertical Pile Load Test",
        desc: "Determines the ultimate load-bearing capacity of vertical piles for onshore and offshore projects, essential for foundation safety in marine and land-based construction.",
      },
      {
        name: "Lateral Load Test",
        desc: "Evaluates the horizontal load resistance of piles up to 500 tons, ensures structural stability and verifies foundation design for bridges, buildings and offshore structures.",
      },
      {
        name: "Cyclic Pile Load Test",
        desc: "Evaluates pile performance under repeated loading up to 5,000 tons, critical data on settlement, stiffness and durability.",
      },
      {
        name: "Pile Pull-Out Test",
        desc: "Measures the tensile resistance of piles up to 500 tons, determines uplift capacity in diverse soil conditions.",
      },
      {
        name: "Lateral Dynamic Pile Load Test",
        desc: "Evaluates pile performance under dynamic lateral forces, simulates wind, earthquake and machinery loads.",
      },
      {
        name: "Plate Load Test",
        desc: "Determines soil bearing capacity and settlement characteristics of foundation subgrades, for safe and efficient structural design.",
      },
      {
        name: "Stone Column Load Test",
        desc: "Evaluates strength, deformation and effectiveness of stone columns installed in soft soil, enhances ground stability.",
      },
      {
        name: "Footing Load Test",
        desc: "Evaluates bearing capacity and settlement of foundations under design loads, ensures structural safety.",
      },
      {
        name: "Bridge & Slab Load Test",
        desc: "Measures strength, stiffness and deflection of bridge decks or slabs under controlled loading, ensures safety and durability.",
      },
      {
        name: "Modulus of Subgrade Reaction (k-Value) Test",
        desc: "Determines soil stiffness under foundations to compute k-values for structural and pavement design.",
      },
      {
        name: "In-Situ Shear Test on Rock",
        desc: "Measures shear strength of rock in its natural position, for slope stability, foundation design and safe excavation planning.",
      },
      {
        name: "Cyclic Lateral Load Test on Rock",
        desc: "Evaluates rock performance and deformation under repeated lateral loads, vital for foundation design and geotechnical safety.",
      },
      {
        name: "Rock Anchor Pull-Out Test",
        desc: "Determines tensile capacity of rock anchors, ensures reliable structural support and effective slope stabilisation.",
      },
    ],
  },

  {
    num: "04",
    slug: "non-destructive-testing",
    title: "Non-Destructive Testing (NDT)",
    summary:
      "Advanced NDT for concrete and deep foundations, accurate, reliable assessments to ensure safety, durability and structural integrity.",
    icon: <Activity className="h-5 w-5" />,
    image: imgNdt,
    capabilities: [
      "Pile integrity & sonic logging",
      "Rebound hammer & UPV",
      "Half-cell potential & resistivity",
      "Cover-meter & rebar mapping",
      "Concrete core & flexural tests",
    ],
    subServices: [
      {
        name: "Pile Integrity Test (PIT)",
        desc: "Non-destructive method to assess the structural integrity of deep foundation piles, detects cracks, voids and discontinuities.",
      },
      {
        name: "High-Strain Dynamic Load Test (ASTM)",
        desc: "Evaluates pile capacity and behaviour under dynamic high-strain loads following ASTM standards, reliable bearing capacity data.",
      },
      {
        name: "Dynamic Pile Load Test (IRC)",
        desc: "Conforms to IRC guidelines, measures pile response under dynamic loads to determine ultimate capacity and performance.",
      },
      {
        name: "Cross-Hole Sonic Logging (CHSL)",
        desc: "Detects voids, honeycombing or defects inside concrete piles, ensures uniformity and structural integrity of deep foundation elements.",
      },
      {
        name: "Rebound Hammer Test",
        desc: "Assesses surface hardness of concrete and estimates compressive strength, widely used for quality control and maintenance.",
      },
      {
        name: "Ultrasonic Pulse Velocity (UPV) Test",
        desc: "Measures velocity of ultrasonic pulses through concrete, evaluates uniformity, detects cracks and assesses quality.",
      },
      {
        name: "Underwater NDT: Rebound Hammer & UPV",
        desc: "Specialised underwater NDT for submerged concrete structures, ensures strength and durability of marine works.",
      },
      {
        name: "Cover Meter Test: Rebar Mapping",
        desc: "Identifies location, diameter and depth of reinforcement bars in concrete, ensures proper cover and detects corrosion risks.",
      },
      {
        name: "Half-Cell Potential",
        desc: "Assesses likelihood of corrosion in steel reinforcement within concrete, supports preventive maintenance and life extension.",
      },
      {
        name: "Resistivity of Concrete",
        desc: "Measures concrete's resistance to electrical current, correlates with corrosion potential and durability.",
      },
      {
        name: "Carbonation Depth",
        desc: "Evaluates how far CO₂ has penetrated concrete, affects reinforcement corrosion and structural longevity.",
      },
      {
        name: "Load Test on Flexural Member",
        desc: "Determines load-carrying capacity and behaviour of beams, slabs and other flexural members under service loads.",
      },
      {
        name: "Concrete Core Testing",
        desc: "Extracting and testing cylindrical samples from hardened concrete, precise data for compressive strength and structural evaluation.",
      },
    ],
  },

  {
    num: "05",
    slug: "pavement-testing",
    title: "Pavement & Road Testing",
    summary:
      "Precise pavement testing and evaluation, accurate data for the design, maintenance and rehabilitation of safe, durable road infrastructure.",
    icon: <Route className="h-5 w-5" />,
    image: imgPavement,
    capabilities: [
      "FWD, LWD & Benkelman Beam",
      "Surface roughness & skid resistance",
      "Network survey vehicle (NSV)",
      "Bridge bearing & vibration analysis",
      "Resilient modulus testing",
    ],
    subServices: [
      {
        name: "Lightweight Deflectometer (LWD)",
        desc: "Evaluates stiffness and compaction of subgrade and base layers, quick, accurate data for long-lasting pavement performance.",
      },
      {
        name: "Surface Roughness (Bump Integrator)",
        desc: "Measures road smoothness and ride quality, identifies uneven surfaces and supports maintenance planning.",
      },
      {
        name: "Skid Resistance",
        desc: "Evaluates friction of road surfaces to prevent vehicle skidding, ensures safety under wet and dry conditions.",
      },
      {
        name: "Network Survey Vehicle (NSV)",
        desc: "Surveys entire road networks efficiently, collects data on surface condition, roughness, rutting and defects.",
      },
      {
        name: "Reflectometer Survey for Sign Boards & Pavements",
        desc: "Assesses retroreflectivity of road signs and pavement markings, improves visibility and traffic safety.",
      },
      {
        name: "Falling Weight Deflectometer (FWD)",
        desc: "Non-destructive method to evaluate pavement structural capacity, deflection behaviour and layer stiffness — for design, evaluation and rehabilitation.",
      },
      {
        name: "Traffic Survey",
        desc: "Collects data on vehicle flow, speed and classification, supports traffic management, road design and urban planning.",
      },
      {
        name: "Rodometer",
        desc: "Measures vertical deflections of pavements under a rolling load, determines structural strength and guides rehabilitation.",
      },
      {
        name: "Road Safety Audit",
        desc: "Evaluates road design, construction and operation for potential safety hazards, recommends improvements to reduce accidents.",
      },
      {
        name: "Resilient Modulus on Bituminous Mixtures (IRC, ASTM)",
        desc: "Determines elastic response of bituminous pavement layers under repeated traffic loads, ensures proper pavement design and long-term durability.",
      },
      {
        name: "Bridge Bearing Test (Elastomeric & POT-PTFE)",
        desc: "Evaluates performance of elastomeric and POT-PTFE bearings, ensures load transfer, movement accommodation and structural safety.",
      },
      {
        name: "Bridge Vibration Analysis",
        desc: "Assesses dynamic behaviour under traffic and environmental loads, identifies structural weaknesses for bridge safety.",
      },
      {
        name: "Benkelman Beam Deflection Measurement",
        desc: "Measures rebound deflection of flexible pavements under standard wheel loads, assesses structural capacity and identifies weak areas.",
      },
    ],
  },

  {
    num: "06",
    slug: "geophysical-testing",
    title: "Geophysical Testing",
    summary:
      "Advanced subsurface exploration using electrical, seismic, sonic and density methods, accurate insights for safe, sustainable engineering.",
    icon: <Waves className="h-5 w-5" />,
    image: imgGeophysical,
    capabilities: [
      "Earth resistivity & ERT",
      "Seismic refraction (SRT) & MASW",
      "Cross-hole & down-hole seismic",
      "Borehole logging: acoustic, density, electrical",
      "Hydrofracture testing",
    ],
    subServices: [
      {
        name: "Earth Resistivity Tests",
        desc: "Measure electrical resistivity of soil and rock, detects groundwater zones, voids and variations in soil composition. Widely applied in geotechnical, groundwater and environmental studies.",
      },
      {
        name: "Seismic Refraction Test (SRT)",
        desc: "Determines subsurface layer velocities by analysing seismic wave travel times, identifies soil stiffness, bedrock depth and layer composition.",
      },
      {
        name: "Soil Wave Propagation",
        desc: "Measures behaviour of seismic waves through soil layers, determines dynamic soil properties, shear modulus and stiffness for earthquake engineering.",
      },
      {
        name: "Seismic Cross-Hole Test",
        desc: "Performed between two or more boreholes to measure shear and compression wave velocities, highly accurate dynamic data for high-rise and bridge foundations.",
      },
      {
        name: "Hydrofracture Test",
        desc: "Hydraulic fracturing of boreholes to measure in-situ stress in rock formations, crucial for rock mechanics, tunnel design and excavation stability.",
      },
      {
        name: "Seismic Down-Hole Test",
        desc: "Measures shear and compression wave velocities at various depths, essential for seismic site characterisation and earthquake-resistant design.",
      },
      {
        name: "Acoustic Logging of Boreholes",
        desc: "Geophysical method to analyse wave propagation through rock and soil within boreholes, data on rock quality, fractures and elastic properties.",
      },
      {
        name: "Density Logging of Boreholes",
        desc: "Measures in-situ density of subsurface soils and rocks using gamma-ray or neutron probes, vital for overburden stress, porosity and material quality.",
      },
      {
        name: "Electrical Logging of Boreholes",
        desc: "Evaluates electrical resistivity and conductivity along boreholes, detects groundwater zones, lithology changes and potential contamination.",
      },
      {
        name: "Multi-Channel Analysis of Surface Waves (MASW)",
        desc: "Non-invasive method that measures shear wave velocity profiles using surface waves, for seismic site characterisation, earthquake engineering and foundation design.",
      },
    ],
  },

  {
    num: "07",
    slug: "land-survey",
    title: "Land Survey Services",
    summary:
      "Precise land surveying and topographic analysis, reliable spatial data for efficient, safe and sustainable infrastructure planning.",
    icon: <MapPinned className="h-5 w-5" />,
    image: imgSurvey,
    capabilities: [
      "Topographical & contour surveys",
      "Drone (UAV) surveys",
      "Cadastral & engineering surveys",
      "Bathymetric & GPR surveys",
      "Utility & legacy-waste mapping",
    ],
    subServices: [
      {
        name: "Topographical Survey",
        desc: "Precise mapping of natural and man-made features, elevation changes, contours, rivers, roads. Vital for urban planning, civil engineering and landscape architecture.",
      },
      {
        name: "Contour Survey",
        desc: "Topographical survey emphasising elevation changes, creates contour lines that visualise the shape and slope of the terrain.",
      },
      {
        name: "Drone Surveys (UAV)",
        desc: "Drones with high-resolution cameras and sensors capture aerial images and data, fast, cost-effective, accurate solution for mapping large areas.",
      },
      {
        name: "Cadastral Surveys",
        desc: "Accurately define and demarcate land boundaries for legal, administrative and property management purposes, supports land ownership verification and dispute prevention.",
      },
      {
        name: "Engineering Surveys",
        desc: "Measurements and data to support construction, establishing control points, setting out building locations, monitoring construction progress.",
      },
      {
        name: "Bathymetric Surveys",
        desc: "Map underwater depths and terrain using sonar and GPS, for rivers, lakes and coastal areas. Supports dredging, navigation safety and marine infrastructure.",
      },
      {
        name: "Ground Penetrating Radar (GPR) Surveys",
        desc: "Radar technology to detect and map subsurface features without excavation, locates buried utilities, pipelines, voids and rebar.",
      },
      {
        name: "Utility Surveys",
        desc: "Detect and map underground utilities, pipelines, electrical cables, telecom and drainage, using GPR, electromagnetic locators and GPS.",
      },
      {
        name: "Survey for Legacy Waste",
        desc: "Map and assess old landfill sites for sustainable waste management and land reclamation, uses GPR, drone mapping and geotechnical techniques.",
      },
    ],
  },

  {
    num: "08",
    slug: "piling-services",
    title: "Piling Services",
    summary:
      "Expert piling for safe, stable and long-lasting foundations, bored, hydraulic, DMC, sheet and specialised solar piling solutions.",
    icon: <Hammer className="h-5 w-5" />,
    image: imgPiling,
    capabilities: [
      "Bored cast-in-situ piling",
      "Hydraulic & DMC piling",
      "TMR & tractor piling",
      "Sheet piling & cofferdams",
      "Solar farm piling",
    ],
    subServices: [
      {
        name: "Bored Cast-in-Situ",
        desc: "Boring a hole and filling with reinforced concrete, strong, stable foundations for heavy structures with minimal vibration.",
      },
      {
        name: "Hydraulic Piling",
        desc: "Powerful hydraulic rigs for quick and efficient pile installation — accurate, low-noise, suitable for urban and remote sites.",
      },
      {
        name: "TMR Piling",
        desc: "Ideal for light to medium load-bearing structures, stable, cost-efficient and quick setup with minimal site disturbance.",
      },
      {
        name: "DMC Piling",
        desc: "Direct Mud Circulation drilling with circulating mud to support the borehole, effective for deep foundations and coastal or loose soil conditions.",
      },
      {
        name: "Tractor Piling",
        desc: "Tractor-mounted piling for mobility and efficiency in remote or limited-access sites, medium-depth, cost-effective.",
      },
      {
        name: "Manual Piling",
        desc: "For small-scale projects and areas inaccessible to heavy machinery, ensures precision in shallow foundation installations.",
      },
      {
        name: "Timber Pile Foundation",
        desc: "Treated wood piles for lightweight structures and temporary works, sustainable and cost-effective.",
      },
      {
        name: "Sheet Piling",
        desc: "Reliable earth-retention system that prevents soil collapse and controls groundwater during deep excavations, ideal for basements, cofferdams and waterfront construction.",
      },
      {
        name: "Piling for Solar",
        desc: "Strong, durable foundations for ground-mounted solar panels using steel driven or screw piles, fast install, high stability for solar farms and large PV projects.",
      },
    ],
  },
];

// Sectors / industries we serve — sourced from project portfolio
export const SECTORS = [
  {
    tag: "Energy",
    name: "Solar & wind farms",
    note: "Foundation studies, ERT for grounding design, BoP geotechnical.",
  },
  {
    tag: "Power",
    name: "Transmission lines",
    note: "Tower-by-tower soil testing, foundation classification, route surveys.",
  },
  {
    tag: "Aviation",
    name: "Airports & runways",
    note: "Subgrade evaluation, pavement design (IRC / MoRTH), terminal foundations.",
  },
  {
    tag: "Oil & Gas",
    name: "Pipelines & fuel stations",
    note: "Trench geotechnics, tank-pad investigations, HDD route surveys.",
  },
  {
    tag: "Civil",
    name: "Bridges & highways",
    note: "Pier-location boreholes, scour analysis, pavement & subgrade testing.",
  },
  {
    tag: "Built",
    name: "Commercial & industrial",
    note: "High-rise foundation design, raft & pile recommendations, structural audits.",
  },
  {
    tag: "Water",
    name: "Municipal & irrigation",
    note: "Aquifer studies, well-field design, drinking water quality.",
  },
  {
    tag: "Marine",
    name: "Coastal & off-shore",
    note: "Marine boreholes, jetty & breakwater foundations, seabed surveys.",
  },
];
