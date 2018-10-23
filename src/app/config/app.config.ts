const BASE_URL = 'http://nvuh-soft.neso.online/api/';

const URLS = {
  auth: BASE_URL + 'auth/session',
  registration: BASE_URL + 'auth/session',
  users: BASE_URL + 'users',
  roles: BASE_URL + 'roles',
  patients: BASE_URL + 'patients',
  patientsById: BASE_URL + 'patients/',
  regions: BASE_URL + 'regions',
  municipalities: BASE_URL + 'municipalities',
  patient: BASE_URL + 'patients/'
};

export { BASE_URL, URLS };
