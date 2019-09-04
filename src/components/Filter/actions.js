/**
 * Actions types 
 */
export const btnview = 'hello';

/**
 * Actions creator 
 */
export const hello = (type = 'null',data={}) => {
    return{
        type : type,
        payload: data
    }
}