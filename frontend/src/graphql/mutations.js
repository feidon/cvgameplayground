import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($data: CreateUserInput!) {
    createUser(data: $data) {
      ok
      user {
        name
      }
      error
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($data: CreateUserInput!) {
    loginUser(data: $data) {
      ok
      user {
        name
        scores {
          POSE_FLAPPY_BIRD
          ROCK_PAPER_SCISSORS
          FINGER_EXERCISE
        }
      }
      error
    }
  }
`;

export const UPDATE_MUTATION = gql`
  mutation UpdateMutation($data: UpdateUserInput!) {
    updateUser(data: $data) {
      ok
      user {
        name
        scores {
          POSE_FLAPPY_BIRD
          ROCK_PAPER_SCISSORS
          FINGER_EXERCISE
        }
      }
      error
    }
  }
`;
