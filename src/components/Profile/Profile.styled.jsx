import css from 'styled-components';

export const ProfileContainer = css.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 250px;
  text-align: center;
`;
export const Description = css.div`
  padding-bottom: 15px;
  background-color: #F8F8F8;
  border-radius: 5%;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`;
export const Img = css.img`
margin-left: auto;
margin-right: auto;
margin-top: 15px;
margin-bottom: 15px;
width: 150px;
height: 150px;
`

export const Name = css.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
  padding-top: 15px;
  border-top: 1px solid #696969;
`;

export const Tag = css.p`
margin-bottom: 5px;
color: #696969;
`

export const Location = css.p`
  color: #696969;
`;

export const StatisticsUl = css.ul`
  margin-top: 12px;
  padding-left: 0;
  background-color: #A9A9A9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-radius: 5%;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`;

export const StatisticsItem = css.li`
  display: flex;
  color: #F8F8F8;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  list-style-type: none;
  &:not(:last-child) {
      border-right: 1px solid grey;
    }
`;

export const Label = css.span`
margin-bottom: 5px;
`

export const Quantity = css.span`
font-weight: 700;
`