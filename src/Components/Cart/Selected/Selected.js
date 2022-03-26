import React from 'react';

const Selected = (props) => {
    let { selected, selectPhone, resetItem } = props
    return (
        <div className="mt-2 text-center">
            <h4> Selected item </h4>


            <div className="container-fluid">

                <div className="row">
                    <div className="col">

                        <div className="w-75 m-auto">
                            <img src={selectPhone?.image} className="card-img-top w-25 m-auto" alt="img"></img>
                            <div className="card-body">
                                <p className="card-text">Name:you are selected {selectPhone?.name}</p>
                            </div>
                        </div>
                        {/* 
            <p>Name:you are selected:{selectPhone?.name}</p> */}
                        <button onClick={() => selected(props)} className="btn btn-info mt-3">select for you</button><br />
                        <button onClick={() => resetItem(props)} className="btn btn-danger  mt-3">reset</button>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Selected;