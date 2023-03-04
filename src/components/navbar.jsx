import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { AppBar,Toolbar,Typography} from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{opacity: 0.6, background:"#badbba",boxShadow: 'none',borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                            }} color="inherit">
      <Toolbar>
        <Typography component={Link} to="/" variant="h6" sx={{flexGrow: 1,
                            alignItems: 'center',
                            display: 'flex',
                            textDecoration: 'none',}} color="inherit">
          GardenGuRu
        </Typography>
        <div style={{flexGrow: 1}} />
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
        {/* {location.pathname === '/' && (
        <div>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
            <ShoppingCart />
          </IconButton>
        </div>
        )} */}
      </Toolbar>
    </AppBar>



    // <div className="navbar">
    //   <div className="links">
    //     <Link to="/"> Shop </Link>
    //     <Link to="/contact"> Contact </Link>
    //     <Link to="/cart">
    //       <ShoppingCart size={32} />
    //     </Link>
    //   </div>
    // </div>
  );
};
