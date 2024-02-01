import { Genre } from "types/types"

export const formatAvaliation = (value: number): number | string =>{

    if(!value) return 'N/A'
   
    const formated = Number.isInteger(value) ? value : value.toFixed(1)

    return formated
}

export const formateDate = (value: string): string =>{

    if(!value) return '-'


    return value.split('-')[0]
}

export const formatGenres = (genres: Genre[]): string =>{

    const genreNames = genres.map(genre => genre.name);
    const joinedGenres = genreNames.join(', ');

    return `${joinedGenres}.`
}

export const  formatRuntime = (minutos: number):string =>{
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
  
    const horasFormatadas = horas > 0 ? `${horas}h` : '';
    const minutosFormatados = minutosRestantes > 0 ? `${minutosRestantes}min` : '';
  
    return `${horasFormatadas} ${minutosFormatados}`;
  }

