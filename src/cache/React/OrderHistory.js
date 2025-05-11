function OrderHistory(props){
    return(
        <div>
            <h2>Order History</h2>
            <table border="1px solid black">
                <tr>
                    <th>ID</th>
                    <th>Customer Name</th>
                    <th>Total</th>
                </tr>
            
            {props.history.map((h,i)=>(
                <tr>
                    <td>{h.id}</td>
                    <td>{h.name}</td>
                    <td>{h.total}</td>
                </tr>
            ))}
            </table>
        </div>
    )
}
export default OrderHistory;