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
`;

export default TweetBody;
