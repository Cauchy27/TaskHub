import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';

import { SvgIcon } from '@mui/material';

const items = [
  {
    title: 'Overview',
    path: '/',
    disabled:false,
    external:false,
    icon: (
      <SvgIcon>
        {/* credit: plus icon from https://heroicons.com/ */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
      </SvgIcon>
    )
  },
  {
    title: 'Customers',
    path: '/customers',
    disabled:false,
    external:false,
    icon: (
      <SvgIcon fontSize="small">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
      </SvgIcon>
    )
  },
  {
    title: 'Companies',
    path: '/companies',
    disabled:false,
    external:false,
    icon: (
      <SvgIcon fontSize="small">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
      </SvgIcon>
    )
  },
  // {
  //   title: 'Account',
  //   path: '/account',
  //   disabled:false,
  //   external:false,
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Settings',
  //   path: '/settings',
  //   disabled:false,
  //   external:false,
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   disabled:false,
  //   external:false,
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   disabled:false,
  //   external:false,
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Error',
  //   path: '/404',
  //   disabled:false,
  //   external:false,
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  //     </SvgIcon>
  //   )
  // }
];

export default items;