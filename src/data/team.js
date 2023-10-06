import Team1 from './../assets/team/1.png';
import Team2 from './../assets/team/2.png';
import Team3 from './../assets/team/3.png';
import Team6 from './../assets/team/6.png';
import Team7 from './../assets/team/7.png';
import Team9 from './../assets/team/9.png';
import Team99 from './../assets/team/10.png';
import Team100 from './../assets/team/12.png';
import Team11 from './../assets/team/11.png';
import Mem1 from './../assets/team/mem1.jpg';
import Mem2 from './../assets/team/mem2.jpg';
import Mem4 from './../assets/team/mem4.png';
export const teamMembers = [
  // {
  //   id: 223344,
  //   title: 'Clinical Excellence Advisory Team',
  //   members: [

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
  // ],
  // },
  {
    id: 223345,
    title: 'Advisors Team',
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
    id: 223346,
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
        {
          id: 100,
          name: 'Zachary Fleming',
          status: 'Chief Technology & Product Officer (FRACTIONAL)',
          src: Team100,
          alt: 'team',
          lead: true,
        },
        {
          id: 8,
          name: 'Jim Ciemny, LICSW, Ed.S',
          status: 'MENTAL HEALTH & SECONDARY EDUCATION ADVISOR',
          src: Team7,
          alt: 'team',
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
        // {
        //   id: 3,
        //   name: 'Shani Reifschlager, MS',
        //   status: 'CHIEF OF GROWTH (FRACTIONAL)',
        //   src: Mem1,
        //   alt: 'team',
        //   lead: true,
        // },
        {
          id: 7,
          name: 'Lauren Fulkerson, MD',
          status: 'Pediatrician',
          src: Team9,
          alt: 'team',
        },
        {
          id: 5,
          name: 'Kate Efsta, SHRM-CP',
          status: 'Human Capital Architect',
          src: Team6,
          alt: 'team',
        },
        {
          id: 100,
          name: 'Pragnya Vella',
          status: 'Digital Marketing Intern',
          src: Team11,
          alt: 'team',
        },
      ],
      team3: [
        // {
        //   id: 99,
        //   name: 'Arshad Nawaz BSC',
        //   status: 'SR. Front-End Developer & UIUX Designer',
        //   src: Team99,
        //   alt: 'team',
        //   lead: true,
        // },
        // {
        //   id: 4,
        //   name: 'Joseph Onyeizu, MBA, MS',
        //   status: 'CHIEF OF STAFF (FRACTIONAL)',
        //   src: Team3,
        //   alt: 'team',
        //   lead: true,
        // },
      ],
    },
  },
];
