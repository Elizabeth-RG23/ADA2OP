export const esNombre = (value)=>{
    return !/[^A-Za-z\s\,]/.test(value);
}
  
export const esEdad = (value)=>{
    return /^([0-9])*$/.test(value);
}

export const esPasatiempo = (value)=>{
    return !/[^A-Za-z\s\,]/.test(value);
}

export const esDia = (value)=>{
    return /^([0-9])*$/.test(value);
}

export const esMes = (value)=>{
    return /^([0-9])*$/.test(value);
}

export const esAnio = (value)=>{
    return /^([0-9])*$/.test(value);
}