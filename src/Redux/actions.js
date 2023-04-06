export function addCharacter(character){
    return {
        type: 'ADD_CHARACTER',
        payload: character
    }
}

export function deleteCharacter(id){
    return {
        type: 'DELETE_CHARACTER',
        payload: id
    }
}

export function filterCards(gender){
    return {
        type: 'FILTER',
        payload: gender
    }
}

export function orderCards(order){
    return {
        type: 'ORDER',
        payload: order
    }
}