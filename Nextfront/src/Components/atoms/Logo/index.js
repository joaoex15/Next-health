import React from "react";
import Logoimg from '../../../../assets/Nexth.png';
import { LogoImagem } from "./styles";
export const Logo = ({height,width}) => {
    return (
        < LogoImagem height={height} width={width} source={Logoimg}/>

    )
}

