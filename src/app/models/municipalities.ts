class MunicipalitiesData {
  type: string;
  id: string;
  attributes: Array<MunicipalitiesAttributesData>;
}
export class Municipalities {
  links: object;
  meta: object;
  data: Array<MunicipalitiesData>;
}

class MunicipalitiesAttributesData {
  name: string;
  region_id: number;
}
