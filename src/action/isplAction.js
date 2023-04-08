import React from "react";
import axios from "axios";
import { AddressApi, AddStudentApi, PaymentApi, RegistrationApi } from "./api";

// export const onRegistrationData = (data) => {
//   return axios
//     .post(RegistrationApi, { ...data })
// };

// export const onTeamData = (data) => {
//   axios
//     .post(AddStudentApi, { ...data }, { headers: { team_id: data.theam_id } })
//     .then((response) => console.log(response))
//     .catch(function (error) { console.log(error) });
// };

// export const onAddressData = (data) => {
//   return axios
//     .post(AddressApi, { ...data }, { headers: { team_id: data.theam_id } })
// };

export const getPaymentToken = (data) => {
  return axios
    .post(PaymentApi, { ...data }, { headers: { team_id: data.theam_id } })
}