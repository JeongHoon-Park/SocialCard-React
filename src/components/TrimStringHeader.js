import React from 'react';

const TrimStringHeader = (props) => {
    let monthS = props.dateMonth;
    let dayS = String(props.dateDay);
    
    switch(monthS){
        case 0:
            monthS = 'JAN'
            break;
        case 1:
            monthS = 'FEB'
            break;
        case 2:
            monthS = 'MAR'
            break;
        case 3:
            monthS = 'APR'
            break;
        case 4:
            monthS = 'MAY'
            break;
        case 5:
            monthS = 'JUN'
            break;
        case 6:
            monthS = 'JUL'
            break;
        case 7:
            monthS = 'AUG'
            break;
        case 8 :
            monthS = 'SEP'
            break;
        case 9 :
            monthS = 'OCT'
            break;
        case 10:
            monthS = 'NOV'
            break;
        case 11:
            monthS = 'DEC'
            break;
        default:
            break;
    }

    return(
        monthS+' '+dayS 
    )    
}

export default TrimStringHeader;