import api from "../../api/api";

export const domainApiServices = {
  getDomainDetails: (name: string) => {
    const params = {
      name,
    };
    return api.get("domain/", { params });
  },
};
