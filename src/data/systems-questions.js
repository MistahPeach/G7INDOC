const questions = [
  {
    "id": "s1",
    "question": "How many pressurized doors does the CRJ-700 have?",
    "choices": [
      "6",
      "7",
      "8",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "There are 8 pressurized doors: Main Passenger Door, Crew Escape Hatch, Galley Service Door, Avionics Bay Door, Forward Cargo Bay Door, Right Over-wing Emergency Exit, Left Over-wing Emergency Exit, and Aft Cargo Bay Door.",
    "category": "air-cond"
  },
  {
    "id": "s2",
    "question": "Which pressurized door is NOT displayed on the doors page of ED2?",
    "choices": [
      "Main passenger door",
      "Crew escape hatch",
      "Galley service door",
      "Forward cargo bay door"
    ],
    "correctAnswer": 1,
    "explanation": "The crew escape hatch is the pressurized door not displayed on the doors page of ED2.",
    "category": "eicas"
  },
  {
    "id": "s3",
    "question": "The aft equipment bay door is displayed on the EICAS doors page and is pressurized.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "The aft equipment bay door is not displayed on the EICAS doors page. It is not pressurized.",
    "category": "eicas"
  },
  {
    "id": "s4",
    "question": "How many people can the main cabin door stairs support at once?",
    "choices": [
      "Two people or 500 pounds",
      "Three people or 750 pounds",
      "Four people or 1,000 pounds",
      "Six people or 1,500 pounds"
    ],
    "correctAnswer": 2,
    "explanation": "Four people or 1,000 pounds.",
    "category": "general"
  },
  {
    "id": "s5",
    "question": "Aside from the doors page on ED2, how can the main cabin door be verified closed?",
    "choices": [
      "By checking the door handle position indicator",
      "By verifying all the green alignment pins on the inside of the door are aligned",
      "By observing the DOOR CLOSED status message on ED1",
      "By checking the external door light illumination"
    ],
    "correctAnswer": 1,
    "explanation": "By verifying all the green alignment pins on the inside of the door are aligned.",
    "category": "eicas"
  },
  {
    "id": "s6",
    "question": "What is the Maximum Takeoff Weight of the CRJ-700?",
    "choices": [
      "67,000 lbs",
      "72,500 lbs",
      "75,000 lbs",
      "75,250 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "Maximum Takeoff Weight is 75,000 lbs. Maximum Taxi and Ramp Weight is 75,250 lbs.",
    "category": "general"
  },
  {
    "id": "s7",
    "question": "What is the Maximum Landing Weight of the CRJ-700?",
    "choices": [
      "62,300 lbs",
      "67,000 lbs",
      "72,000 lbs",
      "75,000 lbs"
    ],
    "correctAnswer": 1,
    "explanation": "Maximum Landing Weight is 67,000 lbs.",
    "category": "general"
  },
  {
    "id": "s8",
    "question": "What is the Maximum Zero Fuel Weight?",
    "choices": [
      "39,835 lbs",
      "42,000 lbs",
      "58,500 lbs",
      "62,300 lbs"
    ],
    "correctAnswer": 3,
    "explanation": "Maximum Zero Fuel Weight is 62,300 lbs.",
    "category": "fuel"
  },
  {
    "id": "s9",
    "question": "What is the Minimum Flight Weight of the CRJ-700?",
    "choices": [
      "39,835 lbs",
      "42,000 lbs",
      "45,000 lbs",
      "50,000 lbs"
    ],
    "correctAnswer": 1,
    "explanation": "Minimum Flight Weight is 42,000 lbs. Minimum Operating Empty Weight is 39,835 lbs.",
    "category": "general"
  },
  {
    "id": "s10",
    "question": "What is the maximum pressure altitude for takeoff and landing?",
    "choices": [
      "5,000 feet",
      "8,000 feet",
      "10,000 feet",
      "14,000 feet"
    ],
    "correctAnswer": 1,
    "explanation": "8,000 feet.",
    "category": "air-cond"
  },
  {
    "id": "s11",
    "question": "What is the maximum operating altitude of the CRJ-700?",
    "choices": [
      "37,000 feet",
      "39,000 feet",
      "41,000 feet",
      "43,000 feet"
    ],
    "correctAnswer": 2,
    "explanation": "41,000 feet.",
    "category": "general"
  },
  {
    "id": "s12",
    "question": "What is the maximum temperature approved for takeoff and landing?",
    "choices": [
      "ISA +15°C",
      "ISA +25°C",
      "ISA +35°C",
      "ISA +40°C"
    ],
    "correctAnswer": 2,
    "explanation": "ISA +35°C.",
    "category": "general"
  },
  {
    "id": "s13",
    "question": "What is the minimum temperature approved for takeoff?",
    "choices": [
      "-20°C",
      "-30°C",
      "-40°C",
      "-50°C"
    ],
    "correctAnswer": 2,
    "explanation": "-40°C or -40°F.",
    "category": "general"
  },
  {
    "id": "s14",
    "question": "What is the minimum oxygen pressure required for a crew of three?",
    "choices": [
      "810 psi",
      "1000 psi",
      "1110 psi",
      "1250 psi"
    ],
    "correctAnswer": 2,
    "explanation": "Three crewmembers require 1110 psi, and two require 810 psi.",
    "category": "oxygen"
  },
  {
    "id": "s15",
    "question": "What is the minimum oxygen pressure required for a crew of two?",
    "choices": [
      "600 psi",
      "810 psi",
      "1000 psi",
      "1110 psi"
    ],
    "correctAnswer": 1,
    "explanation": "Two crewmembers require 810 psi. Three crewmembers require 1110 psi.",
    "category": "oxygen"
  },
  {
    "id": "s16",
    "question": "Which of the following is NOT required for flight in RVSM airspace?",
    "choices": [
      "One autopilot",
      "Two altitude reporting transponders",
      "Two flight management computers",
      "Two air data computers"
    ],
    "correctAnswer": 2,
    "explanation": "RVSM requires: one autopilot, an altitude alerting system, two altitude reporting transponders (one must be operational), and two air data computers (both must be operational). Two FMCs are not specifically required for RVSM.",
    "category": "general"
  },
  {
    "id": "s17",
    "question": "What alerts the pilots to SLD (Supercooled Large Droplet) icing?",
    "choices": [
      "An EICAS advisory message",
      "Ice accretion on the flight deck side windows",
      "The ice detection system probe",
      "A change in engine N1 readings"
    ],
    "correctAnswer": 1,
    "explanation": "Ice accretion on the flight deck side windows.",
    "category": "ice-rain"
  },
  {
    "id": "s18",
    "question": "Takeoff is permitted with up to 1/8 inch of frost on the underside of the wings if it is associated with chilled fuel in the fuel tanks.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "No takeoff with frost, ice, snow or slush on critical areas, with two exceptions: a maximum of 1/8 inch of frost on the underside of the wings is permitted if associated with chilled fuel in the fuel tanks. The upper surface of the fuselage may be frosted if surface features are distinguishable.",
    "category": "fuel"
  },
  {
    "id": "s19",
    "question": "What are the maximum and minimum runway slopes for takeoff and landing?",
    "choices": [
      "±1%",
      "±2%",
      "±3%",
      "±5%"
    ],
    "correctAnswer": 1,
    "explanation": "±2%.",
    "category": "general"
  },
  {
    "id": "s20",
    "question": "What is the maximum tailwind component approved for takeoff and landing?",
    "choices": [
      "5 knots",
      "10 knots",
      "15 knots",
      "20 knots"
    ],
    "correctAnswer": 1,
    "explanation": "10 knots.",
    "category": "general"
  },
  {
    "id": "s21",
    "question": "What is the aircraft's maximum Mach number (Mmo)?",
    "choices": [
      "Mach 0.78",
      "Mach 0.80",
      "Mach 0.83",
      "Mach 0.85"
    ],
    "correctAnswer": 3,
    "explanation": "Mach 0.85.",
    "category": "general"
  },
  {
    "id": "s22",
    "question": "What is the maximum Mach number in RVSM airspace?",
    "choices": [
      "Mach 0.80",
      "Mach 0.82",
      "Mach 0.83",
      "Mach 0.85"
    ],
    "correctAnswer": 2,
    "explanation": "Mach 0.83.",
    "category": "general"
  },
  {
    "id": "s23",
    "question": "What is the maximum speed to extend and fly with the landing gear down (Vlo)?",
    "choices": [
      "185 KIAS",
      "200 KIAS",
      "220 KIAS",
      "250 KIAS"
    ],
    "correctAnswer": 2,
    "explanation": "220 KIAS.",
    "category": "landing-gear"
  },
  {
    "id": "s24",
    "question": "What is the maximum speed for landing gear retraction?",
    "choices": [
      "182 KIAS",
      "200 KIAS",
      "220 KIAS",
      "230 KIAS"
    ],
    "correctAnswer": 1,
    "explanation": "200 KIAS.",
    "category": "landing-gear"
  },
  {
    "id": "s25",
    "question": "What is the maximum tire speed?",
    "choices": [
      "165 knots",
      "175 knots",
      "182 knots",
      "195 knots"
    ],
    "correctAnswer": 2,
    "explanation": "182 knots.",
    "category": "landing-gear"
  },
  {
    "id": "s26",
    "question": "What is the maximum turbulent air penetration speed?",
    "choices": [
      "250 KIAS / 0.70 Mach",
      "270 KIAS / 0.73 Mach",
      "280 KIAS / 0.75 Mach",
      "300 KIAS / 0.80 Mach"
    ],
    "correctAnswer": 2,
    "explanation": "280 KIAS or 0.75 Mach, whichever is lower.",
    "category": "general"
  },
  {
    "id": "s27",
    "question": "What is the maximum speed for windshield wiper operation?",
    "choices": [
      "200 KIAS",
      "220 KIAS",
      "250 KIAS",
      "280 KIAS"
    ],
    "correctAnswer": 2,
    "explanation": "250 KIAS.",
    "category": "ice-rain"
  },
  {
    "id": "s28",
    "question": "The flight deck door must remain closed and locked in flight.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "The flight deck door must remain closed and locked in flight, excluding the provisions listed in airline operating manuals for physiological needs.",
    "category": "general"
  },
  {
    "id": "s29",
    "question": "How many emergency light battery packs are there?",
    "choices": [
      "Two (12 volts each)",
      "Three (6 volts each)",
      "Four (6 volts each)",
      "Six (3 volts each)"
    ],
    "correctAnswer": 2,
    "explanation": "Four (6 volts each wired in series).",
    "category": "electrical"
  },
  {
    "id": "s30",
    "question": "How many minutes of light will the emergency lights provide?",
    "choices": [
      "5 minutes",
      "10 minutes",
      "15 minutes",
      "20 minutes"
    ],
    "correctAnswer": 1,
    "explanation": "10 minutes.",
    "category": "general"
  },
  {
    "id": "s31",
    "question": "What will cause the emergency lights to illuminate when the switch is in the armed position?",
    "choices": [
      "A loss of engine-driven generator power",
      "A loss of either the AC or DC Essential bus",
      "A loss of battery bus power only",
      "Activation of the fire detection system"
    ],
    "correctAnswer": 1,
    "explanation": "A loss of either the AC or DC Essential bus.",
    "category": "general"
  },
  {
    "id": "s32",
    "question": "How long must the photo luminescent strips in the cabin be exposed to light prior to passenger boarding?",
    "choices": [
      "5 minutes",
      "10 minutes",
      "15 minutes",
      "30 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "15 minutes.",
    "category": "general"
  },
  {
    "id": "s33",
    "question": "When must the taxi lights be turned off when the aircraft is stationary?",
    "choices": [
      "After 5 minutes",
      "After 10 minutes",
      "After 15 minutes",
      "After 20 minutes"
    ],
    "correctAnswer": 1,
    "explanation": "After 10 minutes.",
    "category": "general"
  },
  {
    "id": "s34",
    "question": "If the primary wing NAV light burns out, the secondary bulb must be manually selected.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "The secondary bulb will illuminate automatically.",
    "category": "general"
  },
  {
    "id": "s35",
    "question": "When the seatbelt sign switch is in the AUTO position, which of the following will cause the seatbelt sign to illuminate automatically?",
    "choices": [
      "Engine start or APU operation",
      "Landing gear or flap extension, or cabin altitude exceeding 10,000 feet",
      "Exceeding 250 KIAS below 10,000 feet",
      "Activation of the fasten seatbelt chime by the flight attendant"
    ],
    "correctAnswer": 1,
    "explanation": "When the landing gear or flaps extend, or when the cabin altitude exceeds 10,000 feet.",
    "category": "general"
  },
  {
    "id": "s36",
    "question": "What sends the signal for the seatbelt sign to illuminate when the cabin altitude exceeds 10,000 feet?",
    "choices": [
      "The CPC (Cabin Pressure Controller)",
      "The CPAM (Cabin Pressure Acquisition Module)",
      "The DCU (Data Concentrator Unit)",
      "The ACSC (Air Conditioning System Controller)"
    ],
    "correctAnswer": 1,
    "explanation": "The CPAM (Cabin Pressure Acquisition Module).",
    "category": "air-cond"
  },
  {
    "id": "s37",
    "question": "What type of engines does the CRJ-700 have?",
    "choices": [
      "Pratt & Whitney PW305A",
      "General Electric CF34-8C5B1",
      "Rolls-Royce AE 3007",
      "Honeywell TFE731-40"
    ],
    "correctAnswer": 1,
    "explanation": "General Electric CF34-8C5B1.",
    "category": "powerplant"
  },
  {
    "id": "s38",
    "question": "What is the maximum N1 RPM?",
    "choices": [
      "95.2%",
      "97.8%",
      "99.4%",
      "100.0%"
    ],
    "correctAnswer": 2,
    "explanation": "99.4%, which is the top of the green arc.",
    "category": "powerplant"
  },
  {
    "id": "s39",
    "question": "What is the maximum N2 RPM?",
    "choices": [
      "96.5%",
      "98.0%",
      "99.3%",
      "100.0%"
    ],
    "correctAnswer": 2,
    "explanation": "99.3%, which is the top of the green arc.",
    "category": "powerplant"
  },
  {
    "id": "s40",
    "question": "What is the maximum oil temperature limitation?",
    "choices": [
      "140°C",
      "155°C",
      "164°C",
      "175°C"
    ],
    "correctAnswer": 2,
    "explanation": "164°C.",
    "category": "general"
  },
  {
    "id": "s41",
    "question": "What is the minimum oil pressure?",
    "choices": [
      "15 psi",
      "20 psi",
      "25 psi",
      "35 psi"
    ],
    "correctAnswer": 2,
    "explanation": "25 psi.",
    "category": "air-cond"
  },
  {
    "id": "s42",
    "question": "After engine start, what is the N1 limit for the first 2 minutes (or until all indications are normal)?",
    "choices": [
      "50% N1",
      "65% N1",
      "75% N1",
      "85% N1"
    ],
    "correctAnswer": 2,
    "explanation": "Do not exceed 75% N1 for 2 minutes or until all operating indications are in the normal range, whichever is longer.",
    "category": "powerplant"
  },
  {
    "id": "s43",
    "question": "What is the engine cool-down limitation after landing?",
    "choices": [
      "Engine at idle for 1 minute prior to shutdown",
      "Engine at or near idle for 2 minutes prior to shutdown",
      "Engine at idle for 3 minutes prior to shutdown",
      "Engine at or near idle for 5 minutes prior to shutdown"
    ],
    "correctAnswer": 1,
    "explanation": "After landing the engine must be at or near idle thrust for two minutes prior to shutdown.",
    "category": "powerplant"
  },
  {
    "id": "s44",
    "question": "With the engines running, the targeted N1 for takeoff must be within what percentage of the performance charts?",
    "choices": [
      "±0.5%",
      "±1%",
      "±2%",
      "±3%"
    ],
    "correctAnswer": 1,
    "explanation": "±1%.",
    "category": "powerplant"
  },
  {
    "id": "s45",
    "question": "An aircraft is considered cold soaked when exposed to temperatures at or below what value for more than 8 hours?",
    "choices": [
      "-15°C",
      "-20°C",
      "-25°C",
      "-30°C"
    ],
    "correctAnswer": 3,
    "explanation": "When the aircraft is exposed to temperatures of -30°C or below for more than 8 hours.",
    "category": "general"
  },
  {
    "id": "s46",
    "question": "When an aircraft is cold soaked, the engines must be motored for how long prior to start?",
    "choices": [
      "30 seconds",
      "45 seconds",
      "60 seconds",
      "90 seconds"
    ],
    "correctAnswer": 2,
    "explanation": "The engines must be motored for 60 seconds prior to start, and fan rotation must be verified. The thrust reversers must be actuated until the deploy and stow cycles are 2 seconds or less.",
    "category": "powerplant"
  },
  {
    "id": "s47",
    "question": "What is the maximum N2 RPM for starter engagement?",
    "choices": [
      "20%",
      "35%",
      "45%",
      "50%"
    ],
    "correctAnswer": 2,
    "explanation": "45%.",
    "category": "powerplant"
  },
  {
    "id": "s48",
    "question": "What is the normal N1 idle range?",
    "choices": [
      "10-18%",
      "20-25%",
      "30-40%",
      "45-55%"
    ],
    "correctAnswer": 1,
    "explanation": "20-25%.",
    "category": "powerplant"
  },
  {
    "id": "s49",
    "question": "What is the normal N2 idle range?",
    "choices": [
      "35-45%",
      "45-55%",
      "55-65%",
      "65-75%"
    ],
    "correctAnswer": 2,
    "explanation": "55-65%.",
    "category": "powerplant"
  },
  {
    "id": "s50",
    "question": "What is the maximum continuous N2 percentage?",
    "choices": [
      "95%",
      "96%",
      "98%",
      "99.3%"
    ],
    "correctAnswer": 2,
    "explanation": "98%.",
    "category": "powerplant"
  },
  {
    "id": "s51",
    "question": "What is the maximum ITT for an engine start on the ground?",
    "choices": [
      "750°C",
      "815°C",
      "870°C",
      "927°C"
    ],
    "correctAnswer": 1,
    "explanation": "815°C.",
    "category": "powerplant"
  },
  {
    "id": "s52",
    "question": "What is the maximum ITT for a windmill start?",
    "choices": [
      "815°C",
      "870°C",
      "927°C",
      "1,000°C"
    ],
    "correctAnswer": 2,
    "explanation": "927°C.",
    "category": "powerplant"
  },
  {
    "id": "s53",
    "question": "What is the minimum oil temperature for an engine start?",
    "choices": [
      "-20°C",
      "-30°C",
      "-40°C",
      "-50°C"
    ],
    "correctAnswer": 2,
    "explanation": "-40°C.",
    "category": "powerplant"
  },
  {
    "id": "s54",
    "question": "What is the maximum oil temperature for maximum continuous thrust?",
    "choices": [
      "140°C",
      "150°C",
      "155°C",
      "163°C"
    ],
    "correctAnswer": 2,
    "explanation": "155°C.",
    "category": "powerplant"
  },
  {
    "id": "s55",
    "question": "What is the maximum oil temperature for normal and APR power?",
    "choices": [
      "155°C, no time limit",
      "160°C limited to 20 minutes",
      "163°C limited to 15 minutes",
      "170°C limited to 10 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "163°C limited to 15 minutes.",
    "category": "powerplant"
  },
  {
    "id": "s56",
    "question": "What oil pressure range requires continuous monitoring while operating above idle power?",
    "choices": [
      "15-30 psi",
      "20-40 psi",
      "25-45 psi",
      "30-50 psi"
    ],
    "correctAnswer": 2,
    "explanation": "25-45 psi while operating above idle power.",
    "category": "air-cond"
  },
  {
    "id": "s57",
    "question": "What is the maximum display value for the oil pressure digital display before amber dashes are shown?",
    "choices": [
      "150 psi",
      "165 psi",
      "182 psi",
      "200 psi"
    ],
    "correctAnswer": 2,
    "explanation": "182 psi, beyond this point amber dashes will be displayed.",
    "category": "air-cond"
  },
  {
    "id": "s58",
    "question": "What is the minimum oil quantity for flight?",
    "choices": [
      "25% while shutdown",
      "30% while shutdown",
      "40% while shutdown",
      "50% while shutdown"
    ],
    "correctAnswer": 2,
    "explanation": "40% while shutdown.",
    "category": "general"
  },
  {
    "id": "s59",
    "question": "What is the maximum motoring ITT for engine start on the ground versus in flight?",
    "choices": [
      "90°C on the ground, 60°C in flight",
      "100°C on the ground, 80°C in flight",
      "120°C on the ground, 90°C in flight",
      "150°C on the ground, 120°C in flight"
    ],
    "correctAnswer": 2,
    "explanation": "120°C on the ground, and 90°C in flight.",
    "category": "powerplant"
  },
  {
    "id": "s60",
    "question": "What is the maximum altitude for starting the main engines?",
    "choices": [
      "15,000 feet",
      "18,000 feet",
      "21,000 feet",
      "25,000 feet"
    ],
    "correctAnswer": 2,
    "explanation": "21,000 feet.",
    "category": "powerplant"
  },
  {
    "id": "s61",
    "question": "Which of the following is a thrust reverser limitation?",
    "choices": [
      "Go-arounds may be attempted after reverser deployment if above Vref",
      "Power back operations are permitted with caution",
      "Reverse thrust must be less than 60% N1 prior to reaching 75 KIAS after landing",
      "Takeoff is permitted with a thrust reverser advisory message"
    ],
    "correctAnswer": 2,
    "explanation": "Thrust reverser limitations include: do not attempt a go-around after thrust reverser deployment, power back operations are prohibited, takeoff with any thrust reverser warning or caution messages is prohibited, and after landing reverse thrust must be less than 60% N1 prior to reaching 75 KIAS.",
    "category": "powerplant"
  },
  {
    "id": "s62",
    "question": "What is the absolute maximum APU EGT?",
    "choices": [
      "927°C",
      "1,000°C",
      "1,038°C",
      "1,100°C"
    ],
    "correctAnswer": 2,
    "explanation": "1,038°C or the lesser value indicated on the EICAS display.",
    "category": "apu"
  },
  {
    "id": "s63",
    "question": "What is the maximum APU RPM?",
    "choices": [
      "100%",
      "102%",
      "104%",
      "106%"
    ],
    "correctAnswer": 3,
    "explanation": "106%.",
    "category": "apu"
  },
  {
    "id": "s64",
    "question": "What is the maximum altitude for APU bleed air extraction?",
    "choices": [
      "15,000 feet",
      "20,000 feet",
      "25,000 feet",
      "30,000 feet"
    ],
    "correctAnswer": 2,
    "explanation": "25,000 feet.",
    "category": "air-cond"
  },
  {
    "id": "s65",
    "question": "What is the maximum altitude for APU operation versus APU start?",
    "choices": [
      "37,000 ft operation / 25,000 ft start",
      "39,000 ft operation / 35,000 ft start",
      "41,000 ft operation / 37,000 ft start",
      "43,000 ft operation / 41,000 ft start"
    ],
    "correctAnswer": 2,
    "explanation": "41,000 feet for APU operation, and 37,000 feet for start.",
    "category": "apu"
  },
  {
    "id": "s66",
    "question": "What are the APU starter limitations (per the limitations chapter)?",
    "choices": [
      "Two start attempts per hour with a 3 minute cool down",
      "Three start attempts per hour with a 5 minute cool down",
      "Four start attempts per hour with a 2 minute cool down",
      "Five start attempts per hour with a 1 minute cool down"
    ],
    "correctAnswer": 1,
    "explanation": "Three start attempts per hour with a five minute cool down period in between start attempts.",
    "category": "apu"
  },
  {
    "id": "s67",
    "question": "How many total fire extinguishers and PBEs are there onboard the aircraft?",
    "choices": [
      "Two of each",
      "Three of each",
      "Four of each",
      "Six of each"
    ],
    "correctAnswer": 2,
    "explanation": "Four of each located within three feet of each other.",
    "category": "oxygen"
  },
  {
    "id": "s68",
    "question": "When cargo is carried, what is the maximum distance in terms of time that the aircraft can be operated from a suitable airport?",
    "choices": [
      "30 minutes",
      "45 minutes",
      "60 minutes",
      "90 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "60 minutes, because the aircraft's fire extinguishing system is only capable of providing 60 minutes of fire suppression.",
    "category": "general"
  },
  {
    "id": "s69",
    "question": "How many gallons does the forward potable water tank hold?",
    "choices": [
      "8.5 gallons",
      "10.1 gallons",
      "11.5 gallons",
      "15.0 gallons"
    ],
    "correctAnswer": 2,
    "explanation": "11.5 gallons forward, and 10.1 gallons aft.",
    "category": "general"
  },
  {
    "id": "s70",
    "question": "What provides pressure for the potable water system to dispense water?",
    "choices": [
      "Hydraulic system pressure at all times",
      "Bleed air in flight and an electric motor on the ground",
      "An electric pump at all times",
      "Engine-driven pumps in flight and APU on the ground"
    ],
    "correctAnswer": 1,
    "explanation": "Bleed air in flight and an electric motor on the ground.",
    "category": "air-cond"
  },
  {
    "id": "s71",
    "question": "The drain masts of the potable water system are heated.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, the drain masts of the potable water system are heated.",
    "category": "general"
  },
  {
    "id": "s72",
    "question": "What is the maximum positive G loading with flaps retracted?",
    "choices": [
      "+2.0 G",
      "+2.25 G",
      "+2.5 G",
      "+3.0 G"
    ],
    "correctAnswer": 2,
    "explanation": "-1.0 to +2.5 G flaps retracted, and 0.0 to +2.0 G flaps extended.",
    "category": "flight-controls"
  },
  {
    "id": "s73",
    "question": "What is the maximum G loading range with flaps extended?",
    "choices": [
      "-1.0 to +2.5 G",
      "-0.5 to +2.25 G",
      "0.0 to +2.0 G",
      "0.0 to +2.5 G"
    ],
    "correctAnswer": 2,
    "explanation": "0.0 to +2.0 G flaps extended. Flaps retracted is -1.0 to +2.5 G.",
    "category": "flight-controls"
  },
  {
    "id": "s74",
    "question": "What is the maximum altitude with the flaps extended?",
    "choices": [
      "10,000 feet",
      "15,000 feet",
      "20,000 feet",
      "25,000 feet"
    ],
    "correctAnswer": 1,
    "explanation": "15,000 feet.",
    "category": "flight-controls"
  },
  {
    "id": "s75",
    "question": "What is the minimum altitude allowed with spoilers extended?",
    "choices": [
      "100 feet",
      "200 feet",
      "300 feet",
      "500 feet"
    ],
    "correctAnswer": 2,
    "explanation": "300 feet.",
    "category": "flight-controls"
  },
  {
    "id": "s76",
    "question": "What is the maximum flap extension speed for Flaps 30?",
    "choices": [
      "170 KIAS",
      "185 KIAS",
      "200 KIAS",
      "230 KIAS"
    ],
    "correctAnswer": 1,
    "explanation": "Flaps 30: 185 KIAS. Flaps 1/8/20: 230 KIAS. Flaps 45: 170 KIAS.",
    "category": "flight-controls"
  },
  {
    "id": "s77",
    "question": "What is the maximum flap extension speed for Flaps 45?",
    "choices": [
      "150 KIAS",
      "160 KIAS",
      "170 KIAS",
      "185 KIAS"
    ],
    "correctAnswer": 2,
    "explanation": "Flaps 45: 170 KIAS.",
    "category": "flight-controls"
  },
  {
    "id": "s78",
    "question": "What is the maximum flap extension speed for Flaps 1, 8, and 20?",
    "choices": [
      "185 KIAS",
      "200 KIAS",
      "220 KIAS",
      "230 KIAS"
    ],
    "correctAnswer": 3,
    "explanation": "Flaps 1, 8, and 20 all share the same maximum speed of 230 KIAS.",
    "category": "flight-controls"
  },
  {
    "id": "s79",
    "question": "What is the maximum fuel imbalance for takeoff?",
    "choices": [
      "200 lbs",
      "300 lbs",
      "500 lbs",
      "800 lbs"
    ],
    "correctAnswer": 1,
    "explanation": "300 lbs for takeoff, and 800 lbs in flight.",
    "category": "fuel"
  },
  {
    "id": "s80",
    "question": "What is the maximum fuel imbalance in flight?",
    "choices": [
      "300 lbs",
      "500 lbs",
      "800 lbs",
      "1,000 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "800 lbs in flight. 300 lbs for takeoff.",
    "category": "fuel"
  },
  {
    "id": "s81",
    "question": "If there is more than 500 lbs of fuel in the center tank prior to takeoff, what is the minimum fuel required in each wing tank?",
    "choices": [
      "2,200 lbs",
      "3,300 lbs",
      "4,400 lbs",
      "5,500 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "Each wing tank must have a minimum of 4,400 lbs or the AFM must be referenced.",
    "category": "fuel"
  },
  {
    "id": "s82",
    "question": "What is the minimum quantity of fuel per wing for the execution of a go-around?",
    "choices": [
      "400 lbs",
      "500 lbs",
      "600 lbs",
      "800 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "600 lbs of fuel per wing provided the aircraft's pitch attitude does not exceed 10° nose up.",
    "category": "fuel"
  },
  {
    "id": "s83",
    "question": "What is the minimum bulk fuel temperature for takeoff with JET A?",
    "choices": [
      "-20°C",
      "-25°C",
      "-30°C",
      "-40°C"
    ],
    "correctAnswer": 2,
    "explanation": "-30°C.",
    "category": "fuel"
  },
  {
    "id": "s84",
    "question": "What is the bulk fuel freezing point of JET A?",
    "choices": [
      "-30°C",
      "-35°C",
      "-40°C",
      "-47°C"
    ],
    "correctAnswer": 2,
    "explanation": "-40°C.",
    "category": "fuel"
  },
  {
    "id": "s85",
    "question": "What are the maximum and minimum cabin pressure relief differential pressures?",
    "choices": [
      "7.5 psi to -0.3 psi",
      "8.0 psi to -0.4 psi",
      "8.7 psi to -0.5 psi",
      "9.0 psi to -0.5 psi"
    ],
    "correctAnswer": 2,
    "explanation": "8.7 psi to -0.5 psi.",
    "category": "air-cond"
  },
  {
    "id": "s86",
    "question": "During taxi, takeoff, and landing, what is the maximum cabin differential pressure?",
    "choices": [
      "0.0 psi",
      "0.1 psi",
      "0.5 psi",
      "1.0 psi"
    ],
    "correctAnswer": 1,
    "explanation": "0.1 psi. This is to allow the doors to easily open in the event of an emergency evacuation.",
    "category": "air-cond"
  },
  {
    "id": "s87",
    "question": "What is the maximum permissible load on each generator (excluding the ADG)?",
    "choices": [
      "20 kVA",
      "30 kVA",
      "40 kVA",
      "50 kVA"
    ],
    "correctAnswer": 2,
    "explanation": "40 kVA.",
    "category": "electrical"
  },
  {
    "id": "s88",
    "question": "What is the maximum permissible load on each TRU?",
    "choices": [
      "80 amps",
      "100 amps",
      "120 amps",
      "150 amps"
    ],
    "correctAnswer": 2,
    "explanation": "120 amps.",
    "category": "electrical"
  },
  {
    "id": "s89",
    "question": "When does the Cockpit Voice Recorder (CVR) begin recording?",
    "choices": [
      "When the first engine is started",
      "When the battery bus is energized",
      "When external power is connected",
      "When the beacon light is turned on"
    ],
    "correctAnswer": 1,
    "explanation": "When the battery bus is energized.",
    "category": "comms"
  },
  {
    "id": "s90",
    "question": "When does the FDR begin recording?",
    "choices": [
      "When the battery bus is energized",
      "When the first engine is started",
      "When the strobe or beacon lights operate, or the aircraft is in flight",
      "When the parking brake is released"
    ],
    "correctAnswer": 2,
    "explanation": "When the strobe lights or the beacon lights operate, or the aircraft is in flight.",
    "category": "general"
  },
  {
    "id": "s91",
    "question": "How long should the FDR event button be pressed and held to mark an event?",
    "choices": [
      "1 second",
      "2 seconds",
      "3 seconds",
      "5 seconds"
    ],
    "correctAnswer": 1,
    "explanation": "When a pilot wants to mark an event that occurred during flight, the FDR event button should be pressed and held for 2 seconds.",
    "category": "general"
  },
  {
    "id": "s92",
    "question": "What is the length of the CRJ-700?",
    "choices": [
      "95'1\"",
      "100'4\"",
      "106'8\"",
      "112'6\""
    ],
    "correctAnswer": 2,
    "explanation": "106'8\".",
    "category": "general"
  },
  {
    "id": "s93",
    "question": "What is the wingspan of the CRJ-700?",
    "choices": [
      "68'5\"",
      "72'11\"",
      "76'3\"",
      "81'7\""
    ],
    "correctAnswer": 2,
    "explanation": "76'3\".",
    "category": "general"
  },
  {
    "id": "s94",
    "question": "What is the height of the CRJ-700 at the tail?",
    "choices": [
      "20'6\"",
      "22'4\"",
      "24'10\"",
      "27'2\""
    ],
    "correctAnswer": 2,
    "explanation": "24'10\".",
    "category": "general"
  },
  {
    "id": "s95",
    "question": "How much room is required for a 180° turn?",
    "choices": [
      "55 feet",
      "65 feet",
      "75 feet",
      "85 feet"
    ],
    "correctAnswer": 2,
    "explanation": "75 feet.",
    "category": "general"
  },
  {
    "id": "s96",
    "question": "The EICAS consists of how many displays?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "The EICAS consists of two displays: ED1 and ED2. Two data concentrator units (DCUs) process data from aircraft sensors for display on the EICAS.",
    "category": "eicas"
  },
  {
    "id": "s97",
    "question": "How many Data Concentrator Units (DCUs) process data for the EICAS?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Two DCUs process data from aircraft sensors for display on the EICAS.",
    "category": "eicas"
  },
  {
    "id": "s98",
    "question": "How many dedicated fans provide cooling for the EICAS displays?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Two dedicated fans provide cooling for the EICAS. One fan provides cooling in the air, and the other on the ground. In case of fan failure, cockpit conditioned air can be used for display cooling.",
    "category": "eicas"
  },
  {
    "id": "s99",
    "question": "Which EICAS screen does the EICAS Control Panel (ECP) normally control?",
    "choices": [
      "ED1",
      "ED2",
      "Both ED1 and ED2 simultaneously",
      "Whichever is selected on the MFD reversion panel"
    ],
    "correctAnswer": 1,
    "explanation": "ED2, unless the EICAS knob is repositioned on the source selector panel.",
    "category": "eicas"
  },
  {
    "id": "s100",
    "question": "What do the EICAS display color codes red, amber, green, and white represent?",
    "choices": [
      "Emergency, Alert, Normal, Information",
      "Warning, Caution, Advisory, Status",
      "Critical, Warning, Normal, Advisory",
      "Danger, Abnormal, Safe, Informational"
    ],
    "correctAnswer": 1,
    "explanation": "Red = Warning, Amber = Caution, Green = Advisory, White = Status.",
    "category": "eicas"
  },
  {
    "id": "s101",
    "question": "What powers the two EICAS screens?",
    "choices": [
      "The AC essential bus",
      "The DC essential bus",
      "The battery bus",
      "The main AC bus"
    ],
    "correctAnswer": 2,
    "explanation": "The battery bus.",
    "category": "eicas"
  },
  {
    "id": "s102",
    "question": "The two EICAS cooling fans are powered by the battery bus.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. The EICAS cooling fans are not powered by the battery bus, which is why it is important to provide APU or external electrical power within five minutes of energizing the battery.",
    "category": "eicas"
  },
  {
    "id": "s103",
    "question": "Why is it important to provide APU or external electrical power within five minutes of energizing the battery?",
    "choices": [
      "To prevent battery depletion",
      "To prevent the EICAS screens from overheating without the cooling fans",
      "To ensure the FADEC has adequate power",
      "To prevent the flight data recorder from shutting down"
    ],
    "correctAnswer": 1,
    "explanation": "To prevent the EICAS screens from overheating without the cooling fans.",
    "category": "electrical"
  },
  {
    "id": "s104",
    "question": "How many chimes are there for a CAUTION message?",
    "choices": [
      "One chime",
      "Two chimes",
      "Three chimes",
      "A continuous tone"
    ],
    "correctAnswer": 0,
    "explanation": "One chime for a CAUTION message and three chimes for a WARNING message.",
    "category": "eicas"
  },
  {
    "id": "s105",
    "question": "How many chimes are there for a WARNING message?",
    "choices": [
      "One chime",
      "Two chimes",
      "Three chimes",
      "A continuous tone"
    ],
    "correctAnswer": 2,
    "explanation": "Three chimes for a WARNING message and one chime for a CAUTION message.",
    "category": "eicas"
  },
  {
    "id": "s106",
    "question": "Which of the following is NOT an aural warning generated by the DCUs?",
    "choices": [
      "The fire bell",
      "The warbler for a stall",
      "The horn for a configuration warning",
      "The siren for windshear and terrain"
    ],
    "correctAnswer": 2,
    "explanation": "DCU-generated aural warnings include: the fire bell for a fire, the warbler for a stall, the clacker for an overspeed, and the siren for windshear and terrain.",
    "category": "eicas"
  },
  {
    "id": "s107",
    "question": "Which aural warnings will the DCU audio warning inhibit switches NOT cancel?",
    "choices": [
      "Fire bell and overspeed clacker",
      "Stall warbler and fire bell",
      "Windshear, EGPWS, and TCAS",
      "Overspeed and stall warnings"
    ],
    "correctAnswer": 2,
    "explanation": "Windshear, EGPWS, and TCAS aural warnings cannot be cancelled by the DCU audio warning inhibit switches.",
    "category": "eicas"
  },
  {
    "id": "s108",
    "question": "Which four ECP buttons are mechanical and not dependent on the ECP microprocessor or power?",
    "choices": [
      "PRI, ECS, HYD, FUEL",
      "PRI, STAT, CAS, STEP",
      "STAT, CAS, MENU, SEL",
      "PRI, CAS, STEP, MENU"
    ],
    "correctAnswer": 1,
    "explanation": "PRI, STAT, CAS, and STEP.",
    "category": "eicas"
  },
  {
    "id": "s109",
    "question": "When will the oil pressure gauges be present on the primary display in addition to the digital readout?",
    "choices": [
      "At all times during engine operation",
      "With the engines shutdown, or with low oil pressure",
      "Only during engine start and shutdown",
      "When the oil temperature exceeds normal limits"
    ],
    "correctAnswer": 1,
    "explanation": "With the engines shutdown, or with low oil pressure.",
    "category": "eicas"
  },
  {
    "id": "s110",
    "question": "When will the N1 vibration gauges replace the oil gauges on the primary display?",
    "choices": [
      "During engine start only",
      "When vibration exceeds limits",
      "With the engines running and normal oil pressure",
      "When selected by the pilot on the ECP"
    ],
    "correctAnswer": 2,
    "explanation": "With the engines running and normal oil pressure.",
    "category": "eicas"
  },
  {
    "id": "s111",
    "question": "How is N2 vibration monitored?",
    "choices": [
      "A dedicated N2 vibration gauge is always displayed",
      "The system monitors N2 vibration independently; VIB is displayed inside the N2 gauge if it exceeds limits",
      "N2 vibration is only displayed on the status page",
      "N2 vibration shares the same gauge as N1 vibration"
    ],
    "correctAnswer": 1,
    "explanation": "The system monitors N2 vibration independently without display. If the N2 vibration exceeds a predetermined amount, VIB will be displayed inside the N2 gauge.",
    "category": "powerplant"
  },
  {
    "id": "s112",
    "question": "When will the flap gauge and wheel brake temperature indicators disappear from the EICAS display?",
    "choices": [
      "After engine shutdown",
      "When the aircraft reaches cruise altitude",
      "With wheel brake temps in normal range, and gear, slats, and flaps retracted",
      "After the takeoff configuration check is complete"
    ],
    "correctAnswer": 2,
    "explanation": "With the wheel brake temperatures in the normal range, and the gear, slats and flaps retracted.",
    "category": "eicas"
  },
  {
    "id": "s113",
    "question": "How are caution messages boxed on the EICAS?",
    "choices": [
      "By pressing the STAT button",
      "By pressing the CAS button with both engines running",
      "By pressing the MENU button",
      "By pressing the PRI button twice"
    ],
    "correctAnswer": 1,
    "explanation": "By pressing the CAS button with both engines running. New messages will appear above the boxed MSG icon.",
    "category": "eicas"
  },
  {
    "id": "s114",
    "question": "During takeoff, at what speed do most caution messages become inhibited?",
    "choices": [
      "Above 60 KIAS",
      "Above 80 KIAS",
      "Above 100 KIAS",
      "Above V1"
    ],
    "correctAnswer": 2,
    "explanation": "With power greater than 79% N1 to 100 KIAS some messages will be inhibited; when the speed is greater than 100 KIAS up to 400 feet on the radar altimeter most messages will be inhibited.",
    "category": "eicas"
  },
  {
    "id": "s115",
    "question": "When are certain caution messages inhibited on landing?",
    "choices": [
      "Below 1,000 AGL to touchdown",
      "400 AGL to weight on wheels plus 30 seconds",
      "200 AGL to weight on wheels",
      "Below 500 AGL until engines are at idle"
    ],
    "correctAnswer": 1,
    "explanation": "400 AGL to weight on wheels plus 30 seconds, or when climbing above 400 feet.",
    "category": "eicas"
  },
  {
    "id": "s116",
    "question": "What happens if ED1 fails?",
    "choices": [
      "The EICAS system shuts down completely",
      "ED2 goes blank and the ISI takes over",
      "The primary page will automatically revert to ED2",
      "An alternate display appears on the captain's MFD"
    ],
    "correctAnswer": 2,
    "explanation": "The primary page will automatically revert to ED2.",
    "category": "eicas"
  },
  {
    "id": "s117",
    "question": "Which of the following is NOT a condition for the TAKEOFF CONFIG OK advisory message?",
    "choices": [
      "Parking brake off",
      "Flaps between 8° and 20°",
      "Anti-ice system armed",
      "Autopilot off"
    ],
    "correctAnswer": 2,
    "explanation": "Conditions include: parking brake off, flight spoilers stowed, flaps between 8° and 20°, stabilizer trim inside green takeoff band, rudder trim inside takeoff range (< ±1°), aileron trim inside takeoff range (< ±1°), and autopilot off. Anti-ice armed is not a condition.",
    "category": "eicas"
  },
  {
    "id": "s118",
    "question": "Each engine produces how many pounds of thrust at normal rating?",
    "choices": [
      "10,500 lbs",
      "11,400 lbs",
      "12,670 lbs",
      "13,790 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "Two General Electric CF34-8C5B1 engines provide 12,670 pounds of thrust at normal rating, with an APR rating of 13,790 pounds.",
    "category": "powerplant"
  },
  {
    "id": "s119",
    "question": "What is the APR (Automatic Performance Reserve) thrust rating per engine?",
    "choices": [
      "12,670 lbs",
      "13,100 lbs",
      "13,790 lbs",
      "14,500 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "APR rating is 13,790 pounds per engine. Normal rating is 12,670 pounds.",
    "category": "powerplant"
  },
  {
    "id": "s120",
    "question": "The FADEC controls which of the following functions?",
    "choices": [
      "Engine starting, fuel flow, and hydraulic pressure",
      "Engine starting, fuel flow, compressor airflow, and ignition",
      "Thrust reverser deployment, fuel flow, and oil pressure",
      "Engine starting, cabin pressurization, and bleed air"
    ],
    "correctAnswer": 1,
    "explanation": "Each engine is controlled by a dual channel Full Authority Digital Engine Controller (FADEC). The FADEC controls engine starting, fuel flow, compressor airflow and ignition automatically.",
    "category": "powerplant"
  },
  {
    "id": "s121",
    "question": "How is reverse thrust achieved on the CRJ-700?",
    "choices": [
      "Clamshell-type target reversers",
      "Two translating cowls extending",
      "Cascade-type thrust reversers with blocker doors",
      "Bucket-type thrust reversers"
    ],
    "correctAnswer": 1,
    "explanation": "Engine thrust is controlled by the thrust levers and managed by the FADEC. Two translating cowls can extend to achieve reverse thrust.",
    "category": "powerplant"
  },
  {
    "id": "s122",
    "question": "Variable geometry vanes are used in the compressor section of the engine to protect against what?",
    "choices": [
      "Hot starts",
      "Turbine overspeed",
      "Compressor stall",
      "Oil system contamination"
    ],
    "correctAnswer": 2,
    "explanation": "Variable geometry vanes (variable pitch stator vanes) are used in the compressor section of the engine to improve engine airflow and protect against compressor stall.",
    "category": "powerplant"
  },
  {
    "id": "s123",
    "question": "How many stages of the engine include variable geometry (VG) vanes?",
    "choices": [
      "The inlet guide vane and the first two stages",
      "The inlet guide vane and the first four stages",
      "The inlet guide vane and the first six stages",
      "All stages of the compressor section"
    ],
    "correctAnswer": 1,
    "explanation": "The inlet guide vane and the first four stages of the engine include VG vanes.",
    "category": "powerplant"
  },
  {
    "id": "s124",
    "question": "During an engine start, at what N2 RPM should the thrust lever be moved to idle?",
    "choices": [
      "10%",
      "15%",
      "20%",
      "30%"
    ],
    "correctAnswer": 2,
    "explanation": "Once the N2 rpm reaches 20%, and the ITT is below 120°C, move the thrust lever to idle.",
    "category": "powerplant"
  },
  {
    "id": "s125",
    "question": "During an engine start, at what N2 RPM does the start valve close and the ATS disengage?",
    "choices": [
      "35%",
      "45%",
      "50%",
      "60%"
    ],
    "correctAnswer": 2,
    "explanation": "When the N2 rpm reaches 50%, the start valve closes and the Air Turbine Starter (ATS) disengages.",
    "category": "powerplant"
  },
  {
    "id": "s126",
    "question": "When will the igniters fire automatically?",
    "choices": [
      "When the engine oil pressure is low",
      "When the FADEC senses a flameout, just prior to stick shaker, or when airflow is disrupted",
      "When the engine exceeds maximum N1",
      "When bleed air is selected for anti-ice"
    ],
    "correctAnswer": 1,
    "explanation": "The igniters will fire automatically when the FADEC senses a flameout, just prior to the stick shaker during a stall, or when airflow is disrupted through the engine.",
    "category": "fire"
  },
  {
    "id": "s127",
    "question": "When both engines' N1 readings are within what percentage can N1 synch be activated?",
    "choices": [
      "0.5%",
      "1.0%",
      "1.5%",
      "2.5%"
    ],
    "correctAnswer": 2,
    "explanation": "When both engine's N1 readings are within 1.5% of one another, N1 synch can be activated. The right engine's N1 will be synched to that of the left's with a tolerance of 2.5%.",
    "category": "powerplant"
  },
  {
    "id": "s128",
    "question": "When N1 synch is activated, which engine is synched to match the other?",
    "choices": [
      "The left engine matches the right",
      "The right engine matches the left",
      "Both engines match an average",
      "The lower-reading engine matches the higher"
    ],
    "correctAnswer": 1,
    "explanation": "The right engine's N1 will be synched to that of the left's with a tolerance of 2.5%.",
    "category": "powerplant"
  },
  {
    "id": "s129",
    "question": "The HIGH PWR SCHEDULE switchlight commands MCT with the thrust levers in the climb detent and APR with the thrust levers in the TOGA detent.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "The HIGH PWR SCHEDULE switchlight commands Max Continuous Thrust (MCT) for both engines with the thrust levers in the climb detent, or Automatic Power Reserve (APR) with the engines in the Take-off Go-Around (TOGA) detent.",
    "category": "autoflight"
  },
  {
    "id": "s130",
    "question": "What drives the accessory gear box?",
    "choices": [
      "The N1 fan",
      "The N2 compressor, driven by the high pressure turbine",
      "The low pressure turbine directly",
      "An electric motor powered by the generator"
    ],
    "correctAnswer": 1,
    "explanation": "The N2 compressor, which is driven by the high pressure turbine.",
    "category": "powerplant"
  },
  {
    "id": "s131",
    "question": "Which of the following is NOT found on the accessory gear box?",
    "choices": [
      "Hydraulic pump",
      "FADEC alternator",
      "Cabin pressurization valve",
      "Air turbine starter"
    ],
    "correctAnswer": 2,
    "explanation": "The accessory gear box includes: hydraulic pump, fuel pump (3 pumps), oil pump, FADEC alternator, integrated drive generator, and air turbine starter.",
    "category": "powerplant"
  },
  {
    "id": "s132",
    "question": "How many interconnected fuel pumps are within the accessory gear box?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "explanation": "Three: low pressure pump, high pressure pump, and motive flow pump.",
    "category": "fuel"
  },
  {
    "id": "s133",
    "question": "What drives the N1 fan?",
    "choices": [
      "The high pressure turbine",
      "The low pressure turbine",
      "The N2 compressor",
      "An electric motor"
    ],
    "correctAnswer": 1,
    "explanation": "The low pressure turbine.",
    "category": "powerplant"
  },
  {
    "id": "s134",
    "question": "How many stages is the low pressure turbine?",
    "choices": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": 2,
    "explanation": "Four.",
    "category": "air-cond"
  },
  {
    "id": "s135",
    "question": "How much of the engine's overall thrust is provided by the N1 fan?",
    "choices": [
      "60%",
      "70%",
      "80%",
      "90%"
    ],
    "correctAnswer": 2,
    "explanation": "80%.",
    "category": "powerplant"
  },
  {
    "id": "s136",
    "question": "What powers the Variable Geometry (VG) vanes?",
    "choices": [
      "Electric actuators",
      "Hydraulic pressure from the engine-driven pump",
      "Fuel pressure directed by the FADEC",
      "Bleed air pneumatic actuators"
    ],
    "correctAnswer": 2,
    "explanation": "Fuel pressure directed by the FADEC.",
    "category": "powerplant"
  },
  {
    "id": "s137",
    "question": "What is the purpose of the operability valve?",
    "choices": [
      "To regulate oil flow to the bearings",
      "To control fuel metering to the combustion chamber",
      "To remove internal air pressure from the compressor section, reducing the risk of compressor stall",
      "To regulate bleed air extraction for the pneumatic system"
    ],
    "correctAnswer": 2,
    "explanation": "The operability valve works in conjunction with the VG vanes to remove internal air pressure from the compressor section of the engine reducing the risk of a compressor stall.",
    "category": "general"
  },
  {
    "id": "s138",
    "question": "How is fuel heated prior to combustion?",
    "choices": [
      "By an electric fuel heater",
      "Through the use of a fuel/oil heat exchanger",
      "By engine bleed air passing over the fuel lines",
      "Fuel is not heated prior to combustion"
    ],
    "correctAnswer": 1,
    "explanation": "Through the use of a fuel/oil heat exchanger.",
    "category": "fuel"
  },
  {
    "id": "s139",
    "question": "How many channels does the FADEC have?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "There are two channels, A and B. The channels change when the N2 rpm falls below 7% on every other engine shutdown.",
    "category": "powerplant"
  },
  {
    "id": "s140",
    "question": "When do the FADEC channels change (alternate)?",
    "choices": [
      "On every engine start",
      "When the N2 rpm falls below 7% on every other engine shutdown",
      "Every 100 flight hours automatically",
      "When the pilot selects the alternate channel"
    ],
    "correctAnswer": 1,
    "explanation": "The channels change when the N2 rpm falls below 7% on every other engine shutdown.",
    "category": "powerplant"
  },
  {
    "id": "s141",
    "question": "Both FADEC channels will simultaneously command the fuel valves to close during what condition?",
    "choices": [
      "An engine fire",
      "An engine flameout",
      "An engine overspeed",
      "A hot start"
    ],
    "correctAnswer": 2,
    "explanation": "In an engine overspeed situation both FADEC channels will command the fuel valves to close to bring the speed into the normal range.",
    "category": "fuel"
  },
  {
    "id": "s142",
    "question": "If both FADEC channels fail or the FADEC loses power, what happens?",
    "choices": [
      "The engine reverts to manual fuel control",
      "The engine remains at the last commanded power setting",
      "The engine will fail",
      "The other engine's FADEC takes over"
    ],
    "correctAnswer": 2,
    "explanation": "The engine will fail.",
    "category": "powerplant"
  },
  {
    "id": "s143",
    "question": "The left engine's FADEC can control the right engine if the right FADEC fails.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. The left engine's FADEC cannot control the right engine.",
    "category": "powerplant"
  },
  {
    "id": "s144",
    "question": "The left and right engine FADECs cross-talk with each other, comparing engine speed and thrust reverser position information.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes. They compare engine speed and thrust reverser position information.",
    "category": "air-cond"
  },
  {
    "id": "s145",
    "question": "While cross-talking, the FADEC will assume the other engine has failed when there is a difference of at least what N1 percentage?",
    "choices": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correctAnswer": 2,
    "explanation": "When there is a difference of at least 15% N1.",
    "category": "powerplant"
  },
  {
    "id": "s146",
    "question": "When an engine fails, what will the operative engine's FADEC automatically command in the TOGA detent?",
    "choices": [
      "Maximum Continuous Thrust (MCT)",
      "Automatic Performance Reserve (APR)",
      "Normal takeoff thrust",
      "FLEX thrust"
    ],
    "correctAnswer": 1,
    "explanation": "APR in the TOGA detent, MCT in the climb detent, and a proportionate increase throughout the cruise range.",
    "category": "autoflight"
  },
  {
    "id": "s147",
    "question": "What will the FADEC command if a thrust reverser deploys in flight?",
    "choices": [
      "Maintain current power setting",
      "Increase thrust to compensate",
      "Reduce that engine's thrust to idle",
      "Shut down the affected engine"
    ],
    "correctAnswer": 2,
    "explanation": "It will reduce that engine's thrust to idle.",
    "category": "powerplant"
  },
  {
    "id": "s148",
    "question": "At what speed does the FADEC lock in the final N1 computation during takeoff?",
    "choices": [
      "40 KIAS",
      "65 KIAS",
      "80 KIAS",
      "V1"
    ],
    "correctAnswer": 1,
    "explanation": "65 KIAS.",
    "category": "powerplant"
  },
  {
    "id": "s149",
    "question": "What powers the FADEC when N2 is greater than 50%?",
    "choices": [
      "Aircraft electrical power",
      "The FADEC alternator",
      "The battery bus",
      "The integrated drive generator"
    ],
    "correctAnswer": 1,
    "explanation": "Aircraft electrical power with an N2 of less than 50%, and the FADEC alternator with an N2 of greater than 50%.",
    "category": "powerplant"
  },
  {
    "id": "s150",
    "question": "If you wait for the FADEC to shut the engine down during a hot start, the ITT limit is guaranteed not to be exceeded.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. Waiting for the FADEC does not guarantee that the ITT limit will not be exceeded during a hot start.",
    "category": "powerplant"
  },
  {
    "id": "s151",
    "question": "The engine will automatically shut down for a hot start on the ground.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, the engine will automatically shut down for a hot start on the ground.",
    "category": "powerplant"
  },
  {
    "id": "s152",
    "question": "There is ITT protection and subsequent auto-shutdown in flight.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. There is no ITT protection and subsequent auto-shutdown in flight.",
    "category": "powerplant"
  },
  {
    "id": "s153",
    "question": "What is the time limit for single engine APR thrust?",
    "choices": [
      "5 minutes",
      "10 minutes",
      "15 minutes",
      "No time limit"
    ],
    "correctAnswer": 1,
    "explanation": "10 minutes.",
    "category": "powerplant"
  },
  {
    "id": "s154",
    "question": "What is the time limit for normal or FLEX thrust?",
    "choices": [
      "2 minutes",
      "5 minutes",
      "10 minutes",
      "15 minutes"
    ],
    "correctAnswer": 1,
    "explanation": "5 minutes.",
    "category": "powerplant"
  },
  {
    "id": "s155",
    "question": "The L or R OIL LEVEL LO status message will appear below what oil percentage with the engine running?",
    "choices": [
      "40%",
      "50%",
      "57%",
      "80%"
    ],
    "correctAnswer": 2,
    "explanation": "Below 57% with the engine running and below 80% with the engine stopped.",
    "category": "powerplant"
  },
  {
    "id": "s156",
    "question": "What is FLEX thrust?",
    "choices": [
      "Maximum thrust available from both engines",
      "A reduced power setting for takeoff calculated using an assumed temperature",
      "Emergency thrust used during engine failure",
      "The thrust setting used during approach"
    ],
    "correctAnswer": 1,
    "explanation": "FLEX thrust is a reduced power setting for takeoff calculated using an assumed temperature.",
    "category": "powerplant"
  },
  {
    "id": "s157",
    "question": "What color is the FLEX thrust rating displayed in on the primary display?",
    "choices": [
      "Green",
      "Amber",
      "Magenta",
      "Cyan"
    ],
    "correctAnswer": 2,
    "explanation": "Magenta.",
    "category": "powerplant"
  },
  {
    "id": "s158",
    "question": "FLEX thrust is permitted when wing and/or cowl anti-ice bleeds are in use.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "FLEX thrust is NOT permitted when wing and/or cowl anti-ice bleeds are in use, when the runway is contaminated, when windshear or downdraft warnings exist, or when the antiskid system is inoperative.",
    "category": "ice-rain"
  },
  {
    "id": "s159",
    "question": "From what stages of the engine is bleed air extracted?",
    "choices": [
      "4th and 8th stage",
      "5th and 9th stage",
      "6th and 10th stage",
      "7th and 12th stage"
    ],
    "correctAnswer": 2,
    "explanation": "6th and 10th stage.",
    "category": "air-cond"
  },
  {
    "id": "s160",
    "question": "Both engine bleed air stages can be used simultaneously.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No, both stages cannot be used at once.",
    "category": "air-cond"
  },
  {
    "id": "s161",
    "question": "Igniter A is powered by which bus?",
    "choices": [
      "The battery bus",
      "The AC essential bus",
      "The DC main bus",
      "The AC main bus"
    ],
    "correctAnswer": 1,
    "explanation": "Igniter A is powered by the AC essential bus, and igniter B is powered by the aircraft's battery and an inverter.",
    "category": "powerplant"
  },
  {
    "id": "s162",
    "question": "Which of the following is NOT a condition requiring the use of continuous ignition?",
    "choices": [
      "Flight in the vicinity of thunderstorms",
      "Flight through moderate or severe turbulence",
      "Flight at altitudes above FL350",
      "Operations on a contaminated runway"
    ],
    "correctAnswer": 2,
    "explanation": "Continuous ignition is required for: flight in the vicinity of thunderstorms, flight through moderate or severe turbulence, flight through moderate or severe intensity rainfall, and operations on a contaminated runway.",
    "category": "powerplant"
  },
  {
    "id": "s163",
    "question": "How are the thrust reversers actuated?",
    "choices": [
      "Electrically",
      "Pneumatically",
      "Hydraulically",
      "Mechanically by cable"
    ],
    "correctAnswer": 2,
    "explanation": "Hydraulically.",
    "category": "powerplant"
  },
  {
    "id": "s164",
    "question": "How are the thrust reversers locked?",
    "choices": [
      "Hydraulically only",
      "Mechanically only",
      "Electrically and mechanically",
      "Hydraulically and mechanically"
    ],
    "correctAnswer": 3,
    "explanation": "Hydraulically, and mechanically.",
    "category": "powerplant"
  },
  {
    "id": "s165",
    "question": "What is the maximum altitude for engine re-light?",
    "choices": [
      "FL 180",
      "FL 210",
      "FL 250",
      "FL 310"
    ],
    "correctAnswer": 1,
    "explanation": "FL 210 (21,000 feet).",
    "category": "powerplant"
  },
  {
    "id": "s166",
    "question": "Which of the following is NOT one of the five engine idles?",
    "choices": [
      "Flight idle",
      "Approach idle",
      "Taxi idle",
      "Reverse idle"
    ],
    "correctAnswer": 2,
    "explanation": "The five different engine idles are: flight idle, approach idle, landing idle, reverse idle, and ground idle. There is no 'taxi idle.'",
    "category": "powerplant"
  },
  {
    "id": "s167",
    "question": "When is APR armed on takeoff?",
    "choices": [
      "When within 5% of target thrust",
      "When within 8% of target thrust",
      "When within 10% of target thrust",
      "When the thrust levers are in the TOGA detent"
    ],
    "correctAnswer": 1,
    "explanation": "When within 8% of target thrust.",
    "category": "powerplant"
  },
  {
    "id": "s168",
    "question": "When is the go-around mode armed on approach?",
    "choices": [
      "When below 1,000 feet AGL",
      "With the gear extended or the flaps greater than 20",
      "When the approach mode is selected on the FMS",
      "When the speed is below Vref + 10"
    ],
    "correctAnswer": 1,
    "explanation": "With the gear extended or the flaps greater than 20.",
    "category": "autoflight"
  },
  {
    "id": "s169",
    "question": "What does the blue circle on the N1 gauge indicate during cruise flight?",
    "choices": [
      "The minimum N1 for the current altitude",
      "The current FLEX thrust setting",
      "The maximum thrust setting for cruise (less than MCT)",
      "The engine N1 sync target"
    ],
    "correctAnswer": 2,
    "explanation": "The maximum thrust setting for cruise (less than MCT).",
    "category": "powerplant"
  },
  {
    "id": "s170",
    "question": "The APU is a gas turbine equipped with a gearbox that drives a generator producing what voltage and capacity?",
    "choices": [
      "28 VDC, 20 kVA",
      "115 VAC, 40 kVA",
      "115 VAC, 90 kVA",
      "208 VAC, 40 kVA"
    ],
    "correctAnswer": 1,
    "explanation": "The APU drives a 40-kVA AC generator producing 115 VAC.",
    "category": "electrical"
  },
  {
    "id": "s171",
    "question": "What is the primary purpose of the APU?",
    "choices": [
      "To provide bleed air for engine starting",
      "To provide electrical power",
      "To provide air conditioning on the ground",
      "To serve as a backup hydraulic power source"
    ],
    "correctAnswer": 1,
    "explanation": "The primary purpose of the APU is to provide electrical power.",
    "category": "apu"
  },
  {
    "id": "s172",
    "question": "What type of pump provides fuel to the APU?",
    "choices": [
      "An engine-driven fuel pump",
      "A gravity-feed system",
      "A dedicated 28 VDC electric fuel pump in the left collector tank",
      "An AC-powered boost pump in the center tank"
    ],
    "correctAnswer": 2,
    "explanation": "A dedicated 28 VDC electric fuel pump located in the left collector tank provides the APU with fuel as directed by the ECU.",
    "category": "fuel"
  },
  {
    "id": "s173",
    "question": "Where is air inlet to the APU?",
    "choices": [
      "Through a door on the lower left side of the rear fuselage",
      "Through a door on the upper right side of the rear fuselage",
      "Through an intake on top of the vertical stabilizer",
      "Through a scoop on the bottom of the tail cone"
    ],
    "correctAnswer": 1,
    "explanation": "Air is inlet to the APU through the use of a door on the upper right side of the rear fuselage.",
    "category": "apu"
  },
  {
    "id": "s174",
    "question": "The APU intake door is operated by the ECU and modulates with altitude.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "The door is operated automatically by the ECU, and modulates with altitude to ensure proper airflow is maintained without a flameout.",
    "category": "apu"
  },
  {
    "id": "s175",
    "question": "What controls and monitors APU operation?",
    "choices": [
      "The FADEC",
      "The DCU (Data Concentrator Unit)",
      "The ECU (Electronic Control Unit)",
      "The ACSC (Air Conditioning System Controller)"
    ],
    "correctAnswer": 2,
    "explanation": "An Electronic Control Unit (ECU) controls and monitors APU operation.",
    "category": "apu"
  },
  {
    "id": "s176",
    "question": "When the PWR FUEL switchlight is pressed, which of the following does NOT occur?",
    "choices": [
      "The APU fuel pump is energized",
      "The APU RPM and EGT gauges appear on ED2",
      "The APU generator comes online",
      "The APU fuel shutoff valve opens"
    ],
    "correctAnswer": 2,
    "explanation": "When PWR FUEL is pressed: the APU fuel pump is energized, the ECU powers up, an APU IN BITE status message appears on ED2, the APU RPM and EGT gauges appear on ED2, the door opens when on the ground, and the APU fuel shutoff valve opens. The generator does not come online until the APU is started and reaches AVAIL.",
    "category": "fuel"
  },
  {
    "id": "s177",
    "question": "What is indicated by the illumination of the APU PUMP FAIL light?",
    "choices": [
      "The APU fuel shutoff valve failed",
      "The APU fuel pump failed to energize",
      "The APU oil pump has failed",
      "The APU bleed air pump is inoperative"
    ],
    "correctAnswer": 1,
    "explanation": "The APU fuel pump failed to energize.",
    "category": "apu"
  },
  {
    "id": "s178",
    "question": "What is indicated by the illumination of the APU SOV FAIL light?",
    "choices": [
      "The APU fuel pump has failed",
      "The APU start valve did not open",
      "The APU fuel shutoff valve is not in the commanded position",
      "The APU surge control valve has malfunctioned"
    ],
    "correctAnswer": 2,
    "explanation": "This indicates that the APU fuel shutoff valve is not in the commanded position.",
    "category": "apu"
  },
  {
    "id": "s179",
    "question": "At what APU RPM does the START light extinguish during an APU start?",
    "choices": [
      "30-40%",
      "46-60%",
      "70-80%",
      "95-99%"
    ],
    "correctAnswer": 1,
    "explanation": "At 46-60% RPM the START light extinguishes.",
    "category": "fire"
  },
  {
    "id": "s180",
    "question": "At what APU RPM does the green AVAIL light illuminate?",
    "choices": [
      "60% plus 2 seconds",
      "80% plus 2 seconds",
      "95% plus 2 seconds",
      "99% plus 2 seconds"
    ],
    "correctAnswer": 3,
    "explanation": "At 99% RPM plus two seconds the green AVAIL light illuminates.",
    "category": "apu"
  },
  {
    "id": "s181",
    "question": "The APU will automatically shut down on the ground due to high oil temperature or low oil pressure.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, the APU will shut down on the ground due to high oil temp or low oil pressure.",
    "category": "air-cond"
  },
  {
    "id": "s182",
    "question": "The APU will automatically shut down in flight due to high oil temperature or low oil pressure.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No, the APU will not shut down in flight due to high oil temp or low oil pressure.",
    "category": "air-cond"
  },
  {
    "id": "s183",
    "question": "If the APU shuts down automatically due to fire on the ground, the fire extinguisher bottle will discharge automatically.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes. If the APU shuts down automatically due to fire on the ground the bottle will fire.",
    "category": "fire"
  },
  {
    "id": "s184",
    "question": "If the APU shuts down automatically due to fire in flight, the fire extinguisher bottle will discharge automatically.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. If the APU shuts down automatically due to fire in flight the bottle will not fire automatically.",
    "category": "fire"
  },
  {
    "id": "s185",
    "question": "At what altitude will the APU surge control valve open?",
    "choices": [
      "10,000 feet",
      "14,000 feet",
      "17,000 feet",
      "21,000 feet"
    ],
    "correctAnswer": 2,
    "explanation": "17,000 feet.",
    "category": "apu"
  },
  {
    "id": "s186",
    "question": "The APU will not start if the APU RPM is rotating above what speed on the ground?",
    "choices": [
      "2%",
      "5%",
      "8%",
      "12%"
    ],
    "correctAnswer": 1,
    "explanation": "5% on the ground, and 12% in flight.",
    "category": "apu"
  },
  {
    "id": "s187",
    "question": "The APU will not start in flight if the APU RPM is rotating above what speed?",
    "choices": [
      "5%",
      "8%",
      "10%",
      "12%"
    ],
    "correctAnswer": 3,
    "explanation": "12% in flight. 5% on the ground.",
    "category": "apu"
  },
  {
    "id": "s188",
    "question": "If the APU door is open or the door position is unknown with the APU shutdown, what is the speed restriction?",
    "choices": [
      "180 knots",
      "200 knots",
      "220 knots",
      "250 knots"
    ],
    "correctAnswer": 2,
    "explanation": "Flight is restricted to 220 knots.",
    "category": "apu"
  },
  {
    "id": "s189",
    "question": "What are the primary reasons for the 220 knot speed restriction with the APU door open?",
    "choices": [
      "To prevent structural damage to the door",
      "To prevent the APU from wind-milling without lubrication and to keep RPM below 12% for restart capability",
      "To prevent bleed air contamination of the cabin",
      "To avoid exceeding the APU fire extinguisher limitations"
    ],
    "correctAnswer": 1,
    "explanation": "To prevent the APU from wind-milling without the proper lubrication, and to ensure the APU rpm remains below 12% in the event it becomes necessary to start the APU in flight.",
    "category": "apu"
  },
  {
    "id": "s190",
    "question": "Normal speeds can be used with the APU door open if the APU is running.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes. Normal speeds can be used if the APU is running.",
    "category": "apu"
  },
  {
    "id": "s191",
    "question": "If the APU fuel pump fails, the APU will continue to operate but cannot be restarted.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, but it cannot be restarted without the pump.",
    "category": "fuel"
  },
  {
    "id": "s192",
    "question": "What is the purpose of the APU Load Control Valve (LCV)?",
    "choices": [
      "To regulate fuel flow to the APU combustor",
      "To vary pneumatic load to ensure electrical power and 45 psi in the manifold",
      "To control the APU intake door position",
      "To regulate oil pressure within the APU gearbox"
    ],
    "correctAnswer": 1,
    "explanation": "The LCV varies pneumatic load to ensure electrical power and 45 psi in the manifold.",
    "category": "apu"
  },
  {
    "id": "s193",
    "question": "APU bleed air can be used by the anti-ice system.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. APU bleed air cannot be used by the anti-ice system.",
    "category": "ice-rain"
  },
  {
    "id": "s194",
    "question": "What is the minimum battery voltage for APU start?",
    "choices": [
      "18 volts",
      "20 volts",
      "22 volts",
      "24 volts"
    ],
    "correctAnswer": 2,
    "explanation": "22 volts.",
    "category": "electrical"
  },
  {
    "id": "s195",
    "question": "What are the APU starter limitations (per the APU chapter)?",
    "choices": [
      "2 starts per hour with a 1 minute cooling period",
      "3 starts per hour with a 2 minute cooling period",
      "3 starts per hour with a 5 minute cooling period",
      "5 starts per hour with a 3 minute cooling period"
    ],
    "correctAnswer": 1,
    "explanation": "Maximum of 3 starts per hour with a 2 minute cooling period in between.",
    "category": "apu"
  },
  {
    "id": "s196",
    "question": "What is the primary power source for the APU ECU?",
    "choices": [
      "The APU battery",
      "The main battery",
      "The AC essential bus",
      "External power"
    ],
    "correctAnswer": 1,
    "explanation": "The main battery is the primary power source for the ECU. The APU battery provides power to the door and is secondary for the ECU.",
    "category": "apu"
  },
  {
    "id": "s197",
    "question": "What powers the APU intake door?",
    "choices": [
      "The main battery",
      "The APU battery",
      "The DC essential bus",
      "Hydraulic system 3"
    ],
    "correctAnswer": 1,
    "explanation": "The APU battery provides power to the door.",
    "category": "apu"
  },
  {
    "id": "s198",
    "question": "Can the ground crew shut down an unattended APU?",
    "choices": [
      "No, only the flight crew can shut down the APU",
      "Yes, through an APU shutoff switch on the forward nose or in the APU compartment",
      "Yes, but only by disconnecting external power",
      "No, the APU must time out automatically"
    ],
    "correctAnswer": 1,
    "explanation": "Yes, through the use of an APU shutoff switch on the forward nose, or in the APU compartment.",
    "category": "apu"
  },
  {
    "id": "s199",
    "question": "What is the Maximum Taxi and Ramp Weight?",
    "choices": [
      "72,500 lbs",
      "75,000 lbs",
      "75,250 lbs",
      "77,000 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "Maximum Taxi and Ramp Weight is 75,250 lbs.",
    "category": "general"
  },
  {
    "id": "s200",
    "question": "Which of the following is NOT an item that would cause the APU to automatically shut down?",
    "choices": [
      "Overspeed above 106%",
      "Loss of speed sensor signals",
      "Low fuel quantity in the left wing tank",
      "Uncommanded door closure"
    ],
    "correctAnswer": 2,
    "explanation": "APU auto-shutdown causes include: overspeed (>106%), speed fallback, loss of overspeed protection, APU fire/emergency, loss of speed sensor signals, loss of air inlet, no APU rotation, APU door failure, no APU lightoff, uncommanded door closure, slow start, ECU internal failure, no acceleration, and loss of DC power.",
    "category": "apu"
  },
  {
    "id": "s201",
    "question": "The EICAS STEP button on the ECP steps through the synoptic pages in successive order on which display?",
    "choices": [
      "ED1",
      "ED2",
      "The captain's MFD",
      "The first officer's MFD"
    ],
    "correctAnswer": 1,
    "explanation": "STEP steps through the synoptic pages in successive order on ED2.",
    "category": "eicas"
  },
  {
    "id": "s202",
    "question": "What does the CAS button do with both engines running?",
    "choices": [
      "Displays the Crew Alerting System page on ED1",
      "Boxes the amber caution messages",
      "Resets all caution and advisory messages",
      "Cycles through synoptic pages"
    ],
    "correctAnswer": 1,
    "explanation": "CAS boxes the amber messages of the Crew Alerting System with both engines running. With engines shutdown, it cycles pages.",
    "category": "eicas"
  },
  {
    "id": "s203",
    "question": "The DCU 1 & 2 switchlights on the Audio Warning Panel will disable DCU aural warnings except for which systems?",
    "choices": [
      "Fire bell and overspeed",
      "EGPWS and TCAS only",
      "EGPWS, TCAS, and Windshear",
      "All warnings are disabled"
    ],
    "correctAnswer": 2,
    "explanation": "DCU 1 & 2 switchlights disable DCU aural warnings except EGPWS, TCAS, and windshear (the text says 'except EGPWS & TCAS' on the panel description, and separately confirms windshear is also not cancelled).",
    "category": "eicas"
  },
  {
    "id": "s204",
    "question": "On the Source Selector Panel, what does the EICAS knob determine?",
    "choices": [
      "The brightness of the EICAS displays",
      "Which EICAS display (ED1 or ED2) will be controlled by the ECP",
      "Whether the EICAS is in normal or maintenance mode",
      "The audio volume of EICAS warnings"
    ],
    "correctAnswer": 1,
    "explanation": "The EICAS knob determines which EICAS display, ED1 or ED2, will be controlled by the EICAS Control Panel (ECP).",
    "category": "eicas"
  },
  {
    "id": "s205",
    "question": "What is the minimum speed with spoilers extended?",
    "choices": [
      "Vref",
      "Vref plus 5 KIAS",
      "Recommended approach speed plus 10 KIAS",
      "Recommended approach speed plus 20 KIAS"
    ],
    "correctAnswer": 2,
    "explanation": "Recommended approach speed plus 10 KIAS.",
    "category": "flight-controls"
  },
  {
    "id": "s206",
    "question": "When N2 synch is activated, the engines' N2 readings must be within what percentage of each other?",
    "choices": [
      "1.5%",
      "2.5%",
      "5.0%",
      "7.5%"
    ],
    "correctAnswer": 3,
    "explanation": "When both engine's N2 readings are within 7.5% of one another, N2 synch can be activated. The right engine's N2 will be synched to that of the left's with a tolerance of 2.5%.",
    "category": "powerplant"
  },
  {
    "id": "s207",
    "question": "The normal oil pressure range with oil temperature above 60°C is:",
    "choices": [
      "15-55 psi",
      "25-65 psi",
      "25-95 psi",
      "30-100 psi"
    ],
    "correctAnswer": 2,
    "explanation": "Normal oil pressure ranges: 25-65 psi (oil temperature below 60°C) and 25-95 psi (oil temperature above 60°C).",
    "category": "air-cond"
  },
  {
    "id": "s208",
    "question": "The normal oil pressure range with oil temperature below 60°C is:",
    "choices": [
      "15-45 psi",
      "25-65 psi",
      "25-95 psi",
      "30-85 psi"
    ],
    "correctAnswer": 1,
    "explanation": "Normal oil pressure ranges: 25-65 psi (oil temperature below 60°C) and 25-95 psi (oil temperature above 60°C).",
    "category": "air-cond"
  },
  {
    "id": "s209",
    "question": "What is the minimum temperature for starting a cold-soaked APU on the ground?",
    "choices": [
      "-20°C",
      "-30°C",
      "-40°C",
      "-50°C"
    ],
    "correctAnswer": 2,
    "explanation": "-40°C or -40°F.",
    "category": "apu"
  },
  {
    "id": "s210",
    "question": "What does the MENU button display on the EICAS?",
    "choices": [
      "The maintenance page and fault history",
      "Oil quantities and the fuel used reset line",
      "The crew alerting system configuration",
      "System test options for each synoptic page"
    ],
    "correctAnswer": 1,
    "explanation": "MENU displays oil quantities and the fuel used reset line.",
    "category": "eicas"
  },
  {
    "id": "s211",
    "question": "Hot bleed air from the engines or APU passes through how many independent air-conditioning packs?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Hot bleed air from either the main engines or APU passes through two independent air-conditioning packs and is forced into the cabin.",
    "category": "air-cond"
  },
  {
    "id": "s212",
    "question": "What maintains cabin pressure by releasing air at a controlled rate?",
    "choices": [
      "Two outflow valves on the forward bulkhead",
      "A single outflow valve on the aft pressure bulkhead",
      "Bleed air dump valves on each wing",
      "Dual safety valves on the keel beam"
    ],
    "correctAnswer": 1,
    "explanation": "The air is then released at a controlled rate through a single outflow valve on the aft pressure bulkhead maintaining cabin pressure.",
    "category": "air-cond"
  },
  {
    "id": "s213",
    "question": "Which controllers manage all aspects of the Environmental Control System automatically?",
    "choices": [
      "CPCs and FQGCs",
      "ACSCs and CPCs",
      "ACSCs and DCPCs",
      "AILCs and CPCs"
    ],
    "correctAnswer": 1,
    "explanation": "The ACSCs (Air Conditioning System Controllers) and CPCs (Cabin Pressure Controllers) manage all aspects of the ECS automatically.",
    "category": "general"
  },
  {
    "id": "s214",
    "question": "Where is the mixing manifold located that receives conditioned air from both packs?",
    "choices": [
      "Under the forward cargo floor",
      "Above the cabin ceiling panels",
      "Under the aft cargo floor",
      "Behind the aft pressure bulkhead"
    ],
    "correctAnswer": 2,
    "explanation": "Conditioned air from both packs is sent to the mixing manifold under the aft cargo floor then routed to the flight deck and passenger compartment.",
    "category": "air-cond"
  },
  {
    "id": "s215",
    "question": "In the event both packs fail, ram air can be used as the sole source of ventilation.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Ram air helps to cool the packs by passing through the pack heat exchangers then exiting overboard. In case both packs fail, it could be used as the sole source of ventilation.",
    "category": "air-cond"
  },
  {
    "id": "s216",
    "question": "Which hydraulic systems are cooled by ram air?",
    "choices": [
      "Systems 1 and 3A",
      "Systems 2 and 3B",
      "Systems 1 and 2",
      "Systems 3A and 3B"
    ],
    "correctAnswer": 2,
    "explanation": "Hydraulic systems 1 & 2 are also cooled by ram air.",
    "category": "hydraulics"
  },
  {
    "id": "s217",
    "question": "Which cargo bay receives conditioned air?",
    "choices": [
      "Only the forward cargo bay",
      "Only the aft cargo bay",
      "Both cargo bays",
      "Neither cargo bay"
    ],
    "correctAnswer": 1,
    "explanation": "Both cargo bays are pressurized; however, only the aft cargo receives conditioned air. Conditioned air is pulled from the mixing manifold by the recirculation fan and sent to the aft cargo compartment.",
    "category": "general"
  },
  {
    "id": "s218",
    "question": "What provides supplemental heat to the aft cargo compartment?",
    "choices": [
      "Bleed air from the APU",
      "A combustion heater",
      "An electric heater",
      "Ram air"
    ],
    "correctAnswer": 2,
    "explanation": "Supplemental heat is provided by an electric heater.",
    "category": "air-cond"
  },
  {
    "id": "s219",
    "question": "Avionics cooling uses a ground fan and a flight fan, with backup cooling available from the non-operating fan or cockpit conditioned air.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "There is a ground fan which provides cooling on the ground, and a flight fan which provides cooling in flight. Backup cooling is available from the non operating fan or cockpit conditioned air.",
    "category": "air-cond"
  },
  {
    "id": "s220",
    "question": "What does the BLEED VALVES rotary selector CLSD position do?",
    "choices": [
      "Enables the ISOL switch for manual operation",
      "Closes bleed air from the engine PRSOVs and APU LCV",
      "Allows the ACSCs to automatically control all bleed air",
      "Opens the isolation valve between left and right pneumatic systems"
    ],
    "correctAnswer": 1,
    "explanation": "CLSD - Closes bleed air from the engine PRSOVs, and APU LCV.",
    "category": "air-cond"
  },
  {
    "id": "s221",
    "question": "What does the BLEED VALVES rotary selector MANUAL position enable?",
    "choices": [
      "Automatic ACSC bleed air control",
      "Closure of the engine PRSOVs",
      "The ISOL switch and BLEED SOURCE rotary selector for manual operation",
      "Emergency depressurization"
    ],
    "correctAnswer": 2,
    "explanation": "MANUAL - Enables the ISOL switch and BLEED SOURCE rotary selector for manual operation.",
    "category": "air-cond"
  },
  {
    "id": "s222",
    "question": "What does the ISOL switch do?",
    "choices": [
      "Controls the pack flow control valves",
      "Divides or connects the left and right pneumatic systems",
      "Selects bleed air source between APU and engines",
      "Arms the emergency depressurization system"
    ],
    "correctAnswer": 1,
    "explanation": "The ISOL switch divides or connects the left and right pneumatic systems.",
    "category": "general"
  },
  {
    "id": "s223",
    "question": "When a PACK switchlight is pushed out, what happens?",
    "choices": [
      "The pack flow control valve opens and the OFF light extinguishes",
      "The pack enters manual mode",
      "The pack flow control valve closes and the white OFF light illuminates",
      "The pack FAULT light illuminates amber"
    ],
    "correctAnswer": 2,
    "explanation": "When pushed out, the pack flow control valve closes and the white OFF light illuminates.",
    "category": "air-cond"
  },
  {
    "id": "s224",
    "question": "What does the amber FAULT light on a PACK switchlight indicate?",
    "choices": [
      "Low bleed air pressure to the pack",
      "The pack has failed in both auto and manual mode due to over temperature or over pressure",
      "The pack flow control valve is not in the commanded position",
      "The recirculation fan has failed"
    ],
    "correctAnswer": 1,
    "explanation": "FAULT means the pack has failed in both auto and manual mode due to an over temperature or over pressure condition.",
    "category": "air-cond"
  },
  {
    "id": "s225",
    "question": "When the RAM-AIR guarded switchlight is pushed in, a white OPEN light illuminates along with a status message on which display?",
    "choices": [
      "ED1",
      "ED2",
      "MFD",
      "PFD"
    ],
    "correctAnswer": 1,
    "explanation": "The ram-air valve will open and the white OPEN light illuminates along with a white status message on ED2.",
    "category": "general"
  },
  {
    "id": "s226",
    "question": "When the CKPT MAN or CABIN MAN mode switchlight is pushed in, control of the temperature control valve is given to:",
    "choices": [
      "The ACSCs for automatic adjustment",
      "The cabin pressure controllers",
      "The spring-loaded manual toggle switches",
      "The flight management computer"
    ],
    "correctAnswer": 2,
    "explanation": "Control of the temperature control valve is given to the spring-loaded manual toggle switches, and the switchlight illuminates white.",
    "category": "air-cond"
  },
  {
    "id": "s227",
    "question": "What does the CARGO switch AIR position do?",
    "choices": [
      "Shuts off ventilation to the aft cargo bay",
      "Opens the intake and exhaust valves providing conditioned air to the aft cargo bay",
      "Arms the supplemental electric heater for automatic operation",
      "Activates the recirculation fan at high speed"
    ],
    "correctAnswer": 1,
    "explanation": "AIR - The intake and exhaust valves open and conditioned air is provided to the aft cargo bay from the mixing manifold.",
    "category": "general"
  },
  {
    "id": "s228",
    "question": "What does the CARGO switch COND AIR position do?",
    "choices": [
      "Provides conditioned air from the mixing manifold",
      "Arms the supplemental electric heater for automatic operation",
      "Shuts off ventilation to the aft cargo bay",
      "Provides cooling from the recirculation fan only"
    ],
    "correctAnswer": 1,
    "explanation": "COND AIR - the supplemental electric heater is armed for automatic operation.",
    "category": "general"
  },
  {
    "id": "s229",
    "question": "On the AVIONICS FAN switch, what does the FLT ALTN position do?",
    "choices": [
      "Activates the flight fan if the normal ground fan fails",
      "Activates the ground fan in flight if the normal flight fan fails",
      "Allows conditioned cockpit air to provide backup cooling",
      "Automatically cycles between ground and flight fans"
    ],
    "correctAnswer": 1,
    "explanation": "FLT ALTN - Activates the ground fan in flight if the normal flight fan fails.",
    "category": "general"
  },
  {
    "id": "s230",
    "question": "What does the DISPLAY FAN switch STBY position do?",
    "choices": [
      "Activates the ground fan in flight",
      "Activates the flight fan on the ground",
      "Allows conditioned cockpit air to provide backup cooling",
      "Automatically cycles between ground and flight fans"
    ],
    "correctAnswer": 2,
    "explanation": "STBY - Allows conditioned cockpit air to provide backup cooling.",
    "category": "general"
  },
  {
    "id": "s231",
    "question": "What does the LDG ELEV selector do?",
    "choices": [
      "Sets the cabin altitude for cruise",
      "Selects the elevation of the destination airport for CPC computations",
      "Controls the outflow valve position",
      "Adjusts the rate of cabin pressure change"
    ],
    "correctAnswer": 1,
    "explanation": "The LDG ELEV Selector selects the elevation of the destination airport for CPC computations.",
    "category": "general"
  },
  {
    "id": "s232",
    "question": "What does the MAN ALT switch UP position do?",
    "choices": [
      "Closes the outflow valve to lower cabin altitude",
      "Opens the outflow valve to raise cabin altitude",
      "Holds current cabin altitude",
      "Arms the emergency depressurization system"
    ],
    "correctAnswer": 1,
    "explanation": "UP - Opens the outflow valve to raise cabin altitude.",
    "category": "air-cond"
  },
  {
    "id": "s233",
    "question": "When the PRESS CONTROL switchlight is pushed once, what happens?",
    "choices": [
      "The standby cabin pressure controller is activated",
      "Both cabin pressure controllers are disabled",
      "Manual mode is selected and the MAN light illuminates",
      "The outflow valve fully opens"
    ],
    "correctAnswer": 2,
    "explanation": "Selects manual mode and the MAN light illuminates. The CPAM will provide cabin pressure data on ED1.",
    "category": "general"
  },
  {
    "id": "s234",
    "question": "When the PRESS CONTROL switchlight is pushed a second time, what happens?",
    "choices": [
      "Manual mode is disengaged and auto mode resumes",
      "The standby cabin pressure controller is activated",
      "The outflow valve fully opens",
      "Both CPCs are reset"
    ],
    "correctAnswer": 1,
    "explanation": "The standby cabin pressure controller is activated.",
    "category": "general"
  },
  {
    "id": "s235",
    "question": "When the EMER DEPRESS switchlight is pushed, the outflow valve will fully open until the cabin reaches what altitude?",
    "choices": [
      "10,000 feet ±500",
      "12,500 feet ±500",
      "14,500 feet ±500",
      "8,500 feet ±500"
    ],
    "correctAnswer": 2,
    "explanation": "The outflow valve will fully open until the cabin reaches 14,500 feet plus or minus 500, and the EMER DEPRESS caution message will illuminate.",
    "category": "air-cond"
  },
  {
    "id": "s236",
    "question": "Which engine normally provides bleed air to which pack?",
    "choices": [
      "Left engine to right pack, right engine to left pack",
      "Both engines to both packs equally",
      "Left engine to left pack, right engine to right pack",
      "Either engine to either pack based on demand"
    ],
    "correctAnswer": 2,
    "explanation": "The left engine to the left pack, and the right engine to the right pack.",
    "category": "air-cond"
  },
  {
    "id": "s237",
    "question": "What keeps the bleed air from both engines separate?",
    "choices": [
      "The PRSOVs",
      "The pack flow control valves",
      "The isolation valve",
      "The cross-bleed manifold"
    ],
    "correctAnswer": 2,
    "explanation": "The isolation valve.",
    "category": "air-cond"
  },
  {
    "id": "s238",
    "question": "The left engine can provide bleed air to the right pack by selecting the ISOL switch to OPEN, the BLEED SOURCE rotary selector to L ENG, and placing the BLEED VALVES selector in MANUAL.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes. By selecting the ISOL switch to OPEN, the BLEED SOURCE rotary selector to L ENG, and then placing the BLEED VALVES rotary selector in MANUAL.",
    "category": "air-cond"
  },
  {
    "id": "s239",
    "question": "How is the ISOL switch normally positioned?",
    "choices": [
      "OPEN",
      "AUTO",
      "CLSD",
      "MANUAL"
    ],
    "correctAnswer": 2,
    "explanation": "CLSD.",
    "category": "general"
  },
  {
    "id": "s240",
    "question": "How many automatic Cabin Pressure Controllers (CPCs) are installed?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Two. One is active and the other is in standby ready to assume control if the active controller fails.",
    "category": "air-cond"
  },
  {
    "id": "s241",
    "question": "At what cabin altitude does the CPAM command passenger oxygen masks to deploy?",
    "choices": [
      "10,000 feet",
      "12,000 feet",
      "14,000 feet",
      "8,500 feet"
    ],
    "correctAnswer": 2,
    "explanation": "It commands the passenger oxygen masks to deploy and the seatbelt no smoking signs to illuminate if the cabin altitude exceeds 14,000 feet.",
    "category": "oxygen"
  },
  {
    "id": "s242",
    "question": "How many outflow valves does the CRJ-700 have?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 0,
    "explanation": "One.",
    "category": "air-cond"
  },
  {
    "id": "s243",
    "question": "The outflow valve is powered by:",
    "choices": [
      "Pneumatic actuators from bleed air",
      "A single hydraulic motor",
      "Three separate electric motors",
      "Two pneumatic and one electric motor"
    ],
    "correctAnswer": 2,
    "explanation": "Electrically (not pneumatically) by three separate electric motors.",
    "category": "air-cond"
  },
  {
    "id": "s244",
    "question": "Which outflow valve motor is manually controlled by the pilot?",
    "choices": [
      "Motor 1",
      "Motor 2",
      "Motor 3",
      "All three motors"
    ],
    "correctAnswer": 2,
    "explanation": "Motor 1 - CPC 1, Motor 2 - CPC 2, Motor 3 - Manually controlled by the pilot with the MAN RATE & MAN ALT knobs.",
    "category": "air-cond"
  },
  {
    "id": "s245",
    "question": "How many operational phases do the CPCs have during automatic mode?",
    "choices": [
      "Five",
      "Six",
      "Seven",
      "Eight"
    ],
    "correctAnswer": 2,
    "explanation": "Seven.",
    "category": "air-cond"
  },
  {
    "id": "s246",
    "question": "Which of the following is NOT one of the CPC's operational phases?",
    "choices": [
      "Flight abort phase",
      "Climb/cruise phase",
      "Emergency descent phase",
      "Touch-and-go phase"
    ],
    "correctAnswer": 2,
    "explanation": "The seven phases are: Ground phase, takeoff phase, flight abort phase, climb/cruise phase, descent phase, landing phase, and touch-and-go phase.",
    "category": "air-cond"
  },
  {
    "id": "s247",
    "question": "During the flight abort phase, the CPC assumes the departure field elevation as the landing field elevation until the airplane climbs through what altitude or what time elapses?",
    "choices": [
      "4,000 feet or 5 minutes",
      "6,000 feet or 10 minutes",
      "8,000 feet or 15 minutes",
      "10,000 feet or 20 minutes"
    ],
    "correctAnswer": 1,
    "explanation": "It will assume the departure field elevation will be the landing field elevation until the airplane climbs through 6,000 feet or ten minutes passes.",
    "category": "comms"
  },
  {
    "id": "s248",
    "question": "Use of the EMER DEPRESS button is prohibited above what altitude?",
    "choices": [
      "10,000 feet",
      "15,000 feet",
      "20,000 feet",
      "25,000 feet"
    ],
    "correctAnswer": 1,
    "explanation": "In an emergency the crew can push it to depressurize the airplane. Its use is prohibited above 15,000 feet.",
    "category": "air-cond"
  },
  {
    "id": "s249",
    "question": "The cabin altitude aural warning sounds at a differential pressure of:",
    "choices": [
      "7.8 psi",
      "8.0 psi",
      "8.7 psi",
      "9.2 psi"
    ],
    "correctAnswer": 2,
    "explanation": "At a differential pressure of 8.7.",
    "category": "air-cond"
  },
  {
    "id": "s250",
    "question": "While flying at 41,000 feet, will the cabin fully decompress if the EMER DEPRESS button is pushed?",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. The cabin will depressurize up to a cabin altitude of 14,500 feet plus or minus 500.",
    "category": "air-cond"
  },
  {
    "id": "s251",
    "question": "What is the function of the ground valve?",
    "choices": [
      "It provides emergency ventilation during dual pack failure",
      "It ensures the cabin is depressurized on the ground and increases air flow for avionics cooling",
      "It regulates bleed air pressure to the packs",
      "It controls the outflow valve during taxi"
    ],
    "correctAnswer": 1,
    "explanation": "It ensures the cabin is depressurized on the ground, and increases air flow for avionics cooling.",
    "category": "air-cond"
  },
  {
    "id": "s252",
    "question": "When does the ground valve close?",
    "choices": [
      "When the engines are started",
      "When the main cabin door is closed prior to departure",
      "When weight comes off wheels at takeoff",
      "When the APU is shut down"
    ],
    "correctAnswer": 1,
    "explanation": "The ground valve closes when the main cabin door is closed prior to departure, and opens after landing with weight on wheels.",
    "category": "air-cond"
  },
  {
    "id": "s253",
    "question": "What does the OVBD COOL FAIL status message indicate?",
    "choices": [
      "The outflow valve has failed",
      "The pack cooling has failed",
      "The ground valve failed to open after landing",
      "The ram air valve is stuck closed"
    ],
    "correctAnswer": 2,
    "explanation": "The ground valve failed to open after landing.",
    "category": "general"
  },
  {
    "id": "s254",
    "question": "What does the acronym PACK stand for?",
    "choices": [
      "Pressurized Air Cooling Kit",
      "Pneumatic Air-Conditioning Kit",
      "Primary Air Conditioning Kompressor",
      "Pressurized Atmospheric Conditioning Kit"
    ],
    "correctAnswer": 1,
    "explanation": "Pneumatic Air-Conditioning Kit.",
    "category": "air-cond"
  },
  {
    "id": "s255",
    "question": "Which pack normally provides cooling to the cockpit?",
    "choices": [
      "Right pack",
      "Left pack",
      "Both packs equally",
      "Whichever pack the ACSC selects"
    ],
    "correctAnswer": 1,
    "explanation": "Normally the left pack to the cockpit, and the right to the cabin.",
    "category": "air-cond"
  },
  {
    "id": "s256",
    "question": "The left pack can provide cooling to the cabin if the right pack fails because internal baffling in the mixing chamber allows either pack's air to reach both the cockpit and cabin.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Both packs provide air to the mixing manifold under the aft cargo. Internal baffling in the mixing chamber will allow either pack's air to both the cockpit and cabin.",
    "category": "air-cond"
  },
  {
    "id": "s257",
    "question": "With one pack inoperative, the aircraft is limited to what altitude?",
    "choices": [
      "25,000 feet",
      "29,000 feet",
      "31,000 feet",
      "35,000 feet"
    ],
    "correctAnswer": 2,
    "explanation": "Yes, but the flight is limited to 31,000 feet.",
    "category": "air-cond"
  },
  {
    "id": "s258",
    "question": "What is the maximum positive cabin differential pressure?",
    "choices": [
      "7.8 psi",
      "8.0 psi",
      "8.7 psi",
      "9.4 psi"
    ],
    "correctAnswer": 2,
    "explanation": "+8.7 psi, and -0.5 psi, 0.1 psi during taxi.",
    "category": "air-cond"
  },
  {
    "id": "s259",
    "question": "What is the maximum negative cabin differential pressure?",
    "choices": [
      "-0.1 psi",
      "-0.3 psi",
      "-0.5 psi",
      "-1.0 psi"
    ],
    "correctAnswer": 2,
    "explanation": "+8.7 psi, and -0.5 psi, 0.1 psi during taxi.",
    "category": "air-cond"
  },
  {
    "id": "s260",
    "question": "How many safety valves protect the airplane from overpressure or negative pressure?",
    "choices": [
      "One dual-purpose valve",
      "Two: one for overpressure and one for negative pressure",
      "Three: two for overpressure and one for negative",
      "Four: two for each condition"
    ],
    "correctAnswer": 1,
    "explanation": "Two safety valves, one for overpressure, and one for negative pressure.",
    "category": "air-cond"
  },
  {
    "id": "s261",
    "question": "Under normal operations, bleed air is extracted from which engine stage?",
    "choices": [
      "4th stage",
      "6th stage",
      "8th stage",
      "10th stage"
    ],
    "correctAnswer": 1,
    "explanation": "The 6th stage under normal operations and a 10th stage HPV (high pressure valve) for high demand situations (anti-ice on, or low power settings).",
    "category": "air-cond"
  },
  {
    "id": "s262",
    "question": "The 10th stage HPV is used for high demand situations such as:",
    "choices": [
      "High altitude cruise",
      "Anti-ice on or low power settings",
      "Takeoff and climb",
      "Emergency descent"
    ],
    "correctAnswer": 1,
    "explanation": "A 10th stage HPV (high pressure valve) for high demand situations (anti-ice on, or low power settings).",
    "category": "general"
  },
  {
    "id": "s263",
    "question": "Air can be taken from the 6th and 10th stage simultaneously.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. There is a one-way check valve.",
    "category": "general"
  },
  {
    "id": "s264",
    "question": "After takeoff, bleed air switches from the APU to the engines when the thrust levers are pulled out of the TOGA detent with the gear up and flaps at:",
    "choices": [
      "10° or less",
      "15° or less",
      "20° or less",
      "25° or less"
    ],
    "correctAnswer": 2,
    "explanation": "After takeoff when the thrust levers are pulled out of the TOGA detent with the gear up and flaps at 20° or less.",
    "category": "autoflight"
  },
  {
    "id": "s265",
    "question": "What is the APU's primary purpose — pneumatic or electric power?",
    "choices": [
      "Pneumatic power",
      "Electric power",
      "Both equally",
      "Depends on phase of flight"
    ],
    "correctAnswer": 1,
    "explanation": "The APU's primary purpose is to provide electric power.",
    "category": "apu"
  },
  {
    "id": "s266",
    "question": "How many Air Conditioning System Controllers (ACSCs) manage bleed air distribution?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Two air-conditioning system controllers (ACSC 1 & 2).",
    "category": "air-cond"
  },
  {
    "id": "s267",
    "question": "The external ground air connector is displayed on the ECS synoptic page.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. However, a digital air pressure readout will indicate external air is being provided.",
    "category": "eicas"
  },
  {
    "id": "s268",
    "question": "Where does ram air come from?",
    "choices": [
      "An inlet on the wing root",
      "A scoop at the base of the vertical stabilizer",
      "Ducts in the engine nacelles",
      "An inlet on the nose of the aircraft"
    ],
    "correctAnswer": 1,
    "explanation": "A scoop at the base of the vertical stabilizer.",
    "category": "air-cond"
  },
  {
    "id": "s269",
    "question": "What is the water extracted from the pack used for?",
    "choices": [
      "Potable water for the galley",
      "Sprayed across the pack heat exchangers in the ram air duct",
      "Drained overboard",
      "Used to cool the avionics bay"
    ],
    "correctAnswer": 1,
    "explanation": "It is sprayed across the pack heat exchangers in the ram air duct.",
    "category": "air-cond"
  },
  {
    "id": "s270",
    "question": "The CABIN PRESSURE aural warning sounds if cabin altitude exceeds what value?",
    "choices": [
      "8,500 feet",
      "10,000 feet",
      "12,000 feet",
      "14,000 feet"
    ],
    "correctAnswer": 1,
    "explanation": "If cabin altitude exceeds 10,000 feet or the pressure differential exceeds 8.7 psi.",
    "category": "air-cond"
  },
  {
    "id": "s271",
    "question": "How many recirculation fans are there?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "One switch, but two fans.",
    "category": "air-cond"
  },
  {
    "id": "s272",
    "question": "If both display fans fail, what should be selected on the DISPLAY FAN rotary selector?",
    "choices": [
      "NORM",
      "FLT ALTN",
      "GND ALTN",
      "STBY"
    ],
    "correctAnswer": 3,
    "explanation": "STBY should be selected on the DISPLAY FAN rotary selector, which allows conditioned cockpit air to cool them.",
    "category": "general"
  },
  {
    "id": "s273",
    "question": "What does the amber CABIN ALT caution message indicate?",
    "choices": [
      "Cabin altitude is above 10,000 feet",
      "Cabin altitude is between 8,500 and 10,000 feet",
      "Cabin altitude is above 14,000 feet",
      "Cabin altitude is below sea level"
    ],
    "correctAnswer": 1,
    "explanation": "Cabin altitude is between 8,500 — 10,000 feet.",
    "category": "general"
  },
  {
    "id": "s274",
    "question": "The PRSOVs modulate to maintain approximately what pressure in the bleed air manifolds?",
    "choices": [
      "30 PSI ±3",
      "38 PSI ±3",
      "45 PSI ±3",
      "55 PSI ±3"
    ],
    "correctAnswer": 2,
    "explanation": "The PRSOVs modulate as commanded by the Air Conditioning System Controllers (ACSC) to maintain approximately 45 PSI ±3 in the bleed air manifolds.",
    "category": "air-cond"
  },
  {
    "id": "s275",
    "question": "In an Air Cycle Machine, cold air is produced through what process?",
    "choices": [
      "Refrigerant evaporation and condensation",
      "Compression, cooling via heat exchangers, and rapid expansion",
      "Electric cooling elements",
      "Liquid nitrogen injection"
    ],
    "correctAnswer": 1,
    "explanation": "An air cycle machine cycles hot air into cold air through compression and expansion. Air is compressed causing its temperature to rise, then cooled via heat exchangers and allowed to rapidly expand, causing its temperature to drop dramatically.",
    "category": "air-cond"
  },
  {
    "id": "s276",
    "question": "The pack's Hot Air Shutoff Valve opens at higher altitudes to supplement the pre-cooled air provided to the pack's Flow Control Valve.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "The Hot Air Shutoff Valve opens at higher altitudes to supplement the pre-cooled air provided to the pack's Flow Control Valve.",
    "category": "air-cond"
  },
  {
    "id": "s277",
    "question": "What does the Load Control Valve (LCV) regulate?",
    "choices": [
      "Bleed air from the engines to the packs",
      "The flow of air from the APU",
      "Pack discharge temperature",
      "Cabin outflow valve position"
    ],
    "correctAnswer": 1,
    "explanation": "The LCV regulates the flow of air from the APU.",
    "category": "apu"
  },
  {
    "id": "s278",
    "question": "The wings and engine cowls are heated by what source for anti-ice protection?",
    "choices": [
      "Electrical heating elements",
      "Engine bleed air",
      "APU bleed air",
      "Hot hydraulic fluid"
    ],
    "correctAnswer": 1,
    "explanation": "The wings and engine cowls are heated by ENGINE bleed air.",
    "category": "ice-rain"
  },
  {
    "id": "s279",
    "question": "External probes and cockpit windshields are anti-iced by what method?",
    "choices": [
      "Engine bleed air",
      "Electrically",
      "Chemical de-icing fluid",
      "Hot oil from the engines"
    ],
    "correctAnswer": 1,
    "explanation": "External probes and the cockpit windshields are heated electrically.",
    "category": "ice-rain"
  },
  {
    "id": "s280",
    "question": "How many ice detectors are installed and where are they located?",
    "choices": [
      "One on the left side of the nose",
      "Two, one on each side of the nose",
      "Two on the vertical stabilizer",
      "One on each wing leading edge"
    ],
    "correctAnswer": 1,
    "explanation": "Two ice detectors, one on the left and one on the right side of the nose.",
    "category": "ice-rain"
  },
  {
    "id": "s281",
    "question": "The ice detectors detect ice by sensing a change in:",
    "choices": [
      "Electrical resistance of the sensor",
      "Temperature of the probe",
      "Vibration frequency of the sensor",
      "Optical reflection from the surface"
    ],
    "correctAnswer": 2,
    "explanation": "Two ice detectors vibrate at a steady frequency. Ice formation on the sensor causes the frequency of vibration to change, which in turn provides a cockpit indication of ice.",
    "category": "ice-rain"
  },
  {
    "id": "s282",
    "question": "Wing anti-ice is manually activated then automatically controlled by what controller?",
    "choices": [
      "The ACSC",
      "The CPC",
      "The Anti-Ice Leak Detection Controller (AILC)",
      "The DCPC"
    ],
    "correctAnswer": 2,
    "explanation": "Wing anti-ice is manually activated then automatically controlled by the dual channel Anti-Ice Leak Detection Controller (AILC).",
    "category": "ice-rain"
  },
  {
    "id": "s283",
    "question": "How are the anti-ice bleed air ducts designed to detect leaks?",
    "choices": [
      "Single-wall ducts with external temperature sensors",
      "Double-walled ducts where a leak in the inner wall allows air to escape to the outer duct for AILC detection",
      "Triple-walled ducts with pressurized nitrogen between layers",
      "Single-wall ducts with flow sensors at each end"
    ],
    "correctAnswer": 1,
    "explanation": "The ducts are double walled with bleed air passing through the inner portion of the duct. If there is a leak in the inner wall, bleed air will escape to the outer duct, and the AILC will detect the leak.",
    "category": "ice-rain"
  },
  {
    "id": "s284",
    "question": "The CRJ-700 has anti-ice protection on the horizontal and vertical stabilizers.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "There is NO tail heat on either the horizontal or vertical stabilizer. Anti-ice protection is not required for these surfaces.",
    "category": "ice-rain"
  },
  {
    "id": "s285",
    "question": "What does the WING ANTI-ICE switch do when activated?",
    "choices": [
      "Opens only the left wing anti-ice valve",
      "Opens both wing anti-ice valves",
      "Arms the AILC for automatic activation",
      "Heats the wing leading edges electrically"
    ],
    "correctAnswer": 1,
    "explanation": "This switch activates the wing anti-ice system by opening both wing anti-ice valves.",
    "category": "ice-rain"
  },
  {
    "id": "s286",
    "question": "The amber ICE switchlight and ICE caution message indicate icing conditions. Once the wing and cowl anti-ice systems are activated, the ICE caution message reverts to what?",
    "choices": [
      "The ICE message extinguishes completely",
      "A green ICE advisory message on ED2",
      "A white ICE status message on ED1",
      "An amber ICE PROT message on ED2"
    ],
    "correctAnswer": 1,
    "explanation": "Once activated, the ICE switchlight will extinguish and the ICE caution message will revert to a green ICE advisory message on ED2.",
    "category": "ice-rain"
  },
  {
    "id": "s287",
    "question": "During the DET ICE TEST, which advisory message displays on ED2 to indicate a successful test?",
    "choices": [
      "ICE TEST PASS",
      "ADS HEAT TEST OK",
      "PROBE HEAT OK",
      "ICE DET PASS"
    ],
    "correctAnswer": 1,
    "explanation": "The ADS HEAT TEST OK advisory message will display on ED2 to indicate a successful test.",
    "category": "eicas"
  },
  {
    "id": "s288",
    "question": "When the windshield heat switches are set to HI, which windshields receive increased heat?",
    "choices": [
      "All four windshields",
      "Only the front two windshields",
      "Only the side windows",
      "Only the captain's windshield"
    ],
    "correctAnswer": 1,
    "explanation": "HI - Provides high heat to the front two windshields, and is only used for de-icing the windows. Selecting HI will only raise the temperature of the front two windshields.",
    "category": "ice-rain"
  },
  {
    "id": "s289",
    "question": "Which position is the windshield heat switch normally left in?",
    "choices": [
      "OFF",
      "LOW",
      "HI",
      "AUTO"
    ],
    "correctAnswer": 1,
    "explanation": "LOW. When the aircraft is powered the switch will be left in LOW.",
    "category": "ice-rain"
  },
  {
    "id": "s290",
    "question": "With at least one engine running and the PROBES switch OFF on the ground, which probes are heated?",
    "choices": [
      "All probes at full power",
      "No probes are heated",
      "Pitot probes at half power",
      "AOA vanes and static ports at full power"
    ],
    "correctAnswer": 2,
    "explanation": "OFF with at least one engine running - Pitot probes are heated at half power.",
    "category": "ice-rain"
  },
  {
    "id": "s291",
    "question": "In flight, all probes are heated at full power regardless of switch position.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "All probes are heated at full power in flight regardless of switch position.",
    "category": "ice-rain"
  },
  {
    "id": "s292",
    "question": "TAT probes are only heated during which phase?",
    "choices": [
      "When engines are running on the ground",
      "In flight, regardless of switch position",
      "When the PROBES switch is ON",
      "During all phases of operation"
    ],
    "correctAnswer": 1,
    "explanation": "TATs are only heated in flight regardless of switch position.",
    "category": "ice-rain"
  },
  {
    "id": "s293",
    "question": "What does the WING A/I CROSS BLEED FROM LEFT position do?",
    "choices": [
      "The left wing anti-ice valve closes, allowing bleed air from the right side to heat both wings",
      "The wing cross bleed valve opens and the right wing valve closes, allowing left side bleed air to heat both wings",
      "Both wing anti-ice valves open using left engine bleed air",
      "The isolation valve opens connecting left and right pneumatic systems"
    ],
    "correctAnswer": 1,
    "explanation": "FROM LEFT - The wing cross bleed valve is open and the right wing anti-ice valve is closed allowing bleed air from the left side to provide anti-ice protection to both wings.",
    "category": "air-cond"
  },
  {
    "id": "s294",
    "question": "Are the left and right windshield wipers independently controlled?",
    "choices": [
      "Yes, each pilot controls their own wiper",
      "No, whoever moved the switch last controls the speed for both wipers",
      "Yes, but only when in INT mode",
      "No, they are controlled by the captain only"
    ],
    "correctAnswer": 1,
    "explanation": "One wiper panel controls both wipers regardless of the offside switch position. Whoever moved the switch last will have control of the speed for both wipers.",
    "category": "ice-rain"
  },
  {
    "id": "s295",
    "question": "How many temperature schedules are there for the slats?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Two. Low for slats retracted, and high for slats extended.",
    "category": "flight-controls"
  },
  {
    "id": "s296",
    "question": "Which engine bleed air stage provides hot anti-ice air?",
    "choices": [
      "4th stage",
      "6th stage",
      "8th stage",
      "10th stage"
    ],
    "correctAnswer": 3,
    "explanation": "The 10th stage.",
    "category": "ice-rain"
  },
  {
    "id": "s297",
    "question": "The APU can provide bleed air for anti-ice protection.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. The APU cannot provide anti-ice protection.",
    "category": "ice-rain"
  },
  {
    "id": "s298",
    "question": "The AILC monitors wing temperature and regulates the anti-ice valves to prevent the wings from overheating.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, the anti-ice leak controller (AILC) monitors wing temperature, and regulates the anti-ice valves to maintain the appropriate temperature.",
    "category": "ice-rain"
  },
  {
    "id": "s299",
    "question": "When is the ice detector test normally accomplished?",
    "choices": [
      "Before every flight",
      "On the first flight of the day",
      "Only when icing conditions are expected",
      "During the after-landing checklist"
    ],
    "correctAnswer": 1,
    "explanation": "On the first flight of the day.",
    "category": "ice-rain"
  },
  {
    "id": "s300",
    "question": "When should the WING A/I CROSS BLEED rotary selector be turned?",
    "choices": [
      "Anytime anti-ice is activated",
      "During a bleed leak condition or engine failure as directed by the QRH",
      "During all icing conditions",
      "When the APU is providing bleed air"
    ],
    "correctAnswer": 1,
    "explanation": "During a bleed leak condition or an engine failure as directed by the QRH.",
    "category": "air-cond"
  },
  {
    "id": "s301",
    "question": "Ground icing conditions are defined as OAT of what temperature or less with visible moisture?",
    "choices": [
      "5°C",
      "10°C",
      "15°C",
      "0°C"
    ],
    "correctAnswer": 1,
    "explanation": "Ground icing conditions - OAT 10° or less with visible moisture.",
    "category": "ice-rain"
  },
  {
    "id": "s302",
    "question": "Flight icing conditions range from what temperatures while flying through visible moisture?",
    "choices": [
      "5°C TAT through -20°C SAT",
      "10°C TAT through -40°C SAT",
      "0°C TAT through -30°C SAT",
      "15°C TAT through -50°C SAT"
    ],
    "correctAnswer": 1,
    "explanation": "Flight icing conditions - 10° TAT through -40° SAT while flying through visible moisture such as clouds, rain, snow, sleet or ice crystals.",
    "category": "ice-rain"
  },
  {
    "id": "s303",
    "question": "Visible moisture is defined as a visibility of what distance or less?",
    "choices": [
      "3 miles",
      "2 miles",
      "1 mile",
      "1/2 mile"
    ],
    "correctAnswer": 2,
    "explanation": "Visible moisture is a visibility of 1 mile or less (fog on the ground or clouds in flight), rain, snow, sleet and ice crystals.",
    "category": "ice-rain"
  },
  {
    "id": "s304",
    "question": "When should cowl anti-ice be turned on while on the ground?",
    "choices": [
      "Only during takeoff",
      "During ground icing conditions or while taxiing on a contaminated surface",
      "Only when the ICE message is displayed",
      "Anytime the OAT is below 10°C"
    ],
    "correctAnswer": 1,
    "explanation": "During Ground icing conditions or while taxiing on a contaminated surface such as snow, ice, standing water or slush.",
    "category": "ice-rain"
  },
  {
    "id": "s305",
    "question": "Wing anti-ice should be turned on for ground operations only for takeoff when the OAT is what temperature or less with visible moisture?",
    "choices": [
      "0°C",
      "5°C",
      "10°C",
      "-5°C"
    ],
    "correctAnswer": 1,
    "explanation": "Only for takeoff when the OAT is 5° or less with visible moisture.",
    "category": "ice-rain"
  },
  {
    "id": "s306",
    "question": "When Type II or IV de-icing fluid has been applied to the wings, when should wing anti-ice be activated?",
    "choices": [
      "Immediately after fluid application",
      "During taxi to the runway",
      "Just prior to thrust increase for takeoff",
      "After reaching 80 knots on the takeoff roll"
    ],
    "correctAnswer": 2,
    "explanation": "Only activate wing anti-icing just prior to thrust increase for takeoff.",
    "category": "ice-rain"
  },
  {
    "id": "s307",
    "question": "In flight, wing anti-ice should be turned on when ICE is annunciated or while flying in icing conditions with an airspeed less than:",
    "choices": [
      "200 KIAS",
      "210 KIAS",
      "230 KIAS",
      "250 KIAS"
    ],
    "correctAnswer": 2,
    "explanation": "When ICE is annunciated by the ice detection system, or while flying in icing conditions with an airspeed of less than 230 KIAS.",
    "category": "ice-rain"
  },
  {
    "id": "s308",
    "question": "The CRJ-700's two engine-driven generators are rated at what voltage, frequency, and power?",
    "choices": [
      "115-VAC, 400-Hz, 30-kVA",
      "115-VAC, 400-Hz, 40-kVA",
      "230-VAC, 60-Hz, 40-kVA",
      "28-VDC, 400-Hz, 40-kVA"
    ],
    "correctAnswer": 1,
    "explanation": "Two engine driven 115-VAC, 400-Hz, 3 phase 40-kVA Integrated Drive Generators provide AC Power.",
    "category": "electrical"
  },
  {
    "id": "s309",
    "question": "How many Transformer Rectifier Units (TRUs) convert AC to DC power?",
    "choices": [
      "Two",
      "Three",
      "Four",
      "Six"
    ],
    "correctAnswer": 2,
    "explanation": "Four Transformer Rectifier Units convert 115-VAC power to 28-VDC power for distribution to the airplane's DC system.",
    "category": "electrical"
  },
  {
    "id": "s310",
    "question": "What voltage do the TRUs convert AC power to for DC distribution?",
    "choices": [
      "12 VDC",
      "24 VDC",
      "28 VDC",
      "48 VDC"
    ],
    "correctAnswer": 2,
    "explanation": "Four Transformer Rectifier Units convert 115-VAC power to 28-VDC power.",
    "category": "electrical"
  },
  {
    "id": "s311",
    "question": "DC electrical switching logic is automatically accomplished by what unit?",
    "choices": [
      "The ACSC",
      "The CPC",
      "The DCPC (DC Power Center)",
      "The FQGC"
    ],
    "correctAnswer": 2,
    "explanation": "Electrical switching logic is accomplished automatically by the DC Power Center (DCPC).",
    "category": "electrical"
  },
  {
    "id": "s312",
    "question": "The APU battery is rated at what voltage and ampere-hours?",
    "choices": [
      "24-volt, 17-ampere hours",
      "24-volt, 43-ampere hours",
      "28-volt, 43-ampere hours",
      "28-volt, 17-ampere hours"
    ],
    "correctAnswer": 1,
    "explanation": "There is one 24-volt APU battery rated at 43-ampere hours.",
    "category": "electrical"
  },
  {
    "id": "s313",
    "question": "The main battery is rated at what voltage and ampere-hours?",
    "choices": [
      "24-volt, 43-ampere hours",
      "24-volt, 17-ampere hours",
      "28-volt, 17-ampere hours",
      "12-volt, 34-ampere hours"
    ],
    "correctAnswer": 1,
    "explanation": "One 24-volt main battery rated at 17-ampere hours.",
    "category": "electrical"
  },
  {
    "id": "s314",
    "question": "The batteries are capable of providing how many minutes of power during an electrical emergency?",
    "choices": [
      "15 minutes",
      "20 minutes",
      "30 minutes",
      "45 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "The batteries are capable of providing thirty minutes of power during an electrical emergency.",
    "category": "electrical"
  },
  {
    "id": "s315",
    "question": "During the first flight power-up sequence, which items are energized when the battery master is turned ON?",
    "choices": [
      "All cockpit displays and FMS",
      "ED1, ED2, the ISI, and the Backup Tuning Unit",
      "Only the PFD and engine instruments",
      "The APU and all navigation systems"
    ],
    "correctAnswer": 1,
    "explanation": "ED1, ED2, the Integrated Standby Instrument (ISI), and the Backup Tuning Unit will be energized.",
    "category": "electrical"
  },
  {
    "id": "s316",
    "question": "What does the DC SERVICE switch do?",
    "choices": [
      "Connects the DC Essential bus to DC bus 1",
      "Connects the DC Service bus to the APU Battery direct bus",
      "Powers the passenger service units",
      "Activates the battery chargers"
    ],
    "correctAnswer": 1,
    "explanation": "Connects the DC Service bus to the APU Battery direct bus.",
    "category": "electrical"
  },
  {
    "id": "s317",
    "question": "What does the BATTERY MASTER switch do?",
    "choices": [
      "Connects the battery direct buses to the battery bus",
      "Starts the APU battery charger",
      "Connects external power to the AC buses",
      "Arms the emergency bus"
    ],
    "correctAnswer": 0,
    "explanation": "Connects the battery direct buses to the battery bus.",
    "category": "electrical"
  },
  {
    "id": "s318",
    "question": "What does AVAIL mean on the AC External Power switchlight?",
    "choices": [
      "External power is connected but not yet verified",
      "External power is supplying power to the AC buses",
      "External power is connected and usable with correct phase, voltage and frequency",
      "External power has been selected but is offline"
    ],
    "correctAnswer": 2,
    "explanation": "External power is connected and usable (correct phase, voltage and frequency).",
    "category": "electrical"
  },
  {
    "id": "s319",
    "question": "When the IDG DISC switchlight is pressed, the IDG is separated from:",
    "choices": [
      "The AC essential bus",
      "The engine compressor section",
      "The accessory gear box",
      "The TRU"
    ],
    "correctAnswer": 2,
    "explanation": "The respective IDG is separated from the accessory gear box. The white DISC light will illuminate.",
    "category": "electrical"
  },
  {
    "id": "s320",
    "question": "What does the amber FAULT light on the IDG indicate?",
    "choices": [
      "Generator output frequency is incorrect",
      "High oil temperature or low oil pressure in the IDG",
      "The IDG has been disconnected",
      "AC bus voltage is out of tolerance"
    ],
    "correctAnswer": 1,
    "explanation": "High oil temperature or Low oil pressure is detected in the IDG (HOT LOP).",
    "category": "electrical"
  },
  {
    "id": "s321",
    "question": "Once the IDG has been disconnected, can it be reconnected from the flight deck?",
    "choices": [
      "Yes, by pressing the IDG DISC switchlight again",
      "Yes, by cycling the GEN switch OFF then AUTO",
      "No, maintenance must re-engage it manually on the ground",
      "Yes, but only after landing"
    ],
    "correctAnswer": 2,
    "explanation": "No. Maintenance must re-engage it manually on the ground.",
    "category": "electrical"
  },
  {
    "id": "s322",
    "question": "The AC ESS XFER switchlight, when pressed, manually transfers the AC ESS bus from AC bus 1 to:",
    "choices": [
      "The ADG bus",
      "AC bus 2",
      "The APU generator",
      "External power"
    ],
    "correctAnswer": 1,
    "explanation": "It illuminates and manually transfers the AC ESS bus from AC bus 1 to AC bus 2.",
    "category": "electrical"
  },
  {
    "id": "s323",
    "question": "The AC ESS bus will automatically transfer from AC bus 1 to AC bus 2 if:",
    "choices": [
      "The APU generator comes online",
      "External power is connected",
      "A fault is detected on AC bus 1",
      "The cross-tie is opened"
    ],
    "correctAnswer": 2,
    "explanation": "Yes, if a fault is detected on AC bus 1 it will automatically transfer illuminating the switchlight.",
    "category": "electrical"
  },
  {
    "id": "s324",
    "question": "What does the amber FAIL light on the AC AUTO XFER switchlight indicate?",
    "choices": [
      "The cross-tie has been manually locked out",
      "The AC ESS bus has transferred",
      "An AC bus fault or over-current condition has occurred and the respective bus has been isolated",
      "The TRU has failed"
    ],
    "correctAnswer": 2,
    "explanation": "Either an AC bus fault, or an over-current condition has occurred and the respective bus has been isolated (AC bus 1 or 2).",
    "category": "general"
  },
  {
    "id": "s325",
    "question": "What conditions must be met before conducting the ADG UNIT test?",
    "choices": [
      "The APU must be running and external power connected",
      "Both engine generators must be online and both AC buses powered",
      "The aircraft must be on battery power only",
      "Only one engine generator needs to be online"
    ],
    "correctAnswer": 1,
    "explanation": "Both engine generators must be online and both AC buses powered.",
    "category": "electrical"
  },
  {
    "id": "s326",
    "question": "What does the PWR TXFR OVERRIDE switch do?",
    "choices": [
      "Transfers power from AC bus 1 to AC bus 2",
      "Removes ADG power from the AC essential bus and allows normal power from AC bus 1 or 2",
      "Disconnects external power",
      "Overrides the automatic bus tie logic"
    ],
    "correctAnswer": 1,
    "explanation": "Removes ADG power from the AC essential bus and allows normal power from AC bus 1 or 2 to the AC essential bus.",
    "category": "general"
  },
  {
    "id": "s327",
    "question": "How can external power be used by the ground crew when the cockpit door is locked?",
    "choices": [
      "Through the DC SERVICE switch on the external panel",
      "By pressing the AC PUSH switchlight on the external service panel",
      "It cannot be used without cockpit access",
      "Through the circuit breaker panel in the avionics bay"
    ],
    "correctAnswer": 1,
    "explanation": "Press the AC PUSH switchlight on the external service panel.",
    "category": "electrical"
  },
  {
    "id": "s328",
    "question": "The DC Service switch can be used for external aircraft lights while repositioning the aircraft without the battery master on.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "External aircraft lights while repositioning the aircraft without the battery master on.",
    "category": "electrical"
  },
  {
    "id": "s329",
    "question": "In an aircraft with no power switched on, which buses are still powered?",
    "choices": [
      "The AC essential bus and DC essential bus",
      "The APU and Main battery direct buses, and the emergency bus",
      "No buses are powered",
      "Only the DC emergency bus"
    ],
    "correctAnswer": 1,
    "explanation": "The APU and Main battery direct buses, and the emergency bus.",
    "category": "general"
  },
  {
    "id": "s330",
    "question": "What is the minimum battery voltage required prior to APU start?",
    "choices": [
      "18 volts",
      "20 volts",
      "22 volts",
      "24 volts"
    ],
    "correctAnswer": 2,
    "explanation": "22-volts minimum.",
    "category": "electrical"
  },
  {
    "id": "s331",
    "question": "What is the time limit on battery power without the APU or external power, and why?",
    "choices": [
      "10 minutes, to prevent battery depletion",
      "5 minutes, to prevent overheating the CRTs without cooling fans",
      "15 minutes, to preserve battery for APU start",
      "30 minutes, the total battery capacity"
    ],
    "correctAnswer": 1,
    "explanation": "Five minutes, to prevent over heating the CRTs without the cooling fans.",
    "category": "electrical"
  },
  {
    "id": "s332",
    "question": "How many AC buses does the CRJ-700 have?",
    "choices": [
      "Two",
      "Three",
      "Four",
      "Six"
    ],
    "correctAnswer": 2,
    "explanation": "Four.",
    "category": "electrical"
  },
  {
    "id": "s333",
    "question": "How many DC buses does the CRJ-700 have?",
    "choices": [
      "Five",
      "Seven",
      "Nine",
      "Twelve"
    ],
    "correctAnswer": 2,
    "explanation": "Nine.",
    "category": "electrical"
  },
  {
    "id": "s334",
    "question": "What is the AC bus switching priority mnemonic (GAGE) for AC buses 1 and 2?",
    "choices": [
      "Generator, APU, Ground power, External",
      "Generator, APU, offside Generator, External power",
      "Ground power, APU, Generator, Emergency",
      "Generator, Auxiliary, Generator, Emergency"
    ],
    "correctAnswer": 1,
    "explanation": "G - onside Generator, A - APU, G - offside Generator, E - External power.",
    "category": "electrical"
  },
  {
    "id": "s335",
    "question": "Each TRU is rated at what amperage and voltage?",
    "choices": [
      "100-ampere, 28 VDC",
      "120-ampere, 28 VDC",
      "150-ampere, 28 VDC",
      "120-ampere, 24 VDC"
    ],
    "correctAnswer": 1,
    "explanation": "Four rated at 120-ampere 28 VDC.",
    "category": "electrical"
  },
  {
    "id": "s336",
    "question": "How many DC bus ties are there?",
    "choices": [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    "correctAnswer": 2,
    "explanation": "Five: The Main Tie, Cross Tie, Utility Tie, Essential Tie & Essential TRU Tie.",
    "category": "electrical"
  },
  {
    "id": "s337",
    "question": "Which of the following is NOT one of the five DC bus ties?",
    "choices": [
      "Main Tie",
      "Cross Tie",
      "Battery Tie",
      "Essential TRU Tie"
    ],
    "correctAnswer": 2,
    "explanation": "The five DC bus ties are: Main Tie, Cross Tie, Utility Tie, Essential Tie & Essential TRU Tie.",
    "category": "electrical"
  },
  {
    "id": "s338",
    "question": "If the Cross Tie closes, which other ties will always close?",
    "choices": [
      "The Utility Tie and Essential TRU Tie",
      "The Main Tie and Essential Tie",
      "The Essential Tie and Essential TRU Tie",
      "All other ties"
    ],
    "correctAnswer": 1,
    "explanation": "The Main Tie & Essential Tie will always close if the Cross Tie closes.",
    "category": "general"
  },
  {
    "id": "s339",
    "question": "When is the DC utility bus shed?",
    "choices": [
      "When the ADG deploys",
      "When the main tie or cross tie closes",
      "When external power is connected",
      "When the APU is shut down"
    ],
    "correctAnswer": 1,
    "explanation": "When the main tie or cross tie closes.",
    "category": "general"
  },
  {
    "id": "s340",
    "question": "What items are on the DC utility bus?",
    "choices": [
      "Captain's flight instruments",
      "Engine fire extinguishers",
      "Passenger Service Units (primarily reading lights)",
      "Fuel boost pumps"
    ],
    "correctAnswer": 2,
    "explanation": "The Passenger Service Units (primarily reading lights).",
    "category": "general"
  },
  {
    "id": "s341",
    "question": "DC bus tie control is automatically accomplished through how many DC Power Centers?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "DC bus tie control is automatically accomplished through the two DC Power Centers (DCPCs).",
    "category": "electrical"
  },
  {
    "id": "s342",
    "question": "The ESS TRU 2 TIE will close with the loss of:",
    "choices": [
      "AC bus 1 and TRU 1",
      "AC bus 2 and ESS TRU 1",
      "Both AC buses",
      "The main battery"
    ],
    "correctAnswer": 1,
    "explanation": "With the loss of AC BUS 2 and ESS TRU 1.",
    "category": "electrical"
  },
  {
    "id": "s343",
    "question": "The DC ESS bus primarily provides power for:",
    "choices": [
      "The first officer's flight instruments",
      "The captain's flight instruments",
      "The passenger service units",
      "The engine fire detection system"
    ],
    "correctAnswer": 1,
    "explanation": "The captain's flight instruments.",
    "category": "electrical"
  },
  {
    "id": "s344",
    "question": "The ADG automatically deploys during what condition?",
    "choices": [
      "Loss of one AC bus",
      "Complete DC power failure",
      "Complete AC power failure",
      "Loss of both engines"
    ],
    "correctAnswer": 2,
    "explanation": "During a complete AC power failure.",
    "category": "electrical"
  },
  {
    "id": "s345",
    "question": "Which of the following buses is NOT powered by the ADG?",
    "choices": [
      "ADG bus",
      "AC essential bus",
      "AC bus 1",
      "DC battery bus"
    ],
    "correctAnswer": 2,
    "explanation": "The ADG bus, AC essential bus, DC Essential bus and the DC battery bus are powered by the ADG.",
    "category": "electrical"
  },
  {
    "id": "s346",
    "question": "The mnemonic HEFAS represents items powered by the ADG. What does the F stand for?",
    "choices": [
      "Fuel pumps",
      "Fire detection",
      "Flaps and slats at half speed",
      "Flight instruments"
    ],
    "correctAnswer": 2,
    "explanation": "H - Hydraulic pump 3B, E - Essential AC bus, F - Flaps and slats at half speed, A - ADG bus, S - Stab trim channel 2.",
    "category": "electrical"
  },
  {
    "id": "s347",
    "question": "How much power does the ADG produce?",
    "choices": [
      "115 volts, 10 kVA",
      "115 volts, 15 kVA",
      "115 volts, 20 kVA",
      "115 volts, 40 kVA"
    ],
    "correctAnswer": 1,
    "explanation": "115 volts, 15 kVA.",
    "category": "electrical"
  },
  {
    "id": "s348",
    "question": "What is the minimum airspeed for ADG operation?",
    "choices": [
      "120 KIAS",
      "135 KIAS",
      "150 KIAS",
      "160 KIAS"
    ],
    "correctAnswer": 1,
    "explanation": "135 KIAS.",
    "category": "electrical"
  },
  {
    "id": "s349",
    "question": "Why must the ADG handle be pulled after an auto deployment?",
    "choices": [
      "To reset the ADG controller for future use",
      "To disconnect the ADG from the accessory gearbox",
      "Because below 135 KIAS the ADG cannot generate sufficient power, and after landing internal logic will cause loss of DC ESS bus power if the handle is not pulled",
      "To allow the ADG to retract into the fuselage"
    ],
    "correctAnswer": 2,
    "explanation": "As the aircraft slows below 135 KIAS on approach, the ADG will no longer be able to generate sufficient power. After landing with weight on wheels internal logic will cause the loss of power to the DC ESS bus if the handle is not pulled.",
    "category": "electrical"
  },
  {
    "id": "s350",
    "question": "How is normal power restored after an ADG deployment if a generator returns online?",
    "choices": [
      "By pressing the GEN switch to AUTO",
      "By stowing the ADG handle and pressing the PWR TXFR OVERRIDE button",
      "Power automatically restores when a generator comes online",
      "By cycling the battery master switch"
    ],
    "correctAnswer": 1,
    "explanation": "By stowing the ADG handle and pressing the PWR TXFR OVERRIDE button.",
    "category": "electrical"
  },
  {
    "id": "s351",
    "question": "Hydraulic Pump 3B can be deselected after an ADG deployment.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. It is hardwired to the ADG bus for continuous operation.",
    "category": "hydraulics"
  },
  {
    "id": "s352",
    "question": "What items are powered by the DC emergency bus?",
    "choices": [
      "Captain's flight instruments and FMS",
      "Engine fire extinguishers, APU fire extinguisher, fuel SOVs, and hydraulic SOVs",
      "Passenger reading lights and emergency exit signs",
      "Boost pumps and crossflow pump"
    ],
    "correctAnswer": 1,
    "explanation": "Engine fire extinguishers, APU Fire Extinguisher, Fuel SOVs & Hyd SOVs.",
    "category": "electrical"
  },
  {
    "id": "s353",
    "question": "What powers the DC emergency bus?",
    "choices": [
      "The ADG bus and AC essential bus",
      "The APU battery direct bus and the DC battery bus",
      "TRU 1 and TRU 2",
      "AC bus 1 only"
    ],
    "correctAnswer": 1,
    "explanation": "The APU battery direct bus and the DC battery bus.",
    "category": "electrical"
  },
  {
    "id": "s354",
    "question": "When operating on batteries only in an emergency, each APU start attempt costs how many minutes of battery life?",
    "choices": [
      "3 minutes",
      "4 minutes",
      "6 minutes",
      "10 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "6 minutes.",
    "category": "electrical"
  },
  {
    "id": "s355",
    "question": "Where is the main battery located?",
    "choices": [
      "In the aft equipment bay",
      "In the forward nose compartment",
      "Under the cockpit floor",
      "In the wing root"
    ],
    "correctAnswer": 1,
    "explanation": "In the forward nose compartment.",
    "category": "electrical"
  },
  {
    "id": "s356",
    "question": "Where is the APU battery located?",
    "choices": [
      "In the forward nose compartment",
      "Under the cockpit floor",
      "In the aft equipment bay",
      "Adjacent to the APU"
    ],
    "correctAnswer": 2,
    "explanation": "In the aft equipment bay.",
    "category": "electrical"
  },
  {
    "id": "s357",
    "question": "The DC emergency bus is displayed on the DC synoptic page when:",
    "choices": [
      "The battery master is turned on",
      "The ADG deploys",
      "Power is lost from one or both of its power sources",
      "External power is connected"
    ],
    "correctAnswer": 2,
    "explanation": "When power is lost from one or both of its power sources.",
    "category": "eicas"
  },
  {
    "id": "s358",
    "question": "How many fuel tanks does the CRJ-700 have?",
    "choices": [
      "Two (one in each wing)",
      "Three (one in each wing plus a center tank)",
      "Four (two in each wing)",
      "Five (two in each wing plus a center tank)"
    ],
    "correctAnswer": 1,
    "explanation": "The aircraft has one main tank in each wing, and an auxiliary tank in the center.",
    "category": "fuel"
  },
  {
    "id": "s359",
    "question": "Where are the collector tanks located?",
    "choices": [
      "In each wing root",
      "In the center tank",
      "In the forward fuselage",
      "Under the cockpit floor"
    ],
    "correctAnswer": 1,
    "explanation": "The center tank houses two collector tanks which feed the engines.",
    "category": "fuel"
  },
  {
    "id": "s360",
    "question": "What computer monitors fuel quantity, balance, and temperature?",
    "choices": [
      "The DCPC",
      "The ACSC",
      "The Fuel Quantity Gauging Computer (FQGC)",
      "The Flight Management Computer"
    ],
    "correctAnswer": 2,
    "explanation": "A Fuel Quantity Gauging Computer (FQGC) monitors fuel quantity, balance and temperature, and corrects any imbalances through the use of a cross-flow pump.",
    "category": "fuel"
  },
  {
    "id": "s361",
    "question": "Motive flow uses ejectors that have no moving parts and rely on venturi suction created by high-pressure engine fuel.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Within the ejectors, venturi suction created by the high pressure engine fuel pulls fuel from the tanks. There are 'no moving parts' within the ejectors.",
    "category": "fuel"
  },
  {
    "id": "s362",
    "question": "Fuel is automatically transferred from the center tank to a wing when the wing tank quantity falls below what percentage?",
    "choices": [
      "85%",
      "90%",
      "93%",
      "95%"
    ],
    "correctAnswer": 2,
    "explanation": "When the left or right wing tank quantity falls below 93%, the transfer ejectors in the center tank are activated until the main wing tank quantity reaches 97%.",
    "category": "fuel"
  },
  {
    "id": "s363",
    "question": "Center tank transfer ejectors continue operating until the main wing tank quantity reaches what percentage?",
    "choices": [
      "93%",
      "95%",
      "97%",
      "100%"
    ],
    "correctAnswer": 2,
    "explanation": "The transfer ejectors in the center tank are activated until the main wing tank quantity reaches 97%.",
    "category": "fuel"
  },
  {
    "id": "s364",
    "question": "Where is the single-point pressure refueling station located?",
    "choices": [
      "At the left wing root",
      "At the right wing root",
      "Under the center fuselage",
      "On top of the left wing"
    ],
    "correctAnswer": 1,
    "explanation": "Fuel is pumped into the airplane through either the over-wing filling ports or the single point pressure refueling station at the right wing root.",
    "category": "fuel"
  },
  {
    "id": "s365",
    "question": "When a BOOST PUMP switchlight is pressed in and the white ON light illuminates, this means:",
    "choices": [
      "The pump is armed in standby",
      "The pump output pressure is low",
      "The pump is operating",
      "The pump has failed"
    ],
    "correctAnswer": 2,
    "explanation": "White ON light illuminated - The pump is operating.",
    "category": "fuel"
  },
  {
    "id": "s366",
    "question": "When a BOOST PUMP switchlight is pressed in and the amber INOP light illuminates, this means:",
    "choices": [
      "The pump is operating normally",
      "Pump output pressure is low",
      "The pump is armed in standby",
      "The pump is turned off"
    ],
    "correctAnswer": 1,
    "explanation": "Amber INOP light illuminated - Pump output pressure low.",
    "category": "fuel"
  },
  {
    "id": "s367",
    "question": "When a BOOST PUMP switchlight is pressed in and no lights are illuminated, this means:",
    "choices": [
      "The pump has failed",
      "The pump is operating at full power",
      "The pump is armed in standby",
      "The pump is turned off"
    ],
    "correctAnswer": 2,
    "explanation": "No lights illuminated - Pump is armed in standby.",
    "category": "fuel"
  },
  {
    "id": "s368",
    "question": "What does the FAIL light on the GRAVITY XFLOW switchlight indicate?",
    "choices": [
      "Low fuel pressure in the crossflow line",
      "The SOV is not in the commanded position",
      "Fuel temperature is too high",
      "The crossflow pump has failed"
    ],
    "correctAnswer": 1,
    "explanation": "The SOV is not in the commanded position.",
    "category": "general"
  },
  {
    "id": "s369",
    "question": "What does pressing the XFLOW AUTO OVERRIDE (MAN) switchlight do?",
    "choices": [
      "Activates automatic crossflow operation",
      "Arms the bidirectional pump for manual operation and overrides automatic pump operation",
      "Shuts off all crossflow capability",
      "Resets the FQGC crossflow logic"
    ],
    "correctAnswer": 1,
    "explanation": "Pressing arms the bidirectional pump for manual operation through the use of the L or R CROSSFLOW switchlights, and overrides automatic pump operation.",
    "category": "general"
  },
  {
    "id": "s370",
    "question": "The fuel tanks are positively pressurized using NACA vents and climb vents.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "There are NACA vents and climb vents. The tanks are positively pressurized.",
    "category": "fuel"
  },
  {
    "id": "s371",
    "question": "The fuel quantity gauging system uses what type of measurement?",
    "choices": [
      "Ultrasonic sensors",
      "Float-type gauges",
      "DC type capacitance system",
      "Laser measurement"
    ],
    "correctAnswer": 2,
    "explanation": "A DC type capacitance system indicates usable fuel.",
    "category": "fuel"
  },
  {
    "id": "s372",
    "question": "The capacitance fuel quantity system is calibrated for ground conditions only.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "Both. In flight the computer compensates for pitch and roll.",
    "category": "fuel"
  },
  {
    "id": "s373",
    "question": "How many Magnetic Level Indicators (MLIs) can be manually checked on the exterior of the aircraft?",
    "choices": [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    "correctAnswer": 2,
    "explanation": "There are five Magnetic Level Indicators that can manually be checked on the exterior of the aircraft, two under each wing and one under the fuselage.",
    "category": "fuel"
  },
  {
    "id": "s374",
    "question": "Raw data from the MLIs can be directly used to determine the fuel level without any conversion.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. A conversion chart must be used found in the AFM.",
    "category": "fuel"
  },
  {
    "id": "s375",
    "question": "Is dispatch authorized with the Fuel Quantity Gauging Computer inoperative?",
    "choices": [
      "Yes, with MLI verification",
      "Yes, with crew fuel calculations",
      "No",
      "Yes, for flights under 2 hours"
    ],
    "correctAnswer": 2,
    "explanation": "No.",
    "category": "fuel"
  },
  {
    "id": "s376",
    "question": "What is the total fuel capacity with pressure refueling?",
    "choices": [
      "14,580 lbs",
      "17,500 lbs",
      "19,594 lbs",
      "21,000 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "Pressurized: 7,492 in each wing, and 4,610 in the center totaling 19,594.",
    "category": "fuel"
  },
  {
    "id": "s377",
    "question": "What is each wing tank's capacity with pressure refueling?",
    "choices": [
      "6,500 lbs",
      "7,290 lbs",
      "7,492 lbs",
      "8,000 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "Pressurized: 7,492 in each wing.",
    "category": "fuel"
  },
  {
    "id": "s378",
    "question": "What is the center tank capacity with pressure refueling?",
    "choices": [
      "3,500 lbs",
      "4,000 lbs",
      "4,610 lbs",
      "5,200 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "4,610 in the center.",
    "category": "fuel"
  },
  {
    "id": "s379",
    "question": "With gravity (over-wing) refueling only, total fuel capacity is:",
    "choices": [
      "12,000 lbs",
      "14,580 lbs",
      "16,000 lbs",
      "19,594 lbs"
    ],
    "correctAnswer": 1,
    "explanation": "Gravity: 7,290 in each wing totaling 14,580. The center tank can only be pressure refueled.",
    "category": "fuel"
  },
  {
    "id": "s380",
    "question": "The center tank can be filled by gravity (over-wing) refueling.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "The center tank can only be pressure refueled.",
    "category": "fuel"
  },
  {
    "id": "s381",
    "question": "Where is the bulk fuel temperature sensor located?",
    "choices": [
      "In the left wing tank",
      "In the right wing tank",
      "In the center tank",
      "In both wing tanks"
    ],
    "correctAnswer": 1,
    "explanation": "In the right wing tank.",
    "category": "fuel"
  },
  {
    "id": "s382",
    "question": "The FQGC initiates an automatic crossflow when it detects a fuel imbalance of how many pounds between the wings?",
    "choices": [
      "100 pounds",
      "150 pounds",
      "200 pounds",
      "300 pounds"
    ],
    "correctAnswer": 2,
    "explanation": "The FQGC initiates a crossflow by activating the bi-directional crossflow pump when it detects a fuel imbalance of 200 pounds between the wings.",
    "category": "fuel"
  },
  {
    "id": "s383",
    "question": "During automatic crossflow, the pump continues operating until the low wing has how many pounds more fuel than the previously higher wing?",
    "choices": [
      "25 pounds",
      "50 pounds",
      "100 pounds",
      "200 pounds"
    ],
    "correctAnswer": 1,
    "explanation": "The crossflow pump will continue to operate until the low wing has 50 pounds more fuel than the wing with the previous higher quantity.",
    "category": "fuel"
  },
  {
    "id": "s384",
    "question": "Where does the APU get its fuel from?",
    "choices": [
      "The right collector tank via a dedicated pump",
      "A dedicated boost pump in the left collector tank",
      "The center tank directly",
      "Either wing tank via the crossflow system"
    ],
    "correctAnswer": 1,
    "explanation": "A dedicated boost pump in the left collector tank.",
    "category": "fuel"
  },
  {
    "id": "s385",
    "question": "If the APU boost pump fails, the APU will continue to run but it will not start unless the pump is operating.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, however it will not start unless the pump is operating.",
    "category": "fuel"
  },
  {
    "id": "s386",
    "question": "The main engines will start without their respective boost pumps running.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes.",
    "category": "fuel"
  },
  {
    "id": "s387",
    "question": "After starting both engines, what happens to the boost pump switchlights?",
    "choices": [
      "The ON lights remain illuminated",
      "The INOP lights illuminate",
      "The lights extinguish as the pumps enter standby mode",
      "The FAIL lights illuminate"
    ],
    "correctAnswer": 2,
    "explanation": "The lights extinguish because the pumps enter the standby mode. Motive flow supplies the fuel to the engines.",
    "category": "fuel"
  },
  {
    "id": "s388",
    "question": "Will both boost pumps turn on if only one boost pump switchlight is pressed?",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes.",
    "category": "fuel"
  },
  {
    "id": "s389",
    "question": "At what fuel quantity does the digital fuel readout turn amber?",
    "choices": [
      "Less than 1000 lbs total or less than 500 lbs per wing",
      "Less than 1200 lbs total or less than 600 lbs per wing",
      "Less than 1500 lbs total or less than 750 lbs per wing",
      "Less than 2000 lbs total or less than 1000 lbs per wing"
    ],
    "correctAnswer": 1,
    "explanation": "Less than 1200 lbs. total or less than 600 lbs. per wing.",
    "category": "fuel"
  },
  {
    "id": "s390",
    "question": "What is the maximum fuel imbalance for takeoff?",
    "choices": [
      "200 lbs",
      "300 lbs",
      "500 lbs",
      "800 lbs"
    ],
    "correctAnswer": 1,
    "explanation": "300 for takeoff, 800 for flight.",
    "category": "fuel"
  },
  {
    "id": "s391",
    "question": "What is the maximum fuel imbalance during flight?",
    "choices": [
      "300 lbs",
      "500 lbs",
      "800 lbs",
      "1000 lbs"
    ],
    "correctAnswer": 2,
    "explanation": "300 for takeoff, 800 for flight.",
    "category": "fuel"
  },
  {
    "id": "s392",
    "question": "What is the minimum fuel for the execution of a go-around?",
    "choices": [
      "400 lbs per wing tank",
      "600 lbs per wing tank",
      "800 lbs per wing tank",
      "1000 lbs per wing tank"
    ],
    "correctAnswer": 1,
    "explanation": "600 lbs. per wing tank assuming a maximum of 10° nose up.",
    "category": "fuel"
  },
  {
    "id": "s393",
    "question": "To take off with more than 500 lbs in the center tank, each wing tank must have a minimum of:",
    "choices": [
      "3,000 pounds",
      "3,500 pounds",
      "4,000 pounds",
      "4,400 pounds"
    ],
    "correctAnswer": 3,
    "explanation": "Each wing tank must have a minimum of 4,400 pounds to takeoff with more than 500 lbs. in the center tank unless otherwise directed by the AFM.",
    "category": "fuel"
  },
  {
    "id": "s394",
    "question": "What is the bulk fuel freezing temperature for Jet A?",
    "choices": [
      "-30°C",
      "-35°C",
      "-40°C",
      "-47°C"
    ],
    "correctAnswer": 2,
    "explanation": "-40°C.",
    "category": "fuel"
  },
  {
    "id": "s395",
    "question": "What is the minimum bulk fuel temperature of Jet A for takeoff?",
    "choices": [
      "-40°C",
      "-35°C",
      "-30°C",
      "-20°C"
    ],
    "correctAnswer": 2,
    "explanation": "-30°C.",
    "category": "fuel"
  },
  {
    "id": "s396",
    "question": "What fuel temperature is required at the engine for takeoff?",
    "choices": [
      "-5°C",
      "0°C",
      "5°C",
      "10°C"
    ],
    "correctAnswer": 2,
    "explanation": "5°C.",
    "category": "fuel"
  },
  {
    "id": "s397",
    "question": "How is the fuel warmed to reach the required engine temperature for takeoff?",
    "choices": [
      "Electric fuel heater",
      "Bleed air heat exchanger",
      "The fuel/oil heat exchanger",
      "Ram air heat exchanger"
    ],
    "correctAnswer": 2,
    "explanation": "The fuel/oil heat exchanger.",
    "category": "fuel"
  },
  {
    "id": "s398",
    "question": "What is the maximum fuel imbalance while over-wing refueling?",
    "choices": [
      "1,000 lbs",
      "1,500 lbs",
      "2,000 lbs",
      "2,500 lbs"
    ],
    "correctAnswer": 3,
    "explanation": "2,500 lbs.",
    "category": "fuel"
  },
  {
    "id": "s399",
    "question": "During the fuel check-valve test on the first flight of the day, which engine is started first?",
    "choices": [
      "Right engine",
      "Left engine",
      "Either engine",
      "Both engines simultaneously"
    ],
    "correctAnswer": 1,
    "explanation": "On the first flight of the day start the left engine first. Turn off both boost pumps and look for 3 amber EICAS messages.",
    "category": "fuel"
  },
  {
    "id": "s400",
    "question": "The mnemonic for the path of fuel from center tanks to engines is S-B-M. What does the S stand for?",
    "choices": [
      "Supply ejector",
      "Scavenge ejector from main tanks to collector tanks",
      "Suction pump from center to wings",
      "Standby ejector from collector tanks"
    ],
    "correctAnswer": 1,
    "explanation": "S - scavenge ejector from the main tanks to the collector tanks, B - transfer ejector from the center tank to the main tanks, M - main ejectors from the collector tanks to the engines.",
    "category": "fuel"
  },
  {
    "id": "s401",
    "question": "Aside from scavenge ejectors, how does fuel enter the collector tanks?",
    "choices": [
      "Electric transfer pumps",
      "Pressurized fuel lines",
      "One-way flapper valves allow fuel to move by gravity",
      "Motive flow from the engines"
    ],
    "correctAnswer": 2,
    "explanation": "One way flapper valves allow fuel to move by gravity into the collector tank.",
    "category": "fuel"
  },
  {
    "id": "s402",
    "question": "How many independent hydraulic systems does the CRJ-700 have?",
    "choices": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": 1,
    "explanation": "The aircraft has three independent hydraulic systems that provide power to the flight controls, landing gear, brakes and nose wheel steering among other things.",
    "category": "hydraulics"
  },
  {
    "id": "s403",
    "question": "The number one hydraulic system is normally powered by which pump?",
    "choices": [
      "Right engine driven pump (2A)",
      "ACMP 3A",
      "Left engine driven pump (1A)",
      "ACMP 1B"
    ],
    "correctAnswer": 2,
    "explanation": "The number one hydraulic system is normally powered by the left engine driven pump (1A), and the number two hydraulic system is normally powered by the right engine pump (2A).",
    "category": "hydraulics"
  },
  {
    "id": "s404",
    "question": "Under what condition will the AC motor pumps (ACMPs) for systems 1 and 2 automatically activate?",
    "choices": [
      "When engine RPM drops below 50%",
      "When the actual flap position is greater than zero",
      "When hydraulic pressure drops below 2000 psi",
      "When the landing gear is extended"
    ],
    "correctAnswer": 1,
    "explanation": "The AC motor pumps will only activate automatically when the actual flap position is greater than zero.",
    "category": "hydraulics"
  },
  {
    "id": "s405",
    "question": "What is the normal hydraulic system pressure?",
    "choices": [
      "1500 psi",
      "2000 psi",
      "2500 psi",
      "3000 psi"
    ],
    "correctAnswer": 3,
    "explanation": "Normal system pressure is 3000 psi.",
    "category": "hydraulics"
  },
  {
    "id": "s406",
    "question": "Where are the ACMP pumps for hydraulic system 3 located?",
    "choices": [
      "Left gear bay",
      "Right gear bay",
      "Aft equipment bay",
      "Wing root fairing"
    ],
    "correctAnswer": 1,
    "explanation": "The number three hydraulic system is pressurized by one or both of its alternating current motor pumps (ACMP) located in the right gear bay.",
    "category": "hydraulics"
  },
  {
    "id": "s407",
    "question": "Hydraulic system 3 requires a dedicated cooling system.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No cooling system is required for system three. Since hydraulic system 3 lines run the length of the aircraft to the nose gear well, heat is dissipated sufficiently through the fuselage.",
    "category": "hydraulics"
  },
  {
    "id": "s408",
    "question": "Which ACMP serves as the primary pump for hydraulic system 3?",
    "choices": [
      "ACMP 1B",
      "ACMP 2B",
      "ACMP 3A",
      "ACMP 3B"
    ],
    "correctAnswer": 2,
    "explanation": "ACMP 3A serves as the primary system three pump, and ACMP 3B serves as a backup.",
    "category": "hydraulics"
  },
  {
    "id": "s409",
    "question": "What is the normal hydraulic reservoir quantity range?",
    "choices": [
      "30% to 70%",
      "40% to 80%",
      "45% to 85%",
      "50% to 90%"
    ],
    "correctAnswer": 2,
    "explanation": "The normal reservoir quantity is 45% to 85%.",
    "category": "hydraulics"
  },
  {
    "id": "s410",
    "question": "If the hydraulic reservoir quantity is outside the normal range, what color will the digital quantity be displayed in?",
    "choices": [
      "Green",
      "Amber",
      "White",
      "Red"
    ],
    "correctAnswer": 2,
    "explanation": "If the reservoir is outside of the normal range, the digital quantity will be displayed in white.",
    "category": "hydraulics"
  },
  {
    "id": "s411",
    "question": "Hydraulic quantity can be accurately read without the system energized.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. Hydraulic quantity cannot be accurately read without the system energized.",
    "category": "hydraulics"
  },
  {
    "id": "s412",
    "question": "What type of hydraulic fluid is used in the CRJ-700?",
    "choices": [
      "MIL-H-5606",
      "Skydrol",
      "Aeroshell 41",
      "Royco 83"
    ],
    "correctAnswer": 1,
    "explanation": "The hydraulic fluid used is Skydrol.",
    "category": "hydraulics"
  },
  {
    "id": "s413",
    "question": "What color is Skydrol hydraulic fluid?",
    "choices": [
      "Red",
      "Green",
      "Purple",
      "Clear"
    ],
    "correctAnswer": 2,
    "explanation": "Skydrol hydraulic fluid is purple.",
    "category": "hydraulics"
  },
  {
    "id": "s414",
    "question": "If pump 1A or 2A fails, the respective electric pump (ACMP) will activate automatically.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. If pump 1A or 2A fails, the respective electric pump will not activate automatically.",
    "category": "hydraulics"
  },
  {
    "id": "s415",
    "question": "Which of the following is NOT a condition required for the ACMPs to automatically activate?",
    "choices": [
      "Respective switch in AUTO",
      "At least one generator online",
      "Flap position greater than zero",
      "Hydraulic pressure below 2500 psi"
    ],
    "correctAnswer": 3,
    "explanation": "The electric pumps (ACMPs) automatically activate with their respective switches in auto, at least one generator online, and the flap position greater than zero.",
    "category": "hydraulics"
  },
  {
    "id": "s416",
    "question": "How are hydraulic systems 1 and 2 cooled?",
    "choices": [
      "An electric cooling fan on the reservoir",
      "Ram air in flight or a fan in the ram air duct on the ground, blowing cooling air over a shared heat exchanger in the aft equipment bay",
      "Fuel-cooled heat exchangers in the wing root",
      "Engine bleed air routed through the hydraulic bay"
    ],
    "correctAnswer": 1,
    "explanation": "Ram air in flight or a fan in the ram air duct while on the ground blow cooling air over the shared hydraulic heat exchanger in the aft equipment bay.",
    "category": "hydraulics"
  },
  {
    "id": "s417",
    "question": "If there is an engine driven pump problem (1A or 2A), is the associated engine required to be shut down?",
    "choices": [
      "Yes, the engine must be shut down immediately",
      "Yes, but only after landing",
      "No, a shutoff valve isolates the pump from the system",
      "No, but the engine must be operated at idle thrust"
    ],
    "correctAnswer": 2,
    "explanation": "No. A shutoff valve has been positioned between the pump and the reservoir to isolate the pump from the system.",
    "category": "powerplant"
  },
  {
    "id": "s418",
    "question": "At what temperature does the HYD 1 or 2 HI TEMP caution message display?",
    "choices": [
      "When temperature exceeds 80°C",
      "When temperature exceeds 88°C",
      "When temperature exceeds 96°C",
      "When temperature exceeds 104°C"
    ],
    "correctAnswer": 2,
    "explanation": "The HYD 1 or 2 HI TEMP caution will be displayed when the temperature exceeds 96°C.",
    "category": "general"
  },
  {
    "id": "s419",
    "question": "On the hydraulic synoptic page, a powered system displayed in white indicates the system is pressurized above what value?",
    "choices": [
      "1500 psi",
      "1800 psi",
      "2000 psi",
      "2500 psi"
    ],
    "correctAnswer": 1,
    "explanation": "When a powered system is displayed in white on the hydraulic synoptic page, it indicates the system is pressurized above 1800 psi.",
    "category": "eicas"
  },
  {
    "id": "s420",
    "question": "On the hydraulic synoptic page, what does an amber display indicate?",
    "choices": [
      "System is pressurized above 1800 psi",
      "System is pressurized less than 1800 psi",
      "The sensing system is receiving invalid data",
      "System is in standby mode"
    ],
    "correctAnswer": 1,
    "explanation": "When a system is displayed in amber, it indicates the system is pressurized less than 1800 psi.",
    "category": "eicas"
  },
  {
    "id": "s421",
    "question": "On the hydraulic synoptic page, what does a muted (dim) magenta display indicate?",
    "choices": [
      "System is pressurized above 3000 psi",
      "System is in normal operation",
      "The sensing system is receiving invalid data",
      "System pressure is below 1000 psi"
    ],
    "correctAnswer": 2,
    "explanation": "When a system is displayed in muted (dim) magenta, it indicates the sensing system is receiving invalid data.",
    "category": "eicas"
  },
  {
    "id": "s422",
    "question": "Which hydraulic pumps are NOT controlled by the hydraulic control panel?",
    "choices": [
      "Pumps 1B and 2B",
      "Pumps 3A and 3B",
      "Pumps 1A and 2A",
      "Pumps 1A and 3A"
    ],
    "correctAnswer": 2,
    "explanation": "Pumps 1A and 2A (the engine driven pumps) are not controlled by the hydraulic control panel.",
    "category": "hydraulics"
  },
  {
    "id": "s423",
    "question": "How many total hydraulic pumps does the CRJ-700 have?",
    "choices": [
      "Four",
      "Five",
      "Six",
      "Eight"
    ],
    "correctAnswer": 2,
    "explanation": "Six; four electric pumps and two engine driven pumps.",
    "category": "hydraulics"
  },
  {
    "id": "s424",
    "question": "Which of the following is a method to close the engine hydraulic shutoff valves?",
    "choices": [
      "Pressing the associated L or R HYD SOV switchlight",
      "Turning off the associated engine generator",
      "Moving the throttle to idle",
      "Pressing the ACMP OFF switch"
    ],
    "correctAnswer": 0,
    "explanation": "The engine hydraulic shutoff valves can be closed by pressing the associated L or R HYD SOV switchlight, or by pressing the associated engine fire switch.",
    "category": "hydraulics"
  },
  {
    "id": "s425",
    "question": "What normally powers hydraulic pump 3B?",
    "choices": [
      "DC bus 1",
      "AC bus 2",
      "AC bus 1",
      "The left engine generator"
    ],
    "correctAnswer": 2,
    "explanation": "Hydraulic pump 3B is normally powered by AC bus 1, and it is hard wired to the ADG to be powered when the ADG is deployed.",
    "category": "hydraulics"
  },
  {
    "id": "s426",
    "question": "If the ADG is providing power to pump 3B, can the pump be manually turned off?",
    "choices": [
      "Yes, using the 3B switch on the hydraulic panel",
      "Yes, using the HYD SOV switchlight",
      "No, the switch will not work",
      "No, but it will automatically turn off after 10 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "No, the switch will not work when the ADG is providing power to pump 3B.",
    "category": "electrical"
  },
  {
    "id": "s427",
    "question": "What is the purpose of the hydraulic accumulator?",
    "choices": [
      "To store backup hydraulic fluid",
      "To dampen oscillations in pressure",
      "To provide emergency pump power",
      "To cool the hydraulic fluid"
    ],
    "correctAnswer": 1,
    "explanation": "The accumulator dampens oscillations in pressure.",
    "category": "hydraulics"
  },
  {
    "id": "s428",
    "question": "What is the normal hydraulic accumulator charge?",
    "choices": [
      "1000 psi",
      "1500 psi",
      "2000 psi",
      "2500 psi"
    ],
    "correctAnswer": 1,
    "explanation": "The normal accumulator charge is 1500 psi.",
    "category": "hydraulics"
  },
  {
    "id": "s429",
    "question": "Which hydraulic systems provide power to the brakes?",
    "choices": [
      "Systems 1 and 2",
      "Systems 1 and 3",
      "Systems 2 and 3",
      "All three systems"
    ],
    "correctAnswer": 2,
    "explanation": "Systems 2 and 3 provide power to the brakes; system 3 powers inboard brakes, and system 2 powers outboard brakes.",
    "category": "landing-gear"
  },
  {
    "id": "s430",
    "question": "Which hydraulic system provides power to the nose-wheel steering?",
    "choices": [
      "System 1",
      "System 2",
      "System 3",
      "Systems 1 and 2"
    ],
    "correctAnswer": 2,
    "explanation": "Hydraulic system 3 provides power to the nose-wheel steering.",
    "category": "landing-gear"
  },
  {
    "id": "s431",
    "question": "The CRJ-700 landing gear is best described as:",
    "choices": [
      "Electrically powered, hydraulically controlled tricycle gear",
      "Hydraulically powered, electrically controlled tricycle gear",
      "Pneumatically powered, mechanically controlled gear",
      "Hydraulically powered, mechanically controlled gear"
    ],
    "correctAnswer": 1,
    "explanation": "The aircraft is equipped with hydraulically powered, electrically controlled tricycle landing gear.",
    "category": "landing-gear"
  },
  {
    "id": "s432",
    "question": "During emergency gear extension, which gear always requires hydraulic pressure to extend?",
    "choices": [
      "Left main gear",
      "Right main gear",
      "Nose gear",
      "All gear require hydraulic pressure"
    ],
    "correctAnswer": 2,
    "explanation": "Emergency extension can be accomplished either hydraulically assisted, or through a gravity freefall system except for the nose gear which always requires hydraulic pressure.",
    "category": "landing-gear"
  },
  {
    "id": "s433",
    "question": "Which hydraulic system powers the outboard brakes?",
    "choices": [
      "System 1",
      "System 2",
      "System 3",
      "Systems 1 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Hydraulic system two powers the outboard brakes and system three powers the inboard brakes.",
    "category": "landing-gear"
  },
  {
    "id": "s434",
    "question": "If both hydraulic systems 2 and 3 fail, how many brake applications are available from the accumulators?",
    "choices": [
      "Up to three",
      "Up to four",
      "Up to six",
      "Up to eight"
    ],
    "correctAnswer": 2,
    "explanation": "If both systems 2 and 3 fail, brake accumulators provide up to 6 applications, but antiskid protection should be turned off.",
    "category": "landing-gear"
  },
  {
    "id": "s435",
    "question": "How many thermal fuse plugs are located on each tire?",
    "choices": [
      "Two",
      "Three",
      "Four",
      "Six"
    ],
    "correctAnswer": 2,
    "explanation": "Four thermal fuse plugs are located on each tire to guard against wheel rupture in an overheat situation.",
    "category": "landing-gear"
  },
  {
    "id": "s436",
    "question": "What is the maximum nose wheel steering angle available from the tiller?",
    "choices": [
      "60°",
      "70°",
      "80°",
      "90°"
    ],
    "correctAnswer": 2,
    "explanation": "The actuators can achieve up to 80° of nose wheel rotation from the tiller and 8° from the rudder pedals.",
    "category": "landing-gear"
  },
  {
    "id": "s437",
    "question": "What is the maximum nose wheel steering angle from the rudder pedals?",
    "choices": [
      "4°",
      "6°",
      "8°",
      "10°"
    ],
    "correctAnswer": 2,
    "explanation": "The actuators can achieve up to 80° of nose wheel rotation from the tiller and 8° from the rudder pedals.",
    "category": "flight-controls"
  },
  {
    "id": "s438",
    "question": "What holds the main landing gear in the extended position?",
    "choices": [
      "Hydraulic system 3 pressure",
      "Mechanical over-centering with down locks",
      "Spring-loaded locking mechanism",
      "Electromechanical actuator locks"
    ],
    "correctAnswer": 1,
    "explanation": "Mechanical over-centering with down locks holds the MLG in the extended position.",
    "category": "landing-gear"
  },
  {
    "id": "s439",
    "question": "What holds the nose gear in the retracted position?",
    "choices": [
      "Mechanical up locks and hydraulic pressure",
      "Hydraulic system 2 pressure only",
      "A spring-loaded, over-center type locking mechanism",
      "Electromechanical uplocks"
    ],
    "correctAnswer": 2,
    "explanation": "A spring-loaded, over-center type locking mechanism holds the nose gear in the retracted position.",
    "category": "landing-gear"
  },
  {
    "id": "s440",
    "question": "What holds the main gear in the retracted position?",
    "choices": [
      "Spring-loaded uplocks only",
      "Hydraulic system 2 pressure only",
      "Mechanical up locks and hydraulic system 3 pressure",
      "Electromechanical actuator locks"
    ],
    "correctAnswer": 2,
    "explanation": "Mechanical up locks and hydraulic system 3 pressure hold the main gear in the retracted position.",
    "category": "landing-gear"
  },
  {
    "id": "s441",
    "question": "What unit controls the landing gear?",
    "choices": [
      "Landing Gear Control Unit (LGCU)",
      "Proximity Sensing Electronic Unit (PSEU)",
      "Gear Monitoring Computer (GMC)",
      "Flight Control Computer (FCC)"
    ],
    "correctAnswer": 1,
    "explanation": "The Proximity Sensing Electronic Unit (PSEU) controls the landing gear.",
    "category": "landing-gear"
  },
  {
    "id": "s442",
    "question": "After the nose gear is extended, do the gear doors close?",
    "choices": [
      "Yes, they close automatically after extension",
      "Yes, but only after weight on wheels",
      "No, any time the nose gear is down the doors are open",
      "No, but they partially close for aerodynamic reasons"
    ],
    "correctAnswer": 2,
    "explanation": "No, any time the nose gear is down the doors are open.",
    "category": "landing-gear"
  },
  {
    "id": "s443",
    "question": "What ensures the nose wheel is centered prior to retraction?",
    "choices": [
      "The pilot must center it using the tiller",
      "Hydraulic system 3 pressure forces it to center",
      "The ECU sends a centering signal after takeoff, then a centering cam keeps it centered",
      "Spring-loaded return mechanism"
    ],
    "correctAnswer": 2,
    "explanation": "The ECU sends a signal to center after takeoff, and then a centering cam keeps it centered when hydraulic pressure is removed.",
    "category": "landing-gear"
  },
  {
    "id": "s444",
    "question": "If both hydraulic systems 2 and 3 fail, what happens to the landing gear?",
    "choices": [
      "All three gear extend normally via gravity freefall",
      "The nose wheel will not extend for landing",
      "Only the left main gear will extend",
      "The gear will remain locked in its current position"
    ],
    "correctAnswer": 1,
    "explanation": "If both hydraulic system 2 and 3 fail, the nose wheel will not extend for landing.",
    "category": "landing-gear"
  },
  {
    "id": "s445",
    "question": "Which hydraulic system is used to raise and lower the landing gear?",
    "choices": [
      "System 1",
      "System 2",
      "System 3",
      "Systems 1 and 2"
    ],
    "correctAnswer": 2,
    "explanation": "Hydraulic system 3 is used to raise and lower the gear.",
    "category": "landing-gear"
  },
  {
    "id": "s446",
    "question": "The 'TOO LOW GEAR' aural warning will sound with a radar altitude below what value?",
    "choices": [
      "200 feet",
      "300 feet",
      "500 feet",
      "1000 feet"
    ],
    "correctAnswer": 2,
    "explanation": "The 'TOO LOW GEAR' aural warning will sound with a radar altitude below 500 feet at a speed of less than 190 KIAS.",
    "category": "egpws"
  },
  {
    "id": "s447",
    "question": "At what speed threshold does the 'TOO LOW GEAR' warning activate (below 500 feet RA)?",
    "choices": [
      "Less than 160 KIAS",
      "Less than 170 KIAS",
      "Less than 180 KIAS",
      "Less than 190 KIAS"
    ],
    "correctAnswer": 3,
    "explanation": "The 'TOO LOW GEAR' aural warning will sound with a radar altitude below 500 feet at a speed of less than 190 KIAS.",
    "category": "egpws"
  },
  {
    "id": "s448",
    "question": "Why is it important not to move the tiller in flight with the gear extended?",
    "choices": [
      "It could cause a hydraulic system failure",
      "The nose gear could be damaged",
      "Steering will be inoperative on landing with no in-flight warning",
      "It will cause the gear to retract"
    ],
    "correctAnswer": 2,
    "explanation": "The steering will be inoperative as annunciated by a STEER INOP message on the EICAS upon landing; however, you will have no warning in flight.",
    "category": "landing-gear"
  },
  {
    "id": "s449",
    "question": "What is locked wheel protection?",
    "choices": [
      "A system that prevents the wheels from spinning during retraction",
      "The ASCU monitors each wheel; if one is at least 30% slower than others, brake pressure is released to that wheel",
      "A mechanical lock that prevents wheel rotation during towing",
      "A system that locks the wheels after landing to prevent rolling"
    ],
    "correctAnswer": 1,
    "explanation": "The Antiskid Control Unit (ASCU) monitors each wheel to ensure even rotation. If one wheel enters a skid and is at least 30% slower than the others, the ASCU will release brake pressure to that wheel to balance the rotation speeds.",
    "category": "landing-gear"
  },
  {
    "id": "s450",
    "question": "Touchdown protection prevents braking until what condition is met?",
    "choices": [
      "Weight on wheels only",
      "A wheel spin up of 50 knots is achieved",
      "A wheel spin up of 35 knots, or weight on wheels plus 5 seconds",
      "Three seconds after main gear touchdown"
    ],
    "correctAnswer": 2,
    "explanation": "Touchdown protection guards from inadvertent landing with the brakes applied. Braking will not be applied until a wheel spin up of 35 knots is achieved, or weight on wheels plus 5 seconds.",
    "category": "landing-gear"
  },
  {
    "id": "s451",
    "question": "On the Brake Temperature Monitoring System (BTMS), what color indicates the normal range?",
    "choices": [
      "White",
      "Green",
      "Amber",
      "Blue"
    ],
    "correctAnswer": 1,
    "explanation": "Green indicates normal range (0-6), White indicates caution range (7-14), Red indicates overheat range (15-20).",
    "category": "landing-gear"
  },
  {
    "id": "s452",
    "question": "On the BTMS, a white indication represents which range?",
    "choices": [
      "Normal (0-6)",
      "Caution (7-14)",
      "Overheat (15-20)",
      "Sensor failure"
    ],
    "correctAnswer": 1,
    "explanation": "White indicates caution range between 7 and 14 on the Brake Temperature Monitoring System.",
    "category": "landing-gear"
  },
  {
    "id": "s453",
    "question": "How can an actual brake temperature be calculated from the BTMS reading?",
    "choices": [
      "Multiply the readout by 25",
      "Multiply the readout by 35",
      "Multiply the readout by 50",
      "Multiply the readout by 100"
    ],
    "correctAnswer": 1,
    "explanation": "Take the readout value and multiply by 35 to determine actual brake temperature.",
    "category": "landing-gear"
  },
  {
    "id": "s454",
    "question": "After a landing or rejected takeoff, what is the minimum turnaround time?",
    "choices": [
      "5 minutes",
      "10 minutes",
      "15 minutes",
      "20 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "15 minutes to ensure maximum brake temperature is reached.",
    "category": "general"
  },
  {
    "id": "s455",
    "question": "Where is the brake energy chart found?",
    "choices": [
      "AFM Volume 2",
      "QRH Volume 1",
      "MEL",
      "Flight Operations Manual"
    ],
    "correctAnswer": 1,
    "explanation": "The brake energy chart is found in QRH Volume 1.",
    "category": "landing-gear"
  },
  {
    "id": "s456",
    "question": "Braking can be accomplished through the use of accumulator pressure.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, braking can be accomplished through the use of accumulator pressure.",
    "category": "hydraulics"
  },
  {
    "id": "s457",
    "question": "What are the brake accumulators charged to?",
    "choices": [
      "500 psi",
      "750 psi",
      "1000 psi",
      "1500 psi"
    ],
    "correctAnswer": 1,
    "explanation": "The brake accumulators are charged to 750 psi.",
    "category": "landing-gear"
  },
  {
    "id": "s458",
    "question": "How are the tires thermally protected from blowout?",
    "choices": [
      "Brake cooling fans",
      "Heat-resistant tire compound",
      "Four thermal fuse plugs in each wheel",
      "Automatic brake release at high temperature"
    ],
    "correctAnswer": 2,
    "explanation": "Through the use of four thermal fuse plugs in each wheel.",
    "category": "landing-gear"
  },
  {
    "id": "s459",
    "question": "Can the brake wear indicators be checked without brakes applied?",
    "choices": [
      "Yes, they are always visible",
      "Yes, but only with hydraulic system 3 activated",
      "No, both hydraulic systems 2 and 3 must be activated and the brakes applied",
      "No, the aircraft must be jacked for inspection"
    ],
    "correctAnswer": 2,
    "explanation": "No, both hydraulic systems 2 and 3 must be activated and the brakes applied.",
    "category": "landing-gear"
  },
  {
    "id": "s460",
    "question": "How does the parking brake work?",
    "choices": [
      "An electric motor locks the brake pads",
      "A cable mechanism locks the brake drums",
      "The parking brake shutoff valve traps hydraulic system 3 pressure to lock the brakes",
      "Spring-loaded calipers clamp the brake discs"
    ],
    "correctAnswer": 2,
    "explanation": "The parking brake shutoff valve is used to lock the brakes on by trapping hydraulic system 3 pressure. When the hydraulic systems are shutdown, system 3 accumulator pressure should keep the brake applied for an extended period of time.",
    "category": "landing-gear"
  },
  {
    "id": "s461",
    "question": "When the LDG GEAR lever is moved to the UP position, what stops main wheel rotation?",
    "choices": [
      "Friction from the wheel well walls",
      "An electric brake motor",
      "Hydraulic pressure is routed to stop rotation",
      "The wheels stop on their own from air resistance"
    ],
    "correctAnswer": 2,
    "explanation": "When moved to the UP position, hydraulic pressure is routed to stop main wheel rotation and a rubber snubber assembly is used to stop nose wheel rotation.",
    "category": "general"
  },
  {
    "id": "s462",
    "question": "What stops nose wheel rotation during gear retraction?",
    "choices": [
      "Hydraulic pressure braking",
      "An electric motor brake",
      "A rubber snubber assembly",
      "Friction pads in the wheel well"
    ],
    "correctAnswer": 2,
    "explanation": "A rubber snubber assembly is used to stop nose wheel rotation during retraction.",
    "category": "landing-gear"
  },
  {
    "id": "s463",
    "question": "When the manual extension T-handle is pulled, how are the main gear mechanical up locks removed?",
    "choices": [
      "By hydraulic system 2 pressure",
      "By cable",
      "By electric actuators",
      "By spring-loaded release pins"
    ],
    "correctAnswer": 1,
    "explanation": "Once pulled, hydraulic system 3 pressure is released and the main gear mechanical up locks are removed by cable.",
    "category": "landing-gear"
  },
  {
    "id": "s464",
    "question": "During manual gear extension, which hydraulic system assists in locking the main gear down?",
    "choices": [
      "System 1",
      "System 2",
      "System 3",
      "No hydraulic assistance is used"
    ],
    "correctAnswer": 1,
    "explanation": "Hydraulic system 2 pressure is used to assist in locking the main gear down during manual extension.",
    "category": "hydraulics"
  },
  {
    "id": "s465",
    "question": "The antiskid system provides protection above what speed?",
    "choices": [
      "20 knots",
      "25 knots",
      "30 knots",
      "35 knots"
    ],
    "correctAnswer": 3,
    "explanation": "The antiskid controller is armed for automatic operation of antiskid, locked wheel and touchdown protection above 35 knots.",
    "category": "landing-gear"
  },
  {
    "id": "s466",
    "question": "Roll control on the CRJ-700 is accomplished through:",
    "choices": [
      "Ailerons only",
      "Spoilers only",
      "Ailerons and multifunction spoilers",
      "Ailerons, spoilers, and rudder"
    ],
    "correctAnswer": 2,
    "explanation": "Roll control is accomplished through the use of ailerons and multifunction spoilers.",
    "category": "general"
  },
  {
    "id": "s467",
    "question": "How many hydraulic Power Control Units (PCUs) are at each aileron?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "A system of cables, pulleys and push-pull rods link the control wheels in the flight deck to both of the two hydraulic Power Control Units (PCUs) at each aileron.",
    "category": "flight-controls"
  },
  {
    "id": "s468",
    "question": "What prevents aileron oscillation in flight if power is lost to one or more aileron PCUs?",
    "choices": [
      "Bungee breakout systems",
      "Aileron flutter dampeners",
      "Mechanical locks engage automatically",
      "The remaining PCU increases pressure"
    ],
    "correctAnswer": 1,
    "explanation": "In the event power is lost to one or more of the aileron PCUs, aileron flutter dampeners prevent aileron oscillation in flight.",
    "category": "flight-controls"
  },
  {
    "id": "s469",
    "question": "Which computer controls the multifunction spoilers?",
    "choices": [
      "Flight Control Computer (FCC)",
      "Spoiler Stabilizer Control Unit (SSCU)",
      "Air Data Computer (ADC)",
      "Slat Flap Electronic Control Unit (SFECU)"
    ],
    "correctAnswer": 1,
    "explanation": "Hydraulic PCUs drive the multifunction spoilers as commanded by the Spoiler Stabilizer Control Unit (SSCU) computers.",
    "category": "flight-controls"
  },
  {
    "id": "s470",
    "question": "How many hydraulic PCUs are at each elevator?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "explanation": "A system of cables, pulleys and push-pull rods link the torque tube and control columns to the three hydraulic Power Control Units (PCUs) at each elevator.",
    "category": "flight-controls"
  },
  {
    "id": "s471",
    "question": "Protection from dutch roll is provided by:",
    "choices": [
      "The flight spoilers",
      "Two yaw dampers",
      "The rudder travel limiter",
      "Aileron trim"
    ],
    "correctAnswer": 1,
    "explanation": "Protection from dutch roll is provided through two yaw dampers.",
    "category": "general"
  },
  {
    "id": "s472",
    "question": "Each yaw damper is controlled by one of the two:",
    "choices": [
      "Air Data Computers (ADCs)",
      "Spoiler Stabilizer Control Units (SSCUs)",
      "Flight Control Computers (FCCs)",
      "Horizontal Stabilizer Trim Control Units (HSTCUs)"
    ],
    "correctAnswer": 2,
    "explanation": "Each yaw damper is controlled by one of the two Flight Control Computers (FCC).",
    "category": "flight-controls"
  },
  {
    "id": "s473",
    "question": "Which of the following is NOT a secondary flight control on the CRJ-700?",
    "choices": [
      "Leading edge slats",
      "Inboard and outboard flaps",
      "Elevators",
      "Multifunction spoilers"
    ],
    "correctAnswer": 2,
    "explanation": "The secondary flight controls include aileron, rudder, and horizontal stab trims; inboard and outboard flaps; leading edge slats; and multifunction spoilers and ground lift dumping devices. Elevators are primary flight controls.",
    "category": "flight-controls"
  },
  {
    "id": "s474",
    "question": "How is aileron trim accomplished?",
    "choices": [
      "Hydraulic actuators adjust the aileron neutral position",
      "An electric motor below the control columns readjusts the center position of the yoke",
      "A trim tab on each aileron is electrically adjusted",
      "The SSCU commands the spoilers to provide trimming"
    ],
    "correctAnswer": 1,
    "explanation": "Aileron trim is accomplished through the aileron trim switches. The switches activate an electric motor located below the control columns. The motor readjusts the center position of the yoke through the use of a connecting rod.",
    "category": "flight-controls"
  },
  {
    "id": "s475",
    "question": "Can yaw damper actuation be felt in the cockpit rudder pedals?",
    "choices": [
      "Yes, it provides direct feedback",
      "Yes, but only at high speeds",
      "No, yaw damper actuation cannot be felt in the rudder pedals",
      "No, but it can be felt in the control column"
    ],
    "correctAnswer": 2,
    "explanation": "Yaw damper actuation cannot be felt in the cockpit rudder pedals.",
    "category": "flight-controls"
  },
  {
    "id": "s476",
    "question": "Stab trim movement is controlled and monitored by which unit?",
    "choices": [
      "Spoiler Stabilizer Control Unit (SSCU)",
      "Flight Control Computer (FCC)",
      "Horizontal Stabilizer Trim Control Unit (HSTCU)",
      "Air Data Computer (ADC)"
    ],
    "correctAnswer": 2,
    "explanation": "All stab trim movement is controlled and monitored by the Horizontal Stabilizer Trim Control Unit (HSTCU).",
    "category": "flight-controls"
  },
  {
    "id": "s477",
    "question": "How many interconnected slat panels are on the leading edge of each wing?",
    "choices": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": 1,
    "explanation": "There are three interconnected slat panels on the leading edge of each wing.",
    "category": "flight-controls"
  },
  {
    "id": "s478",
    "question": "If one flap motor is inoperative, what happens to flap operation?",
    "choices": [
      "Flap operation is completely lost",
      "The flaps will operate at half speed",
      "The flaps will only extend to half the selected position",
      "The backup motor automatically engages at full speed"
    ],
    "correctAnswer": 1,
    "explanation": "If one motor is inoperative, the remaining motor can operate the flaps at half speed.",
    "category": "flight-controls"
  },
  {
    "id": "s479",
    "question": "How many spoiler panels are located on each wing?",
    "choices": [
      "Two",
      "Three",
      "Four",
      "Six"
    ],
    "correctAnswer": 2,
    "explanation": "Four hydraulically actuated spoiler panels are located on each aircraft wing.",
    "category": "flight-controls"
  },
  {
    "id": "s480",
    "question": "Which spoiler panels serve as multifunction spoilers?",
    "choices": [
      "The inboard two panels on each wing",
      "The outboard two panels on each wing",
      "All four panels on each wing",
      "Only the outermost panel on each wing"
    ],
    "correctAnswer": 1,
    "explanation": "The outboard two panels on each wing serve as multifunction spoilers, and the inboard two panels on each wing serve as ground spoilers for lift dumping.",
    "category": "flight-controls"
  },
  {
    "id": "s481",
    "question": "What does the white status message 'YD 1 INOP' indicate?",
    "choices": [
      "Both yaw dampers have failed",
      "Yaw damper 1 is not engaged, but yaw damper 2 is",
      "Yaw damper 1 is engaged, but yaw damper 2 is not",
      "The yaw damper system test has failed"
    ],
    "correctAnswer": 1,
    "explanation": "YD 1 INOP indicates yaw damper 1 is not engaged, but yaw damper 2 is.",
    "category": "general"
  },
  {
    "id": "s482",
    "question": "What does the amber caution message 'YAW DAMPER' indicate?",
    "choices": [
      "One yaw damper has failed",
      "Both yaw dampers are off or they have failed",
      "The yaw damper is operating normally",
      "A yaw damper overspeed condition exists"
    ],
    "correctAnswer": 1,
    "explanation": "The amber caution message YAW DAMPER indicates both yaw dampers are off or they have failed.",
    "category": "flight-controls"
  },
  {
    "id": "s483",
    "question": "Can the stab trim be disengaged using the STAB TRIM CH 1 or CH 2 ENGAGE switchlights?",
    "choices": [
      "Yes, pressing the switchlight will disengage the channel",
      "Yes, but only on the ground",
      "No, the stab trim disconnect switch on the yoke must be used",
      "No, the trim can only be disengaged by the circuit breaker"
    ],
    "correctAnswer": 2,
    "explanation": "No, the stab trim disconnect switch must be used on the yoke.",
    "category": "flight-controls"
  },
  {
    "id": "s484",
    "question": "The emergency flap extension switch will deploy slats and flaps to what position if below 230 KIAS?",
    "choices": [
      "8°",
      "15°",
      "20°",
      "30°"
    ],
    "correctAnswer": 2,
    "explanation": "The DEPLOY position can be used to extend the slats and flaps to 20° if below 230 KIAS.",
    "category": "flight-controls"
  },
  {
    "id": "s485",
    "question": "When the emergency flap switch is returned to NORMAL in flight, what happens?",
    "choices": [
      "The flaps remain locked at 20°",
      "The flaps will return to the handle position",
      "Nothing, the switch is spring-loaded to DEPLOY",
      "The flaps slowly retract over 60 seconds"
    ],
    "correctAnswer": 1,
    "explanation": "The flaps will return to the handle position when NORMAL is selected in flight, but remain locked extended on the ground once DEPLOY has been selected regardless of switch position.",
    "category": "flight-controls"
  },
  {
    "id": "s486",
    "question": "The emergency flap switch will deploy flaps if the airspeed exceeds 230 knots.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. The flaps will not deploy if the airspeed exceeds 230 knots.",
    "category": "flight-controls"
  },
  {
    "id": "s487",
    "question": "If there is a problem with the flap Power Drive Unit (PDU), will the emergency flap switch force the flaps to extend?",
    "choices": [
      "Yes, it bypasses the PDU entirely",
      "Yes, using a backup electric motor",
      "No, it only serves as a backup for the lever itself",
      "No, manual flap extension is required"
    ],
    "correctAnswer": 2,
    "explanation": "No. The emergency flap switch only serves as a backup for the lever itself. It does not bypass the PDU.",
    "category": "flight-controls"
  },
  {
    "id": "s488",
    "question": "If the autopilot/stick pusher DISC button is held for more than four seconds, what EICAS message is expected?",
    "choices": [
      "AP FAIL",
      "STALL FAIL",
      "PUSHER DISC",
      "PITCH TRIM FAIL"
    ],
    "correctAnswer": 1,
    "explanation": "The STALL FAIL caution message would illuminate. After the switch is released, the message will extinguish.",
    "category": "eicas"
  },
  {
    "id": "s489",
    "question": "When the PITCH DISC handle is pulled, the captain controls which elevator?",
    "choices": [
      "Both elevators",
      "The left elevator",
      "The right elevator",
      "Neither elevator"
    ],
    "correctAnswer": 1,
    "explanation": "Pulling and turning causes a separation of the two control columns beneath the floor at the torque tube. The captain will have control of the left elevator, and the first officer will have control of the right elevator.",
    "category": "flight-controls"
  },
  {
    "id": "s490",
    "question": "When the ROLL DISC handle is pulled, the captain controls which aileron?",
    "choices": [
      "Both ailerons",
      "The left aileron",
      "The right aileron",
      "Neither aileron"
    ],
    "correctAnswer": 1,
    "explanation": "Pulling and turning causes the separation of the two control yokes. The captain will have control of the left aileron, and the first officer will have control of the right aileron.",
    "category": "flight-controls"
  },
  {
    "id": "s491",
    "question": "Which hydraulic systems power the flight controls?",
    "choices": [
      "Systems 1 and 2 only",
      "Systems 1 and 3 only",
      "Systems 2 and 3 only",
      "All three hydraulic systems"
    ],
    "correctAnswer": 3,
    "explanation": "All three hydraulic systems provide power to the flight controls.",
    "category": "flight-controls"
  },
  {
    "id": "s492",
    "question": "The rudder travel limiter restricts rudder movement from what range based on airspeed and flap position?",
    "choices": [
      "25° to 2°",
      "30° to 5°",
      "33° to 4°",
      "40° to 6°"
    ],
    "correctAnswer": 2,
    "explanation": "The rudder travel limiter restricts rudder movement to prevent excessive tail loading at high speeds. Rudder travel will be restricted from 33° to 4° based on flap position and airspeed.",
    "category": "flight-controls"
  },
  {
    "id": "s493",
    "question": "What provides gust lock protection on the ground?",
    "choices": [
      "Mechanical gust locks installed by maintenance",
      "Residual hydraulic pressure trapped by check valves in the PCUs",
      "Electric actuator locks in each control surface",
      "The parking brake system"
    ],
    "correctAnswer": 1,
    "explanation": "Residual hydraulic pressure trapped by check valves in the PCUs provides gust lock protection on the ground.",
    "category": "general"
  },
  {
    "id": "s494",
    "question": "Which control wheel is the autopilot roll servo connected to?",
    "choices": [
      "The captain's",
      "The first officer's",
      "Both",
      "Neither, it connects to the SSCU"
    ],
    "correctAnswer": 1,
    "explanation": "The autopilot roll servo is connected to the first officer's control wheel.",
    "category": "autoflight"
  },
  {
    "id": "s495",
    "question": "Which control column is the autopilot pitch servo connected to?",
    "choices": [
      "The captain's",
      "The first officer's",
      "Both",
      "Neither, it connects to the FCC"
    ],
    "correctAnswer": 0,
    "explanation": "The autopilot pitch servo is connected to the captain's control column.",
    "category": "autoflight"
  },
  {
    "id": "s496",
    "question": "What indication will be present with a PCU runaway?",
    "choices": [
      "A red FLIGHT CONTROLS warning on EICAS",
      "One of the two green ROLL SEL lights will be illuminated",
      "An aural warning will sound",
      "The autopilot will automatically engage"
    ],
    "correctAnswer": 1,
    "explanation": "One of the two green roll select lights will be illuminated during a PCU runaway.",
    "category": "flight-controls"
  },
  {
    "id": "s497",
    "question": "When the aileron trim is in the normal range on the ground, what color is it displayed in?",
    "choices": [
      "White",
      "Green",
      "Cyan",
      "Amber"
    ],
    "correctAnswer": 1,
    "explanation": "Green. It will turn white when moved out of the normal range.",
    "category": "flight-controls"
  },
  {
    "id": "s498",
    "question": "What color is the aileron trim displayed in during flight?",
    "choices": [
      "Green",
      "White",
      "Cyan",
      "Amber"
    ],
    "correctAnswer": 1,
    "explanation": "White, regardless of trim position during flight.",
    "category": "flight-controls"
  },
  {
    "id": "s499",
    "question": "Where do the yaw dampers receive their data from?",
    "choices": [
      "Both receive data from FCC 1",
      "Both receive data from FCC 2",
      "YD 1 from FCC 1, and YD 2 from FCC 2",
      "YD 1 from FCC 2, and YD 2 from FCC 1"
    ],
    "correctAnswer": 2,
    "explanation": "YD 1 receives data from FCC 1, and YD 2 receives data from FCC 2.",
    "category": "flight-controls"
  },
  {
    "id": "s500",
    "question": "What do the yaw dampers do?",
    "choices": [
      "They provide nose wheel steering augmentation",
      "They improve lateral stability and alleviate dutch roll",
      "They limit rudder travel at high speed",
      "They provide pitch trim assistance"
    ],
    "correctAnswer": 1,
    "explanation": "They improve lateral stability, and alleviate dutch roll.",
    "category": "flight-controls"
  },
  {
    "id": "s501",
    "question": "When the PITCH DISC handle is pulled, will the autopilot be available?",
    "choices": [
      "Yes, it will continue to function normally",
      "Yes, but only for roll control",
      "No, because the autopilot pitch servo is on the captain's side",
      "No, the autopilot automatically disengages when any DISC handle is pulled"
    ],
    "correctAnswer": 2,
    "explanation": "The autopilot may not be available because the autopilot servo for pitch control is located on the captain's side.",
    "category": "autoflight"
  },
  {
    "id": "s502",
    "question": "After the ROLL DISC handle is pulled, each yoke controls the opposite side's:",
    "choices": [
      "Aileron",
      "Elevator",
      "Multifunction spoilers",
      "Ground spoilers"
    ],
    "correctAnswer": 2,
    "explanation": "The left yoke controls the left aileron, and the right yoke controls the right aileron. Each yoke controls the opposite side's multifunction spoilers.",
    "category": "flight-controls"
  },
  {
    "id": "s503",
    "question": "After the ROLL DISC handle is pulled, will the autopilot be available?",
    "choices": [
      "Yes, it continues to function normally",
      "Yes, but only for pitch control",
      "No, because the autopilot roll servo is on the first officer's side",
      "No, all autopilot servos disconnect with the ROLL DISC handle"
    ],
    "correctAnswer": 2,
    "explanation": "The autopilot may not be available because the autopilot servo for roll control is located on the first officer's side.",
    "category": "autoflight"
  },
  {
    "id": "s504",
    "question": "How many PCUs power the rudder?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "explanation": "Three PCUs power the rudder.",
    "category": "flight-controls"
  },
  {
    "id": "s505",
    "question": "If the rudder is jammed, how can control be regained?",
    "choices": [
      "The ROLL DISC handle must be pulled",
      "Increasing pressure on the rudder pedals activates the bungee breakout system",
      "The yaw dampers will automatically override the jam",
      "The rudder trim must be used to center the rudder"
    ],
    "correctAnswer": 1,
    "explanation": "Increasing the pressure on the rudder pedals will cause the bungee breakout system to be activated and control can be regained.",
    "category": "flight-controls"
  },
  {
    "id": "s506",
    "question": "How many stab trim motors are active at one time?",
    "choices": [
      "One; the other free-wheels and takes over if the operating motor fails",
      "Two; both drive the jackscrew simultaneously",
      "Two; one for nose up and one for nose down",
      "Three; for redundancy"
    ],
    "correctAnswer": 0,
    "explanation": "Only one motor drives the jackscrew at a time. The other motor free wheels with the operative motor, and assumes control if the operating motor fails.",
    "category": "flight-controls"
  },
  {
    "id": "s507",
    "question": "Will the autopilot disengage if manual control yoke trim is used?",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, the autopilot will disengage if manual control yoke trim is used.",
    "category": "autoflight"
  },
  {
    "id": "s508",
    "question": "What is the correct order of trim priority (highest to lowest)?",
    "choices": [
      "Autopilot, Manual, Mach, Auto",
      "Manual, Autopilot, Auto (flap compensation), Mach",
      "Manual, Auto, Autopilot, Mach",
      "Mach, Manual, Autopilot, Auto"
    ],
    "correctAnswer": 1,
    "explanation": "The trim priority order is: Manual trim (captain's has priority), Autopilot trim, Auto trim (flap compensation trim), Mach trim.",
    "category": "general"
  },
  {
    "id": "s509",
    "question": "What protection is provided in the event of a stab trim runaway?",
    "choices": [
      "The FCCs disconnect the trim motors",
      "The HSTCU reverses the trim",
      "Stab trim brakes controlled by the SSCUs",
      "Circuit breakers automatically trip"
    ],
    "correctAnswer": 2,
    "explanation": "Stab trim brakes controlled by the SSCUs provide protection in the event of a stab trim runaway.",
    "category": "flight-controls"
  },
  {
    "id": "s510",
    "question": "What is auto trim (flap compensation trim)?",
    "choices": [
      "Automatic roll trim based on fuel imbalance",
      "Trim that compensates for changes in pitch associated with flap extension or retraction",
      "Automatic rudder trim for engine-out conditions",
      "Trim that adjusts for mach tuck at high speed"
    ],
    "correctAnswer": 1,
    "explanation": "Auto trim compensates for changes in aircraft pitch associated with flap extension or retraction. It is also known as flap compensation trim.",
    "category": "flight-controls"
  },
  {
    "id": "s511",
    "question": "What is the purpose of the split switch on the control yoke for stab trim?",
    "choices": [
      "It allows the captain and first officer to trim independently",
      "It provides faster trim rates when both halves are engaged",
      "Both halves must be moved together; if one jams, the trim motors will not run",
      "It separates nose-up and nose-down trim commands"
    ],
    "correctAnswer": 2,
    "explanation": "Both halves of the switch must be moved together to engage the trim motors. If one half of the switch jams, the trim motors will not run.",
    "category": "flight-controls"
  },
  {
    "id": "s512",
    "question": "The alternate flap extension switch will override the position of the flap handle.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, the alternate flap extension switch will override the position of the flap handle.",
    "category": "flight-controls"
  },
  {
    "id": "s513",
    "question": "Will the stick pusher engage if only one of the two gated switches is armed?",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No. Both captain's and first officer's switches must be on to arm the stick pusher.",
    "category": "flight-controls"
  },
  {
    "id": "s514",
    "question": "If the ground spoilers fail to deploy after touchdown, what action can be taken?",
    "choices": [
      "Pull the flight spoiler lever to full aft",
      "Move the GND LIFT DUMPING switch to MAN ARM",
      "Press the SSCU reset button",
      "Cycle the landing gear handle"
    ],
    "correctAnswer": 1,
    "explanation": "Move the GND LIFT DUMPING switch to MAN ARM.",
    "category": "flight-controls"
  },
  {
    "id": "s515",
    "question": "What protects the flight controls in the event of a PCU runaway?",
    "choices": [
      "Flutter dampers",
      "Bungee breakouts",
      "Automatic PCU shutdown",
      "The SSCUs disconnect the affected PCU"
    ],
    "correctAnswer": 1,
    "explanation": "Bungee breakouts protect the flight controls in the event of a PCU runaway.",
    "category": "flight-controls"
  },
  {
    "id": "s516",
    "question": "What protects the ailerons from flutter in the event of a loss of pressure to the PCUs?",
    "choices": [
      "Bungee breakouts",
      "Flutter dampers",
      "Mechanical locks engage",
      "The SSCUs increase spoiler authority"
    ],
    "correctAnswer": 1,
    "explanation": "Flutter dampers protect the ailerons from flutter in the event of a loss of pressure to the PCUs.",
    "category": "flight-controls"
  },
  {
    "id": "s517",
    "question": "The slats and flaps are powered by:",
    "choices": [
      "Hydraulic system 1",
      "Hydraulic systems 2 and 3",
      "Two electric motors controlled by SFECUs",
      "A pneumatic drive unit"
    ],
    "correctAnswer": 2,
    "explanation": "Two electric motors, each controlled by two Slat/Flap Electronic Control Units (SFECUs).",
    "category": "flight-controls"
  },
  {
    "id": "s518",
    "question": "If one slat or flap motor fails, what happens?",
    "choices": [
      "Slat/flap operation is completely lost",
      "The slats or flaps will operate at half speed",
      "An alternate extension system activates",
      "The remaining motor operates at increased speed"
    ],
    "correctAnswer": 1,
    "explanation": "The slats or flaps will operate at half speed.",
    "category": "flight-controls"
  },
  {
    "id": "s519",
    "question": "What is the elevator travel range?",
    "choices": [
      "20° up and 15° down",
      "23° up and 18° down",
      "25° up and 20° down",
      "30° up and 22° down"
    ],
    "correctAnswer": 1,
    "explanation": "23 degrees up and 18 degrees down.",
    "category": "flight-controls"
  },
  {
    "id": "s520",
    "question": "Where is rudder or aileron mistrim indicated?",
    "choices": [
      "As an EICAS caution message",
      "On the MFD synoptic page",
      "As a boxed R or A on the PFD",
      "On the overhead annunciator panel"
    ],
    "correctAnswer": 2,
    "explanation": "It will be indicated as a boxed R or A on the PFD.",
    "category": "flight-controls"
  },
  {
    "id": "s521",
    "question": "When do the spoilers retract after landing?",
    "choices": [
      "Twenty seconds after weight on wheels",
      "Thirty seconds after weight on wheels",
      "Forty seconds after weight on wheels",
      "Sixty seconds after weight on wheels"
    ],
    "correctAnswer": 2,
    "explanation": "Forty seconds after weight on wheels.",
    "category": "flight-controls"
  },
  {
    "id": "s522",
    "question": "Which of the following is the correct order of stall protection warnings as angle of attack increases?",
    "choices": [
      "Shaker, pusher, continuous ignition, autopilot disengages",
      "Continuous ignition, autopilot disengages, shaker, pusher",
      "Autopilot disengages, shaker, continuous ignition, pusher",
      "Shaker, continuous ignition, autopilot disengages, pusher"
    ],
    "correctAnswer": 1,
    "explanation": "Continuous ignition, autopilot disengages, shaker, pusher, glare-shield lights, and finally the audio warbler.",
    "category": "flight-controls"
  },
  {
    "id": "s523",
    "question": "What does the GLD UNSAFE caution message indicate?",
    "choices": [
      "The ground lift dumping system has failed",
      "Ground lift dumping may occur inadvertently if not manually disarmed",
      "The spoiler panels are damaged",
      "The GND LIFT DUMPING switch is in MAN ARM"
    ],
    "correctAnswer": 1,
    "explanation": "It indicates ground lift dumping may occur inadvertently if the system is not manually disarmed.",
    "category": "flight-controls"
  },
  {
    "id": "s524",
    "question": "Fire and overheat detection in the engine and APU compartments is accomplished through:",
    "choices": [
      "Single heat-sensitive wire loops",
      "Dual heat-sensitive wire loops",
      "Infrared sensors",
      "Smoke detectors"
    ],
    "correctAnswer": 1,
    "explanation": "Fire and overheat detection is accomplished in the engine and APU compartments through dual heat-sensitive wire loops.",
    "category": "fire"
  },
  {
    "id": "s525",
    "question": "How many smoke detectors are in the forward cargo compartment?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "explanation": "The forward cargo compartment houses three smoke detectors, and the aft cargo houses two.",
    "category": "fire"
  },
  {
    "id": "s526",
    "question": "How many smoke detectors are in the aft cargo compartment?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "The forward cargo compartment houses three smoke detectors, and the aft cargo houses two.",
    "category": "fire"
  },
  {
    "id": "s527",
    "question": "The main landing gear bay is protected by what type of detection system?",
    "choices": [
      "Dual loop fire detection",
      "Single loop overheat detection",
      "Smoke detectors",
      "Infrared heat sensors"
    ],
    "correctAnswer": 1,
    "explanation": "The main landing gear bay is protected by a single loop overheat detection system.",
    "category": "landing-gear"
  },
  {
    "id": "s528",
    "question": "Which unit continuously monitors the fire and overheat detectors?",
    "choices": [
      "Fire Control Computer (FCC)",
      "Smoke Detection Unit (SDU)",
      "Fire Detection and Extinguishing (FIDEX) unit",
      "Engine Monitoring Unit (EMU)"
    ],
    "correctAnswer": 2,
    "explanation": "The Fire Detection and Extinguishing (FIDEX) unit continuously monitors the various detectors, and provides EICAS messages and aural warnings to the crew as necessary.",
    "category": "fire"
  },
  {
    "id": "s529",
    "question": "How many halon bottles are used for engine fire extinguishing?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Fire extinguishing is accomplished for the engine compartments through the use of two halon bottles.",
    "category": "fire"
  },
  {
    "id": "s530",
    "question": "How many halon bottles are shared by the forward and aft cargo compartments?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Two halon bottles are shared by the forward and aft cargo compartments; however, they must both be used in the same compartment.",
    "category": "fire"
  },
  {
    "id": "s531",
    "question": "The two cargo fire bottles can be split between the forward and aft compartments.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "Two halon bottles are shared by the forward and aft cargo compartments; however, they must both be used in the same compartment.",
    "category": "fire"
  },
  {
    "id": "s532",
    "question": "How many portable halon extinguishers are located in the cabin?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "explanation": "Four portable halon extinguishers are located throughout the aircraft, three in the cabin, and one on the flight deck.",
    "category": "fire"
  },
  {
    "id": "s533",
    "question": "When the engine FIRE PUSH switch is pressed, which of the following does NOT occur? (Remember 'Big Haf')",
    "choices": [
      "The engine bleed PRSOV is closed",
      "The engine fuel SOV is closed",
      "The engine fire bottles are discharged",
      "The engine generator is disconnected"
    ],
    "correctAnswer": 2,
    "explanation": "When pressed: B - Bleed PRSOV closed, I - Igniters inhibited, G - Generator disconnected, H - Hydraulic SOV closed, A - fire bottles Armed (not discharged), F - Fuel SOV closed. The bottles must be separately discharged.",
    "category": "fire"
  },
  {
    "id": "s534",
    "question": "Pressing the engine FIRE PUSH switch does which of the following to the igniters?",
    "choices": [
      "Activates continuous ignition",
      "Inhibits the igniters",
      "No effect on igniters",
      "Arms the igniters for relight"
    ],
    "correctAnswer": 1,
    "explanation": "When the engine FIRE PUSH switch is pressed: I - Ignition, the igniters are inhibited.",
    "category": "fire"
  },
  {
    "id": "s535",
    "question": "Can both engine fire bottles be discharged into the same engine?",
    "choices": [
      "No, each bottle is dedicated to one engine",
      "No, one bottle must be reserved for the APU",
      "Yes, both can be used in one engine",
      "Yes, but only if the other engine is not running"
    ],
    "correctAnswer": 2,
    "explanation": "The APU bottle can only be fired into the APU, and the engine bottles can only be fired into the engines. Both can be used in one engine.",
    "category": "fire"
  },
  {
    "id": "s536",
    "question": "When the APU FIRE PUSH switch is pressed, which of the following occurs? (Remember 'Gaspl')",
    "choices": [
      "The APU bleed valve opens",
      "The APU fuel pump turns off",
      "The APU fire bottle discharges",
      "The APU starts an automatic relight sequence"
    ],
    "correctAnswer": 1,
    "explanation": "When pressed: G - Generator trips off line, A - fire bottle Armed, S - APU fuel SOV closed, P - APU fuel Pump turns off, L - APU Load Control Valve closes.",
    "category": "fire"
  },
  {
    "id": "s537",
    "question": "During the FIREX monitor test, how many red lights should illuminate?",
    "choices": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "During the test, all fire zone switchlights illuminate. There will be 7 red lights and 5 green lights.",
    "category": "fire"
  },
  {
    "id": "s538",
    "question": "During the FIREX monitor test, how many green lights should illuminate?",
    "choices": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "During the test, there will be 7 red lights and 5 green lights. The FIRE SYS OK advisory message is counted as the fifth green light.",
    "category": "fire"
  },
  {
    "id": "s539",
    "question": "Where is the FIRE SYS OK advisory message displayed after a successful FIREX test?",
    "choices": [
      "ED1",
      "ED2",
      "PFD",
      "The FIREX monitor panel"
    ],
    "correctAnswer": 1,
    "explanation": "The FIRE SYS OK advisory message is displayed on ED2 and is only displayed after a successful system test.",
    "category": "fire"
  },
  {
    "id": "s540",
    "question": "When the AFT CARGO SMOKE PUSH switchlight is pressed, what happens in addition to arming the cargo fire bottle?",
    "choices": [
      "The forward cargo heater turns off",
      "The aft cargo heater turns off and the air conditioning shutoff valve closes",
      "All cargo compartment lights turn off",
      "The recirculation fans shut down"
    ],
    "correctAnswer": 1,
    "explanation": "When pressed: The cargo fire bottle is armed, the aft cargo heater turns off, and the air conditioning shutoff valve closes.",
    "category": "fire"
  },
  {
    "id": "s541",
    "question": "How does the lavatory fire extinguisher work?",
    "choices": [
      "A smoke detector triggers an automatic spray system",
      "A halon bottle in the trash bin is sealed with a heat-sensitive plug that melts in a fire",
      "A water sprinkler system activates",
      "The crew must manually discharge the extinguisher"
    ],
    "correctAnswer": 1,
    "explanation": "A halon bottle is located in the trash bin. It is sealed with a heat sensitive plug. Heat from a fire will burn through the plug and release the halon into the trash bin.",
    "category": "fire"
  },
  {
    "id": "s542",
    "question": "Is there a way to test the smoke detector in the lavatory?",
    "choices": [
      "No, it cannot be tested",
      "Yes, by pressing a button on the ceiling-mounted detector",
      "Yes, by pressing the FIREX TEST button on the flight deck",
      "Yes, by removing the detector cover"
    ],
    "correctAnswer": 1,
    "explanation": "Yes, a pushbutton is located on the detector mounted on the ceiling. When pressed, the SMOKE AFT LAV warning message illuminates on ED1.",
    "category": "fire"
  },
  {
    "id": "s543",
    "question": "Will the APU shut down automatically on the ground for a fire?",
    "choices": [
      "No, the crew must manually shut it down",
      "Yes, but the fire bottle must be manually discharged",
      "Yes, and the extinguishing bottle will fire five seconds later",
      "Yes, and the extinguishing bottle fires immediately"
    ],
    "correctAnswer": 2,
    "explanation": "Yes, the APU will shutdown automatically on the ground for a fire, and the extinguishing bottle will fire five seconds later.",
    "category": "fire"
  },
  {
    "id": "s544",
    "question": "Will the APU shut down automatically in flight for a fire?",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, the APU will shut down automatically in flight.",
    "category": "fire"
  },
  {
    "id": "s545",
    "question": "Will the APU extinguishing bottle fire automatically in flight?",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No, the APU extinguishing bottle will not fire automatically in flight.",
    "category": "fire"
  },
  {
    "id": "s546",
    "question": "How many engine fire detection loops are there?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "There are two engine fire detection loops.",
    "category": "fire"
  },
  {
    "id": "s547",
    "question": "How many fire detection loops are in the APU?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "There are two fire detection loops in the APU.",
    "category": "fire"
  },
  {
    "id": "s548",
    "question": "A flight can be dispatched with one engine or APU fire detection loop inoperative.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, a flight can be dispatched with one engine or APU fire detection loop inoperative.",
    "category": "fire"
  },
  {
    "id": "s549",
    "question": "How many overheat detection loops are in the main landing gear bay?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 0,
    "explanation": "There is one overheat detection loop in the main landing gear bay.",
    "category": "landing-gear"
  },
  {
    "id": "s550",
    "question": "If a cargo fire is extinguished with the cargo bottle in the forward compartment, what can be done for a subsequent fire in the aft compartment?",
    "choices": [
      "Use the second cargo bottle",
      "Use a portable extinguisher",
      "Nothing; a landing should be made as soon as possible",
      "Depressurize the aft cargo compartment"
    ],
    "correctAnswer": 2,
    "explanation": "Nothing. A landing should be made as soon as possible since both cargo bottles must be used in the same compartment.",
    "category": "fire"
  },
  {
    "id": "s551",
    "question": "Why are there two cargo fire bottles if they can only be used in one compartment?",
    "choices": [
      "One is a spare in case the first fails",
      "One extinguishes the fire and the other releases slowly over 60 minutes for suppression",
      "One is for halon and the other is for water mist",
      "They are designed to be used sequentially 10 minutes apart"
    ],
    "correctAnswer": 1,
    "explanation": "One bottle is used to extinguish the fire, and the other bottle is released slowly over 60 minutes to suppress the fire until landing.",
    "category": "fire"
  },
  {
    "id": "s552",
    "question": "Why must the aircraft fly within 60 minutes of a suitable airport while carrying cargo?",
    "choices": [
      "Due to cargo compartment pressurization limitations",
      "Due to cargo weight and balance restrictions",
      "The fire extinguishing system provides 60 minutes of fire suppression",
      "Regulatory requirement for all cargo operations"
    ],
    "correctAnswer": 2,
    "explanation": "The fire extinguishing system provides 60 minutes of fire suppression.",
    "category": "general"
  },
  {
    "id": "s553",
    "question": "What is the restriction for use of the portable halon extinguisher on the flight deck?",
    "choices": [
      "The aircraft must be below 10,000 feet",
      "Both pilots must wear their oxygen masks selected at 100%",
      "The cockpit door must be closed",
      "The autopilot must be engaged"
    ],
    "correctAnswer": 1,
    "explanation": "Both pilots must wear their oxygen masks selected at 100%.",
    "category": "fire"
  },
  {
    "id": "s554",
    "question": "How does halon work to fight a fire?",
    "choices": [
      "It cools the fire below ignition temperature",
      "It creates a foam barrier between the fire and fuel",
      "It eliminates oxygen in the air causing the fire to suffocate",
      "It chemically neutralizes the fuel source"
    ],
    "correctAnswer": 2,
    "explanation": "Halon eliminates oxygen in the air causing the fire to suffocate.",
    "category": "fire"
  },
  {
    "id": "s555",
    "question": "How do the fire detection loops work?",
    "choices": [
      "They detect smoke particles passing through the loop",
      "Heat causes insulation to allow current flow from inner wire to outer conductor, completing the circuit",
      "Thermocouples measure temperature changes in the compartment",
      "Infrared sensors in the loop detect heat radiation"
    ],
    "correctAnswer": 1,
    "explanation": "The fire loops consist of an inner wire surrounded by a heat sensitive insulator wrapped in a stainless steel outer conductor. As the loops are heated, the heat sensitive insulation allows an electrical current to pass from the inner wire to the outer stainless steel wrapping completing the electrical circuit.",
    "category": "fire"
  },
  {
    "id": "s556",
    "question": "How long must the FIREX monitor TEST button be held to test the system?",
    "choices": [
      "1 second",
      "2 seconds",
      "3 seconds",
      "5 seconds"
    ],
    "correctAnswer": 1,
    "explanation": "Press and hold for 2 seconds to test the FIDEX system.",
    "category": "fire"
  },
  {
    "id": "s557",
    "question": "What effect does a loss of hydraulic systems 2 and 3 have on the landing gear?",
    "choices": [
      "Normal gear extension is still available via system 1",
      "Manual gear extension is required, and the nose gear will not extend",
      "All gear will freefall to the extended position",
      "Only the main gear will extend normally"
    ],
    "correctAnswer": 1,
    "explanation": "Manual gear extension is required, and the nose gear will not extend.",
    "category": "landing-gear"
  },
  {
    "id": "s558",
    "question": "How is hydraulic pump 3B powered in the event of a total electrical failure?",
    "choices": [
      "Battery power",
      "The Ram Air Turbine (RAT)",
      "The Air Driven Generator (ADG)",
      "It cannot be powered without normal electrical"
    ],
    "correctAnswer": 2,
    "explanation": "The ADG powers hydraulic pump 3B in the event of a total electrical failure.",
    "category": "hydraulics"
  },
  {
    "id": "s559",
    "question": "The BTMS overheat range is indicated in red and corresponds to values between:",
    "choices": [
      "10 and 15",
      "12 and 18",
      "15 and 20",
      "18 and 25"
    ],
    "correctAnswer": 2,
    "explanation": "Red indicates overheat range between 15 and 20 on the Brake Temperature Monitoring System.",
    "category": "landing-gear"
  },
  {
    "id": "s560",
    "question": "How many electric motors are within the flap Power Drive Unit (PDU)?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Moving the slat/flap handle will activate the Power Drive Unit (PDU) which drives the flaps to the selected position. This is accomplished by two electric motors within the PDU.",
    "category": "flight-controls"
  },
  {
    "id": "s561",
    "question": "On the ground, after the emergency flap DEPLOY switch has been selected, what happens when it is returned to NORMAL?",
    "choices": [
      "The flaps retract to the handle position",
      "The flaps remain locked extended regardless of switch position",
      "The flaps slowly retract over 30 seconds",
      "The flaps retract only if the flap handle is at 0"
    ],
    "correctAnswer": 1,
    "explanation": "The flaps will return to the handle position when NORMAL is selected in flight, but remain locked extended on the ground once DEPLOY has been selected regardless of switch position.",
    "category": "flight-controls"
  },
  {
    "id": "s562",
    "question": "What is the capacity of the crew oxygen bottle on the CRJ-700?",
    "choices": [
      "49 cubic feet",
      "115 cubic feet",
      "67 cubic feet",
      "77 cubic feet"
    ],
    "correctAnswer": 3,
    "explanation": "The aircraft is equipped with a 77 cubic foot oxygen bottle tied to three quick donning oxygen masks that serve the flight deck and all its occupants.",
    "category": "oxygen"
  },
  {
    "id": "s563",
    "question": "How many quick donning oxygen masks serve the flight deck?",
    "choices": [
      "Two",
      "Three",
      "Five",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "The aircraft is equipped with a 77 cubic foot oxygen bottle tied to three quick donning oxygen masks that serve the flight deck and all its occupants.",
    "category": "oxygen"
  },
  {
    "id": "s564",
    "question": "The main cabin and lavatory are served by what type of oxygen supply?",
    "choices": [
      "A system of oxygen generators",
      "Bleed air oxygen converters",
      "A centralized oxygen bottle",
      "Individual portable oxygen bottles"
    ],
    "correctAnswer": 0,
    "explanation": "The main cabin and lavatory are served by a system of oxygen generators.",
    "category": "oxygen"
  },
  {
    "id": "s565",
    "question": "At what cabin altitude do the passenger oxygen masks automatically deploy?",
    "choices": [
      "14,000 feet",
      "12,500 feet",
      "18,000 feet",
      "10,000 feet"
    ],
    "correctAnswer": 0,
    "explanation": "The Cabin Pressure Acquisition Module (CPAM) commands the passenger oxygen masks to deploy when the cabin altitude exceeds 14,000 feet.",
    "category": "oxygen"
  },
  {
    "id": "s566",
    "question": "What system controls the automatic deployment of passenger oxygen masks?",
    "choices": [
      "Air Data Computer (ADC)",
      "Flight Control Computer (FCC)",
      "Environmental Control System (ECS)",
      "Cabin Pressure Acquisition Module (CPAM)"
    ],
    "correctAnswer": 3,
    "explanation": "The Cabin Pressure Acquisition Module (CPAM) commands the passenger oxygen masks to deploy when the cabin altitude exceeds 14,000 feet.",
    "category": "oxygen"
  },
  {
    "id": "s567",
    "question": "When the PRESS TO TEST AND RESET lever is pressed on the crew oxygen mask, what indicates a successful test?",
    "choices": [
      "An audible tone sounds",
      "The OXY ON flag drops into view",
      "A green LED illuminates",
      "The yellow crossed blinker displays in the upper left corner of the mask box"
    ],
    "correctAnswer": 3,
    "explanation": "When pressed, oxygen will momentarily flow through the regulator causing the yellow crossed blinker to display in the upper left corner of the mask box. This indicates a successful test.",
    "category": "oxygen"
  },
  {
    "id": "s568",
    "question": "The white OXY ON flag on the crew oxygen mask indicates that:",
    "choices": [
      "The oxygen bottle is empty",
      "The mask has failed its test",
      "The oxygen shutoff valve is open",
      "The mask is properly stowed"
    ],
    "correctAnswer": 2,
    "explanation": "The white OXY ON flag comes into view when the mask is removed. It indicates the oxygen shutoff valve is open.",
    "category": "oxygen"
  },
  {
    "id": "s569",
    "question": "At what cabin altitude will the crew oxygen masks automatically provide 100% undiluted oxygen regardless of switch position?",
    "choices": [
      "35,000 feet",
      "14,000 feet",
      "30,000 feet",
      "25,000 feet"
    ],
    "correctAnswer": 2,
    "explanation": "When pressed down, the oxygen mask will provide 100% undiluted oxygen. This occurs automatically when the cabin altitude exceeds 30,000 feet.",
    "category": "oxygen"
  },
  {
    "id": "s570",
    "question": "What color does the PASS OXY switchlight illuminate when pressed or when masks have deployed automatically?",
    "choices": [
      "Green",
      "Amber",
      "White",
      "Blue"
    ],
    "correctAnswer": 2,
    "explanation": "The switchlight will illuminate white when pressed. It will also illuminate white when the masks have deployed automatically.",
    "category": "oxygen"
  },
  {
    "id": "s571",
    "question": "Where is crew oxygen bottle pressure read?",
    "choices": [
      "The oxygen control panel",
      "The EICAS primary display",
      "The status page on ED2",
      "The synoptic page on ED1"
    ],
    "correctAnswer": 2,
    "explanation": "The status page on ED2.",
    "category": "oxygen"
  },
  {
    "id": "s572",
    "question": "What is the minimum crew oxygen bottle pressure authorized for dispatch with 3 flight deck crew?",
    "choices": [
      "1110 psi",
      "960 psi",
      "1250 psi",
      "810 psi"
    ],
    "correctAnswer": 0,
    "explanation": "1110 psi (Confirm with airline operating manuals).",
    "category": "oxygen"
  },
  {
    "id": "s573",
    "question": "What is the minimum crew oxygen bottle pressure authorized for dispatch with 2 flight deck crew?",
    "choices": [
      "960 psi",
      "810 psi",
      "650 psi",
      "1110 psi"
    ],
    "correctAnswer": 1,
    "explanation": "810 psi (Confirm with airline operating manuals).",
    "category": "oxygen"
  },
  {
    "id": "s574",
    "question": "At what pressure will the OXY LO PRESS caution message appear?",
    "choices": [
      "1110 psi",
      "1050 psi",
      "960 psi",
      "810 psi"
    ],
    "correctAnswer": 2,
    "explanation": "960 psi.",
    "category": "oxygen"
  },
  {
    "id": "s575",
    "question": "Besides the status page on ED2, where else can crew oxygen bottle pressure be read?",
    "choices": [
      "On the overhead panel gauge",
      "On the EICAS secondary display",
      "On the FMS maintenance page",
      "Outside the aircraft on the oxygen service panel"
    ],
    "correctAnswer": 3,
    "explanation": "Outside the aircraft on the oxygen service panel.",
    "category": "eicas"
  },
  {
    "id": "s576",
    "question": "The exterior oxygen pressure gauge is factory calibrated and does not require correction for non-standard temperatures.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No, a correction chart must be used for non-standard temperature.",
    "category": "oxygen"
  },
  {
    "id": "s577",
    "question": "Where is the crew oxygen bottle located?",
    "choices": [
      "Immediately inside the main cabin door behind a vented access panel on the left",
      "Under the cockpit floor",
      "In the aft equipment bay",
      "In the forward cargo compartment"
    ],
    "correctAnswer": 0,
    "explanation": "Immediately inside the main cabin door behind a vented access panel on the left (aircraft front).",
    "category": "oxygen"
  },
  {
    "id": "s578",
    "question": "How many minutes of oxygen are provided by the passenger oxygen generators?",
    "choices": [
      "22 minutes",
      "10 minutes",
      "15 minutes",
      "13 minutes"
    ],
    "correctAnswer": 3,
    "explanation": "13 minutes.",
    "category": "oxygen"
  },
  {
    "id": "s579",
    "question": "What is important to remember about the passenger oxygen generators regarding safety?",
    "choices": [
      "They produce an extreme amount of heat and can reach 500°F",
      "They must be manually reset after activation",
      "They produce toxic fumes when activated",
      "They require external electrical power to function"
    ],
    "correctAnswer": 0,
    "explanation": "They produce an extreme amount of heat and are able to reach 500°F.",
    "category": "oxygen"
  },
  {
    "id": "s580",
    "question": "How many walk-around oxygen bottles are there, and where are they located?",
    "choices": [
      "Two: both in the forward galley area",
      "Three: one forward, one mid-cabin, one aft",
      "One in the cockpit",
      "Two: one in the forward cabin and one in an aft cabin overhead bin"
    ],
    "correctAnswer": 3,
    "explanation": "Two: one in the forward cabin, and one in an aft cabin overhead bin.",
    "category": "oxygen"
  },
  {
    "id": "s581",
    "question": "How many passenger oxygen masks are there in each row on either side of the aisle?",
    "choices": [
      "Three",
      "Four",
      "Two",
      "Five"
    ],
    "correctAnswer": 0,
    "explanation": "Each row has 3 masks on both sides of the aisle.",
    "category": "oxygen"
  },
  {
    "id": "s582",
    "question": "How many Protective Breathing Equipment (PBE) units are on the aircraft?",
    "choices": [
      "Two",
      "Three",
      "Six",
      "Four"
    ],
    "correctAnswer": 3,
    "explanation": "Four.",
    "category": "oxygen"
  },
  {
    "id": "s583",
    "question": "At what pressure will the oxygen blowout disc rupture?",
    "choices": [
      "1,500 PSI",
      "2,500 PSI",
      "2,000 PSI",
      "3,000 PSI"
    ],
    "correctAnswer": 1,
    "explanation": "An oxygen blowout disc on the left nose of the aircraft will rupture if pressure within the oxygen system rises over 2,500 PSI.",
    "category": "oxygen"
  },
  {
    "id": "s584",
    "question": "Where is the oxygen blowout disc located?",
    "choices": [
      "On the left nose of the aircraft",
      "On the belly of the aircraft",
      "On the tail section",
      "On the right side of the fuselage"
    ],
    "correctAnswer": 0,
    "explanation": "An oxygen blowout disc on the left nose of the aircraft will rupture if pressure within the oxygen system rises over 2,500 PSI.",
    "category": "oxygen"
  },
  {
    "id": "s585",
    "question": "If the oxygen blowout disc has not burst, what color should it be?",
    "choices": [
      "White",
      "Red",
      "Green",
      "Yellow"
    ],
    "correctAnswer": 2,
    "explanation": "If the disc has not burst it should be green.",
    "category": "oxygen"
  },
  {
    "id": "s586",
    "question": "The CRJ-700 autopilot is a:",
    "choices": [
      "Two axis, single channel system",
      "Two axis, dual channel system",
      "Single axis, single channel system",
      "Three axis, dual channel system"
    ],
    "correctAnswer": 1,
    "explanation": "The aircraft is equipped with a two axis dual channel autopilot that controls both pitch and roll through the elevators and ailerons.",
    "category": "autoflight"
  },
  {
    "id": "s587",
    "question": "The autopilot controls which axes through which flight control surfaces?",
    "choices": [
      "Pitch and roll through elevators and ailerons",
      "Roll and yaw through ailerons and rudder",
      "Pitch, roll, and yaw through all surfaces",
      "Pitch and yaw through elevators and rudder"
    ],
    "correctAnswer": 0,
    "explanation": "The aircraft is equipped with a two axis dual channel autopilot that controls both pitch and roll through the elevators and ailerons.",
    "category": "autoflight"
  },
  {
    "id": "s588",
    "question": "The flight director is displayed as two command bars of what color?",
    "choices": [
      "Green",
      "Cyan",
      "Magenta",
      "White"
    ],
    "correctAnswer": 2,
    "explanation": "The flight director is displayed as two magenta command bars that guide the pilots pitch and roll inputs.",
    "category": "autoflight"
  },
  {
    "id": "s589",
    "question": "When the autopilot is engaged, it follows the commands of the:",
    "choices": [
      "Yaw dampers",
      "Flight Management System",
      "Air Data Computer",
      "Flight director"
    ],
    "correctAnswer": 3,
    "explanation": "The autopilot follows the commands of the flight director. When the autopilot is engaged, it will slave to the flight director to follow its commands.",
    "category": "autoflight"
  },
  {
    "id": "s590",
    "question": "The yaw dampers operate independently of the autopilot.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yaw control is accomplished automatically through the use of two yaw dampers. The yaw dampers operate independently of the autopilot.",
    "category": "autoflight"
  },
  {
    "id": "s591",
    "question": "How many yaw dampers does the CRJ-700 have?",
    "choices": [
      "Four",
      "One",
      "Two",
      "Three"
    ],
    "correctAnswer": 2,
    "explanation": "Yaw control is accomplished automatically through the use of two yaw dampers.",
    "category": "flight-controls"
  },
  {
    "id": "s592",
    "question": "The yaw dampers receive input from which system?",
    "choices": [
      "Air Data Computers (ADCs)",
      "Attitude Heading Reference Systems (AHRS)",
      "Flight Control Computers (FCCs)",
      "Integrated Avionics Processor System (IAPS)"
    ],
    "correctAnswer": 2,
    "explanation": "The two yaw dampers receive input from the Flight Control Computers (FCCs). The FCCs operate the yaw dampers to maintain coordinated flight.",
    "category": "flight-controls"
  },
  {
    "id": "s593",
    "question": "What is the function of the Integrated Avionics Processor System (IAPS)?",
    "choices": [
      "It provides weather radar processing",
      "It integrates avionics information and provides it to the FCCs for flight director commands",
      "It manages the electrical distribution system",
      "It controls the yaw dampers directly"
    ],
    "correctAnswer": 1,
    "explanation": "IAPS integrates information from the individual components of the avionics onboard the aircraft (ADCs, AHRS, etc.). It then takes this integrated information and provides it to the Flight Control Computers (FCCs), which in turn generates flight director commands.",
    "category": "autoflight"
  },
  {
    "id": "s594",
    "question": "Autopilot trim compensates for which of the following?",
    "choices": [
      "Landing gear extension only",
      "Engine failures only",
      "Flap extension/retraction and Mach tuck effects",
      "Fuel imbalance only"
    ],
    "correctAnswer": 2,
    "explanation": "Autopilot trim will compensate for flap extension and retraction as well as the effects of Mach tuck at altitude.",
    "category": "autoflight"
  },
  {
    "id": "s595",
    "question": "During Mach tuck, the wing's center of pressure moves in which direction?",
    "choices": [
      "Outboard",
      "Inboard",
      "Forward",
      "Aft"
    ],
    "correctAnswer": 3,
    "explanation": "As a swept wing aircraft accelerates toward its critical Mach number the wing's center of pressure (center of lift) will move aft. This causes the airplane's nose to pitch downward.",
    "category": "autoflight"
  },
  {
    "id": "s596",
    "question": "What does the XFR button on the flight control panel do?",
    "choices": [
      "Transfers navigation source between VOR and FMS",
      "Transfers autopilot control to the first officer",
      "Transfers radio control between RTU 1 and RTU 2",
      "Transfers flight director control between FCC 1 and FCC 2"
    ],
    "correctAnswer": 3,
    "explanation": "Transfers the control of the flight director between the captain's flight control computer (FCC 1) and the first officer's flight control computer (FCC 2).",
    "category": "flight-controls"
  },
  {
    "id": "s597",
    "question": "What does the TURB button on the flight control panel do?",
    "choices": [
      "Activates weather radar turbulence mode",
      "Dampens the control inputs of the autopilot",
      "Increases autopilot sensitivity",
      "Engages the yaw dampers in turbulence mode"
    ],
    "correctAnswer": 1,
    "explanation": "The turbulence switch will act to dampen the control inputs of the autopilot.",
    "category": "autoflight"
  },
  {
    "id": "s598",
    "question": "When the SPEED button is pressed once with a higher altitude selected, what vertical mode is displayed?",
    "choices": [
      "V/S",
      "MACH",
      "CLB",
      "IAS"
    ],
    "correctAnswer": 2,
    "explanation": "If a higher altitude has been selected, CLB will be displayed as the current Flight Mode Annunciator (FMA). CLB places speed control on the elevator, and will not allow the aircraft to descend.",
    "category": "autoflight"
  },
  {
    "id": "s599",
    "question": "In CLB mode, what is the minimum climb rate the aircraft will maintain regardless of thrust lever position?",
    "choices": [
      "50 fpm",
      "200 fpm",
      "25 fpm",
      "100 fpm"
    ],
    "correctAnswer": 0,
    "explanation": "The aircraft will maintain a 50 fpm climb regardless of thrust lever position.",
    "category": "autoflight"
  },
  {
    "id": "s600",
    "question": "In DES mode, speed control is placed on the:",
    "choices": [
      "Elevator",
      "Thrust levers",
      "Ailerons",
      "Spoilers"
    ],
    "correctAnswer": 0,
    "explanation": "DES places speed control on the elevator, and will not allow the aircraft to climb. The aircraft will maintain a 50 fpm descent regardless of thrust lever position.",
    "category": "autoflight"
  },
  {
    "id": "s601",
    "question": "What happens when the SPEED switch is pressed twice?",
    "choices": [
      "Pitch mode becomes active",
      "IAS or MACH mode becomes the active vertical mode",
      "CLB or DES mode engages",
      "Vertical speed mode engages"
    ],
    "correctAnswer": 1,
    "explanation": "Either IAS or MACH mode (automatic depending on altitude) will become the active vertical mode. Speed will be placed on the elevator, and the aircraft will climb or descend as necessary to maintain the selected speed regardless of selected altitude.",
    "category": "autoflight"
  },
  {
    "id": "s602",
    "question": "What happens when the SPEED switch is pressed three times?",
    "choices": [
      "The autopilot disconnects",
      "Pitch mode becomes active, controlled by the pitch wheel",
      "The speed bug is reset",
      "IAS or MACH mode engages"
    ],
    "correctAnswer": 1,
    "explanation": "Pitch mode will become the active vertical mode. Aircraft pitch will be controlled by the pitch wheel.",
    "category": "autoflight"
  },
  {
    "id": "s603",
    "question": "What must be selected prior to pressing the APPR switch on the flight control panel?",
    "choices": [
      "Green needles on the display control panel",
      "The BC button",
      "The NAV button",
      "White needles on the PFD"
    ],
    "correctAnswer": 0,
    "explanation": "The APPR switch arms the flight director to capture the localizer and glide slope. Green needles must be selected prior to pressing the switch.",
    "category": "flight-controls"
  },
  {
    "id": "s604",
    "question": "When using the BC (back course) switch, what should be selected on the HSI?",
    "choices": [
      "The VOR radial",
      "The back course",
      "The front course",
      "The localizer frequency"
    ],
    "correctAnswer": 2,
    "explanation": "The BC switch arms the flight director to capture a localizer back course. The front course should be selected on the HSI.",
    "category": "general"
  },
  {
    "id": "s605",
    "question": "Pressing the 1/2 BANK switch limits flight director bank commands to a maximum of:",
    "choices": [
      "20°",
      "25°",
      "15°",
      "10°"
    ],
    "correctAnswer": 2,
    "explanation": "Pressing the 1/2 bank switch will limit flight director bank commands to a maximum of 15°.",
    "category": "autoflight"
  },
  {
    "id": "s606",
    "question": "At what altitude does 1/2 BANK activate automatically?",
    "choices": [
      "31,600 feet",
      "29,000 feet",
      "25,000 feet",
      "35,000 feet"
    ],
    "correctAnswer": 0,
    "explanation": "At an altitude of 31,600 feet or greater.",
    "category": "autoflight"
  },
  {
    "id": "s607",
    "question": "What does the Flight Mode Annunciation (FMA) 'ALTS' indicate?",
    "choices": [
      "The aircraft is in altitude select mode",
      "The altitude alerter has been silenced",
      "The aircraft is maintaining a selected altitude",
      "An altitude deviation has occurred"
    ],
    "correctAnswer": 2,
    "explanation": "ALTS indicates the aircraft is maintaining a selected altitude.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s608",
    "question": "What does the FMA 'ALT' indicate?",
    "choices": [
      "The aircraft is maintaining the preselected altitude",
      "The aircraft is climbing to the selected altitude",
      "The altitude being held is not the altitude selected by the ALT knob",
      "The altitude alerter is active"
    ],
    "correctAnswer": 2,
    "explanation": "The current altitude being held is not the altitude selected by the ALT knob on the flight control panel.",
    "category": "autoflight"
  },
  {
    "id": "s609",
    "question": "In vertical speed mode, each click of the V/S wheel commands a climb or descent rate change of:",
    "choices": [
      "100 fpm",
      "200 fpm",
      "500 fpm",
      "50 fpm"
    ],
    "correctAnswer": 0,
    "explanation": "Each click on the wheel will command a climb or descent rate of 100 fpm.",
    "category": "autoflight"
  },
  {
    "id": "s610",
    "question": "In pitch mode, each click of the pitch wheel causes how much pitch change?",
    "choices": [
      "0.25°",
      "2.0°",
      "1.0°",
      "0.5°"
    ],
    "correctAnswer": 3,
    "explanation": "If pitch mode is engaged, each click of the wheel will cause a 0.5° of pitch change.",
    "category": "autoflight"
  },
  {
    "id": "s611",
    "question": "If the autopilot and flight directors are off and the autopilot is then engaged, which FMAs will become active?",
    "choices": [
      "NAV and V/S",
      "IAS and HDG",
      "Pitch and Roll",
      "HDG and ALT"
    ],
    "correctAnswer": 2,
    "explanation": "Pitch and Roll will become the active mode and the flight directors will appear.",
    "category": "autoflight"
  },
  {
    "id": "s612",
    "question": "In vertical speed mode, there is structural speed protection.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, there is structural speed protection in vertical speed mode.",
    "category": "electrical"
  },
  {
    "id": "s613",
    "question": "Why are there two lights next to the APPR switch?",
    "choices": [
      "Each light represents one of the two FCCs",
      "One for localizer and one for glideslope",
      "One for primary and one for secondary approach",
      "One for captain and one for first officer"
    ],
    "correctAnswer": 0,
    "explanation": "Each light represents one of the two FCCs.",
    "category": "general"
  },
  {
    "id": "s614",
    "question": "At what altitude will MACH mode automatically replace IAS mode?",
    "choices": [
      "35,000 feet",
      "31,600 feet",
      "29,000 feet",
      "28,000 feet"
    ],
    "correctAnswer": 1,
    "explanation": "31,600 feet.",
    "category": "general"
  },
  {
    "id": "s615",
    "question": "What does the SYNC button on the back of the yoke do?",
    "choices": [
      "Synchronizes the autopilot with the FMS",
      "Synchronizes the flight director to the present flight attitude",
      "Synchronizes the heading bug with current heading",
      "Synchronizes the two flight control computers"
    ],
    "correctAnswer": 1,
    "explanation": "The SYNC button synchronizes the flight director to the present flight attitude.",
    "category": "autoflight"
  },
  {
    "id": "s616",
    "question": "The SYNC button will work with the autopilot engaged.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No, the SYNC button will not work with the autopilot engaged.",
    "category": "autoflight"
  },
  {
    "id": "s617",
    "question": "When the TOGA switches are pressed for a normal takeoff, the flight directors move up to an optimized pitch of:",
    "choices": [
      "10°-16°",
      "11°-18°",
      "8°-15°",
      "15°-20°"
    ],
    "correctAnswer": 1,
    "explanation": "Moves the flight directors up to an optimized pitch of between 11°-18°.",
    "category": "autoflight"
  },
  {
    "id": "s618",
    "question": "Which of the following is NOT a required condition for TO/TO FMAs to activate?",
    "choices": [
      "Flaps set for takeoff (8°-20°)",
      "Speed brakes retracted",
      "Both engines running",
      "Parking brake off"
    ],
    "correctAnswer": 1,
    "explanation": "The primary conditions are: Parking Brake Off, Flaps set for takeoff (8°-20°), V-Speeds set, Stabilizer trim in takeoff range, and Both engines running.",
    "category": "autoflight"
  },
  {
    "id": "s619",
    "question": "If TO/TO conditions are not satisfied, what will be displayed on the FMA?",
    "choices": [
      "A red line through TO/TO",
      "GA/GA will display instead",
      "The FMA will be blank",
      "TO/TO in amber"
    ],
    "correctAnswer": 0,
    "explanation": "A red line will be through TO/TO.",
    "category": "autoflight"
  },
  {
    "id": "s620",
    "question": "During a go-around, the TOGA switches move the flight directors up to:",
    "choices": [
      "10°",
      "15°",
      "18°",
      "8°"
    ],
    "correctAnswer": 0,
    "explanation": "During a go-around, the TOGA switches move the flight directors up to 10°.",
    "category": "autoflight"
  },
  {
    "id": "s621",
    "question": "During a go-around (GA/GA mode), present heading is held with a bank limit of:",
    "choices": [
      "10°",
      "25°",
      "15°",
      "5°"
    ],
    "correctAnswer": 3,
    "explanation": "Holds present heading with 5° Bank limit.",
    "category": "autoflight"
  },
  {
    "id": "s622",
    "question": "When is the 1/2 bank switch inhibited?",
    "choices": [
      "Only during single-engine operations",
      "During takeoff (TO/TO), go-around mode, or when approach localizer is armed",
      "During cruise flight above FL310",
      "When the yaw dampers are inoperative"
    ],
    "correctAnswer": 1,
    "explanation": "It is inhibited during takeoff (TO/TO mode) or go-around mode, or when the approach localizer has been armed.",
    "category": "autoflight"
  },
  {
    "id": "s623",
    "question": "A yaw damper failure will cause the autopilot to disconnect.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, a yaw damper failure will cause the autopilot to disconnect.",
    "category": "autoflight"
  },
  {
    "id": "s624",
    "question": "Which of the following is NOT a method of disengaging the autopilot?",
    "choices": [
      "AP/SP switch on the yoke",
      "Pressing the HDG button",
      "TOGA switches",
      "AP DISC switch bar"
    ],
    "correctAnswer": 1,
    "explanation": "The autopilot can be disengaged by the AP DISC switch bar, the AP/SP switch on the yoke, or the TOGA switches.",
    "category": "autoflight"
  },
  {
    "id": "s625",
    "question": "What is the minimum altitude for autopilot engagement?",
    "choices": [
      "600 feet",
      "200 feet",
      "1,000 feet",
      "400 feet"
    ],
    "correctAnswer": 0,
    "explanation": "600 feet.",
    "category": "autoflight"
  },
  {
    "id": "s626",
    "question": "What is the minimum altitude for autopilot disconnect on an ILS approach with a glideslope less than 3.5°?",
    "choices": [
      "50 feet",
      "80 feet",
      "200 feet",
      "120 feet"
    ],
    "correctAnswer": 1,
    "explanation": "Glideslope < 3.5°: 80 feet.",
    "category": "autoflight"
  },
  {
    "id": "s627",
    "question": "What is the minimum altitude for autopilot disconnect on an ILS approach with a glideslope greater than 3.5°?",
    "choices": [
      "120 feet",
      "200 feet",
      "80 feet",
      "100 feet"
    ],
    "correctAnswer": 0,
    "explanation": "Glideslope > 3.5°: 120 feet.",
    "category": "autoflight"
  },
  {
    "id": "s628",
    "question": "What is the minimum altitude for autopilot disconnect on a non-precision approach?",
    "choices": [
      "300 feet",
      "200 feet",
      "400 feet",
      "600 feet"
    ],
    "correctAnswer": 2,
    "explanation": "400 feet.",
    "category": "autoflight"
  },
  {
    "id": "s629",
    "question": "An amber boxed 'A' on the PFD indicates:",
    "choices": [
      "An altitude deviation",
      "The ailerons are mistrimmed",
      "The AHRS has failed",
      "Autopilot is engaged"
    ],
    "correctAnswer": 1,
    "explanation": "The ailerons are mistrimmed. An AP TRIM IS LWD or RWD caution message will follow shortly after.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s630",
    "question": "An amber boxed 'E' on the PFD indicates:",
    "choices": [
      "An engine failure",
      "An EFIS display error",
      "An electrical system fault",
      "The elevator is mistrimmed"
    ],
    "correctAnswer": 3,
    "explanation": "The elevator is mistrimmed. An AP TRIM NU (Nose up) or ND (Nose Down) caution message will follow shortly after.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s631",
    "question": "The EFIS system consists of which displays for each pilot?",
    "choices": [
      "PFD and EICAS",
      "PFD and MFD",
      "MFD and EICAS",
      "ADI and HSI"
    ],
    "correctAnswer": 1,
    "explanation": "The Electronic Flight Instrument System (EFIS) consists of both pilot and co-pilot Primary Function Displays (PFD) and Multi Function Displays (MFD).",
    "category": "efis-nav-fms"
  },
  {
    "id": "s632",
    "question": "The PFD provides which of the following information?",
    "choices": [
      "Weather radar returns and terrain",
      "FMS flight plan and performance data",
      "Attitude, heading, airspeed, and altitude",
      "Engine parameters and fuel quantity"
    ],
    "correctAnswer": 2,
    "explanation": "The PFD provides attitude, heading, airspeed and altitude information.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s633",
    "question": "The Control Display Unit (CDU) and Flight Management Computer (FMC) make up what system?",
    "choices": [
      "AFCS",
      "FMS",
      "IAPS",
      "EFIS"
    ],
    "correctAnswer": 1,
    "explanation": "The Control Display Unit (CDU) and Flight Management Computer (FMC) make up the FMS.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s634",
    "question": "Which sensors provide information to the FMS for navigation calculations?",
    "choices": [
      "AHRS and ADC only",
      "VOR, DME, and GPS",
      "ADF and VOR only",
      "GPS and INS only"
    ],
    "correctAnswer": 1,
    "explanation": "VOR, DME and GPS sensors provide information to the FMS for navigation calculations.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s635",
    "question": "What provides attitude information to the AHRS?",
    "choices": [
      "Two flux detector units",
      "Three gyro-accelerometers",
      "Two laser ring gyros",
      "Four rate sensors"
    ],
    "correctAnswer": 1,
    "explanation": "Three gyro-accelerometers provide attitude information.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s636",
    "question": "Where are the AHRS magnetic sensors located?",
    "choices": [
      "On the wingtips",
      "Under the cockpit floor",
      "In the nose cone",
      "In the tail section"
    ],
    "correctAnswer": 0,
    "explanation": "Wingtip mounted remote magnetic sensors provide heading information.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s637",
    "question": "The ADCs compute data from which sources?",
    "choices": [
      "Pitot-static system and TAT probe",
      "AHRS and FMS",
      "Radar altimeters and barometric sensors",
      "GPS and INS"
    ],
    "correctAnswer": 0,
    "explanation": "The ADCs compute data from their respective pitot-static system and the TAT (Total Air Temperature) probe.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s638",
    "question": "What weather radar system is installed on the CRJ-700?",
    "choices": [
      "Collins WXR-840",
      "Collins TWR-850",
      "Honeywell RDR-4000",
      "Bendix RDR-2100"
    ],
    "correctAnswer": 0,
    "explanation": "The aircraft is equipped with a Collins WXR-840 weather radar.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s639",
    "question": "TCAS monitors what radius around the aircraft for conflicting traffic?",
    "choices": [
      "30 nautical miles",
      "60 nautical miles",
      "20 nautical miles",
      "40 nautical miles"
    ],
    "correctAnswer": 3,
    "explanation": "TCAS monitors a 40 nautical mile radius around the aircraft for possible conflicting traffic.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s640",
    "question": "A TCAS Traffic Advisory (TA) is displayed in what color and provides how many seconds of warning?",
    "choices": [
      "Red, 30 seconds",
      "Yellow, 45 seconds",
      "Red, 45 seconds",
      "Yellow, 30 seconds"
    ],
    "correctAnswer": 1,
    "explanation": "A TA is displayed in yellow on the MFD, and provides a 45 second warning to a possible conflict.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s641",
    "question": "A TCAS Resolution Advisory (RA) is displayed in what color and provides how many seconds of warning?",
    "choices": [
      "Red, 30 seconds",
      "Yellow, 45 seconds",
      "Yellow, 30 seconds",
      "Red, 45 seconds"
    ],
    "correctAnswer": 0,
    "explanation": "An RA is displayed in red and provides a 30 second warning.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s642",
    "question": "Which TCAS advisory requires maneuvering and provides visual guidance on the VSI?",
    "choices": [
      "Traffic Advisory (TA)",
      "Both TA and RA",
      "Resolution Advisory (RA)",
      "Proximity Advisory (PA)"
    ],
    "correctAnswer": 2,
    "explanation": "An RA requires maneuvering and visual guidance is provided on the VSI.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s643",
    "question": "Pressing the single-barbed BRG pointer button cycles through which bearing sources?",
    "choices": [
      "GPS 1, VOR 1, and DME 1",
      "VOR 2, FMS 2, and ADF 2",
      "VOR 1, FMS 1, and ADF 1",
      "FMS 1, FMS 2, and GPS"
    ],
    "correctAnswer": 2,
    "explanation": "Pressing repeatedly cycles through VOR 1, FMS 1 and ADF 1 bearing pointers displayed on the respective PFD and MFD.",
    "category": "general"
  },
  {
    "id": "s644",
    "question": "How many MFD format options are available through the FORMAT knob?",
    "choices": [
      "Five",
      "Six",
      "Eight",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Rotating cycles through the six possible MFD formats: Navaid sector map, FMS present position map, TCAS screen, HSI compass rose, FMS plan map, and Radar screen.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s645",
    "question": "The MFD range can be adjusted from what minimum to what maximum?",
    "choices": [
      "10 to 500 miles",
      "2 to 320 miles",
      "5 to 320 miles",
      "5 to 640 miles"
    ],
    "correctAnswer": 3,
    "explanation": "This knob is used to adjust the range of the MFD from 5 to 640 miles.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s646",
    "question": "In order to display TCAS information on the MFD, the RANGE knob must be selected to:",
    "choices": [
      "40 miles or less",
      "20 miles or less",
      "Any range",
      "80 miles or less"
    ],
    "correctAnswer": 0,
    "explanation": "In order to activate the TCAS display the RANGE knob must be selected to 40 miles or less.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s647",
    "question": "The NAV SOURCE knob cycles through which options?",
    "choices": [
      "FMS1, VOR/LOC1, OFF, VOR/LOC2, FMS2",
      "NAV1, NAV2, FMS, GPS",
      "VOR1, VOR2, ILS, OFF",
      "GPS, VOR, ADF, OFF"
    ],
    "correctAnswer": 0,
    "explanation": "Rotating cycles the NAV SOURCE: FMS1, VOR/LOC1, OFF, VOR/LOC2, FMS2.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s648",
    "question": "When testing the radio altimeter (RA TEST), the RA digital readout on the PFD will climb to:",
    "choices": [
      "200 feet",
      "50 feet",
      "25 feet",
      "100 feet"
    ],
    "correctAnswer": 1,
    "explanation": "When held the RA digital readout on the PFD will climb to 50 feet and the runway bar on the altitude tape will drop to an RA of 50 feet.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s649",
    "question": "Pressing PUSH SET STD on the BARO knob sets the altimeter to:",
    "choices": [
      "1013 HPA or 29.92 IN",
      "1013 HPA or 29.82 IN",
      "1015 HPA or 30.00 IN",
      "1010 HPA or 29.92 IN"
    ],
    "correctAnswer": 0,
    "explanation": "Pressing the center of the BARO knob will set a standard altimeter of 1013 HPA or 29.92 IN.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s650",
    "question": "On the MFD Reversion Panel, selecting 'PFD' will display what on the MFD?",
    "choices": [
      "The EICAS display",
      "The cross-side PFD information",
      "The on-side PFD information",
      "The FMS plan page"
    ],
    "correctAnswer": 2,
    "explanation": "PFD 1 or 2 - The on-side PFD will be displayed on the MFD.",
    "category": "eicas"
  },
  {
    "id": "s651",
    "question": "On the Source Select Panel, when ATTD HDG is set to '1', what happens?",
    "choices": [
      "Only PFD 1 receives AHRS data",
      "AHRS 1 is disabled",
      "Both PFDs receive data from AHRS 1",
      "The AHRS switches to DG mode"
    ],
    "correctAnswer": 2,
    "explanation": "1 - Both PFDs will receive data from AHRS 1. A yellow ATT 1 message will be displayed on both PFDs.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s652",
    "question": "When the DG mode is selected on the compass control panel, what is activated?",
    "choices": [
      "Automatic compass slewing by the Flux Detector Units",
      "GPS-based heading reference",
      "The backup compass system",
      "The SLEW switch for manual compass slewing"
    ],
    "correctAnswer": 3,
    "explanation": "DG - Activates the SLEW switch for manual compass slewing while operating in areas of magnetic disturbance.",
    "category": "general"
  },
  {
    "id": "s653",
    "question": "The Flux Detector Units (FDUs) are also known as:",
    "choices": [
      "Wingtip mounted magnetic sensors",
      "Pitot-static probes",
      "Gyro-accelerometers",
      "Air data modules"
    ],
    "correctAnswer": 0,
    "explanation": "The magnetic sensors are also known as Flux Detector Units (FDU).",
    "category": "efis-nav-fms"
  },
  {
    "id": "s654",
    "question": "For the radar path attenuation feature to be operative, the gain knob must be in what position?",
    "choices": [
      "-1",
      "MAX",
      "+1",
      "NORM"
    ],
    "correctAnswer": 3,
    "explanation": "In order for the path attenuation feature to be operative the gain knob must be left in NORM.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s655",
    "question": "Pressing PUSH GCS on the radar panel activates Ground Clutter Suppression for how long?",
    "choices": [
      "20 seconds",
      "30 seconds",
      "12 seconds",
      "6 seconds"
    ],
    "correctAnswer": 2,
    "explanation": "Pressing activates Ground Clutter Suppression for 12 seconds.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s656",
    "question": "The SEC (sector scan) button narrows the radar sweep from what angle to what angle on each side of the nose?",
    "choices": [
      "45° to 20°",
      "90° to 45°",
      "60° to 15°",
      "60° to 30°"
    ],
    "correctAnswer": 3,
    "explanation": "The sector scan switch is used to narrow the radar sweep from 60° either side of the nose to 30° either side of the nose.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s657",
    "question": "The radar STAB button should be deselected if which system fails?",
    "choices": [
      "AHRS",
      "FCC",
      "FMS",
      "ADC"
    ],
    "correctAnswer": 0,
    "explanation": "The stabilization select switch stabilizes the radar sweep by compensating for pitch and roll using AHRS information. It should be deselected if the AHRS fails.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s658",
    "question": "When the radar STAB button is deselected, what message is displayed on the MFD?",
    "choices": [
      "DESTAB",
      "NO STAB",
      "USTB",
      "STAB OFF"
    ],
    "correctAnswer": 2,
    "explanation": "When deselected the USTB message is displayed on the MFD.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s659",
    "question": "In radar WX mode, precipitation returns are displayed in which colors from least to greatest intensity?",
    "choices": [
      "Green, yellow, orange, red",
      "Green, yellow, red, magenta",
      "Blue, green, yellow, red",
      "Cyan, green, yellow, red"
    ],
    "correctAnswer": 1,
    "explanation": "Precipitation returns are displayed in green, yellow, red and magenta in order of intensity from least to greatest.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s660",
    "question": "In radar MAP mode, ground targets are displayed in which colors from least to greatest intensity?",
    "choices": [
      "Green, yellow, red, magenta",
      "Cyan, green, yellow, magenta",
      "Blue, green, yellow, red",
      "Green, yellow, orange, red"
    ],
    "correctAnswer": 1,
    "explanation": "In MAP mode, targets are displayed in cyan, green, yellow and magenta in order of intensity from least to greatest.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s661",
    "question": "What is the function of the trend vector on the airspeed tape?",
    "choices": [
      "Shows the speed 10 seconds ago",
      "Shows the maximum allowable speed change",
      "Predicts aircraft speed 5 seconds in the future",
      "Predicts aircraft speed 10 seconds in the future"
    ],
    "correctAnswer": 3,
    "explanation": "The trend vector predicts aircraft speed 10 seconds in the future.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s662",
    "question": "If the aircraft exceeds +30/-20° of pitch or 65° of bank, the PFD will:",
    "choices": [
      "Shut off and revert to standby instruments",
      "Display a caution message only",
      "Flash the attitude display in amber",
      "De-clutter and provide a red chevron pointing to the sky"
    ],
    "correctAnswer": 3,
    "explanation": "It will de-clutter, and provide a red chevron pointing to the sky.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s663",
    "question": "How long does the AHRS take to initialize on the ground?",
    "choices": [
      "30 seconds",
      "120 seconds",
      "45 seconds",
      "70 seconds"
    ],
    "correctAnswer": 3,
    "explanation": "70 seconds on the ground and 10-35 seconds in flight.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s664",
    "question": "How long does the AHRS take to initialize in flight?",
    "choices": [
      "45-60 seconds",
      "5-10 seconds",
      "10-35 seconds",
      "70 seconds"
    ],
    "correctAnswer": 2,
    "explanation": "70 seconds on the ground and 10-35 seconds in flight.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s665",
    "question": "If booting the AHRS in DG mode, the initialization process could take up to:",
    "choices": [
      "5 minutes",
      "2 minutes",
      "15 minutes",
      "10 minutes"
    ],
    "correctAnswer": 3,
    "explanation": "10 minutes.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s666",
    "question": "A red 'X' through the airspeed tape, altitude tape, and VSI on the captain's PFD indicates:",
    "choices": [
      "FCC 1 has failed",
      "The pitot heat has failed",
      "ADC 1 has failed",
      "AHRS 1 has failed"
    ],
    "correctAnswer": 2,
    "explanation": "This indicates that ADC 1 has failed. The QRH should be referenced which will guide the captain to select ADC 2 on the source select panel.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s667",
    "question": "On the PFD, the current flight mode is displayed in what color, and the armed mode in what color?",
    "choices": [
      "Green and amber",
      "Green and white",
      "White and green",
      "Cyan and yellow"
    ],
    "correctAnswer": 1,
    "explanation": "Current flight mode in green, armed mode in white.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s668",
    "question": "If the AHRS loses its respective power source, it is powered by battery for up to:",
    "choices": [
      "5 minutes",
      "8 minutes",
      "15 minutes",
      "11 minutes"
    ],
    "correctAnswer": 3,
    "explanation": "Battery power for up to 11 minutes.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s669",
    "question": "If only supplied by battery power, the AHRS will re-initialize after a failure.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No, the AHRS will not re-initialize if only supplied by battery power.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s670",
    "question": "Which pitot tube provides information to the Integrated Standby Instrument (ISI)?",
    "choices": [
      "Pitot 3",
      "Pitot 2",
      "Pitot 4",
      "Pitot 1"
    ],
    "correctAnswer": 0,
    "explanation": "Pitot 3.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s671",
    "question": "During a TCAS Resolution Advisory (RA), what happens to the MFD range?",
    "choices": [
      "It increases to 40 miles",
      "It remains unchanged",
      "It reduces to 5 miles",
      "It reduces to 2.5 miles"
    ],
    "correctAnswer": 3,
    "explanation": "It will reduce to 2.5 miles.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s672",
    "question": "In TCAS NORM mode, targets are displayed within what altitude range of the aircraft?",
    "choices": [
      "±1,500 feet",
      "±2,700 feet",
      "±9,900 feet",
      "±5,000 feet"
    ],
    "correctAnswer": 1,
    "explanation": "NORM - TCAS targets are displayed from ±2,700 feet of aircraft altitude.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s673",
    "question": "In TCAS ABOVE mode, targets are displayed from what altitude range?",
    "choices": [
      "-2,700 through +9,900 feet",
      "±9,900 feet",
      "-9,900 through +2,700 feet",
      "0 through +9,900 feet"
    ],
    "correctAnswer": 0,
    "explanation": "ABOVE - TCAS targets are displayed from -2,700 through +9,900 feet of aircraft altitude.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s674",
    "question": "What is indicated by the EFIS COMP MON message?",
    "choices": [
      "The compass system is in monitor mode",
      "A discrepancy exists between the left and right EFIS displays",
      "The EFIS computer has failed",
      "The EFIS is in self-test mode"
    ],
    "correctAnswer": 1,
    "explanation": "A discrepancy exists between the left and right EFIS displays.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s675",
    "question": "Which navigation sensors are normally considered primary for the FMS?",
    "choices": [
      "GPS",
      "ADF",
      "VOR",
      "DME"
    ],
    "correctAnswer": 0,
    "explanation": "GPS.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s676",
    "question": "How many DME channels is the aircraft equipped with?",
    "choices": [
      "Two",
      "Six",
      "Eight",
      "Four"
    ],
    "correctAnswer": 1,
    "explanation": "Six. Two are dedicated to each Radio Tuning Unit (RTU) and the other four are used for FMS position accuracy.",
    "category": "general"
  },
  {
    "id": "s677",
    "question": "How many radio altimeters are on the CRJ-700?",
    "choices": [
      "Three",
      "One",
      "Four",
      "Two"
    ],
    "correctAnswer": 3,
    "explanation": "Two.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s678",
    "question": "If the FMS database is out of date, what color will it be displayed in?",
    "choices": [
      "Red",
      "Amber",
      "White",
      "Cyan"
    ],
    "correctAnswer": 1,
    "explanation": "Amber.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s679",
    "question": "The MFD radar line is displayed at the top of the MFD in what color?",
    "choices": [
      "Cyan",
      "Magenta",
      "White",
      "Green"
    ],
    "correctAnswer": 0,
    "explanation": "Its the top line of MFD, and is displayed in cyan.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s680",
    "question": "Radar attenuation occurs when the radar beam is absorbed by:",
    "choices": [
      "An extremely intense shaft of precipitation",
      "Cloud formations at high altitude",
      "Terrain features near the aircraft",
      "Electromagnetic interference from other aircraft"
    ],
    "correctAnswer": 0,
    "explanation": "Attenuation occurs when the radar beam is absorbed by an extremely intense shaft of precipitation. This absorption is displayed as a 'shadow' on the radar screen.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s681",
    "question": "The radar attenuation alert is displayed as what on the MFD?",
    "choices": [
      "A cyan dashed line through the precipitation",
      "A flashing amber triangle",
      "A red circle around the affected area",
      "A yellow backer bar on the outer range ring behind the area of attenuation"
    ],
    "correctAnswer": 3,
    "explanation": "The crew is alerted to possible attenuation by the presence of a yellow backer bar on the outer range ring of the MFD behind the area of attenuation.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s682",
    "question": "The radar attenuation alert feature is only available when the GAIN knob is in NORM and the radar is in which mode?",
    "choices": [
      "WX",
      "TEST",
      "MAP",
      "Any mode"
    ],
    "correctAnswer": 0,
    "explanation": "This feature is only available when the GAIN knob is in NORM, and the radar is selected to WX.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s683",
    "question": "The green line on the PFD airspeed tape indicates:",
    "choices": [
      "Minimum steady flight speed times 1.3 (VS x 1.3)",
      "V2 speed",
      "Maximum operating speed (VMO)",
      "Approach reference speed (VREF)"
    ],
    "correctAnswer": 0,
    "explanation": "The green line indicates the minimum steady flight speed times 1.3 or VS x 1.3.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s684",
    "question": "The aircraft is equipped with how many VHF communications radios?",
    "choices": [
      "Three",
      "One",
      "Two",
      "Four"
    ],
    "correctAnswer": 2,
    "explanation": "The aircraft is equipped with two VHF communications radios, COM 1 & COM 2. A third VHF radio is used for ACARS.",
    "category": "general"
  },
  {
    "id": "s685",
    "question": "COM 3 is dedicated to what system?",
    "choices": [
      "ACARS",
      "TCAS",
      "Satellite communications",
      "Backup communications"
    ],
    "correctAnswer": 0,
    "explanation": "A third VHF radio is used for the Automatic Crew Alert and Response System (ACARS).",
    "category": "comms"
  },
  {
    "id": "s686",
    "question": "Frequency selection and radio control is accomplished through the:",
    "choices": [
      "Backup Tuning Unit (BTU)",
      "Audio Control Panels",
      "FMS Control Display Units",
      "Radio Tuning Units (RTUs)"
    ],
    "correctAnswer": 3,
    "explanation": "Frequency selection and radio control is accomplished through one of two Radio Tuning Units (RTU).",
    "category": "general"
  },
  {
    "id": "s687",
    "question": "When using cross-side tuning on the RTU (1/2 switch), frequencies are displayed in what color?",
    "choices": [
      "Cyan",
      "Green",
      "White",
      "Yellow"
    ],
    "correctAnswer": 3,
    "explanation": "When pressed the cross-side radios may be tuned with the on-side RTU. The frequencies will be displayed in yellow.",
    "category": "comms"
  },
  {
    "id": "s688",
    "question": "On the Audio Control Panel, when a radio is selected for transmissions, its audio will be heard:",
    "choices": [
      "Only through the speakers, not the headset",
      "Regardless of whether the volume push knob is in or out",
      "Only when the intercom is deselected",
      "Only if the volume push knob is popped out"
    ],
    "correctAnswer": 1,
    "explanation": "When a radio is selected for transmissions, its audio will be heard regardless of whether the volume push knob is selected in or out.",
    "category": "comms"
  },
  {
    "id": "s689",
    "question": "The R/T position on the R/T - I/C switch is used for:",
    "choices": [
      "Radio testing",
      "Radio transmissions over the selected radio",
      "Intercom communications",
      "Real-time frequency monitoring"
    ],
    "correctAnswer": 1,
    "explanation": "R/T - When held to R/T, transmissions are broadcast over the radio selected by the transmit rotary selector.",
    "category": "comms"
  },
  {
    "id": "s690",
    "question": "The VOICE position on the VOICE/BOTH switch will:",
    "choices": [
      "Enable voice-activated transmissions",
      "Activate the cockpit voice recorder",
      "Enable voice-over-IP communications",
      "Mute Morse code reception to allow voice signals to be heard clearly"
    ],
    "correctAnswer": 3,
    "explanation": "VOICE - Morse code reception will be muted to allow voice signals to be heard clearly.",
    "category": "comms"
  },
  {
    "id": "s691",
    "question": "What does the EMER switch on the Audio Control Panel do?",
    "choices": [
      "Broadcasts on the emergency frequency 121.5",
      "Activates the emergency transponder code",
      "Activates the Emergency Locator Transmitter",
      "Bypasses the RTU and audio control panel, connecting the headset directly to the on-side radio"
    ],
    "correctAnswer": 3,
    "explanation": "EMER - The respective side's microphone and speakers bypass the on-side RTU and audio control panel connecting it directly to its on-side communication radio at a preset volume.",
    "category": "comms"
  },
  {
    "id": "s692",
    "question": "If an RTU fails, what can be done to regain control of its radios?",
    "choices": [
      "The radios cannot be recovered until the RTU is repaired",
      "Press the RTU INHIB switchlight and use cross-side tuning",
      "Use the FMS to tune all radios",
      "Switch to the Backup Tuning Unit"
    ],
    "correctAnswer": 1,
    "explanation": "Press the RTU INHIB switchlight and use cross-side tuning.",
    "category": "comms"
  },
  {
    "id": "s693",
    "question": "What mode are the aircraft's transponders?",
    "choices": [
      "Mode S",
      "Mode 5",
      "Mode C",
      "Mode A"
    ],
    "correctAnswer": 0,
    "explanation": "Mode S.",
    "category": "comms"
  },
  {
    "id": "s694",
    "question": "When does the cockpit voice recorder begin recording?",
    "choices": [
      "When battery power is applied",
      "When the APU is running",
      "When the aircraft is in flight",
      "When the engines are started"
    ],
    "correctAnswer": 0,
    "explanation": "When battery power is applied.",
    "category": "comms"
  },
  {
    "id": "s695",
    "question": "What is the recording interval of the cockpit voice recorder?",
    "choices": [
      "15 minute rolling loop",
      "30 minute rolling loop",
      "120 minute rolling loop",
      "60 minute rolling loop"
    ],
    "correctAnswer": 1,
    "explanation": "The CVR is a 30 minute rolling loop.",
    "category": "comms"
  },
  {
    "id": "s696",
    "question": "On the ATC SEL panel, transponder 1 is used when which pilot is flying?",
    "choices": [
      "The first officer",
      "The captain",
      "The relief pilot",
      "Either pilot"
    ],
    "correctAnswer": 1,
    "explanation": "1 - The number one transponder is on and operating in the mode selected by the RTU. The number one transponder is used when the captain is the flying pilot.",
    "category": "comms"
  },
  {
    "id": "s697",
    "question": "The FMS TUNE INHIBIT switch prevents what function?",
    "choices": [
      "FMS flight plan entry",
      "FMS navigation calculations",
      "FMS performance computations",
      "FMS radio tuning"
    ],
    "correctAnswer": 3,
    "explanation": "This switch is used to inhibit FMS radio tuning. Autotune will not be selectable on the FMS radio page if the FMS TUNE INHIBIT switch is on.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s698",
    "question": "EGPWS provides aural and visual alerts for which of the following?",
    "choices": [
      "Terrain conflicts, sink rate, glideslope deviations, flap settings, and windshear",
      "Hydraulic and electrical system failures",
      "Fuel quantity and fuel imbalance",
      "Engine failures and fire"
    ],
    "correctAnswer": 0,
    "explanation": "EGPWS provides aural and visual alerts for possible terrain conflicts, sink rate, glideslope deviations, flap settings and windshear conditions.",
    "category": "egpws"
  },
  {
    "id": "s699",
    "question": "When the EGPWS auto pop-up terrain feature activates, it resets the MFD range to:",
    "choices": [
      "20 miles",
      "40 miles",
      "5 miles",
      "10 miles"
    ],
    "correctAnswer": 3,
    "explanation": "When possible terrain issues arise, the auto pop-up feature will present a graphical depiction of the conflict and reset the MFD range to 10 miles.",
    "category": "egpws"
  },
  {
    "id": "s700",
    "question": "EGPWS terrain is displayed graphically in which colors depending on aircraft altitude and closure rate?",
    "choices": [
      "Blue, green, and yellow",
      "Cyan, yellow, and magenta",
      "Yellow, orange, and red",
      "Green, yellow, and red"
    ],
    "correctAnswer": 3,
    "explanation": "Terrain will be displayed graphically in either green, yellow, or red depending on aircraft altitude and closure rate.",
    "category": "egpws"
  },
  {
    "id": "s701",
    "question": "The EGPWS provides a 'MINIMUMS' callout when what has been reached?",
    "choices": [
      "The preselected MDA on the PFD",
      "The radio altimeter minimum of 200 feet",
      "The glideslope intercept altitude",
      "The final approach fix altitude"
    ],
    "correctAnswer": 0,
    "explanation": "EGPWS will provide an altitude countdown prior to touchdown along with a 'MINIMUMS' callout when the preselected MDA has been reached on the PFD.",
    "category": "egpws"
  },
  {
    "id": "s702",
    "question": "The EGPWS monitors for windshear conditions below what altitude AGL?",
    "choices": [
      "1,000 feet",
      "2,500 feet",
      "2,000 feet",
      "1,500 feet"
    ],
    "correctAnswer": 3,
    "explanation": "The EGPWS monitors for potential windshear conditions during the takeoff and approach phases of flight below 1,500' AGL.",
    "category": "egpws"
  },
  {
    "id": "s703",
    "question": "An increasing performance windshear is displayed in what color on the PFD?",
    "choices": [
      "White",
      "Red",
      "Amber",
      "Yellow"
    ],
    "correctAnswer": 3,
    "explanation": "Increasing performance windshears will be displayed in yellow.",
    "category": "egpws"
  },
  {
    "id": "s704",
    "question": "A decreasing performance windshear is displayed in what color on the PFD?",
    "choices": [
      "Red",
      "Yellow",
      "Magenta",
      "Amber"
    ],
    "correctAnswer": 0,
    "explanation": "Decreasing performance windshears will be displayed in red and will be accompanied by an aural warning and flight director escape guidance.",
    "category": "egpws"
  },
  {
    "id": "s705",
    "question": "During a decreasing performance windshear, the autopilot will automatically disconnect.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Decreasing performance windshears will be displayed in red and will be accompanied by an aural warning and flight director escape guidance. The autopilot will automatically disconnect.",
    "category": "egpws"
  },
  {
    "id": "s706",
    "question": "Pressing the GND PROX switchlight for less than two seconds initiates what?",
    "choices": [
      "An abbreviated list of aural warnings to be tested",
      "The complete EGPWS test",
      "The windshear detection test only",
      "A terrain map self-test"
    ],
    "correctAnswer": 0,
    "explanation": "Pressing the switchlight for less than two seconds will cause an abbreviated list of aural warnings to be tested.",
    "category": "egpws"
  },
  {
    "id": "s707",
    "question": "Holding the GND PROX switchlight for more than two seconds will:",
    "choices": [
      "Reset the EGPWS system",
      "Inhibit EGPWS warnings",
      "Activate the terrain display",
      "Cause the entire list of aural warnings to be tested"
    ],
    "correctAnswer": 3,
    "explanation": "Holding the switchlight in for more than two seconds will cause the entire list of aural warnings to be tested.",
    "category": "egpws"
  },
  {
    "id": "s708",
    "question": "Pressing the GRND PROX TERRAIN guarded switchlight will:",
    "choices": [
      "Enable enhanced terrain awareness",
      "Disable all EGPWS functions",
      "Inhibit the terrain map display while basic GPWS and windshear warnings remain active",
      "Activate the terrain map display"
    ],
    "correctAnswer": 2,
    "explanation": "Pressing will inhibit the terrain map display. Basic functions of GPWS and windshear warnings will still be active.",
    "category": "general"
  },
  {
    "id": "s709",
    "question": "Pressing the GRND PROX FLAP OVRD guarded switchlight will inhibit what aural warning?",
    "choices": [
      "SINK RATE",
      "TOO LOW FLAPS",
      "TERRAIN AHEAD",
      "PULL UP"
    ],
    "correctAnswer": 1,
    "explanation": "Pressing will inhibit the 'TOO LOW FLAPS' aural warning along with terrain aural warnings.",
    "category": "eicas"
  },
  {
    "id": "s710",
    "question": "If the aircraft's GPS systems are inoperative, the EGPWS will still function.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, it will compare DME information to determine the aircraft's position and provide terrain warnings.",
    "category": "egpws"
  },
  {
    "id": "s711",
    "question": "When an increasing performance (amber) windshear caution is displayed, the autopilot will disconnect.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No, the autopilot will not disconnect for an increasing performance (amber) windshear caution.",
    "category": "egpws"
  },
  {
    "id": "s712",
    "question": "Which of the following is NOT part of the recommended windshear recovery maneuver?",
    "choices": [
      "Set maximum thrust",
      "Ensure spoilers are retracted",
      "Follow the Alpha Margin Indicator (AMI)",
      "Do not change landing gear or flap configuration until vertical flight path is under control"
    ],
    "correctAnswer": 2,
    "explanation": "Follow the flight director commands smoothly and precisely, but do not follow the AMI.",
    "category": "egpws"
  },
  {
    "id": "s713",
    "question": "A FLEX takeoff is permitted when windshear is suspected.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "No, a FLEX takeoff is not permitted when windshear is suspected.",
    "category": "egpws"
  },
  {
    "id": "s714",
    "question": "When is a go-around required during an increasing performance windshear encounter?",
    "choices": [
      "Never",
      "Only below 500 feet AGL",
      "Always",
      "Only if associated with convective activity, otherwise at pilot's discretion"
    ],
    "correctAnswer": 3,
    "explanation": "A go-around should be executed if the windshear is associated with convective activity, otherwise it is at the pilot's discretion and is not required unless the approach becomes unstable.",
    "category": "egpws"
  },
  {
    "id": "s715",
    "question": "Which of the following is NOT part of the EGPWS escape guidance procedure?",
    "choices": [
      "Set maximum thrust",
      "Extend the landing gear for drag",
      "Disengage the autopilot",
      "Ensure spoilers are retracted"
    ],
    "correctAnswer": 1,
    "explanation": "Set maximum thrust, ensure spoilers are retracted, disengage the autopilot. Climb at the maximum rate possible to gain as much altitude as possible.",
    "category": "egpws"
  },
  {
    "id": "s716",
    "question": "The AP DISC bar must be moved back up before the AP ENG switch will re-engage the autopilot.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "The AP DISC bar is used to disconnect the autopilot. When the bar is down the AP ENG switch will not re-engage the autopilot until the bar is moved back up.",
    "category": "autoflight"
  },
  {
    "id": "s717",
    "question": "Pressing the center of the HDG knob (PUSH SYNC) will:",
    "choices": [
      "Reset the heading bug to north",
      "Engage heading mode",
      "Synchronize the heading bug with the current heading",
      "Transfer heading control to the FMS"
    ],
    "correctAnswer": 2,
    "explanation": "Pressing the center of the HDG knob will synchronize the heading bug with the current heading.",
    "category": "general"
  },
  {
    "id": "s718",
    "question": "The NAV button on the flight control panel will arm which of the following for lateral guidance?",
    "choices": [
      "GPS direct-to course only",
      "TCAS avoidance guidance",
      "FMS course, VOR course, or localizer course",
      "Heading mode only"
    ],
    "correctAnswer": 2,
    "explanation": "Pressing the NAV switch will arm either the FMS course, VOR course or localizer course for lateral guidance.",
    "category": "autoflight"
  },
  {
    "id": "s719",
    "question": "What does pressing the center of the ALT knob (PUSH TO CANCEL) do?",
    "choices": [
      "Cancels the selected altitude",
      "Silences the altitude alerter",
      "Engages altitude hold mode",
      "Resets the altitude to sea level"
    ],
    "correctAnswer": 1,
    "explanation": "Pressing the center of the ALT knob will silence the altitude alerter.",
    "category": "general"
  },
  {
    "id": "s720",
    "question": "Pressing the SPEED knob center (IAS/MACH) changes the airspeed bug between:",
    "choices": [
      "TAS and CAS",
      "Ground speed and IAS",
      "Knots and km/h",
      "IAS and MACH"
    ],
    "correctAnswer": 3,
    "explanation": "Pressing the center of the knob changes the airspeed bug between IAS to MACH.",
    "category": "general"
  },
  {
    "id": "s721",
    "question": "The GND PROX switchlight will illuminate in flight during which conditions?",
    "choices": [
      "When the landing gear is extended",
      "Terrain conflicts or glideslope deviations",
      "Normal flight operations",
      "When the flaps are set for landing"
    ],
    "correctAnswer": 1,
    "explanation": "The switchlight will illuminate in flight during terrain conflicts or glideslope deviations.",
    "category": "egpws"
  },
  {
    "id": "s722",
    "question": "What flap range is required for TO/TO FMA activation?",
    "choices": [
      "15°-30°",
      "0°-8°",
      "8°-20°",
      "20°-45°"
    ],
    "correctAnswer": 2,
    "explanation": "Flaps set for takeoff (8°-20°).",
    "category": "autoflight"
  },
  {
    "id": "s723",
    "question": "During a go-around (GA/GA mode), the TOGA switches will sequence what into the active flight plan?",
    "choices": [
      "The FMS missed approach waypoints",
      "The departure procedure waypoints",
      "The alternate airport waypoints",
      "The holding pattern entry"
    ],
    "correctAnswer": 0,
    "explanation": "Sequences the FMS missed approach waypoints into the active flightplan.",
    "category": "autoflight"
  },
  {
    "id": "s724",
    "question": "What does a DCP 2 message on the captain's PFD indicate?",
    "choices": [
      "The first officer's display control panel is controlling the captain's flight instruments",
      "ADC 2 is providing data to the captain's PFD",
      "Display Control Panel 2 has failed",
      "The captain's PFD has reverted to backup mode"
    ],
    "correctAnswer": 0,
    "explanation": "The first officer's display control panel is controlling his flight instruments.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s725",
    "question": "If both radar control panels are selected to WX mode:",
    "choices": [
      "Only the captain's radar will function",
      "The system will display an error message",
      "The radar enters dual-scan mode automatically",
      "The captain controls one antenna sweep and the first officer controls the other"
    ],
    "correctAnswer": 3,
    "explanation": "If both radar control panels are selected to WX, the captain will control one antenna sweep, and the first officer will control the other.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s726",
    "question": "To use the radar XFR (transfer) feature, both radars must be in:",
    "choices": [
      "MAP mode",
      "The same mode",
      "The same range",
      "WX mode"
    ],
    "correctAnswer": 2,
    "explanation": "In order to use the XFR feature, both radars must be in the same range.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s727",
    "question": "When a radar control panel's range is being controlled by the other side via XFR, the range is displayed in what color?",
    "choices": [
      "Cyan",
      "White",
      "Green",
      "Yellow"
    ],
    "correctAnswer": 3,
    "explanation": "The non-controlling side's range will be displayed in yellow.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s728",
    "question": "Pressing the center of the radar TILT knob will:",
    "choices": [
      "Restore the auto tilt function",
      "Activate ground clutter suppression",
      "Increase the tilt angle by 1°",
      "Set the tilt to 0°"
    ],
    "correctAnswer": 0,
    "explanation": "Pressing the center of the knob restores the auto tilt function.",
    "category": "efis-nav-fms"
  },
  {
    "id": "s729",
    "question": "The white 'brick' below the sky-pointer on the ADI is the equivalent of what instrument?",
    "choices": [
      "A ball in a turn and slip indicator",
      "A vertical speed indicator",
      "A heading indicator",
      "A turn coordinator"
    ],
    "correctAnswer": 0,
    "explanation": "The white brick is the equivalent of a ball in a turn and slip indicator. It provides slip information to coordinate the airplane about the vertical axis with the rudder pedals.",
    "category": "electrical"
  },
  {
    "id": "s730",
    "question": "The MASK position on the MASK/BOOM switch activates:",
    "choices": [
      "The cockpit speaker system",
      "The hand-held microphone",
      "The oxygen mask's built-in microphone",
      "The headset boom microphone"
    ],
    "correctAnswer": 2,
    "explanation": "MASK - The respective oxygen mask's built in microphone is activated.",
    "category": "comms"
  },
  {
    "id": "s731",
    "question": "On the Backup Tuning Unit, when set to STBY the display shows frequencies matching which radios?",
    "choices": [
      "COM 1 and NAV 1",
      "All COM and NAV radios",
      "Only the emergency frequency",
      "COM 2 and NAV 2"
    ],
    "correctAnswer": 0,
    "explanation": "STBY - The BTU is in standby and the display is illuminated. The frequency displayed will match the active COM 1 and NAV 1 frequencies.",
    "category": "comms"
  },
  {
    "id": "s732",
    "question": "Pressing the ACT COM line select key twice on the RTU will allow the pilot to have:",
    "choices": [
      "Squelch control",
      "Frequency presets",
      "Volume control",
      "Dual monitoring capability"
    ],
    "correctAnswer": 0,
    "explanation": "Pressing the ACT COM line select key twice will allow the pilot to have squelch control.",
    "category": "comms"
  },
  {
    "id": "s733",
    "question": "The EGPWS also provides warnings for what flight condition besides terrain and windshear?",
    "choices": [
      "Excessive airspeed",
      "Engine over-temperature",
      "Excessive bank angles",
      "Excessive vertical speed above FL410"
    ],
    "correctAnswer": 2,
    "explanation": "The EGPWS system also provides warnings for excessive bank angles.",
    "category": "egpws"
  }
];

export default questions;
