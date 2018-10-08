const action  ={
    type: 'EXPAND',
    completed: false,
}

const Show = (completed) => {
    return {
        type: 'EXPAND',
        completed,
    }
}

export default Show;