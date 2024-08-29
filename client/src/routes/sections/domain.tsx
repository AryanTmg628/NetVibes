import { DomainSearch } from "../../pages/domain/components/domain-search/domain-search";
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
