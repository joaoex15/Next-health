import React from "react";
import { Textotitulo } from "./styles";
export const CustomText = ({children, fonte , color}) => {
return (
    <Textotitulo fonte={fonte}  color ={color} > {children}</Textotitulo>

)
}
