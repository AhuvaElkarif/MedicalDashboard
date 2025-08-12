export interface Medication {
  status: "בטיפול" | "נדחתה" | "מושהה" | "אושרה";
  statusColor: string;
  updateDate: string;
  requestDate: string;
  requester: string;
  requesterType: string;
  patient: string;
  coverage: string;
  medication: string;
  cato: string;
  dosage: string;
  minDosage: string;
  package: string;
  treatments: string;
  packageDate: string;
  patientId: string;
  doctor: string;
}

export const medications: Medication[] = [
  {
    status: "בטיפול",
    statusColor: "#6CA9F8",
    updateDate: "11.5.25",
    requestDate: "11.5.25",
    requester: "אירנה תרכין",
    requesterType: "מכבי",
    doctor: "רוית גבע",
    coverage: "אחות מאומתת",
    medication: "ALDACTONE TAB 25",
    cato: "50 mg",
    dosage: "6",
    minDosage: "50 mg",
    package: "50 mg",
    treatments: "6",
    packageDate: "11.5.25",
    patientId: "205488290",
    patient: "ישראל ישראלי"
  },
  {
    status: "נדחתה",
    statusColor: "#F88484",
    updateDate: "1.4.25",
    requestDate: "1.4.25",
    requester: "אחות מאומתת",
    requesterType: "כללית",
    doctor: "רוית גבע",
    coverage: "אחות מאומתת",
    medication: "ASPIRIN CARDIO (BAYER)",
    cato: "60 mg",
    dosage: "10",
    minDosage: "60 mg",
    package: "60 mg",
    treatments: "10",
    packageDate: "1.4.25",
    patientId: "031769420",
    patient: "יעקב יעקובי"
  },
  {
    status: "אושרה",
    statusColor: "#90E890",
    updateDate: "1.4.25",
    requestDate: "1.4.25",
    requester: "אחות מאומתת",
    requesterType: "מכבי א",
    doctor: "רוית גבע",
    coverage: "אחות מאומתת",
    medication: "ATORVASTATIN TEVA TAB",
    cato: "10 mg",
    dosage: "5",
    minDosage: "10 mg",
    package: "10 mg",
    treatments: "5",
    packageDate: "1.4.25",
    patientId: "205488290",
    patient: "ישראל ישראלי xxx"
  },
  {
    status: "מושהה",
    statusColor: "#F0E68C",
    updateDate: "1.4.25",
    requestDate: "1.4.25",
    requester: "אחות מאומתת",
    requesterType: "מכבי א",
    doctor: "רוית גבע",
    coverage: "אחות מאומתת",
    medication: "CARDILOC TAB 2.5 mg",
    cato: "2.5 mg",
    dosage: "2",
    minDosage: "2.5 mg",
    package: "2.5 mg",
    treatments: "2",
    packageDate: "1.4.25",
    patientId: "031769420",
    patient: "יעקב יעקובי"
  }
];
