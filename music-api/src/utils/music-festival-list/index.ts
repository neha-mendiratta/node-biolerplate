type Band = {
  name: string;
  recordLabel: string;
};

type Music = {
  name: string;
  bands: Array<Band>;
};
const musicFestivalList: Music[] = [
  {
    name: 'Festival A',
    bands: [
      {
        name: 'band1',
        recordLabel: 'recordLabel1',
      },
      {
        name: 'band1',
        recordLabel: 'recordLabel2',
      },
      {
        name: 'band3',
        recordLabel: 'recordLabel3',
      },
    ],
  },

  {
    name: 'Festival B',
    bands: [
      {
        name: 'band1',
        recordLabel: 'recordLabel1',
      },
      {
        name: 'band2',
        recordLabel: 'recordLabel5',
      },
      {
        name: 'band3',
        recordLabel: 'recordLabel3',
      },
      {
        name: 'band3',
        recordLabel: 'recordLabel6',
      },
    ],
  },
];

export default musicFestivalList;
