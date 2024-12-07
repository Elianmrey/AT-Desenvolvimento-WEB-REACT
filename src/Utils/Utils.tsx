const getTitle = (action_type: number): string => {
    switch (action_type) {
        case 1:
            return "sleeping";
        case 2:
            return "eating";
        case 3:
            return "diaper-change";
        default:
            return "eating";
    }
};



export {
    getTitle,
};
