import PropTypes from 'prop-types';
import { Table, Head, Row } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => { 
    return (
        <Table>
            <Head>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
             </Head>

            <tbody>
                {transactions.map(transaction => (
                        <Row key={transaction.id}>
                            <td>{transaction.type }</td>
                            <td>{ transaction.amount}</td>
                            <td>{transaction.currency }</td>
                        </Row>
                ))}
            </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}
