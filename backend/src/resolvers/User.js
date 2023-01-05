const User = {
  async scores(parent, args, { userModel }, info) {
    // console.log("parent", parent.id);

    const users = await userModel.findOne({ id: parent.id });
    // console.log(users.scores);
    // console.log(users.hasOwnProperty("scores"), users);
    if (users.scores) {
      return users.scores;
    }
    return null;
  },
};

export default User;
