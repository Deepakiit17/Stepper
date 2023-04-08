const Is_Live = true;
export const HOST_URL = Is_Live
  ? "http://3.110.135.217:8000/"
  : "http://3.110.135.217:8000/";
export const RegistrationApi = `${HOST_URL}ispl/team/registration`;
export const AddStudentApi = `${HOST_URL}ispl/student/add`;
export const AddressApi = `${HOST_URL}ispl/student/address`;
export const PaymentApi = `${HOST_URL}ispl/team/payment`;