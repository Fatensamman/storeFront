const initialState = {
    categoryList: [
        {
            name: 'Food',
            description: 'Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!',
        },
        {
            name: 'Electronics',
            description: 'Electronics is clearly the winner of the day.',
        }
    ],
    activeCategory: '',
    activeDescription: ''
}

const categoryReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            return { ...state, activeCategory: payload.category, activeDescription: payload.description };
        case 'INACTIVE':
            return initialState;
        default:
            return state
        }
}

export const inactive = () => {
    return {
        type: 'INACTIVE'
    };
}

export const active = (category, description) => {
    return {
        type: 'ACTIVE',
        payload: {
            category,
            description
        }
    };
}
export default categoryReducer;