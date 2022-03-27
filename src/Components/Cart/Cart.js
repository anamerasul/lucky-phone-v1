/* eslint-disable jsx-a11y/img-redundant-alt */

import './Cart.css'
import Selected from './Selected/Selected';
import { MdDelete } from 'react-icons/md';
const Cart = ({ cart, selected, selectPhone, resetItem, removeItem }) => {
    // console.log(selected)

    return (
        <div className='container'>
            <h4>Select four Phone</h4>
            <div className="row">
                {
                    cart.map(item =>
                        <div className="col-6 mb-3"

                            key={item.id}
                        >
                            <div className="card w-50 h-25">
                                <img src={item.image} className="img-fluid" alt="image"></img>
                                <div className="card-body m-auto">
                                    <p className="card-text">{item.name}</p>
                                    <button className="btn btn-warning" onClick={() => removeItem(item)}> <MdDelete></MdDelete></button>
                                </div>
                            </div>
                        </div>
                    )
                }


                <div style={cart.length ? { display: 'block' } : { display: 'none' }}>

                    <Selected
                        data={cart}
                        resetItem={resetItem}
                        selectPhone={selectPhone}
                        selected={selected}
                    ></Selected>

                </div>


            </div>
        </div>
    );
};

export default Cart;