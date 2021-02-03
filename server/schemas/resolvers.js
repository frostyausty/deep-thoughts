const resolvers = {
    Query: {
        hellowWorld: () => {
            return 'Hello world!';
        }
    }
};

module.exports = resolvers;