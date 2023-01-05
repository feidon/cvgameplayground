import { gql } from "@apollo/client";

export const USER_SUBSCRIPTION = gql`
  subscription userUpdated($game: String!) {
    userUpdated(game: $game) {
      mutation
      data {
        name
        scores {
          POSE_FLAPPY_BIRD
          ROCK_PAPER_SCISSORS
          FINGER_EXERCISE
        }
      }
    }
  }
`;
