// navigationData.ts

interface Link {
    name: string;
    path: string;
  }
  
  interface Section {
    title: string;
    links: Link[];
  }
  
  export const navigationData: Section[] = [
    {
      title: 'Projects',
      links: [
        { name: 'Postogon', path: 'projects/postogon' },
        { name: 'Imperfect Private', path: 'projects/imperfectgamers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { name: 'hello@imperfectandcompany.com', path: 'mailto:hello@imperfectandcompany.com' },
      ],
    },
  ];  