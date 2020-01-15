import styled from 'styled-components';

const NotFoundBody = styled.div`
  top: 30%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  min-height: 300px;
  display:flex;
  
  .not-found {
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-between;
  }
  
  .not-found__title {
    font-size: 50px;
  }
  
  .not-found__link {
    text-decoration: underline;
    font-size: 48px;
    
    &:hover {
      color: var(--blue);
    }
  }
  .not-found__icon {
    font-size: 100px;
    color: var(--blue);
  }
`;


export default NotFoundBody;
