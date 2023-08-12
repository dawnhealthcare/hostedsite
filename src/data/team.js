import Team1 from './../assets/team/1.png';
import Team2 from './../assets/team/2.png';
import Team3 from './../assets/team/3.png';
import Team4 from './../assets/team/4.png';
import Team5 from './../assets/team/5.png';
import Team6 from './../assets/team/6.png';
import Team7 from './../assets/team/7.png';
import Team9 from './../assets/team/9.png';
import Mem1 from './../assets/team/mem1.jpg';
import Mem2 from './../assets/team/mem2.jpg';
import Mem3 from './../assets/team/mem3.jpg';
import Mem4 from './../assets/team/mem4.png';
export const teamMembers = [
  {
    title: 'Clinical Excellence Advisory Team',
    members: [
      {
        id: 7,
        name: 'Lauren Fulkerson, MD',
        status: 'PEDIATRICS & PARENTING ADVISOR',
        src: Team9,
        alt: 'team',
      },
      {
        id: 8,
        name: 'Jim Ciemny, LICSW, Ed.S',
        status: 'Secondary Education Advisor',
        src: Team7,
        alt: 'team',
      },
      // {
      //   id: 9,
      //   name: 'Cacilda Teixeira, MBA',
      //   status: 'Partnerships & Care Network Advisor',
      //   src: Team4,
      //   alt: 'team',
      // },
      // {
      //   id: 10,
      //   name: 'Mohamed Saleh, Ph.D',
      //   status: 'Operational Excellence Advisor',
      //   src: Mem3,
      //   alt: 'team',
      // },
    ],
  },
  {
    title: 'Board of Advisors',
    members: [
      {
        id: 11,
        name: 'Mara Bloom, JD, MS',
        status: 'SVP, Massachusetts General Hospital',
        src: Mem2,
        alt: 'team',
      },
      {
        id: 12,
        name: 'Kevin Streeter, MBA, BSN, NEA-BC, FACHE',
        status: 'Executive Director, Providence',
        src: Mem4,
        alt: 'team',
        lead: true,
      },
    ],
  },
];

export const members = [
  {
    title: 'Leadership Team',
    members: {
      team1: [
        {
          id: 1,
          name: 'Panos Efsta, MBA, MS',
          status: 'Founder & CEO',
          src: Team1,
          alt: 'team',
          lead: true,
        },
        {
          id: 2,
          name: 'Ilyas Yamani, MD',
          status: 'Co-Founder & Chief Care Officer',
          src: Team2,
          alt: 'team',
          lead: true,
        },
      ],
      team2: [
        // {
        //   id: 6,
        //   name: "Seven Ezumba",
        //   status: "Product Architect",
        //   src: Team5,
        //   alt: "team",
        // },
        {
          id: 3,
          name: 'Shani Reifschlager, MS',
          status: 'Ecosystem Growth Leader',
          src: Mem1,
          alt: 'team',
          lead: true,
        },
        // {
        //   id: 4,
        //   name: 'Joseph Onyeizu, MBA, MS',
        //   status: 'Director of Momentum',
        //   src: Team3,
        //   alt: 'team',
        //   lead: true,
        // },
        {
          id: 5,
          name: 'Kate Efsta, SHRM-CP',
          status: 'Human Capital Architect',
          src: Team6,
          alt: 'team',
        },
      ],
    },
  },
];
