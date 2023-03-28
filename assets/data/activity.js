import { Asset } from 'expo-asset';

export default [
  {
    id: 0,
    image: Asset.fromModule(require('../../assets/images/activites/run-blanc-3.png')).uri,
    type: "Course",
    rue: "12 rue de la Source",
    ville: "RENNES 35000",
    date: "05/04/2023",
    heure: "15h30",
  },
  {
    id: 1,
    image: Asset.fromModule(require('../../assets/images/activites/foot-blanc_1.png')).uri,
    type: "Football",
    rue: "1 Rue du stade",
    ville: "RENNES 35000",
    date: "08/04/2023",
    heure: "13h30",
  },
  {
    id: 2,
    image: Asset.fromModule(require('../../assets/images/activites/alter-blanc_1.png')).uri,
    type: "Musculation",
    rue: "17 Rue du menir",
    ville: "RENNES 35000",
    date: "15/04/2023",
    heure: "8h15",
  },
  {
    id: 3,
    image: Asset.fromModule(require('../../assets/images/activites/alter-blanc_1.png')).uri,
    type: "Musculation",
    rue: "17 Rue du menir",
    ville: "RENNES 35000",
    date: "17/04/2023",
    heure: "18h00",
  },
];
