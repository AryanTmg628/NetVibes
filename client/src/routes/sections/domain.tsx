import { DomainSearch } from "../../modules/domain/components/domain-search/domain-search.tsx";
import { DomainView } from "../../pages/domain/domain-view.tsx";

const domain = {
  path: "",
  element: <DomainView />,
  children: [
    {
      path: "search",
      element: <DomainSearch />,
    },
  ],
};

export const domainRoutes = [
  {
    path: "domain/",
    children: [domain],
  },
];
