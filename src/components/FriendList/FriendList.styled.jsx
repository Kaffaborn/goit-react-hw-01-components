import css from "styled-components";

export const FriendUl = css.ul`
  width: 200px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 0;
`;
export const FriendItem = css.li`
  display: flex;
  align-items: center;
  background-color:rgb(248, 248, 248);
  border-radius: 5%;
  padding: 5px 0;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  box-shadow: rgb(0, 0, 0) -10px 0px 13px -7px, rgb(0, 0, 0) 10px 0px 13px -7px, rgba(0, 0, 0, 0) 5px 5px 15px 5px;
`;

export const IsOnlineState = css.span`
margin-right: 10px;
margin-left: 15px;
border-radius: 50%;
width: 10px;
height: 10px;
background-color: ${({ isOnline }) => { 
    return isOnline? 'green' : 'red'
    }
}}
`
export const FriendText = css.p`
margin-left: 10px;
font-weight:700;
`