export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () =>{
    return {
        type:INCREMENT
    }
}

export const deccrement = () =>{
    return {
        type:DECREMENT
    }
}