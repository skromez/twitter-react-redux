import styled from "styled-components";

const TweetBody = styled.div`
  display: flex;
  background: var(--white);
  padding: 10px;

  &:not(:last-child) {
    border-bottom: 2px solid var(--bg);
  }

  .tweet__text {
    font-size: 14px;
    line-height: 20px;
    color: var(--black);
  }

  .tweet__container {
    display: flex;
  }

  .tweet__avatar {
    margin-right: 20px;
  }

  .tweet__user {
    margin-right: 5px;
  }

  .tweet__data {
    margin-left: 15px;
  }
`;

export default TweetBody;
