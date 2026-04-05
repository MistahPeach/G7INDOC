// CRJ-700 CAS Messages — 354-question test bank
// Distractors are always real answers from other questions in this set.

const A = [
  // Index 0 (entry 1): 10TH ISOL OPEN (S)
  "10th stage bleed air isolation valve open.",
  // Index 1 (entry 2): 14TH ISOL OPEN (S)
  "14th stage bleed air isolation valve open.",
  // Index 2 (entry 3): AC 1 AUTOXFER (C)
  "Autotransfer system operation inhibited (bus tie contactor 1).",
  // Index 3 (entry 4): AC 1 AUTOXFER OFF (S)
  "AC 1 auto transfer inhibited manually (auto off relay 1 grounded).",
  // Index 4 (entry 5): AC 2 AUTOXFER (C)
  "Autotransfer system operation inhibited (bus tie contactor 2).",
  // Index 5 (entry 6): AC 2 AUTOXFER OFF (S)
  "AC 2 auto transfer inhibited manually (auto off relay 2 grounded).",
  // Index 6 (entry 7): AC BUS 1 (C)
  "Generator line contactor 1 (GLC1) not in valid (powered) generator or transfer position when AC power in use (AC Bus 2 powered).",
  // Index 7 (entry 8): AC BUS 2 (C)
  "Generator line contactor 2 (GLC2) not in valid (powered) generator or transfer position when AC power in use (AC Bus 1 on).",
  // Index 8 (entry 9): AC ESS ALTN (S)
  "AC Essential Bus Tie Contactor in alternate (#2) position.",
  // Index 9 (entry 10): AC ESS BUS (C)
  "AC essential bus off or failed OR sense relay failed.",
  // Index 10 (entry 11): AC SERV BUS (C)
  "AC service bus off or failed AND AC Bus 2 powered.",
  // Index 11 (entry 12): AC UTIL 1 OFF (S)
  "AC Utility Bus 1 voltage < 90 VAC.",
  // Index 12 (entry 13): AC UTIL 2 OFF (S)
  "AC Utility Bus 2 voltage < 90 VAC.",
  // Index 13 (entry 14): AFCS MSGS FAIL (W)
  "No valid automatic flight-control system (AFCS) message data available from either IAPS side (left or right).",
  // Index 14 (entry 15): ANTI-ICE DUCT (W)
  "Bleed leaks detected from left or right fuselage OR left or right wing anti-ice ducts.",
  // Index 15 (entry 16): AP PITCH TRIM (C)
  "AP Pitch Trim failure alert bit received from any IAPS quadrant.",
  // Index 16 (entry 17): APR ARM (A)
  "APR arm switch on AND both engines > 79.0% N1 AND no APR failures.",
  // Index 17 (entry 18): APR CMD SET (C)
  "Automatic performance reserve command set and no test or command from any DCU.",
  // Index 18 (entry 19): APR INOP (C)
  "APR INOP: ECU failure OR 2+ DCU APR outputs failed OR APR relay switched OR ECU APR triggered with no command OR APR not armed in takeoff config OR N1 increase < 2% on APR command OR N1 sensor failed OR battery bus failed with APR ARM switch armed.",
  // Index 19 (entry 20): APR TEST 1 OK (A)
  "DCU 1 APR test OK (both engines at idle & both left and right ECU APR outputs are triggered).",
  // Index 20 (entry 21): APR TEST 2 OK (A)
  "DCU 2 APR test OK (both engines at idle & both left and right ECU APR outputs are triggered).",
  // Index 21 (entry 22): APR TEST 3 OK (A)
  "DCU 3 APR test OK (both engines at idle & both left and right ECU APR outputs are triggered).",
  // Index 22 (entry 23): AP TRIM IS LWD (C)
  "Mistrim detected by any IAPS quadrant in roll axis (Left Wing Down) — 5 second time delay.",
  // Index 23 (entry 24): AP TRIM IS ND (C)
  "Mistrim detected by any IAPS quadrant in pitch axis (Nose Down) — 5 second time delay.",
  // Index 24 (entry 25): AP TRIM IS NU (C)
  "Mistrim detected by any IAPS quadrant in pitch axis (Nose Up) — 5 second time delay.",
  // Index 25 (entry 26): AP TRIM IS RWD (C)
  "Mistrim detected by any IAPS quadrant in roll axis (Right Wing Down) — 5 second time delay.",
  // Index 26 (entry 27): APU BATT CHGR (S)
  "APU battery overheat or cell overload condition found OR charger 2 failed.",
  // Index 27 (entry 28): APU BATT OFF (C)
  "APU battery not available (28 VDC is not present).",
  // Index 28 (entry 29): APU BLEED ON (C)
  "APU load control valve open AND barometric altitude > 15,000 ft.",
  // Index 29 (entry 30): APU BTL LO (C)
  "APU fire bottle at low pressure.",
  // Index 30 (entry 31): APU ECU FAIL (S)
  "APU ARINC 429 bus not valid AND APU SOV confirmed open.",
  // Index 31 (entry 32): APU FAULT (C)
  "Fault detected at APU shutdown.",
  // Index 32 (entry 33): APU FIRE FAIL (C)
  "APU fire detection loops A and B shorted OR false fire detected.",
  // Index 33 (entry 34): APU FIRE (W)
  "APU fire detected.",
  // Index 34 (entry 35): APU GEN OFF (C)
  "APU generator is off-line and APU rpm > 95% (available) — 15 sec time delay.",
  // Index 35 (entry 36): APU GEN OVLD (C)
  "Overload condition found in APU generator control unit (GCU) (load > 35 KVA).",
  // Index 36 (entry 37): APU IN BITE (S)
  "APU carrying out BITE prior to start.",
  // Index 37 (entry 38): APU LCV FAIL (C)
  "APU load control valve failure detected.",
  // Index 38 (entry 39): APU LCV OPEN (S)
  "APU Load Control Valve open.",
  // Index 39 (entry 40): APU OIL PRESS (C)
  "APU low oil pressure detected.",
  // Index 40 (entry 41): APU OIL TEMP (C)
  "APU high oil temperature detected.",
  // Index 41 (entry 42): APU OVERSPEED (W)
  "APU Turbine speed (RPM) > 107%.",
  // Index 42 (entry 43): APU OVERTEMP (W)
  "APU exhaust gas temperature (EGT) > 743°C and APU rpm > 87% OR EGT > 971°C at any time.",
  // Index 43 (entry 44): APU SOV CLSD (A)
  "APU SOV confirmed closed AND APU fire detected (latch until APU SOV open).",
  // Index 44 (entry 45): APU SOV FAIL (C)
  "APU SOV not in confirmed position (open or closed) — 5 second time delay.",
  // Index 45 (entry 46): APU SOV OPEN (C)
  "APU SOV not closed AND APU fire detected — 10 second time delay.",
  // Index 46 (entry 47): APU SOV OPEN (S)
  "APU SOV confirmed open AND APU fire not detected.",
  // Index 47 (entry 48): APU SQUIB 1 (A)
  "APU firebottle 1 squib OK (only during APU BOTTLE TEST).",
  // Index 48 (entry 49): APU SQUIB 2 (A)
  "APU firebottle 2 squib OK (only during APU BOTTLE TEST).",
  // Index 49 (entry 50): APU START (S)
  "APU Start in progress.",
  // Index 50 (entry 51): ARINC COOL (C)
  "Selected ARINC Cooling fan (1 or 2) failed OR low air flow to ARINC rack — 10 second delay.",
  // Index 51 (entry 52): A/SKID INBD (C)
  "Parking brake not set AND failure in inboard antiskid system OR park brake SOV closed and either downlock set.",
  // Index 52 (entry 53): A/SKID OUTBD (C)
  "Failure found in antiskid outboard system AND parking brake not set.",
  // Index 53 (entry 54): AUTO PRESS 1 FAIL (S)
  "Cabin Pressure controller No. 1 failure detected OR ARINC 429 bus failed.",
  // Index 54 (entry 55): AUTO PRESS 2 FAIL (S)
  "Cabin Pressure controller No. 2 failure detected OR ARINC 429 bus failed.",
  // Index 55 (entry 56): AUTO PRESS (C)
  "Both cabin pressure controllers failed (AND Cabin Press MAN not selected) OR both ARINC 429 busses failed.",
  // Index 56 (entry 57): AUTO XFLOW INHIB (S)
  "Automatic crossflow inhibited (refuel/defuel panel power on, pump fail, or left/right main tank quantity indication fail).",
  // Index 57 (entry 58): AV BAY DOOR (C)
  "Avionics bay door open.",
  // Index 58 (entry 59): BATTERY BUS (C)
  "Battery bus not powered.",
  // Index 59 (entry 60): BLEED MISCONFIG (C)
  "Wing and/or cowl anti-ice systems activated AND 10th stage SOV's not closed AND aircraft in landing or takeoff configuration (at least one gear down and locked or L or R Flaps > 5°).",
  // Index 60 (entry 61): BRAKE OVHT (W)
  "Any left or right inboard or outboard brake overheat condition detected.",
  // Index 61 (entry 62): BTMU FAIL (S)
  "Failure found in brake temperature monitoring unit OR ARINC 429 bus not valid and DC bus 1 powered.",
  // Index 62 (entry 63): BULK FUEL TEMP (C)
  "Fuel temperature in wing tanks (sensor in left wing tank) < -40°C.",
  // Index 63 (entry 64): CABIN ALT (C)
  "Cabin altitude > 8,500 ft but < 10,000 ft (sees pressure from CPAM or inactive pressure controller if CPAM failed).",
  // Index 64 (entry 65): CABIN ALT (W)
  "Cabin altitude > 10,000 ft (sees pressure from CPAM or inactive pressure controller if CPAM failed).",
  // Index 65 (entry 66): CABIN PRESS MAN (S)
  "Cabin pressurization selected to Manual control.",
  // Index 66 (entry 67): CABIN TEMP MAN (S)
  "Cabin temperature in Manual control.",
  // Index 67 (entry 68): CARGO BTL LO (C)
  "Cargo firebottle No. 1 OR No. 2 low pressure.",
  // Index 68 (entry 69): CARGO DOOR (C)
  "Cargo door open.",
  // Index 69 (entry 70): CARGO FAN FAIL (S)
  "Cargo fan inoperative — 5 second time delay.",
  // Index 70 (entry 71): CARGO OVHT (C)
  "Cargo switch in 'COND AIR' AND Temperature > 24°C detected in cargo compartment.",
  // Index 71 (entry 72): CARGO SOV FAIL (S)
  "Cargo air SOV out of position (supply, exhaust, or conditioned air SOV) — 10 second time delay.",
  // Index 72 (entry 73): CARGO SQUIB 1 (A)
  "Cargo firebottle squib 1 OK (only during Cargo bottle 1 Test).",
  // Index 73 (entry 74): CARGO SQUIB 2 (A)
  "Cargo firebottle squib 2 OK (only during Cargo bottle 2 Test).",
  // Index 74 (entry 75): CAS MISCOMP (S)
  "Any Warning, Aural or Caution difference detected — 20 second time delay.",
  // Index 75 (entry 76): CKPT COOL FAIL (S)
  "Cockpit display (CRT) conditioned air SOV not in correct position (closed on ground or open in the air).",
  // Index 76 (entry 77): CKPT TEMP MAN (S)
  "Cockpit temperature in Manual control.",
  // Index 77 (entry 78): CONFIG AILERON (W)
  "Aileron Trim > 1° of center, on ground, more than 30 seconds AND both engines > 70% N1 AND no thrust reverser deploy command.",
  // Index 78 (entry 79): CONFIG AP (W)
  "Autopilot engaged and aircraft on ground AND both engines N1 > 70% AND no thrust reverser deploy command.",
  // Index 79 (entry 80): CONFIG FLAPS (W)
  "Flaps not in takeoff range and aircraft on ground AND both engines > 70% N1 AND no thrust reverser deploy command.",
  // Index 80 (entry 81): CONFIG RUDDER (W)
  "Rudder Trim > 1° of center, on ground, for more than 30 seconds AND both engines > 70% N1 AND no thrust reverser deploy command.",
  // Index 81 (entry 82): CONFIG SPLRS (W)
  "Spoilers not all down and aircraft on ground AND both engine N1 > 70% AND no thrust reverser deploy command.",
  // Index 82 (entry 83): CONFIG STAB (W)
  "Stabilizer not in green band (below 3.0 or above 9.0 units) or both channels inoperative and aircraft on ground AND both engines > 70% N1 AND no thrust reverser deploy command.",
  // Index 83 (entry 84): CONT IGNITION (S)
  "Continuous ignition selected (all left and right ignition A and B ON).",
  // Index 84 (entry 85): COOL EXHAUST FAIL (S)
  "Exhaust fan failed OR low flow from cooling exhaust and AC bus 1 powered — 10 second time delay.",
  // Index 85 (entry 86): COWL A/ICE ON (A)
  "Both cowl anti-ice switches selected on and operating normally.",
  // Index 86 (entry 87): CPAM FAIL (S)
  "CPAM failure detected OR ARINC 429 bus failed.",
  // Index 87 (entry 88): CPLT ROLL CMD (A)
  "Copilot roll authority selected.",
  // Index 88 (entry 89): DC BUS 1 (C)
  "DC Bus 1 not powered (28 VDC) AND either AC Bus 1 or 2 is powered.",
  // Index 89 (entry 90): DC BUS 2 (C)
  "DC Bus 2 not powered (28 VDC) AND either AC Bus 1 or 2 is powered.",
  // Index 90 (entry 91): DC EMER BUS (S)
  "DC emergency bus not powered.",
  // Index 91 (entry 92): DC ESS BUS (C)
  "Essential DC Bus not powered (28 VDC not powered).",
  // Index 92 (entry 93): DC ESS TIE CLSD (S)
  "DC essential tie contactor energized.",
  // Index 93 (entry 94): DC SERV BUS (C)
  "DC Service Bus not powered (28 VDC) AND AC Bus 1 or 2 powered.",
  // Index 94 (entry 95): DC TIE 1 CLSD (S)
  "DC TIE Contactor 1 energized.",
  // Index 95 (entry 96): DC TIE 2 CLSD (S)
  "DC TIE Contactor 2 energized.",
  // Index 96 (entry 97): DCU 1 APR FAIL (S)
  "APR relay not energized by DCU 1 during test (latch until test repeated).",
  // Index 97 (entry 98): DCU 1 AURAL INOP (S)
  "DCU 1 internal aural failure OR aural annunciation inoperative (failure detection by other DCU) OR DCU 1 aural manually disabled.",
  // Index 98 (entry 99): DCU 1 INOP (S)
  "DCU 1 internal fault or other DCU(s) detect DCU 1 failed OR crosstalk ARINC 429 bus failed.",
  // Index 99 (entry 100): DCU 2 APR FAIL (S)
  "APR relay not energized by DCU 2 during test (latch until test repeated).",
  // Index 100 (entry 101): DCU 2 AURAL INOP (S)
  "DCU 2 internal aural failure OR aural annunciation inoperative (failure detection by other DCU) OR DCU 2 aural manually disabled.",
  // Index 101 (entry 102): DCU 2 INOP (S)
  "DCU 2 internal fault or other DCU(s) detect DCU 2 failed OR crosstalk ARINC 429 bus failed.",
  // Index 102 (entry 103): DCU 3 APR FAIL (S)
  "APR relay not energized by DCU 3 during test (latch until test repeated).",
  // Index 103 (entry 104): DCU 3 AURAL INOP (S)
  "DCU 3 internal aural failure OR aural annunciation inoperative (failure detection by other DCU) OR DCU 3 aural manually disabled.",
  // Index 104 (entry 105): DCU 3 INOP (S)
  "DCU 3 internal fault or other DCU(s) detect DCU 3 failed OR crosstalk ARINC 429 bus failed.",
  // Index 105 (entry 106): DIFF PRESS (W)
  "Cabin differential pressure > 8.5 psi (uses CPAM or inactive press controller if CPAM failed).",
  // Index 106 (entry 107): DISPLAY COOL (C)
  "Selected cockpit display-unit fan (1 or 2 or standby) failed OR low airflow to displays — 10 second delay.",
  // Index 107 (entry 108): DUCT MON LOOP A (S)
  "10th stage duct leak monitor loop A test selected.",
  // Index 108 (entry 109): DUCT MON LOOP B (S)
  "10th stage duct leak monitor loop B test selected.",
  // Index 109 (entry 110): DUCT TEST OK (A)
  "Duct leak detection test OK (all 5 duct failure warnings displayed).",
  // Index 110 (entry 111): EFIS COMP INOP (C)
  "Left or right PFD discrete words 1 and 2 (comparators) not available — 5 second time delay.",
  // Index 111 (entry 112): EFIS COMP MON (C)
  "Comparator monitor alert bit received from either PFD 1 or PFD 2.",
  // Index 112 (entry 113): EICAS COMP INOP (C)
  "Any Warning, Aural, or Caution label from a DCU failed ('Engine Miscompare' function has failed) — DCUs cannot compare.",
  // Index 113 (entry 114): ELT ON (C)
  "Emergency Locator Transmitter ON (output signal > 6 volts in past 6 seconds).",
  // Index 114 (entry 115): EMER DEPRESS (C)
  "Emergency depressurization selected.",
  // Index 115 (entry 116): EMER LTS OFF (C)
  "Emergency lights OFF.",
  // Index 116 (entry 117): EMER LTS ON (S)
  "Emergency lights power supply output voltage > 4.5 Volts.",
  // Index 117 (entry 118): EMER PWR ONLY (W)
  "ADG deployed AND no power available from AC Bus 1 or AC Bus 2.",
  // Index 118 (entry 119): ENG BTL 1 LO (C)
  "Engine firebottle 1 low pressure.",
  // Index 119 (entry 120): ENG BTL 2 LO (C)
  "Engine firebottle 2 low pressure.",
  // Index 120 (entry 121): ENGINE OVERSPD (W)
  "Left or right engine N1 > 98.6% OR left or right engine N2 > 99.3% — 4 second time delay.",
  // Index 121 (entry 122): ENG TYPE MISCOMP (S)
  "CF34-3A1 / 3B1 Configuration Strapping Unit setup.",
  // Index 122 (entry 123): ESS TRU 1 (C)
  "Essential TRU 1 output voltage < 18 VDC AND AC Essential Bus powered.",
  // Index 123 (entry 124): ESS TRU 2 (C)
  "Essential TRU 2 output voltage < 18 VDC AND AC Bus 2 powered.",
  // Index 124 (entry 125): FD 1 FAIL (S)
  "Left flight director guidance failure.",
  // Index 125 (entry 126): FD 2 FAIL (S)
  "Right flight director guidance failure.",
  // Index 126 (entry 127): FDR ACCEL FAIL (S)
  "FDR accelerometer out of limits AND aircraft on ground AND park brake set AND DC bus 1 on (latched until FDR event switch pressed > 2 seconds).",
  // Index 127 (entry 128): FDR EVENT (A)
  "FDR Event switch pressed.",
  // Index 128 (entry 129): FDR FAIL (S)
  "FDR data not valid (failed wiring OR beacon or strobe not selected ON) AND AC bus 1 and DC bus 1 powered AND both engines running.",
  // Index 129 (entry 130): FLAPS DEGRADED (S)
  "Skew detection system proximity sensor fault (OB flap actuators) OR left flap position transmitter fault OR internal skew detection unit fault.",
  // Index 130 (entry 131): FLAPS FAIL (C)
  "Flap channels 1 and 2 failed AND AC bus 1 or AC bus 2 energized.",
  // Index 131 (entry 132): FLAPS HALFSPEED (S)
  "Either flap motor (channel 1 or 2) failed or overheated. Flaps move half speed.",
  // Index 132 (entry 133): FLT SPLR DEPLOY (A)
  "Left or right flight spoiler deployed (angle > 3°) or flight spoiler lever > 5° AND radio altitude > 300 ft AND both engine N1 < 79%.",
  // Index 133 (entry 134): FLT SPLR DEPLOY (C)
  "Left or right flight spoiler deployed (angle > 3°) or flight spoiler lever > 5° AND aircraft in air AND radio altitude between 10–300 ft OR radio altitude > 10 ft and any engine N1 > 79%.",
  // Index 134 (entry 135): FLT SPLRS (C)
  "Flight Spoilers failure detected.",
  // Index 135 (entry 136): FLT SPLRS FAULT (S)
  "Loss of redundancy in flight spoilers with no major failure.",
  // Index 136 (entry 137): FLUTTER DAMPER (S)
  "Hydraulic fluid level in affected flutter damper approximately 20% of normal level.",
  // Index 137 (entry 138): FUEL CH 1/2 FAIL (C)
  "Failure found in fuel quantity computer channel 1 and 2.",
  // Index 138 (entry 139): FUEL CH 1 FAIL (S)
  "Fuel Quantity Computer channel 1 fault detected OR ARINC 429 bus not valid.",
  // Index 139 (entry 140): FUEL CH 2 FAIL (S)
  "Fuel Quantity Computer channel 2 fault detected OR ARINC 429 bus not valid.",
  // Index 140 (entry 141): FUEL IMBALANCE (C)
  "Fuel Imbalance > 800 lbs detected.",
  // Index 141 (entry 142): GEAR DISAGREE (W)
  "Disagreement between landing gear handle & actual gear positions (with time delays to prevent warning for normal operation).",
  // Index 142 (entry 143): GEN 1 OFF (C)
  "Generator 1 off-line and left engine running in air OR both engines running on ground and generator 1 off for more than 15 seconds.",
  // Index 143 (entry 144): GEN 1 OVLD (C)
  "Generator control unit (GCU) 1 overload failure found (load > 35 KVA).",
  // Index 144 (entry 145): GEN 2 OFF (C)
  "Generator 2 off-line and right engine running in air OR both engines running on ground and generator 2 off more than 15 seconds.",
  // Index 145 (entry 146): GEN 2 OVLD (C)
  "Generator control unit (GCU) 2 overload failure found (load > 35 KVA).",
  // Index 146 (entry 147): GLD MAN ARM (A)
  "Ground lift dump manually armed.",
  // Index 147 (entry 148): GLD MAN DISARM (S)
  "Ground lift dump manually disarmed.",
  // Index 148 (entry 149): GLD NOT ARMED (C)
  "Ground Lift Dump not armed AND aircraft in landing configuration or on ground with both engines > 70% N1.",
  // Index 149 (entry 150): GLD UNSAFE (C)
  "Ground Lift Dump in condition which could allow accidental deployment OR ground lift dump not manually disarmed.",
  // Index 150 (entry 151): GND SPLR DEPLOY (A)
  "Any ground spoiler deployed AND radio altitude < 10 ft AND main landing gear weight-on-wheels.",
  // Index 151 (entry 152): GND SPLR DEPLOY (C)
  "Any ground spoiler deployed in air AND above 10 ft AGL (Rad Alt).",
  // Index 152 (entry 153): GPWS FAIL (S)
  "Ground Proximity Warning System fault detected.",
  // Index 153 (entry 154): GRAV XFLOW FAIL (S)
  "Gravity Crossflow Valve not in confirmed position (failed) after 5 second time delay.",
  // Index 154 (entry 155): GRAV XFLOW OPEN (A)
  "Gravity Crossflow Valve confirmed open.",
  // Index 155 (entry 156): GS CANCEL (S)
  "GPWS glideslope cancel mode selected.",
  // Index 156 (entry 157): HORN MUTED (S)
  "Landing gear horn muted (by crew selection of switch).",
  // Index 157 (entry 158): HYD 1 HI TEMP (C)
  "Hydraulic system 1 temperature > 95.7°C, latched until temperature < 94.3°C.",
  // Index 158 (entry 159): HYD 1 LO PRESS (C)
  "Left EDP and electric pump 1B at low pressure AND left engine running OR aircraft in air or GLC2 in transfer/generator position and electric pump 1B selected on OR GLC 2 in transfer/generator position and left or right flaps > 5°.",
  // Index 159 (entry 160): HYD 2 HI TEMP (C)
  "Hydraulic system 2 temperature > 95.7°C, latched until temperature < 94.3°C.",
  // Index 160 (entry 161): HYD 2 LO PRESS (C)
  "Right EDP and electric pump 2B at low pressure AND right engine running OR aircraft in air or GLC1 in transfer/generator position and electric pump 2B selected on OR GLC 1 in transfer/generator position and left or right flaps > 5°.",
  // Index 161 (entry 162): HYD 3 HI TEMP (C)
  "Hydraulic system 3 temperature > 95.7°C, latched until temperature < 94.3°C.",
  // Index 162 (entry 163): HYD 3 LO PRESS (C)
  "Electric pumps 3A and 3B at low pressure.",
  // Index 163 (entry 164): HYD EDP 1A (C)
  "Left EDP pressure < 1800 psi AND left hydraulic SOV not closed AND left engine running AND electric pump 1B operating and not low pressure — 5 second time delay.",
  // Index 164 (entry 165): HYD EDP 2A (C)
  "Right EDP pressure < 1800 psi AND right hydraulic SOV not closed AND right engine running AND electric pump 2B operating and not low pressure — 5 second time delay.",
  // Index 165 (entry 166): HYD PUMP 1B (C)
  "Left electric pump (1B) pressure < 1800 psi and EDP 1A not low pressure and AC bus 2 energized AND right generator not off or aircraft on ground AND electric pump switch 1B on or right flap > 5°.",
  // Index 166 (entry 167): HYD PUMP 2B (C)
  "Right electric pump (2B) pressure < 1800 psi and EDP 2A not low pressure and AC bus 1 energized AND left generator not off or aircraft on ground AND electric pump switch 2B on or left flap > 5°.",
  // Index 167 (entry 168): HYD PUMP 3A (C)
  "Hydraulic electric pump 3A pressure < 1800 psi AND AC bus 2 on AND electric pump 3A selected on or flap > 5° and Gen 2 online or ADG deployed AND electric pump 3B not low pressure — 5 second time delay.",
  // Index 168 (entry 169): HYD PUMP 3B (C)
  "Hydraulic electric pump 3B pressure < 1800 psi and electric pump 3A selected on and not low pressure AND ADG deployed OR (AC bus 1 on and electric pump 3B selected on or flap > 5° and either main generator on-line).",
  // Index 169 (entry 170): HYD SOV 1 CLSD (A)
  "Hydraulic SOV 1 closed.",
  // Index 170 (entry 171): HYD SOV 1 OPEN (C)
  "Hydraulic SOV 1 not closed AND left engine fire detected — 10 second time delay.",
  // Index 171 (entry 172): HYD SOV 2 CLSD (A)
  "Hydraulic SOV 2 closed.",
  // Index 172 (entry 173): HYD SOV 2 OPEN (C)
  "Hydraulic SOV 2 not closed AND right engine fire detected — 10 second time delay.",
  // Index 173 (entry 174): IAPS DEGRADED (S)
  "Any IAPS GP-5 bus failed and aircraft on ground OR both PSEU buses invalid.",
  // Index 174 (entry 175): IAPS OVERTEMP (S)
  "Overtemperature condition (own or cross-side power supply) found in any IAPS quadrant.",
  // Index 175 (entry 176): IB BRAKE PRESS (C)
  "Inboard brake pressure < 1000 psi (latched until > 1070 psi) AND DC Bus 2 powered.",
  // Index 176 (entry 177): IB GND SPLR FAULT (S)
  "Loss of redundancy in inboard ground spoilers with no major failure.",
  // Index 177 (entry 178): IB GND SPLRS (C)
  "Fault detected in either or both, left or right inboard ground spoilers.",
  // Index 178 (entry 179): ICE (A)
  "Ice detected and anti-ice working correctly (left and right wing leading edges sufficient heat AND cowl anti-ice not failed or off).",
  // Index 179 (entry 180): ICE (C)
  "Ice detected AND left or right wing leading edge not sufficient heat OR cowl anti-ice fail with anti-ice on OR engine running with cowl anti-ice off.",
  // Index 180 (entry 181): ICE DET 1 FAIL (S)
  "Ice detector 1 failure detected AND Ice detector 2 not failed.",
  // Index 181 (entry 182): ICE DET 2 FAIL (S)
  "Ice detector 2 failure detected AND Ice detector 1 not failed.",
  // Index 182 (entry 183): ICE DETECT FAIL (C)
  "Ice detectors 1 and 2 failed.",
  // Index 183 (entry 184): IDG 1 (C)
  "IDG 1 low oil pressure or oil temperature > 160°C AND left engine running and IDG 1 not disconnected.",
  // Index 184 (entry 185): IDG 1 DISC (S)
  "IDG 1 disconnected (PMG 1 Volts < 0.6 V) AND left N2 > 9%.",
  // Index 185 (entry 186): IDG 2 (C)
  "IDG 2 low oil pressure or oil temperature > 160°C AND right engine running and IDG 2 not disconnected.",
  // Index 186 (entry 187): IDG 2 DISC (S)
  "IDG 2 disconnected (PMG 2 Volts < 0.6 V) AND right N2 > 9%.",
  // Index 187 (entry 188): IGNITION A/B (S)
  "Left or right ignition A system on AND left or right ignition B system on.",
  // Index 188 (entry 189): IGNITION A (S)
  "Left or right ignition A system on.",
  // Index 189 (entry 190): IGNITION B (S)
  "Left or right ignition B system on.",
  // Index 190 (entry 191): INBD COOL FAIL (S)
  "Inboard avionics cooling SOV closed and passenger door unlocked (10 second time delay) OR SOV is open with PAX door locked and service door open.",
  // Index 191 (entry 192): L 10TH ARM OPEN (S)
  "Left 10th stage bleed air switch selected open AND 10th stage SOV closed.",
  // Index 192 (entry 193): L 10TH DUCT (W)
  "Duct leak detected at left 10th stage manifold.",
  // Index 193 (entry 194): L 10TH SOV CLSD (S)
  "Left 10th stage bleed air SOV closed.",
  // Index 194 (entry 195): L 14TH ARM CLSD (S)
  "Left 14th stage bleed air switch selected closed AND 14th stage SOV open.",
  // Index 195 (entry 196): L 14TH DUCT (W)
  "Duct leak detected at left 14th stage manifold OR pylon.",
  // Index 196 (entry 197): L 14TH SOV CLSD (S)
  "Left 14th stage bleed air SOV closed.",
  // Index 197 (entry 198): L AOA HEAT (C)
  "Left angle of attack (AOA) vane heat not on OR heat failed.",
  // Index 198 (entry 199): L APR ECU FAIL (S)
  "Left engine control unit (N1 Amplifier) failure — APR relay energized during APR test and both engines at idle but APR output not triggered from left ECU. Latched until triggered.",
  // Index 199 (entry 200): L AUTO XFLOW ON (S)
  "Left crossflow SOV open AND right crossflow SOV closed AND XFLOW/APU Pump on and in AUTO.",
  // Index 200 (entry 201): L COWL A/ICE (C)
  "Left cowl anti-ice pressure low OR valve failed open — 3 second time delay.",
  // Index 201 (entry 202): L COWL A/ICE ON (A)
  "Left cowl anti-ice switch selected on AND left anti-ice not failed (pressure detected) AND left engine running AND left 14th stage SOV open AND no thrust reverser commanded — 4 second time delay.",
  // Index 202 (entry 203): L EMER DOOR (C)
  "Left emergency (Overwing) door open (not in place).",
  // Index 203 (entry 204): L ENG FIRE (W)
  "Left engine fire detected in core section.",
  // Index 204 (entry 205): L ENGINE START (S)
  "Left engine start in progress.",
  // Index 205 (entry 206): L ENG MISCOMP (C)
  "Left engine N1, ITT, or N2 failure OR left engine N1 or N2 miscompare by 5% OR left engine ITT > 200°C and miscompare > 40° — 6 second time delay.",
  // Index 206 (entry 207): L ENG OIL PRESS (W)
  "Left engine low oil pressure detected (< 25 psi relative to sump) — aural only with engine running or WOW.",
  // Index 207 (entry 208): L ENG SOV CLSD (A)
  "Left engine fuel feed SOV confirmed closed AND left engine fire detected (latch until SOV not confirmed closed).",
  // Index 208 (entry 209): L ENG SOV CLSD (C)
  "Left engine fuel feed SOV confirmed closed AND no left engine fire AND no L ENG SOV CLSD advisory message.",
  // Index 209 (entry 210): L ENG SOV FAIL (C)
  "Left engine fuel feed SOV not in confirmed position after 5 second time delay.",
  // Index 210 (entry 211): L ENG SOV OPEN (C)
  "Left engine fuel feed SOV not confirmed closed AND left engine fire detected — 10 second time delay.",
  // Index 211 (entry 212): L ENG SQUIB 1 (A)
  "Left engine firebottle 1 squib OK (only during ENGINE BOTTLE 1 TEST).",
  // Index 212 (entry 213): L ENG SQUIB 2 (A)
  "Left engine firebottle 2 squib OK (only during ENGINE BOTTLE 2 TEST).",
  // Index 213 (entry 214): L FIRE FAIL (C)
  "Left engine fire detection loops A and B shorted OR false fire detected.",
  // Index 214 (entry 215): L FLT SPLR (C)
  "Left flight spoiler failure but entire flight spoiler system not failed.",
  // Index 215 (entry 216): L FUEL FILTER (C)
  "Left engine fuel filter in or almost in bypass mode (differential pressure switch at fuel filter).",
  // Index 216 (entry 217): L FUEL LO PRESS (C)
  "Left engine inlet fuel pressure low AND left engine fuel SOV open — 4 second time delay.",
  // Index 217 (entry 218): L FUEL LO TEMP (C)
  "Left fuel temperature (engine fuel filter) < 4.3°C (latched until > 5.7°C) AND left engine running.",
  // Index 218 (entry 219): L FUEL PUMP (C)
  "Left fuel boost pump failure (low pressure detected) OR pump not selected on — 5 second time delay.",
  // Index 219 (entry 220): L FUEL PUMP ON (A)
  "Left fuel pump ON.",
  // Index 220 (entry 221): L JET OVHT FAIL (C)
  "Left jetpipe overheat detection loops A and B shorted OR false fire detected.",
  // Index 221 (entry 222): L JETPIPE OVHT (W)
  "Left jetpipe overheat detected in tailpipe fairing OR pylon.",
  // Index 222 (entry 223): L MAIN EJECTOR (C)
  "Left engine main ejector at low pressure AND left engine running.",
  // Index 223 (entry 224): L PACK HI PRESS (C)
  "L PACK failed (high pressure event). Reset by selecting Left PACK and Left 10th stage off then on (latched until reset).",
  // Index 224 (entry 225): L PACK HI TEMP (C)
  "Left PACK failed (high temperature event). Reset by selecting left pack and left 10th stage off then on (after pack cooled down).",
  // Index 225 (entry 226): L PACK OFF (S)
  "Left air conditioning pack is off (selected off, control relay deenergized).",
  // Index 226 (entry 227): L PITOT HEAT (C)
  "Left pitot heat off OR left pitot heat failed.",
  // Index 227 (entry 228): L REV ARMED (A)
  "Left thrust reverser armed.",
  // Index 228 (entry 229): L REV UNLOCKED (C)
  "Left thrust reverser unlocked and not armed OR left thrust reverser unlocked and no valid deployment command set.",
  // Index 229 (entry 230): L REV UNSAFE (C)
  "Left thrust reverser unsafe to arm (deploy command set but thrust reverser not armed or unlocked).",
  // Index 230 (entry 231): L SCAV EJECTOR (C)
  "Left scavenge ejector at low pressure (low flow detected) AND left engine running.",
  // Index 231 (entry 232): L SPOILERON (C)
  "Left spoileron failure but no overall spoileron failure.",
  // Index 232 (entry 233): L STATIC HEAT (C)
  "Left static heat off OR left static heat failed.",
  // Index 233 (entry 234): L WINDOW HEAT (C)
  "Either overheat or no heat detected in left window OR test signal present more than 10 seconds.",
  // Index 234 (entry 235): L WING A/ICE (C)
  "Left wing anti-ice pressure low AND not left wing sufficient heat (< 88°C) AND wing anti-ice selected ON AND no thrust reverser deploy command.",
  // Index 235 (entry 236): L WSHLD HEAT (C)
  "Either overheat or no heat detected in left windshield OR test signal present more than 10 seconds, AND AC Bus 1 powered.",
  // Index 236 (entry 237): L XFER SOV (C)
  "Left fuel transfer SOV failed.",
  // Index 237 (entry 238): L XFLOW ON (S)
  "Left crossflow SOV open AND right crossflow SOV closed AND XFLOW/APU Pump on and NOT in AUTO.",
  // Index 238 (entry 239): L XFLOW SOV (C)
  "Left crossflow SOV fault detected.",
  // Index 239 (entry 240): MACH TRIM (C)
  "Mach Trim failed (status invalid) OR MACH TRIM not engaged.",
  // Index 240 (entry 241): MAIN BATT CHGR (S)
  "Main battery overheat or cell overload condition found OR charger 1 failed.",
  // Index 241 (entry 242): MAIN BATT OFF (C)
  "Main battery is not available (28 V DC is not present).",
  // Index 242 (entry 243): MAN XFLOW (S)
  "Manual crossflow selected.",
  // Index 243 (entry 244): MLG BAY OVHT (W)
  "Main landing gear bay overheat condition is detected OR gear bay overheat in TEST.",
  // Index 244 (entry 245): MLG OVHT FAIL (C)
  "Short found in the gear bay overheat detection system OR gear bay overheat fail in TEST.",
  // Index 245 (entry 246): NOSE DOOR OPEN (W)
  "Nose bay door open more than 10 seconds after gear has locked or when IAS > 250 KT.",
  // Index 246 (entry 247): NO SMOKING (S)
  "NO SMOKING signs selected on.",
  // Index 247 (entry 248): NO STARTER CUTOUT (C)
  "Starter cutout malfunction detected (L or R engine starting and L or R N2 > 57% for more than 4 seconds).",
  // Index 248 (entry 249): OB BRAKE PRESS (C)
  "Outboard brake pressure < 1000 psi (latched until > 1070 psi) AND DC Bus 2 powered.",
  // Index 249 (entry 250): OB GND SPLRS (C)
  "Fault detected in either or both, left or right outboard ground spoilers.",
  // Index 250 (entry 251): OB GRN SPLR FAULT (S)
  "Loss of redundancy in outboard ground spoilers with no major failure.",
  // Index 251 (entry 252): OVBD COOL (C)
  "Overboard avionics cooling SOV open AND passenger and service doors locked — 10 sec time delay.",
  // Index 252 (entry 253): OVBD COOL FAIL (S)
  "Overboard avionics cooling SOV closed AND passenger door or service door unlocked — 10 second time delay.",
  // Index 253 (entry 254): OXY LO PRESS (C)
  "Crew oxygen bottle pressure < 1400 psi (displayed).",
  // Index 254 (entry 255): PARK BRAKE SOV (C)
  "Parking brake SOV has failed OR parking brake SOV closed and park brake not set.",
  // Index 255 (entry 256): PARKING BRAKE ON (A)
  "Parking brake set AND aircraft on ground and either engine N1 < 70% AND inboard brake pressure > 900 psi.",
  // Index 256 (entry 257): PARKING BRAKE (W)
  "Parking brake set in air OR park brake set and both engines N1 > 70%.",
  // Index 257 (entry 258): PASSENGER DOOR (W)
  "Passenger door unlatched AND outer handle unlocked — aural only when either engine running or in air, 2 second time delay.",
  // Index 258 (entry 259): PASS OXY ON (C)
  "Passenger oxygen system activated — auto or manual.",
  // Index 259 (entry 260): PAX DR LATCH (C)
  "Passenger door not latched AND outer handle locked.",
  // Index 260 (entry 261): PAX DR OUT HNDL (C)
  "Passenger door latched AND outer handle unlocked.",
  // Index 261 (entry 262): PAX DR STOW (C)
  "Passenger door stowing (inner) handle not in correct position — 5 second time delay.",
  // Index 262 (entry 263): PITOT BASE HEAT (C)
  "Left or right pitot base heater failed.",
  // Index 263 (entry 264): PLT ROLL CMD (A)
  "Pilot roll authority selected.",
  // Index 264 (entry 265): PROX SYS CHAN (C)
  "PSEU failure OR automatic extend/retract system not operational.",
  // Index 265 (entry 266): PROX SYS FAULT (S)
  "PSEU sensor system not ready (possible failure in sensor circuitry).",
  // Index 266 (entry 267): R 10TH ARM OPEN (S)
  "Right 10th Stage bleed air switch selected open AND 10th stage SOV closed.",
  // Index 267 (entry 268): R 10TH DUCT (W)
  "Duct leak detected at right 10th stage manifold.",
  // Index 268 (entry 269): R 10TH SOV CLSD (S)
  "Right 10th stage bleed air SOV closed.",
  // Index 269 (entry 270): R 14TH ARM CLSD (S)
  "Right 14th stage bleed air switch selected closed AND 14th stage SOV open.",
  // Index 270 (entry 271): R 14TH DUCT (W)
  "Duct leak detected at right 14th stage manifold OR pylon.",
  // Index 271 (entry 272): R 14TH SOV CLSD (S)
  "Right 14th stage bleed air SOV closed.",
  // Index 272 (entry 273): RAM AIR OPEN (S)
  "RAM AIR shutoff valve open.",
  // Index 273 (entry 274): R AOA HEAT (C)
  "Right angle of attack (AOA) vane heat not on OR heat failed AND AC bus 1 powered.",
  // Index 274 (entry 275): R APR ECU FAIL (S)
  "Right engine control unit failure (N1 Amplifier) — APR relay energized during APR test and both engines at idle but APR output not triggered from right ECU. Latched until triggered.",
  // Index 275 (entry 276): R AUTO XFLOW ON (S)
  "Right crossflow SOV open AND left crossflow SOV closed AND XFLOW/APU Pump on and in AUTO.",
  // Index 276 (entry 277): R COWL A/ICE (C)
  "Right cowl anti-ice pressure low OR valve failed open — 3 second time delay.",
  // Index 277 (entry 278): R COWL A/ICE ON (A)
  "Right cowl anti-ice switch selected on AND right anti-ice not failed (pressure detected) AND right engine running AND right 14th stage SOV open AND no thrust reverser commanded — 4 second time delay.",
  // Index 278 (entry 279): R EMER DOOR (C)
  "Right emergency (Overwing) door open (not in place).",
  // Index 279 (entry 280): R ENG FIRE (W)
  "Right engine fire detected in core section.",
  // Index 280 (entry 281): R ENGINE START (S)
  "Right engine start in progress.",
  // Index 281 (entry 282): R ENG MISCOMP (C)
  "Right engine N1, ITT, or N2 failure OR right engine N1 or N2 miscompare by 5% OR right engine ITT > 200°C and miscompare > 40° — 6 second time delay.",
  // Index 282 (entry 283): R ENG OIL PRESS (W)
  "Right engine low oil pressure detected (< 25 psi relative to sump) — aural only with engine running.",
  // Index 283 (entry 284): R ENG SOV CLSD (A)
  "Right engine fuel feed SOV confirmed closed AND right engine fire detected (latch until SOV not confirmed closed).",
  // Index 284 (entry 285): R ENG SOV CLSD (C)
  "Right engine fuel feed SOV confirmed closed AND no right engine fire AND no R ENG SOV CLSD advisory message.",
  // Index 285 (entry 286): R ENG SOV FAIL (C)
  "Right engine fuel feed SOV not in confirmed position after 5 second time delay.",
  // Index 286 (entry 287): R ENG SOV OPEN (C)
  "Right engine fuel feed SOV not confirmed closed AND right engine fire detected — 10 second time delay.",
  // Index 287 (entry 288): R ENG SQUIB 1 (A)
  "Right engine firebottle 1 squib OK (only during ENGINE BOTTLE 1 TEST).",
  // Index 288 (entry 289): R ENG SQUIB 2 (A)
  "Right engine firebottle 2 squib OK (only during ENGINE BOTTLE 2 TEST).",
  // Index 289 (entry 290): R FIRE FAIL (C)
  "Right engine fire detection loops A and B shorted OR false fire detected.",
  // Index 290 (entry 291): R FLT SPLR (C)
  "Right flight spoiler failure but entire flight spoiler system not failed.",
  // Index 291 (entry 292): R FUEL FILTER (C)
  "Right engine fuel filter in or almost in bypass mode (differential pressure switch at fuel filter).",
  // Index 292 (entry 293): R FUEL LO PRESS (C)
  "Right engine inlet fuel pressure low AND right engine fuel SOV open — 4 second time delay.",
  // Index 293 (entry 294): R FUEL LO TEMP (C)
  "Right fuel temperature (engine fuel filter) < 4.3°C (latched until > 5.7°C) AND right engine running.",
  // Index 294 (entry 295): R FUEL PUMP (C)
  "Right boost pump failure (low pressure detected) OR pump not selected on — 5 second time delay.",
  // Index 295 (entry 296): R FUEL PUMP ON (A)
  "Right fuel pump ON.",
  // Index 296 (entry 297): R JET OVHT FAIL (C)
  "Right jetpipe overheat detection loops A and B shorted OR false fire detected.",
  // Index 297 (entry 298): R JETPIPE OVHT (W)
  "Right jetpipe overheat detected in tailpipe fairing OR pylon.",
  // Index 298 (entry 299): R MAIN EJECTOR (C)
  "Right engine main ejector at low pressure AND right engine running.",
  // Index 299 (entry 300): R PACK HI PRESS (C)
  "R PACK failed (high pressure event). Reset by selecting Right PACK and Right 10th stage off then on (latched until reset).",
  // Index 300 (entry 301): R PACK HI TEMP (C)
  "Right PACK failed (high temperature event). Reset by selecting right pack and right 10th stage off then on (after pack cooled down).",
  // Index 301 (entry 302): R PACK OFF (S)
  "Right air conditioning pack is off (selected off, control relay deenergized).",
  // Index 302 (entry 303): R PITOT HEAT (C)
  "Right pitot heat off or failed AND AC bus 1 on.",
  // Index 303 (entry 304): R REV ARMED (A)
  "Right thrust reverser armed.",
  // Index 304 (entry 305): R REV UNLOCKED (C)
  "Right thrust reverser is unlocked and not armed OR right thrust reverser is unlocked and there is no valid deployment command set.",
  // Index 305 (entry 306): R REV UNSAFE (C)
  "Right thrust reverser unsafe to arm (deploy command set but thrust reverser not armed or unlocked).",
  // Index 306 (entry 307): R SCAV EJECTOR (C)
  "Right scavenge ejector at low pressure (low flow detected) AND right engine running.",
  // Index 307 (entry 308): R SPOILERON (C)
  "Right spoileron failure but no overall spoileron failure.",
  // Index 308 (entry 309): R STATIC HEAT (C)
  "Right static heat off or failed AND DC bus 1 on.",
  // Index 309 (entry 310): R WINDOW HEAT (C)
  "Either overheat or no heat detected in right window OR test signal present more than 10 seconds, AND AC bus 2 powered.",
  // Index 310 (entry 311): R WING A/ICE (C)
  "Right wing anti-ice pressure low AND not right wing sufficient heat (< 88°C) AND wing anti-ice selected on AND no thrust reverser deploy command.",
  // Index 311 (entry 312): R WSHLD HEAT (C)
  "Either overheat or no heat detected in right windshield OR test signal present more than 10 seconds, AND AC Bus 2 powered.",
  // Index 312 (entry 313): R XFER SOV (C)
  "Right fuel transfer SOV failed.",
  // Index 313 (entry 314): R XFLOW ON (S)
  "Right crossflow SOV open AND left crossflow SOV closed AND XFLOW/APU Pump on and NOT in AUTO.",
  // Index 314 (entry 315): R XFLOW SOV (C)
  "Right crossflow SOV fault detected.",
  // Index 315 (entry 316): SEAT BELTS (S)
  "SEAT BELTS signs selected on.",
  // Index 316 (entry 317): SELCAL VHF3 (A)
  "Incoming ACARS message on VHF 3.",
  // Index 317 (entry 318): SERVICE DOOR (C)
  "Service door not locked OR outer handle not stowed.",
  // Index 318 (entry 319): SMOKE CARGO (W)
  "Smoke detected in aft cargo compartment OR cargo smoke detectors in TEST.",
  // Index 319 (entry 320): SMOKE TOILET (C)
  "Smoke detected in lavatory.",
  // Index 320 (entry 321): SPEED REFS INDEP (S)
  "Pilot and co-pilot V-speed selection not synchronized or air data computer crosstalk failure — 6 sec time delay.",
  // Index 321 (entry 322): SPOILERON ROLL (C)
  "Roll control disconnected and no roll authority selected in 5 seconds OR roll control disconnected and both pilot and copilot select roll authority in 5 seconds.",
  // Index 322 (entry 323): SPOILERONS (C)
  "Spoilerons fault detected.",
  // Index 323 (entry 324): SPOILERONS FAULT (S)
  "Loss of redundancy found in spoilerons with no major failure.",
  // Index 324 (entry 325): STAB CH1 INOP (S)
  "HSTCU channel 1 is not engaged AND HSTCU channel 2 engaged.",
  // Index 325 (entry 326): STAB CH 2 INOP (S)
  "HSTCU channel 2 is not engaged AND HSTCU channel 1 engaged.",
  // Index 326 (entry 327): STAB TRIM (C)
  "Both HSTCU channels not engaged.",
  // Index 327 (entry 328): STALL FAIL (C)
  "Stall protection system channel 1 or 2 failure OR ARINC 429 bus not valid OR not 28 V DC in stick pusher circuit and battery bus powered.",
  // Index 328 (entry 329): STBY PITOT HEAT (C)
  "Standby pitot heat off or failed.",
  // Index 329 (entry 330): STEERING INOP (C)
  "Steering system off OR steering fault detected.",
  // Index 330 (entry 331): TAT PROBE HEAT (C)
  "TAT probe heat off or failed AND AC Bus 1 powered.",
  // Index 331 (entry 332): TERRAIN FAIL (S)
  "The terrain display feature failed.",
  // Index 332 (entry 333): TERRAIN NOT AVAIL (S)
  "The terrain display feature not available.",
  // Index 333 (entry 334): TERRAIN OFF (S)
  "The terrain display feature OFF.",
  // Index 334 (entry 335): T/O CONFIG OK (A)
  "Aircraft on ground AND both engines running AND no thrust reverser command AND autopilot not engaged AND flaps in take-off position AND spoilers in take-off position AND parking brake not set AND rudder trim < 1° AND aileron trim < 1° AND stabilizer trim in green band.",
  // Index 335 (entry 336): AP DISENGAGE aural (W — Cavalry Charge)
  "Autopilot disengaged.",
  // Index 336 (entry 337): STALL aural (W — Warbler)
  "Stall detected by either Stall Protection System channel.",
  // Index 337 (entry 338): FLAP OVERSPEED aural (W — Clacker)
  "Airspeed greater than maximum allowable for current flap setting detected by either Air Data Computer.",
  // Index 338 (entry 339): GEAR WARNING aural (W — Horn)
  "Aircraft WoffW > 120 seconds AND gear not down & aircraft in landing config OR horn signal active and airspeed < 163 knots OR horn signal active and IAS < 185 knots with both flaps < 5°.",
  // Index 339 (entry 340): VMO/MMO OVERSPEED aural (W — Clacker)
  "Airspeed overspeed condition (Vmo or Mmo exceedance) found by either air data computer.",
  // Index 340 (entry 341): ALTITUDE ALERT aural (W — C-Cord)
  "Altitude Alert.",
  // Index 341 (entry 342): WINDSHEAR FAIL (S)
  "Windshear detection subsystem (within GPWS) failed OR windshear guidance failed.",
  // Index 342 (entry 343): WING A/ICE OK (A)
  "Wing Anti-Ice low pressure switches and controller OVHT/SUFF heat test OK AND test switch selected.",
  // Index 343 (entry 344): WING A/ICE ON (A)
  "Wing anti-ice switch selected on AND left and right wing not sufficient heat AND no thrust reverser commanded.",
  // Index 344 (entry 345): WING A/ICE SNSR (C)
  "Failed wing anti-ice control sensor or OVHT/SUFF sensor AND normal anti-ice selected on.",
  // Index 345 (entry 346): WING/COWL A/I ON (A)
  "Wing and cowl anti-ice switches selected on and operating normally.",
  // Index 346 (entry 347): WING OVHT (W)
  "Left or right wing overheat detected.",
  // Index 347 (entry 348): WOW INPUT (C)
  "Any WOW sensor disagrees with other WOW sensors more than 10 seconds OR continuous BIT found WOW sensor input failure in proximity sensor system.",
  // Index 348 (entry 349): WOW OUTPUT (C)
  "Weight on Wheels outputs (channel 1 and channel 2) do not agree more than 20 seconds.",
  // Index 349 (entry 350): WOW OUTPUT FAIL (S)
  "Non-critical WOW outputs do not agree more than 20 seconds OR continuous BIT found WOW non-critical output failure.",
  // Index 350 (entry 351): XFLOW/APU PUMP (C)
  "XFLOW/APU pump failure (low pressure) detected.",
  // Index 351 (entry 352): YAW DAMPER (C)
  "Both yaw damper channels 1 and 2 off OR all IAPS input buses invalid.",
  // Index 352 (entry 353): YD 1 INOP (S)
  "Yaw damper channel 1 off or defective, not yaw damper channel 2.",
  // Index 353 (entry 354): YD 2 INOP (S)
  "Yaw damper channel 2 off or defective, not yaw damper channel 1.",
];

