import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query users($game: String!) {
    users(game: $game) {
      name
      scores {
        POSE_FLAPPY_BIRD
        ROCK_PAPER_SCISSORS
        FINGER_EXERCISE
      }
    }
  }
`;
