function usability(user, input){
    return {
        user: {
            name: user.name,
            level: user.level,
            status: user.status
        },
        orbit: orbit(input),
        operator: operator(input),
        run: run(input),
        scan: input.length,
        math: {
            X: input.length % 7,
            Y: input.length % 11,
            Z: input.length % 13
        },
        result: "us(e)ability"
    };
}
