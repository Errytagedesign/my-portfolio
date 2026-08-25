import Jupita from "../Experience/Jupita";
import Scillinx from "../Experience/Scillinx";
import Microverse from "../Experience/Microverse";

export const TabsData = [
  {
    TabTitle: [
      { id: "tab1", title: "Jupita" },
      { id: "tab2", title: "Scillinx" },
      { id: "tab3", title: "Microverse" },
    ],
    TabContents: [
      { id: "tab1", comp: <Jupita /> },
      { id: "tab2", comp: <Scillinx /> },
      { id: "tab3", comp: <Microverse /> },
    ],
  },
];
