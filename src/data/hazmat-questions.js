const hazmatQuestions = [
  {
    "id": "h1",
    "question": "GoJet Airlines is defined as a \"Will Carry\" carrier, however, will not accept for transportation any article that is considered hazardous or restricted under Title 49 CFR.",
    "choices": ["True", "False", "True, provided there is 48 hours advance notice"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h2",
    "question": "All personnel performing or directly supervising personnel, whose duties include the acceptance, rejection, handling storage incidental to transport, packaging of company material, loading of passengers, baggage or cargo will be required to receive Initial and Recurrent Hazardous Materials Training. The HAZ manual requires Recurrent training every;",
    "choices": ["24 calendar months", "12 calendar months", "6 calendar months", "3 calendar months"],
    "correctAnswer": 1,
    "explanation": ""
  },
  {
    "id": "h3",
    "question": "A hazardous material is anything capable of posing unreasonable risk to health, safety or property when transported by air.",
    "choices": ["True", "False"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h4",
    "question": "Which of the following items may be carried aboard GoJet Airlines flights?",
    "choices": ["Spare aircraft batteries", "Small arms ammunition for personal use in carry-on baggage", "Small arms ammunition for personal use in checked baggage", "Certain types of fireworks"],
    "correctAnswer": 2,
    "explanation": ""
  },
  {
    "id": "h5",
    "question": "Which of the following company supplies may be carried as cargo on revenue flights?",
    "choices": ["Serviceable aircraft tires (belonging to GoJet only)", "Aircraft fire bottles", "Skydrol hydraulic fluid", "Both 1 and 3"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h6",
    "question": "What is the maximum amount of dry ice permitted per passenger in checked and carry-on baggage to refrigerate perishables?",
    "choices": ["10 pounds", "8 pounds", "5 pounds", "Passengers cannot bring dry ice aboard"],
    "correctAnswer": 2,
    "explanation": ""
  },
  {
    "id": "h7",
    "question": "Dry ice packages must permit the release of carbon dioxide gas, labeled as to weight; the contents being cooled must not be a restricted item and the package marked \"Dry Ice\".",
    "choices": ["True", "False"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h8",
    "question": "GoJet Airlines will accept for transportation shipments containing UN 3373 Biological Substances, Category B and the excepted items.",
    "choices": ["True", "False"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h9",
    "question": "GoJet Airlines does not accept a wheelchair or mobility aid with a non-spillable battery.",
    "choices": ["True", "False"],
    "correctAnswer": 1,
    "explanation": ""
  },
  {
    "id": "h10",
    "question": "A non-collapsible lithium-ion wheelchair or other mobility aid must be loaded and stowed in such a manner to prevent its unintentional activation and its battery must be protected from short circuiting and must be securely attached to the mobility aid.",
    "choices": ["True", "False"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h11",
    "question": "Which of the following is a true statement regarding the carriage of a battery powered wheelchair or mobility aid with a spillable battery?",
    "choices": ["Spillable batteries must not be transported", "Spillable batteries may be carried in strong rigid packaging/airline battery box", "Spillable batteries may be carried attached to a wheelchair stowed, loaded, secured and unloaded in an upright position", "Both 2 and 3"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h12",
    "question": "Which of the following is an example of a Class 1 Explosive?",
    "choices": ["Charcoal", "Gasoline", "Fireworks", "Mustard Gas"],
    "correctAnswer": 2,
    "explanation": ""
  },
  {
    "id": "h13",
    "question": "Which of the following is an example of Class 3 Flammable Liquid?",
    "choices": ["Petroleum products", "Nitroglycerin", "Varnish", "Both 1 and 3"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h14",
    "question": "Which of the following is an example of a Class 4 Flammable Solid?",
    "choices": ["Dynamite", "Strike-anywhere matches", "Blasting cap", "Fireworks"],
    "correctAnswer": 1,
    "explanation": ""
  },
  {
    "id": "h15",
    "question": "Which of the following is an example of a Class 8 Corrosive?",
    "choices": ["Acid", "Paint and varnish removers", "Wet cell battery", "All of the above"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h16",
    "question": "Which of the following is classified as a Class 6 Poisonous Substance?",
    "choices": ["Arsenic/pesticides", "Cotton", "Aluminum", "Gasoline"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h17",
    "question": "Which of the following statements are true regarding allowance of carriage and use of FAA approved Portable Oxygen Concentrators (POCs) on board an aircraft:",
    "choices": ["No person using a POC is permitted to sit in an exit row", "The POC is legally marketed in the United States in accordance with the U.S. Food and Drug Administration", "Flight Attendant must advise Captain whenever a passenger brings and intends to use a POC", "All of the above"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h18",
    "question": "In what manual would you find the FAA approved Hazardous Materials Program?",
    "choices": ["FOTM (Flight Operations Training Manual)", "SOP (Standard Operating Procedures Manual)", "HAZ (Hazardous Materials Program)", "GOM (General Operations Manual)"],
    "correctAnswer": 2,
    "explanation": ""
  },
  {
    "id": "h19",
    "question": "The purpose of the Crewmember Security Training Program is to:",
    "choices": ["Prevent aircraft hijackings", "Deter aircraft hijackings", "Prevent and deter sabotage and related terrorist acts", "All of the above"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h20",
    "question": "Define SSI.",
    "choices": ["Standard Security Initiative", "Selective Security Information", "Sensitive Security Information", "Single Source Information"],
    "correctAnswer": 2,
    "explanation": ""
  },
  {
    "id": "h21",
    "question": "Who is the Inflight Security Coordinator?",
    "choices": ["Flight Attendant", "Pilot-In-Command", "Station Manager", "Armed LEO when onboard flight"],
    "correctAnswer": 1,
    "explanation": ""
  },
  {
    "id": "h22",
    "question": "All crewmembers have a responsibility to challenge anyone they see in the AOA/SIDA who does not properly display ID.",
    "choices": ["True", "False"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h23",
    "question": "What are the core concepts flight crew must know in a hijacking situation?",
    "choices": ["Assigned flight crew must follow lockdown procedures and maintain control of flight deck at all costs", "Cabin crew protects flight deck integrity and requests assistance from Able Bodied Passengers", "Land as soon as possible at time and place chosen by captain and stay there", "All of the above"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h24",
    "question": "How would you know that law enforcement personnel (excludes FAM) is authorized to carry a firearm onboard your flight?",
    "choices": ["You may not know", "The agent MUST advise crewmembers and provide Notice of Armed Individual documentation", "The individual will check their firearm with a flight attendant or first officer", "The individual is required to ride the jumpseat"],
    "correctAnswer": 1,
    "explanation": ""
  },
  {
    "id": "h25",
    "question": "What transponder code designates a hijacking?",
    "choices": ["1200", "1700", "7500", "0000"],
    "correctAnswer": 2,
    "explanation": ""
  },
  {
    "id": "h26",
    "question": "An aircraft search must be conducted for the first flight of each calendar day and when the aircraft has been left unattended.",
    "choices": ["True", "False"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h27",
    "question": "Identify Threat Level 1.",
    "choices": ["Disruptive/Suspicious/Threatening", "Life Threatening (Weapon)", "Physically Abusive", "Attempted or Actual Flight Deck Breach"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h28",
    "question": "Identify Threat Level 2.",
    "choices": ["Attempted or Actual Flight Deck Breach", "Physically Abusive", "Life Threatening (Weapon)", "Disruptive/Suspicious/Threatening"],
    "correctAnswer": 1,
    "explanation": ""
  },
  {
    "id": "h29",
    "question": "After resolution, the PIC may terminate which Threat Levels?",
    "choices": ["Threat Level 1 and 3", "Threat Level 2 and 3", "Threat Level 1 and 2", "Threat Level 3 and 4"],
    "correctAnswer": 2,
    "explanation": ""
  },
  {
    "id": "h30",
    "question": "Identify LRBL.",
    "choices": ["Least Risk Bomb Location", "Low Range Bomb Location", "Limited Risk Bomb Location", "Lesser Risk Bomb Location"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h31",
    "question": "Where is the Least Risk Bomb Location (LRBL)?",
    "choices": ["Lavatory", "Over-wing exit area", "Type 1 Service Door", "Main cabin door"],
    "correctAnswer": 2,
    "explanation": ""
  },
  {
    "id": "h32",
    "question": "Threat Level 1 (In flight); What are some examples of what flight crew must do?",
    "choices": ["Lockdown in effect and advise ATC, contact dispatch as appropriate", "Divert to a suitable airport if necessary", "Request appropriate law enforcement response if necessary", "All of the above"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h33",
    "question": "Improvised explosive devices consist of the following components:",
    "choices": ["Power source, initiator, explosive charge and timing device", "Trigger, barrel and explosive charge", "Battery, explosive charge and fuse", "Fuse, battery source and igniter"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h34",
    "question": "Threat Level 3 Life Threatening Behavior (While taxiing); What are some examples of what flight crew must do?",
    "choices": ["Lockdown in effect and advise ATC, contact dispatch", "Summon LEO response and provide information regarding offender(s)", "If possible, disable aircraft and escape as appropriate", "All of the above"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h35",
    "question": "If a hijack situation is underway and NORAD has dispatched aircraft to intercept, squawk 7500 and monitor the emergency frequency 121.5.",
    "choices": ["True", "False"],
    "correctAnswer": 0,
    "explanation": ""
  },
  {
    "id": "h36",
    "question": "Identify examples of \"Operational Necessity\" for a flight crewmember to leave the flight deck.",
    "choices": ["Physiological needs", "Deal with disruptive passenger", "Flight crewmember incapacitation", "Both 1 and 3"],
    "correctAnswer": 3,
    "explanation": ""
  },
  {
    "id": "h37",
    "question": "If a flight attendant is requesting admission to the flight deck and uses the word \"TANGO\", what does this identify?",
    "choices": ["Flight attendant wished to enter flight deck for routine pickup of cups, etc.", "A possible hijacker is demanding the flight attendant request cockpit entry", "Flight attendant wants you to come to cabin", "Flight attendant is advising he/she does not feel well"],
    "correctAnswer": 1,
    "explanation": ""
  },
  {
    "id": "h38",
    "question": "Identify some requirements of the Known Crewmember program.",
    "choices": ["Carriage of another person's property through the KCM access point is prohibited", "Crewmembers may not transit KCM with a prohibited item and are subject to random checkpoint screening", "Crewmember on personal travel to a non-U.S. location must enter sterile area through the screening checkpoint", "All of the above"],
    "correctAnswer": 3,
    "explanation": ""
  }
];

export default hazmatQuestions;
