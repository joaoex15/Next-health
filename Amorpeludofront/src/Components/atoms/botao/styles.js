import styled from "styled-components/native";
export const butoomC =styled.Button`
    height: ${({height})=> height || '70px'  };
    width:${({width})=> width || '70px'  };
    borderRadius:${({border})=> border || '15px'  };
    nomeIcon=${({icon})=> icon || "arrow-right"  };
    size:${({fonte}) =>fonte || '40px' };
    color: ${({color}) =>color || 'white' };
`;