class PatientsidAttributesData {
    first_name: string;
    last_name: string;
    age: number;
    birthdate: string;
    cuntryid: number;
    created_at: string;
    physical_address: string;
    pid: string;
    citizenship: string;
    primary_phone: string;
  }
  class PatientidResponseData {
    attributes: Array<PatientsidAttributesData>;
    id: number;
    links: object;
    relationships: object;
    type: string;
  }
  
  export class PatientIdResponse {
    data: Array<PatientidResponseData>;
  }
  