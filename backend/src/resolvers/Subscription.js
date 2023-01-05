const Subscription = {
  userUpdated: {
    subscribe: (parent, args, { pubSub }) => {
      // console.log(args);
      return pubSub.asyncIterator("LeaderBoard");
    },
  },
};

export default Subscription;
