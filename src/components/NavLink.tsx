import Button from '@mui/material/Button';
import Link from 'next/link';
import React from 'react';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} passHref>
    <Button variant="outlined" color="primary" size="large" sx={{borderRadius:'100px',color:'#ccc479', backgroundColor:'#79abcc',borderColor:"#ccc479"}} >
      {children}
    </Button>
  </Link>
);

export default NavLink;
