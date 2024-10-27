function ShoppingListItem({id, item, quantity, completed}){
    return ( 
    <li key={id} style={{color: completed?"grey":"red", textDecoration: completed?"line-through":"none"}}>
        {item} - {quantity}
    </li>
    )
}

export default ShoppingListItem;