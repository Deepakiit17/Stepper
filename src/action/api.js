const Is_Live = true;
export const HOST_URL = Is_Live
  ? "http://15.206.189.238:8000/"
  : "http://15.206.189.238:8000/";
export const RegistrationApi = `${HOST_URL}ilpapi/Institute/club/registration`;
export const AddStudentApi = `${HOST_URL}ilpapi/Institute/Executive_admin/registration`;
export const AddressApi = `${HOST_URL}ilpapi/club/add_member/registration`;
export const PaymentApi = `${HOST_URL}ilpapi/ispl/team/payment`;
