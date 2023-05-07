import img1 from './../assets/home/4.png';
import img2 from './../assets/home/6.png';
import img3 from './../assets/home/7.png';
import img4 from './../assets/home/5.png';
import Para from './../components/Para';
export const services = [
  {
    id: 222,
    title: 'Primary Prevention',
    desc: (
      <ul className="">
        <li className="mb-3">
          Our wellness program offers biweekly text-based screenings to detect
          early warning signs of mental health issues and promote metabolic
          health.
        </li>
        <li>
          The program equips children and parents with knowledge to cultivate
          healthy habits and discover a healthier future.
        </li>
      </ul>
    ),
    image: img1,
  },
  {
    id: 223,
    title: 'Secondary Prevention',
    desc: (
      <ul className="">
        <li className="mb-3">
          Our proactive approach to secondary prevention empowers individuals to
          take charge of their health.
        </li>
        <li>
          Biweekly text-based screenings provide key data points for determining
          when sessions with culturally competent providers are necessary to
          reinforce the child's mental health resilience.
        </li>
      </ul>
    ),
    image: img2,
  },
  {
    id: 224,
    title: 'Tertiary Prevention',
    desc: (
      <ul className="">
        <li className="mb-3">
          Get expert care and ongoing care navigation at a pre-crisis level with
          Dawn Health, ensuring peace of mind.
        </li>
        <li>
          We offer a comprehensive approach for children with chronic
          conditions, providing parents with resources and tools to confidently
          manage their child's condition, going beyond just treatment.
        </li>
      </ul>
    ),
    image: img3,
  },
  {
    id: 225,
    title: 'Quaternary Prevention',
    desc: (
      <ul className="">
        <li className="mb-3">
          Our patient-centered approach to Quaternary prevention empowers
          parents to make informed decisions, avoid unnecessary interventions,
          and promote family-centered care.
        </li>
        <li>
          By providing access to measurable based outcomes and the support of a
          care navigation team, Dawn Health enables parents to see the
          progression of care and gain confidence in managing their child's
          health.
        </li>
      </ul>
    ),
    image: img4,
  },
];
