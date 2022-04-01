import * as Icons from "@material-ui/icons";
import React from "react";

function NavButtons() {
  return(
      <React.Fragment>
        <a href='https://instagram.com' target='_blank' rel="noreferrer" className='hover'><Icons.Instagram/></a>
        <a href='https://twitter.com/BigWalrus_' target='_blank' rel="noreferrer" className='hover'><Icons.Twitter/></a>
        <a href='https://opensea.io/collection/thebigwalerus-store/' target='_blank' rel="noreferrer" className='hover'><Icons.ShoppingCart/></a>
      </React.Fragment>
  )
}

export default NavButtons;