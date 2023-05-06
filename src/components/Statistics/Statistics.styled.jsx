import css from 'styled-components';

export const Stats = css.section`
text-align: center;
width: 250px;
margin: 0 auto;
margin-top: 30px;
margin-bottom: 30px;
background-color: #A9A9A9;
border-radius: 5%;
box-shadow: rgb(0, 0, 0) -10px 0px 13px -7px, rgb(0, 0, 0) 10px 0px 13px -7px, rgba(0, 0, 0, 0) 5px 5px 15px 5px;
`
export const Title = css.h2`
margin-bottom: 10px;
margin-top: 0;
padding-top: 10px;
color: rgb(248, 248, 248);
`

export const StatsList = css.ul`
padding-left:0;
display:flex;
list-style-type: none;
background-color: rgb(248, 248, 248);
`

export const StatsItem = css.li`
color: black;
font-size: 17px;
font-weight: 700px;
border-top: 1px solid rgb(248, 248, 248);
  width: 100%;
  &:not(:last-child) {
      border-right: 1px solid rgb(248, 248, 248);
      padding-right: 5px;
      padding-left: 5px;
    }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FF9999;
&:nth-child(2n){
    background-color: #FF6699;
}
`;

export const Percentage = css.span`
font-weight: 700;
`;
export const Label = css.span`
padding-bottom: 5px;
`;