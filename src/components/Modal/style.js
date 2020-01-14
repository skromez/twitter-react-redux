import styled from 'styled-components';

const ModalBody = styled.section`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 8px;
  
  .modal {
    position: fixed;
    min-width: 605px;
    padding: 30px 40px;
    border-radius: 8px;
   
    background-color: var(--white);
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
  }

  .modal__container {
    display: flex;
    align-items: center;
  }

  .modal__avatar {
    margin-right: 20px;
  }

  .modal__text {
    margin-top: 30px;

    font-size: 27px;
    line-height: 32px;
    letter-spacing: 0.027em;

    color: var(--black);
  }

  .modal__data {
    margin-top: 25px;

    img {
      display: none;
    }
  }

  .modal__thumb {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .likes {
    margin-top: 25px;

    display: flex;
    align-items: center;

    border-top: 1px solid #e6ecf0;
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 0;
  }

  .likes__amount {
    margin-right: 15px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: var(--black);

    span {
      font-weight: 400;
      color: var(--gray);
    }
  }
  .data__icon {
    display: none;
  }
`;

export default ModalBody;
