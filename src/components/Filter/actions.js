/**
 * Actions types 
 */
const btnadd  = 'hello';
const btnview = 'hello';

/**
 * Actions creator 
 */
export const hello = () => {
    console.log('action');
    return{
        type : btnview,
        payload: {
            msg: 'hello word'
        }
    }
}