// Helper: build a question. ca = correctAnswer index (0-3).
// d1, d2, d3 are 0-based indices into A[] for the three distractors.
function q(id, question, correctIdx, d1, d2, d3, ca) {
  const correct = A[correctIdx];
  const choices = [A[d1], A[d2], A[d3]];
  choices.splice(ca, 0, correct);
  return { id, question, choices, correctAnswer: ca, explanation: "" };
}

// Distractor offsets: +88, +177, +265 (mod 354), cycling ca 0→1→2→3
const questions = [
  q("cast_q1",   "What does the 10TH ISOL OPEN (S) CAS message indicate?",   0,  88, 177, 265, 0),
  q("cast_q2",   "What does the 14TH ISOL OPEN (S) CAS message indicate?",   1,  89, 178, 266, 1),
  q("cast_q3",   "What does the AC 1 AUTOXFER (C) CAS message indicate?",    2,  90, 179, 267, 2),
  q("cast_q4",   "What does the AC 1 AUTOXFER OFF (S) CAS message indicate?",3,  91, 180, 268, 3),
  q("cast_q5",   "What does the AC 2 AUTOXFER (C) CAS message indicate?",    4,  92, 181, 269, 0),
  q("cast_q6",   "What does the AC 2 AUTOXFER OFF (S) CAS message indicate?",5,  93, 182, 270, 1),
  q("cast_q7",   "What does the AC BUS 1 (C) CAS message indicate?",         6,  94, 183, 271, 2),
  q("cast_q8",   "What does the AC BUS 2 (C) CAS message indicate?",         7,  95, 184, 272, 3),
  q("cast_q9",   "What does the AC ESS ALTN (S) CAS message indicate?",      8,  96, 185, 273, 0),
  q("cast_q10",  "What does the AC ESS BUS (C) CAS message indicate?",       9,  97, 186, 274, 1),
  q("cast_q11",  "What does the AC SERV BUS (C) CAS message indicate?",     10,  98, 187, 275, 2),
  q("cast_q12",  "What does the AC UTIL 1 OFF (S) CAS message indicate?",   11,  99, 188, 276, 3),
  q("cast_q13",  "What does the AC UTIL 2 OFF (S) CAS message indicate?",   12, 100, 189, 277, 0),
  q("cast_q14",  "What does the AFCS MSGS FAIL (W) CAS message indicate?",  13, 101, 190, 278, 1),
  q("cast_q15",  "What does the ANTI-ICE DUCT (W) CAS message indicate?",   14, 102, 191, 279, 2),
  q("cast_q16",  "What does the AP PITCH TRIM (C) CAS message indicate?",   15, 103, 192, 280, 3),
  q("cast_q17",  "What does the APR ARM (A) CAS message indicate?",         16, 104, 193, 281, 0),
  q("cast_q18",  "What does the APR CMD SET (C) CAS message indicate?",     17, 105, 194, 282, 1),
  q("cast_q19",  "What does the APR INOP (C) CAS message indicate?",        18, 106, 195, 283, 2),
  q("cast_q20",  "What does the APR TEST 1 OK (A) CAS message indicate?",   19, 107, 196, 284, 3),
  q("cast_q21",  "What does the APR TEST 2 OK (A) CAS message indicate?",   20, 108, 197, 285, 0),
  q("cast_q22",  "What does the APR TEST 3 OK (A) CAS message indicate?",   21, 109, 198, 286, 1),
  q("cast_q23",  "What does the AP TRIM IS LWD (C) CAS message indicate?",  22, 110, 199, 287, 2),
  q("cast_q24",  "What does the AP TRIM IS ND (C) CAS message indicate?",   23, 111, 200, 288, 3),
  q("cast_q25",  "What does the AP TRIM IS NU (C) CAS message indicate?",   24, 112, 201, 289, 0),
  q("cast_q26",  "What does the AP TRIM IS RWD (C) CAS message indicate?",  25, 113, 202, 290, 1),
  q("cast_q27",  "What does the APU BATT CHGR (S) CAS message indicate?",   26, 114, 203, 291, 2),
  q("cast_q28",  "What does the APU BATT OFF (C) CAS message indicate?",    27, 115, 204, 292, 3),
  q("cast_q29",  "What does the APU BLEED ON (C) CAS message indicate?",    28, 116, 205, 293, 0),
  q("cast_q30",  "What does the APU BTL LO (C) CAS message indicate?",      29, 117, 206, 294, 1),
  q("cast_q31",  "What does the APU ECU FAIL (S) CAS message indicate?",    30, 118, 207, 295, 2),
  q("cast_q32",  "What does the APU FAULT (C) CAS message indicate?",       31, 119, 208, 296, 3),
  q("cast_q33",  "What does the APU FIRE FAIL (C) CAS message indicate?",   32, 120, 209, 297, 0),
  q("cast_q34",  "What does the APU FIRE (W) CAS message indicate?",        33, 121, 210, 298, 1),
  q("cast_q35",  "What does the APU GEN OFF (C) CAS message indicate?",     34, 122, 211, 299, 2),
  q("cast_q36",  "What does the APU GEN OVLD (C) CAS message indicate?",    35, 123, 212, 300, 3),
  q("cast_q37",  "What does the APU IN BITE (S) CAS message indicate?",     36, 124, 213, 301, 0),
  q("cast_q38",  "What does the APU LCV FAIL (C) CAS message indicate?",    37, 125, 214, 302, 1),
  q("cast_q39",  "What does the APU LCV OPEN (S) CAS message indicate?",    38, 126, 215, 303, 2),
  q("cast_q40",  "What does the APU OIL PRESS (C) CAS message indicate?",   39, 127, 216, 304, 3),
  q("cast_q41",  "What does the APU OIL TEMP (C) CAS message indicate?",    40, 128, 217, 305, 0),
  q("cast_q42",  "What does the APU OVERSPEED (W) CAS message indicate?",   41, 129, 218, 306, 1),
  q("cast_q43",  "What does the APU OVERTEMP (W) CAS message indicate?",    42, 130, 219, 307, 2),
  q("cast_q44",  "What does the APU SOV CLSD (A) CAS message indicate?",    43, 131, 220, 308, 3),
  q("cast_q45",  "What does the APU SOV FAIL (C) CAS message indicate?",    44, 132, 221, 309, 0),
  q("cast_q46",  "What does the APU SOV OPEN (C) CAS message indicate?",    45, 133, 222, 310, 1),
  q("cast_q47",  "What does the APU SOV OPEN (S) CAS message indicate?",    46, 134, 223, 311, 2),
  q("cast_q48",  "What does the APU SQUIB 1 (A) CAS message indicate?",     47, 135, 224, 312, 3),
  q("cast_q49",  "What does the APU SQUIB 2 (A) CAS message indicate?",     48, 136, 225, 313, 0),
  q("cast_q50",  "What does the APU START (S) CAS message indicate?",       49, 137, 226, 314, 1),
  q("cast_q51",  "What does the ARINC COOL (C) CAS message indicate?",      50, 138, 227, 315, 2),
  q("cast_q52",  "What does the A/SKID INBD (C) CAS message indicate?",     51, 139, 228, 316, 3),
  q("cast_q53",  "What does the A/SKID OUTBD (C) CAS message indicate?",    52, 140, 229, 317, 0),
  q("cast_q54",  "What does the AUTO PRESS 1 FAIL (S) CAS message indicate?",53,141, 230, 318, 1),
  q("cast_q55",  "What does the AUTO PRESS 2 FAIL (S) CAS message indicate?",54,142, 231, 319, 2),
  q("cast_q56",  "What does the AUTO PRESS (C) CAS message indicate?",      55, 143, 232, 320, 3),
  q("cast_q57",  "What does the AUTO XFLOW INHIB (S) CAS message indicate?",56, 144, 233, 321, 0),
  q("cast_q58",  "What does the AV BAY DOOR (C) CAS message indicate?",     57, 145, 234, 322, 1),
  q("cast_q59",  "What does the BATTERY BUS (C) CAS message indicate?",     58, 146, 235, 323, 2),
  q("cast_q60",  "What does the BLEED MISCONFIG (C) CAS message indicate?", 59, 147, 236, 324, 3),
  q("cast_q61",  "What does the BRAKE OVHT (W) CAS message indicate?",      60, 148, 237, 325, 0),
  q("cast_q62",  "What does the BTMU FAIL (S) CAS message indicate?",       61, 149, 238, 326, 1),
  q("cast_q63",  "What does the BULK FUEL TEMP (C) CAS message indicate?",  62, 150, 239, 327, 2),
  q("cast_q64",  "What does the CABIN ALT (C) CAS message indicate?",       63, 151, 240, 328, 3),
  q("cast_q65",  "What does the CABIN ALT (W) CAS message indicate?",       64, 152, 241, 329, 0),
  q("cast_q66",  "What does the CABIN PRESS MAN (S) CAS message indicate?", 65, 153, 242, 330, 1),
  q("cast_q67",  "What does the CABIN TEMP MAN (S) CAS message indicate?",  66, 154, 243, 331, 2),
  q("cast_q68",  "What does the CARGO BTL LO (C) CAS message indicate?",    67, 155, 244, 332, 3),
  q("cast_q69",  "What does the CARGO DOOR (C) CAS message indicate?",      68, 156, 245, 333, 0),
  q("cast_q70",  "What does the CARGO FAN FAIL (S) CAS message indicate?",  69, 157, 246, 334, 1),
  q("cast_q71",  "What does the CARGO OVHT (C) CAS message indicate?",      70, 158, 247, 335, 2),
  q("cast_q72",  "What does the CARGO SOV FAIL (S) CAS message indicate?",  71, 159, 248, 336, 3),
  q("cast_q73",  "What does the CARGO SQUIB 1 (A) CAS message indicate?",   72, 160, 249, 337, 0),
  q("cast_q74",  "What does the CARGO SQUIB 2 (A) CAS message indicate?",   73, 161, 250, 338, 1),
  q("cast_q75",  "What does the CAS MISCOMP (S) CAS message indicate?",     74, 162, 251, 339, 2),
  q("cast_q76",  "What does the CKPT COOL FAIL (S) CAS message indicate?",  75, 163, 252, 340, 3),
  q("cast_q77",  "What does the CKPT TEMP MAN (S) CAS message indicate?",   76, 164, 253, 341, 0),
  q("cast_q78",  "What does the CONFIG AILERON (W) CAS message indicate?",  77, 165, 254, 342, 1),
  q("cast_q79",  "What does the CONFIG AP (W) CAS message indicate?",       78, 166, 255, 343, 2),
  q("cast_q80",  "What does the CONFIG FLAPS (W) CAS message indicate?",    79, 167, 256, 344, 3),
  q("cast_q81",  "What does the CONFIG RUDDER (W) CAS message indicate?",   80, 168, 257, 345, 0),
  q("cast_q82",  "What does the CONFIG SPLRS (W) CAS message indicate?",    81, 169, 258, 346, 1),
  q("cast_q83",  "What does the CONFIG STAB (W) CAS message indicate?",     82, 170, 259, 347, 2),
  q("cast_q84",  "What does the CONT IGNITION (S) CAS message indicate?",   83, 171, 260, 348, 3),
  q("cast_q85",  "What does the COOL EXHAUST FAIL (S) CAS message indicate?",84,172, 261, 349, 0),
  q("cast_q86",  "What does the COWL A/ICE ON (A) CAS message indicate?",   85, 173, 262, 350, 1),
  q("cast_q87",  "What does the CPAM FAIL (S) CAS message indicate?",       86, 174, 263, 351, 2),
  q("cast_q88",  "What does the CPLT ROLL CMD (A) CAS message indicate?",   87, 175, 264, 352, 3),
  q("cast_q89",  "What does the DC BUS 1 (C) CAS message indicate?",        88, 176, 265, 353, 0),
  q("cast_q90",  "What does the DC BUS 2 (C) CAS message indicate?",        89, 177, 266,   0, 1),
  q("cast_q91",  "What does the DC EMER BUS (S) CAS message indicate?",     90, 178, 267,   1, 2),
  q("cast_q92",  "What does the DC ESS BUS (C) CAS message indicate?",      91, 179, 268,   2, 3),
  q("cast_q93",  "What does the DC ESS TIE CLSD (S) CAS message indicate?", 92, 180, 269,   3, 0),
  q("cast_q94",  "What does the DC SERV BUS (C) CAS message indicate?",     93, 181, 270,   4, 1),
  q("cast_q95",  "What does the DC TIE 1 CLSD (S) CAS message indicate?",   94, 182, 271,   5, 2),
  q("cast_q96",  "What does the DC TIE 2 CLSD (S) CAS message indicate?",   95, 183, 272,   6, 3),
  q("cast_q97",  "What does the DCU 1 APR FAIL (S) CAS message indicate?",  96, 184, 273,   7, 0),
  q("cast_q98",  "What does the DCU 1 AURAL INOP (S) CAS message indicate?",97, 185, 274,   8, 1),
  q("cast_q99",  "What does the DCU 1 INOP (S) CAS message indicate?",      98, 186, 275,   9, 2),
  q("cast_q100", "What does the DCU 2 APR FAIL (S) CAS message indicate?",  99, 187, 276,  10, 3),
  q("cast_q101", "What does the DCU 2 AURAL INOP (S) CAS message indicate?",100,188, 277,  11, 0),
  q("cast_q102", "What does the DCU 2 INOP (S) CAS message indicate?",     101, 189, 278,  12, 1),
  q("cast_q103", "What does the DCU 3 APR FAIL (S) CAS message indicate?", 102, 190, 279,  13, 2),
  q("cast_q104", "What does the DCU 3 AURAL INOP (S) CAS message indicate?",103,191, 280,  14, 3),
  q("cast_q105", "What does the DCU 3 INOP (S) CAS message indicate?",     104, 192, 281,  15, 0),
  q("cast_q106", "What does the DIFF PRESS (W) CAS message indicate?",     105, 193, 282,  16, 1),
  q("cast_q107", "What does the DISPLAY COOL (C) CAS message indicate?",   106, 194, 283,  17, 2),
  q("cast_q108", "What does the DUCT MON LOOP A (S) CAS message indicate?",107, 195, 284,  18, 3),
  q("cast_q109", "What does the DUCT MON LOOP B (S) CAS message indicate?",108, 196, 285,  19, 0),
  q("cast_q110", "What does the DUCT TEST OK (A) CAS message indicate?",   109, 197, 286,  20, 1),
  q("cast_q111", "What does the EFIS COMP INOP (C) CAS message indicate?", 110, 198, 287,  21, 2),
  q("cast_q112", "What does the EFIS COMP MON (C) CAS message indicate?",  111, 199, 288,  22, 3),
  q("cast_q113", "What does the EICAS COMP INOP (C) CAS message indicate?",112, 200, 289,  23, 0),
  q("cast_q114", "What does the ELT ON (C) CAS message indicate?",         113, 201, 290,  24, 1),
  q("cast_q115", "What does the EMER DEPRESS (C) CAS message indicate?",   114, 202, 291,  25, 2),
  q("cast_q116", "What does the EMER LTS OFF (C) CAS message indicate?",   115, 203, 292,  26, 3),
  q("cast_q117", "What does the EMER LTS ON (S) CAS message indicate?",    116, 204, 293,  27, 0),
  q("cast_q118", "What does the EMER PWR ONLY (W) CAS message indicate?",  117, 205, 294,  28, 1),
  q("cast_q119", "What does the ENG BTL 1 LO (C) CAS message indicate?",   118, 206, 295,  29, 2),
  q("cast_q120", "What does the ENG BTL 2 LO (C) CAS message indicate?",   119, 207, 296,  30, 3),
  q("cast_q121", "What does the ENGINE OVERSPD (W) CAS message indicate?", 120, 208, 297,  31, 0),
  q("cast_q122", "What does the ENG TYPE MISCOMP (S) CAS message indicate?",121,209, 298,  32, 1),
  q("cast_q123", "What does the ESS TRU 1 (C) CAS message indicate?",      122, 210, 299,  33, 2),
  q("cast_q124", "What does the ESS TRU 2 (C) CAS message indicate?",      123, 211, 300,  34, 3),
  q("cast_q125", "What does the FD 1 FAIL (S) CAS message indicate?",      124, 212, 301,  35, 0),
  q("cast_q126", "What does the FD 2 FAIL (S) CAS message indicate?",      125, 213, 302,  36, 1),
  q("cast_q127", "What does the FDR ACCEL FAIL (S) CAS message indicate?", 126, 214, 303,  37, 2),
  q("cast_q128", "What does the FDR EVENT (A) CAS message indicate?",      127, 215, 304,  38, 3),
  q("cast_q129", "What does the FDR FAIL (S) CAS message indicate?",       128, 216, 305,  39, 0),
  q("cast_q130", "What does the FLAPS DEGRADED (S) CAS message indicate?", 129, 217, 306,  40, 1),
  q("cast_q131", "What does the FLAPS FAIL (C) CAS message indicate?",     130, 218, 307,  41, 2),
  q("cast_q132", "What does the FLAPS HALFSPEED (S) CAS message indicate?",131, 219, 308,  42, 3),
  q("cast_q133", "What does the FLT SPLR DEPLOY (A) CAS message indicate?",132, 220, 309,  43, 0),
  q("cast_q134", "What does the FLT SPLR DEPLOY (C) CAS message indicate?",133, 221, 310,  44, 1),
  q("cast_q135", "What does the FLT SPLRS (C) CAS message indicate?",      134, 222, 311,  45, 2),
  q("cast_q136", "What does the FLT SPLRS FAULT (S) CAS message indicate?",135, 223, 312,  46, 3),
  q("cast_q137", "What does the FLUTTER DAMPER (S) CAS message indicate?", 136, 224, 313,  47, 0),
  q("cast_q138", "What does the FUEL CH 1/2 FAIL (C) CAS message indicate?",137,225, 314,  48, 1),
  q("cast_q139", "What does the FUEL CH 1 FAIL (S) CAS message indicate?", 138, 226, 315,  49, 2),
  q("cast_q140", "What does the FUEL CH 2 FAIL (S) CAS message indicate?", 139, 227, 316,  50, 3),
  q("cast_q141", "What does the FUEL IMBALANCE (C) CAS message indicate?", 140, 228, 317,  51, 0),
  q("cast_q142", "What does the GEAR DISAGREE (W) CAS message indicate?",  141, 229, 318,  52, 1),
  q("cast_q143", "What does the GEN 1 OFF (C) CAS message indicate?",      142, 230, 319,  53, 2),
  q("cast_q144", "What does the GEN 1 OVLD (C) CAS message indicate?",     143, 231, 320,  54, 3),
  q("cast_q145", "What does the GEN 2 OFF (C) CAS message indicate?",      144, 232, 321,  55, 0),
  q("cast_q146", "What does the GEN 2 OVLD (C) CAS message indicate?",     145, 233, 322,  56, 1),
  q("cast_q147", "What does the GLD MAN ARM (A) CAS message indicate?",    146, 234, 323,  57, 2),
  q("cast_q148", "What does the GLD MAN DISARM (S) CAS message indicate?", 147, 235, 324,  58, 3),
  q("cast_q149", "What does the GLD NOT ARMED (C) CAS message indicate?",  148, 236, 325,  59, 0),
  q("cast_q150", "What does the GLD UNSAFE (C) CAS message indicate?",     149, 237, 326,  60, 1),
  q("cast_q151", "What does the GND SPLR DEPLOY (A) CAS message indicate?",150, 238, 327,  61, 2),
  q("cast_q152", "What does the GND SPLR DEPLOY (C) CAS message indicate?",151, 239, 328,  62, 3),
  q("cast_q153", "What does the GPWS FAIL (S) CAS message indicate?",      152, 240, 329,  63, 0),
  q("cast_q154", "What does the GRAV XFLOW FAIL (S) CAS message indicate?",153, 241, 330,  64, 1),
  q("cast_q155", "What does the GRAV XFLOW OPEN (A) CAS message indicate?",154, 242, 331,  65, 2),
  q("cast_q156", "What does the GS CANCEL (S) CAS message indicate?",      155, 243, 332,  66, 3),
  q("cast_q157", "What does the HORN MUTED (S) CAS message indicate?",     156, 244, 333,  67, 0),
  q("cast_q158", "What does the HYD 1 HI TEMP (C) CAS message indicate?",  157, 245, 334,  68, 1),
  q("cast_q159", "What does the HYD 1 LO PRESS (C) CAS message indicate?", 158, 246, 335,  69, 2),
  q("cast_q160", "What does the HYD 2 HI TEMP (C) CAS message indicate?",  159, 247, 336,  70, 3),
  q("cast_q161", "What does the HYD 2 LO PRESS (C) CAS message indicate?", 160, 248, 337,  71, 0),
  q("cast_q162", "What does the HYD 3 HI TEMP (C) CAS message indicate?",  161, 249, 338,  72, 1),
  q("cast_q163", "What does the HYD 3 LO PRESS (C) CAS message indicate?", 162, 250, 339,  73, 2),
  q("cast_q164", "What does the HYD EDP 1A (C) CAS message indicate?",     163, 251, 340,  74, 3),
  q("cast_q165", "What does the HYD EDP 2A (C) CAS message indicate?",     164, 252, 341,  75, 0),
  q("cast_q166", "What does the HYD PUMP 1B (C) CAS message indicate?",    165, 253, 342,  76, 1),
  q("cast_q167", "What does the HYD PUMP 2B (C) CAS message indicate?",    166, 254, 343,  77, 2),
  q("cast_q168", "What does the HYD PUMP 3A (C) CAS message indicate?",    167, 255, 344,  78, 3),
  q("cast_q169", "What does the HYD PUMP 3B (C) CAS message indicate?",    168, 256, 345,  79, 0),
  q("cast_q170", "What does the HYD SOV 1 CLSD (A) CAS message indicate?", 169, 257, 346,  80, 1),
  q("cast_q171", "What does the HYD SOV 1 OPEN (C) CAS message indicate?", 170, 258, 347,  81, 2),
  q("cast_q172", "What does the HYD SOV 2 CLSD (A) CAS message indicate?", 171, 259, 348,  82, 3),
  q("cast_q173", "What does the HYD SOV 2 OPEN (C) CAS message indicate?", 172, 260, 349,  83, 0),
  q("cast_q174", "What does the IAPS DEGRADED (S) CAS message indicate?",  173, 261, 350,  84, 1),
  q("cast_q175", "What does the IAPS OVERTEMP (S) CAS message indicate?",  174, 262, 351,  85, 2),
  q("cast_q176", "What does the IB BRAKE PRESS (C) CAS message indicate?", 175, 263, 352,  86, 3),
  q("cast_q177", "What does the IB GND SPLR FAULT (S) CAS message indicate?",176,264,353,  87, 0),
  q("cast_q178", "What does the IB GND SPLRS (C) CAS message indicate?",   177, 265,   0,  88, 1),
  q("cast_q179", "What does the ICE (A) CAS message indicate?",            178, 266,   1,  89, 2),
  q("cast_q180", "What does the ICE (C) CAS message indicate?",            179, 267,   2,  90, 3),
  q("cast_q181", "What does the ICE DET 1 FAIL (S) CAS message indicate?", 180, 268,   3,  91, 0),
  q("cast_q182", "What does the ICE DET 2 FAIL (S) CAS message indicate?", 181, 269,   4,  92, 1),
  q("cast_q183", "What does the ICE DETECT FAIL (C) CAS message indicate?",182, 270,   5,  93, 2),
  q("cast_q184", "What does the IDG 1 (C) CAS message indicate?",          183, 271,   6,  94, 3),
  q("cast_q185", "What does the IDG 1 DISC (S) CAS message indicate?",     184, 272,   7,  95, 0),
  q("cast_q186", "What does the IDG 2 (C) CAS message indicate?",          185, 273,   8,  96, 1),
  q("cast_q187", "What does the IDG 2 DISC (S) CAS message indicate?",     186, 274,   9,  97, 2),
  q("cast_q188", "What does the IGNITION A/B (S) CAS message indicate?",   187, 275,  10,  98, 3),
  q("cast_q189", "What does the IGNITION A (S) CAS message indicate?",     188, 276,  11,  99, 0),
  q("cast_q190", "What does the IGNITION B (S) CAS message indicate?",     189, 277,  12, 100, 1),
  q("cast_q191", "What does the INBD COOL FAIL (S) CAS message indicate?", 190, 278,  13, 101, 2),
  q("cast_q192", "What does the L 10TH ARM OPEN (S) CAS message indicate?",191, 279,  14, 102, 3),
  q("cast_q193", "What does the L 10TH DUCT (W) CAS message indicate?",    192, 280,  15, 103, 0),
  q("cast_q194", "What does the L 10TH SOV CLSD (S) CAS message indicate?",193, 281,  16, 104, 1),
  q("cast_q195", "What does the L 14TH ARM CLSD (S) CAS message indicate?",194, 282,  17, 105, 2),
  q("cast_q196", "What does the L 14TH DUCT (W) CAS message indicate?",    195, 283,  18, 106, 3),
  q("cast_q197", "What does the L 14TH SOV CLSD (S) CAS message indicate?",196, 284,  19, 107, 0),
  q("cast_q198", "What does the L AOA HEAT (C) CAS message indicate?",     197, 285,  20, 108, 1),
  q("cast_q199", "What does the L APR ECU FAIL (S) CAS message indicate?", 198, 286,  21, 109, 2),
  q("cast_q200", "What does the L AUTO XFLOW ON (S) CAS message indicate?",199, 287,  22, 110, 3),
  q("cast_q201", "What does the L COWL A/ICE (C) CAS message indicate?",   200, 288,  23, 111, 0),
  q("cast_q202", "What does the L COWL A/ICE ON (A) CAS message indicate?",201, 289,  24, 112, 1),
  q("cast_q203", "What does the L EMER DOOR (C) CAS message indicate?",    202, 290,  25, 113, 2),
  q("cast_q204", "What does the L ENG FIRE (W) CAS message indicate?",     203, 291,  26, 114, 3),
  q("cast_q205", "What does the L ENGINE START (S) CAS message indicate?", 204, 292,  27, 115, 0),
  q("cast_q206", "What does the L ENG MISCOMP (C) CAS message indicate?",  205, 293,  28, 116, 1),
  q("cast_q207", "What does the L ENG OIL PRESS (W) CAS message indicate?",206, 294,  29, 117, 2),
  q("cast_q208", "What does the L ENG SOV CLSD (A) CAS message indicate?", 207, 295,  30, 118, 3),
  q("cast_q209", "What does the L ENG SOV CLSD (C) CAS message indicate?", 208, 296,  31, 119, 0),
  q("cast_q210", "What does the L ENG SOV FAIL (C) CAS message indicate?", 209, 297,  32, 120, 1),
  q("cast_q211", "What does the L ENG SOV OPEN (C) CAS message indicate?", 210, 298,  33, 121, 2),
  q("cast_q212", "What does the L ENG SQUIB 1 (A) CAS message indicate?",  211, 299,  34, 122, 3),
  q("cast_q213", "What does the L ENG SQUIB 2 (A) CAS message indicate?",  212, 300,  35, 123, 0),
  q("cast_q214", "What does the L FIRE FAIL (C) CAS message indicate?",    213, 301,  36, 124, 1),
  q("cast_q215", "What does the L FLT SPLR (C) CAS message indicate?",     214, 302,  37, 125, 2),
  q("cast_q216", "What does the L FUEL FILTER (C) CAS message indicate?",  215, 303,  38, 126, 3),
  q("cast_q217", "What does the L FUEL LO PRESS (C) CAS message indicate?",216, 304,  39, 127, 0),
  q("cast_q218", "What does the L FUEL LO TEMP (C) CAS message indicate?", 217, 305,  40, 128, 1),
  q("cast_q219", "What does the L FUEL PUMP (C) CAS message indicate?",    218, 306,  41, 129, 2),
  q("cast_q220", "What does the L FUEL PUMP ON (A) CAS message indicate?", 219, 307,  42, 130, 3),
  q("cast_q221", "What does the L JET OVHT FAIL (C) CAS message indicate?",220, 308,  43, 131, 0),
  q("cast_q222", "What does the L JETPIPE OVHT (W) CAS message indicate?", 221, 309,  44, 132, 1),
  q("cast_q223", "What does the L MAIN EJECTOR (C) CAS message indicate?", 222, 310,  45, 133, 2),
  q("cast_q224", "What does the L PACK HI PRESS (C) CAS message indicate?",223, 311,  46, 134, 3),
  q("cast_q225", "What does the L PACK HI TEMP (C) CAS message indicate?", 224, 312,  47, 135, 0),
  q("cast_q226", "What does the L PACK OFF (S) CAS message indicate?",     225, 313,  48, 136, 1),
  q("cast_q227", "What does the L PITOT HEAT (C) CAS message indicate?",   226, 314,  49, 137, 2),
  q("cast_q228", "What does the L REV ARMED (A) CAS message indicate?",    227, 315,  50, 138, 3),
  q("cast_q229", "What does the L REV UNLOCKED (C) CAS message indicate?", 228, 316,  51, 139, 0),
  q("cast_q230", "What does the L REV UNSAFE (C) CAS message indicate?",   229, 317,  52, 140, 1),
  q("cast_q231", "What does the L SCAV EJECTOR (C) CAS message indicate?", 230, 318,  53, 141, 2),
  q("cast_q232", "What does the L SPOILERON (C) CAS message indicate?",    231, 319,  54, 142, 3),
  q("cast_q233", "What does the L STATIC HEAT (C) CAS message indicate?",  232, 320,  55, 143, 0),
  q("cast_q234", "What does the L WINDOW HEAT (C) CAS message indicate?",  233, 321,  56, 144, 1),
  q("cast_q235", "What does the L WING A/ICE (C) CAS message indicate?",   234, 322,  57, 145, 2),
  q("cast_q236", "What does the L WSHLD HEAT (C) CAS message indicate?",   235, 323,  58, 146, 3),
  q("cast_q237", "What does the L XFER SOV (C) CAS message indicate?",     236, 324,  59, 147, 0),
  q("cast_q238", "What does the L XFLOW ON (S) CAS message indicate?",     237, 325,  60, 148, 1),
  q("cast_q239", "What does the L XFLOW SOV (C) CAS message indicate?",    238, 326,  61, 149, 2),
  q("cast_q240", "What does the MACH TRIM (C) CAS message indicate?",      239, 327,  62, 150, 3),
  q("cast_q241", "What does the MAIN BATT CHGR (S) CAS message indicate?", 240, 328,  63, 151, 0),
  q("cast_q242", "What does the MAIN BATT OFF (C) CAS message indicate?",  241, 329,  64, 152, 1),
  q("cast_q243", "What does the MAN XFLOW (S) CAS message indicate?",      242, 330,  65, 153, 2),
  q("cast_q244", "What does the MLG BAY OVHT (W) CAS message indicate?",   243, 331,  66, 154, 3),
  q("cast_q245", "What does the MLG OVHT FAIL (C) CAS message indicate?",  244, 332,  67, 155, 0),
  q("cast_q246", "What does the NOSE DOOR OPEN (W) CAS message indicate?", 245, 333,  68, 156, 1),
  q("cast_q247", "What does the NO SMOKING (S) CAS message indicate?",     246, 334,  69, 157, 2),
  q("cast_q248", "What does the NO STARTER CUTOUT (C) CAS message indicate?",247,335, 70, 158, 3),
  q("cast_q249", "What does the OB BRAKE PRESS (C) CAS message indicate?", 248, 336,  71, 159, 0),
  q("cast_q250", "What does the OB GND SPLRS (C) CAS message indicate?",   249, 337,  72, 160, 1),
  q("cast_q251", "What does the OB GRN SPLR FAULT (S) CAS message indicate?",250,338, 73, 161, 2),
  q("cast_q252", "What does the OVBD COOL (C) CAS message indicate?",      251, 339,  74, 162, 3),
  q("cast_q253", "What does the OVBD COOL FAIL (S) CAS message indicate?", 252, 340,  75, 163, 0),
  q("cast_q254", "What does the OXY LO PRESS (C) CAS message indicate?",   253, 341,  76, 164, 1),
  q("cast_q255", "What does the PARK BRAKE SOV (C) CAS message indicate?", 254, 342,  77, 165, 2),
  q("cast_q256", "What does the PARKING BRAKE ON (A) CAS message indicate?",255,343,  78, 166, 3),
  q("cast_q257", "What does the PARKING BRAKE (W) CAS message indicate?",  256, 344,  79, 167, 0),
  q("cast_q258", "What does the PASSENGER DOOR (W) CAS message indicate?", 257, 345,  80, 168, 1),
  q("cast_q259", "What does the PASS OXY ON (C) CAS message indicate?",    258, 346,  81, 169, 2),
  q("cast_q260", "What does the PAX DR LATCH (C) CAS message indicate?",   259, 347,  82, 170, 3),
  q("cast_q261", "What does the PAX DR OUT HNDL (C) CAS message indicate?",260, 348,  83, 171, 0),
  q("cast_q262", "What does the PAX DR STOW (C) CAS message indicate?",    261, 349,  84, 172, 1),
  q("cast_q263", "What does the PITOT BASE HEAT (C) CAS message indicate?",262, 350,  85, 173, 2),
  q("cast_q264", "What does the PLT ROLL CMD (A) CAS message indicate?",   263, 351,  86, 174, 3),
  q("cast_q265", "What does the PROX SYS CHAN (C) CAS message indicate?",  264, 352,  87, 175, 0),
  q("cast_q266", "What does the PROX SYS FAULT (S) CAS message indicate?", 265, 353,  88, 176, 1),
  q("cast_q267", "What does the R 10TH ARM OPEN (S) CAS message indicate?",266,   0,  89, 177, 2),
  q("cast_q268", "What does the R 10TH DUCT (W) CAS message indicate?",    267,   1,  90, 178, 3),
  q("cast_q269", "What does the R 10TH SOV CLSD (S) CAS message indicate?",268,   2,  91, 179, 0),
  q("cast_q270", "What does the R 14TH ARM CLSD (S) CAS message indicate?",269,   3,  92, 180, 1),
  q("cast_q271", "What does the R 14TH DUCT (W) CAS message indicate?",    270,   4,  93, 181, 2),
  q("cast_q272", "What does the R 14TH SOV CLSD (S) CAS message indicate?",271,   5,  94, 182, 3),
  q("cast_q273", "What does the RAM AIR OPEN (S) CAS message indicate?",   272,   6,  95, 183, 0),
  q("cast_q274", "What does the R AOA HEAT (C) CAS message indicate?",     273,   7,  96, 184, 1),
  q("cast_q275", "What does the R APR ECU FAIL (S) CAS message indicate?", 274,   8,  97, 185, 2),
  q("cast_q276", "What does the R AUTO XFLOW ON (S) CAS message indicate?",275,   9,  98, 186, 3),
  q("cast_q277", "What does the R COWL A/ICE (C) CAS message indicate?",   276,  10,  99, 187, 0),
  q("cast_q278", "What does the R COWL A/ICE ON (A) CAS message indicate?",277,  11, 100, 188, 1),
  q("cast_q279", "What does the R EMER DOOR (C) CAS message indicate?",    278,  12, 101, 189, 2),
  q("cast_q280", "What does the R ENG FIRE (W) CAS message indicate?",     279,  13, 102, 190, 3),
  q("cast_q281", "What does the R ENGINE START (S) CAS message indicate?", 280,  14, 103, 191, 0),
  q("cast_q282", "What does the R ENG MISCOMP (C) CAS message indicate?",  281,  15, 104, 192, 1),
  q("cast_q283", "What does the R ENG OIL PRESS (W) CAS message indicate?",282,  16, 105, 193, 2),
  q("cast_q284", "What does the R ENG SOV CLSD (A) CAS message indicate?", 283,  17, 106, 194, 3),
  q("cast_q285", "What does the R ENG SOV CLSD (C) CAS message indicate?", 284,  18, 107, 195, 0),
  q("cast_q286", "What does the R ENG SOV FAIL (C) CAS message indicate?", 285,  19, 108, 196, 1),
  q("cast_q287", "What does the R ENG SOV OPEN (C) CAS message indicate?", 286,  20, 109, 197, 2),
  q("cast_q288", "What does the R ENG SQUIB 1 (A) CAS message indicate?",  287,  21, 110, 198, 3),
  q("cast_q289", "What does the R ENG SQUIB 2 (A) CAS message indicate?",  288,  22, 111, 199, 0),
  q("cast_q290", "What does the R FIRE FAIL (C) CAS message indicate?",    289,  23, 112, 200, 1),
  q("cast_q291", "What does the R FLT SPLR (C) CAS message indicate?",     290,  24, 113, 201, 2),
  q("cast_q292", "What does the R FUEL FILTER (C) CAS message indicate?",  291,  25, 114, 202, 3),
  q("cast_q293", "What does the R FUEL LO PRESS (C) CAS message indicate?",292,  26, 115, 203, 0),
  q("cast_q294", "What does the R FUEL LO TEMP (C) CAS message indicate?", 293,  27, 116, 204, 1),
  q("cast_q295", "What does the R FUEL PUMP (C) CAS message indicate?",    294,  28, 117, 205, 2),
  q("cast_q296", "What does the R FUEL PUMP ON (A) CAS message indicate?", 295,  29, 118, 206, 3),
  q("cast_q297", "What does the R JET OVHT FAIL (C) CAS message indicate?",296,  30, 119, 207, 0),
  q("cast_q298", "What does the R JETPIPE OVHT (W) CAS message indicate?", 297,  31, 120, 208, 1),
  q("cast_q299", "What does the R MAIN EJECTOR (C) CAS message indicate?", 298,  32, 121, 209, 2),
  q("cast_q300", "What does the R PACK HI PRESS (C) CAS message indicate?",299,  33, 122, 210, 3),
  q("cast_q301", "What does the R PACK HI TEMP (C) CAS message indicate?", 300,  34, 123, 211, 0),
  q("cast_q302", "What does the R PACK OFF (S) CAS message indicate?",     301,  35, 124, 212, 1),
  q("cast_q303", "What does the R PITOT HEAT (C) CAS message indicate?",   302,  36, 125, 213, 2),
  q("cast_q304", "What does the R REV ARMED (A) CAS message indicate?",    303,  37, 126, 214, 3),
  q("cast_q305", "What does the R REV UNLOCKED (C) CAS message indicate?", 304,  38, 127, 215, 0),
  q("cast_q306", "What does the R REV UNSAFE (C) CAS message indicate?",   305,  39, 128, 216, 1),
  q("cast_q307", "What does the R SCAV EJECTOR (C) CAS message indicate?", 306,  40, 129, 217, 2),
  q("cast_q308", "What does the R SPOILERON (C) CAS message indicate?",    307,  41, 130, 218, 3),
  q("cast_q309", "What does the R STATIC HEAT (C) CAS message indicate?",  308,  42, 131, 219, 0),
  q("cast_q310", "What does the R WINDOW HEAT (C) CAS message indicate?",  309,  43, 132, 220, 1),
  q("cast_q311", "What does the R WING A/ICE (C) CAS message indicate?",   310,  44, 133, 221, 2),
  q("cast_q312", "What does the R WSHLD HEAT (C) CAS message indicate?",   311,  45, 134, 222, 3),
  q("cast_q313", "What does the R XFER SOV (C) CAS message indicate?",     312,  46, 135, 223, 0),
  q("cast_q314", "What does the R XFLOW ON (S) CAS message indicate?",     313,  47, 136, 224, 1),
  q("cast_q315", "What does the R XFLOW SOV (C) CAS message indicate?",    314,  48, 137, 225, 2),
  q("cast_q316", "What does the SEAT BELTS (S) CAS message indicate?",     315,  49, 138, 226, 3),
  q("cast_q317", "What does the SELCAL VHF3 (A) CAS message indicate?",    316,  50, 139, 227, 0),
  q("cast_q318", "What does the SERVICE DOOR (C) CAS message indicate?",   317,  51, 140, 228, 1),
  q("cast_q319", "What does the SMOKE CARGO (W) CAS message indicate?",    318,  52, 141, 229, 2),
  q("cast_q320", "What does the SMOKE TOILET (C) CAS message indicate?",   319,  53, 142, 230, 3),
  q("cast_q321", "What does the SPEED REFS INDEP (S) CAS message indicate?",320, 54, 143, 231, 0),
  q("cast_q322", "What does the SPOILERON ROLL (C) CAS message indicate?", 321,  55, 144, 232, 1),
  q("cast_q323", "What does the SPOILERONS (C) CAS message indicate?",     322,  56, 145, 233, 2),
  q("cast_q324", "What does the SPOILERONS FAULT (S) CAS message indicate?",323, 57, 146, 234, 3),
  q("cast_q325", "What does the STAB CH1 INOP (S) CAS message indicate?",  324,  58, 147, 235, 0),
  q("cast_q326", "What does the STAB CH 2 INOP (S) CAS message indicate?", 325,  59, 148, 236, 1),
  q("cast_q327", "What does the STAB TRIM (C) CAS message indicate?",      326,  60, 149, 237, 2),
  q("cast_q328", "What does the STALL FAIL (C) CAS message indicate?",     327,  61, 150, 238, 3),
  q("cast_q329", "What does the STBY PITOT HEAT (C) CAS message indicate?",328,  62, 151, 239, 0),
  q("cast_q330", "What does the STEERING INOP (C) CAS message indicate?",  329,  63, 152, 240, 1),
  q("cast_q331", "What does the TAT PROBE HEAT (C) CAS message indicate?", 330,  64, 153, 241, 2),
  q("cast_q332", "What does the TERRAIN FAIL (S) CAS message indicate?",   331,  65, 154, 242, 3),
  q("cast_q333", "What does the TERRAIN NOT AVAIL (S) CAS message indicate?",332,66, 155, 243, 0),
  q("cast_q334", "What does the TERRAIN OFF (S) CAS message indicate?",    333,  67, 156, 244, 1),
  q("cast_q335", "What does the T/O CONFIG OK (A) CAS message indicate?",  334,  68, 157, 245, 2),
  q("cast_q336", "What condition triggers the Cavalry Charge aural warning?", 335, 69, 158, 246, 3),
  q("cast_q337", "What condition triggers the Warbler aural warning?",     336,  70, 159, 247, 0),
  q("cast_q338", "What condition triggers the flap overspeed Clacker aural warning?", 337, 71, 160, 248, 1),
  q("cast_q339", "What condition triggers the gear Horn aural warning?",   338,  72, 161, 249, 2),
  q("cast_q340", "What condition triggers the Vmo/Mmo overspeed Clacker aural warning?", 339, 73, 162, 250, 3),
  q("cast_q341", "What condition triggers the Altitude Alert (C-Cord) aural warning?", 340, 74, 163, 251, 0),
  q("cast_q342", "What does the WINDSHEAR FAIL (S) CAS message indicate?", 341,  75, 164, 252, 1),
  q("cast_q343", "What does the WING A/ICE OK (A) CAS message indicate?",  342,  76, 165, 253, 2),
  q("cast_q344", "What does the WING A/ICE ON (A) CAS message indicate?",  343,  77, 166, 254, 3),
  q("cast_q345", "What does the WING A/ICE SNSR (C) CAS message indicate?",344,  78, 167, 255, 0),
  q("cast_q346", "What does the WING/COWL A/I ON (A) CAS message indicate?",345, 79, 168, 256, 1),
  q("cast_q347", "What does the WING OVHT (W) CAS message indicate?",      346,  80, 169, 257, 2),
  q("cast_q348", "What does the WOW INPUT (C) CAS message indicate?",      347,  81, 170, 258, 3),
  q("cast_q349", "What does the WOW OUTPUT (C) CAS message indicate?",     348,  82, 171, 259, 0),
  q("cast_q350", "What does the WOW OUTPUT FAIL (S) CAS message indicate?",349,  83, 172, 260, 1),
  q("cast_q351", "What does the XFLOW/APU PUMP (C) CAS message indicate?", 350,  84, 173, 261, 2),
  q("cast_q352", "What does the YAW DAMPER (C) CAS message indicate?",     351,  85, 174, 262, 3),
  q("cast_q353", "What does the YD 1 INOP (S) CAS message indicate?",      352,  86, 175, 263, 0),
  q("cast_q354", "What does the YD 2 INOP (S) CAS message indicate?",      353,  87, 176, 264, 1),
];

export default questions;
