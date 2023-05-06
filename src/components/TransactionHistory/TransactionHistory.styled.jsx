import css from 'styled-components';

export const Table = css.table`
  margin: 0 auto;
  width: 400px;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 40px;
`;

export const Head = css.thead`
background-color: rgb(169, 169, 169);
`

export const Row = css.tr`
  background-color: rgb(248, 248, 248);
  
`;