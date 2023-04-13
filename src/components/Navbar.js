import React from 'react'

const Navbar = () => {

    let searchStyle = {padding: '5px 10px 5px 30px ', outline: 'none', borderRadius: '10px', width: '100%', border: '2px solid #999', color: '#555', fontWeight: '600', fontSize: '14px'}

    return (
        <>
            <nav style={{display:'grid', gridTemplateColumns: '2fr 4fr', height: '70px', placeContent: 'center', padding: '0 20px', background: '#fff'}}>
                <div className="logo-search" style={{display:'flex', justifyContent: 'space-between'}}>
                    <div className="logo" style={{margin: '10px'}}>
                        <span style={{padding: '0px 5px', borderRadius: '0 10px 0 10px', background: 'orange', marginRight: '5px', fontSize: '23px', fontWeight: '800', color: '#fff'}}>R</span>
                        <span>RoyalUI</span>
                    </div>
                    <div className="search" style={{display: 'flex', alignItems: 'center'}}>
                        <input type="search" name="#" id="#" placeholder='search here' style={searchStyle} />
                        <i className="fas fa-search" style={{position: 'absolute', paddingLeft: '10px', margin: '0', color: '#555'}}></i>
                    </div>
                </div>

                <div className="user" style={{textAlign: 'right', marginTop: '8px'}}>
                     <i className="fas fa-envelope"></i>
                     <i className="fas fa-bell"></i>
                     <i className="fas fa-users"></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar