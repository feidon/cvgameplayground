const Score = {
  async POSE_FLAPPY_BIRD(parent, args, { userModel }, info) {
    console.log("POSE_FLAPPY_BIRD", parent);
    if (parent.hasOwnProperty("POSE_FLAPPY_BIRD")) {
      return parent["POSE_FLAPPY_BIRD"];
    }
    return 0;
  },
  async ROCK_PAPER_SCISSORS(parent, args, { userModel }, info) {
    if (parent.hasOwnProperty("ROCK_PAPER_SCISSORS")) {
      return parent["ROCK_PAPER_SCISSORS"];
    }
    return 0;
    // if(parent[0]==="POSE_FLAPPY_BIRD"){
    //   return parent[1]
    // }
    // const minute = ("0" + Math.floor((parent[1] / 60000) % 60)).slice(-2);
    // const second = ("0" + Math.floor((parent[1] / 1000) % 60)).slice(-2);
    // const milsec = ("0" + ((parent[1] / 10) % 100)).slice(-2);
    // return parent[1];
  },
  async FINGER_EXERCISE(parent, args, { userModel }, info) {
    if (parent.hasOwnProperty("FINGER_EXERCISE")) {
      return parent["FINGER_EXERCISE"];
    }
    return 0;
    // if(parent[0]==="POSE_FLAPPY_BIRD"){
    //   return parent[1]
    // }
    // const minute = ("0" + Math.floor((parent[1] / 60000) % 60)).slice(-2);
    // const second = ("0" + Math.floor((parent[1] / 1000) % 60)).slice(-2);
    // const milsec = ("0" + ((parent[1] / 10) % 100)).slice(-2);
    // return parent[1];
  },
};

export default Score;
