import { Info } from "../enum/info";

export const uuidv4 = (): string =>{
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

// export const getProperty<T[> = (array: T[]) => {

// }

export function getProperty<T>(array: Array<T>, param: string): number{
    let value = array.reduce((prev, curr: any) => prev + curr[param], 0);
    return param === Info.price ? value : parseFloat(value.toFixed(2));
}