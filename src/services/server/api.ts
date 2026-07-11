// // ========== all companies for admin =====================

import { serverFetch } from "../core/serverFetch";

// import { protectedFetch, serverFetch } from "../core/serverFetch";

// //========================= get patients by id =====================
// export const getPatientById = async (id) => {
//   return protectedFetch(`/api/patients/${id}`);
// };

// export const getLimitedDoctors = async ({
//   search = "",
//   sort = "",
//   page,
//   limit = 6,
//   verificationStatus = "verified",
// } = {}) => {
//   const params = new URLSearchParams();

//   if (search) params.set("search", search);
//   if (sort) params.set("sort", sort);
//   params.set("page", String(page));
//   params.set("limit", String(limit));
//   if (verificationStatus) params.set("verificationStatus", verificationStatus);

//   const result = await serverFetch(`/api/doctors?${params.toString()}`);

//   // serverFetch returns null on failure — guard against that here
//   if (!result) {
//     return { doctors: [], total: 0, totalPages: 1, currentPage: page };
//   }

//   return result;
// };

// // ======================get doctors by id =====================
// export const getDoctorById = async (id, query) => {
//   return protectedFetch(`/api/doctors/${id}?from=${query}`);
// };

// // ====================== get stats =====================
export const getPosts = async () => {
  return serverFetch(`/api/posts`);
};

export const getPostById = async (id: string) => {
  return serverFetch(`/api/posts/${id}`);
};

// export const getDoctorStats = async (doctorId) => {
//   return protectedFetch(`/api/stats/doctor?id=${doctorId}`);
// };
