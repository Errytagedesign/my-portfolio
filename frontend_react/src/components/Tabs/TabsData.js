import GoodNews from "../Experience/GoodNews";
import Operaads from "../Experience/Operaads";
import Wolfpack from "../Experience/Wolfpack";

export const TabsData = [
  {
    TabTitle: [
      { id: "tab1", title: "WolfpackHered" },
      {
        id: "tab2",
        title: "Operaads",
      },
      {
        id: "tab3",
        title: "GoodNews Web-app",
      },
    ],
    TabContents: [
      { id: "tab1", comp: <Wolfpack /> },
      { id: "tab2", comp: <Operaads /> },
      { id: "tab3", comp: <GoodNews /> },
    ],
  },
];
