import styled from "styled-components";

const DataBody = styled.div`
  position: relative;

  .data__text {
    font-size: 14px;
    line-height: 19px;
    color: var(--gray);
  }

  .data__icon {
    position: absolute;
    top: 50%;
    left: -8px;
    transform: translateY(-50%);
  }
`;

export default DataBody;
