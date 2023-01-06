import Link from 'next/link'
import styles from '../AppBar.module.css'
import { IconButton, Typography } from '@mui/material'
import menuItems from './menuItems'


const MenuBar = () => {
  return (
    <>
      {menuItems.map( ({label, Icon, link = '' }) => 
        <Link key={label} href={link ? link : '/'} passHref className={styles.menuItemLink} >
          <IconButton aria-label="delete" size="small" className={styles.menuIconButton}>
            {Icon}
            <Typography variant='caption'>{label}</Typography>  
          </IconButton>
        </Link>
      )}
    </>
  )
}

export default MenuBar