class PatientsAttributesData {
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
class PatientsResponseData {
  attributes: Array<PatientsAttributesData>;
  id: number;
  links: object;
  relationships: object;
  type: string;
}

export class PatientsResponse {
  data: Array<PatientsResponseData>;
  included: Array<any>;
  links: object;
  meta: object;
}
