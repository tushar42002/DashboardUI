import React from 'react'
import wave from '../img/wave.png'

function Dashboard() {
  return (
    <div style={{ padding: '0 40px 0 20px' }}>
      <div className="topbox" style={{ padding: '20px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="heading">RoyalUI DASHBOARD</div>
        <div className="topbox-btn">
          <a href="#">Report</a>
        </div>
      </div>

      <div className="databox">
        <div>
          <p>SALES</p>
          <div className="number-icon">
            <span>34040</span>
            <i className='fas fa-calendar'></i>
          </div>
          <p> <span>0.12% </span> (20 day)</p>
        </div>
        <div>
          <p>REVENUE</p>
          <div className="number-icon">
            <span>47033</span>
            <i className='fas fa-user'></i>
          </div>
          <p> <span>0.12% </span> (20 day)</p>
        </div>
        <div>
          <p>DOWNLOAD</p>
          <div className="number-icon">
            <span>40016</span>
            <i className='fas fa-download'></i>
          </div>
          <p> <span>0.12% </span> (20 day)</p>
        </div>
        <div>
          <p>RETURNS</p>
          <div className="number-icon">
            <span>61344</span>
            <i className='fas fa-dollar'></i>
          </div>
          <p> <span>0.12% </span> (20 day)</p>
        </div>

      </div>


      <div className="graphs">
        <div className="Sales-details">
          <h3>Sales Details</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam minima velit recusandae sit deserunt impedit fuga quae distinctio modi.</p>
          <div className="graph1-info">

            <div className="boxes">
              <div className='box'></div>
              <p>offline sales</p>
              <div className='box'></div>
              <p>online sales</p>
            </div>

          </div>

          <div className="graph1">

            <div className="graph-boxes">

              <div className="graph-box">

                <div className="graph-item1">
                  <div></div>
                  <div></div>
                </div>

                <div className="graph-item2">
                  <p>Jan</p>
                </div>

              </div>
              <div className="graph-box">

                <div className="graph-item1">
                  <div></div>
                  <div></div>
                </div>

                <div className="graph-item2">
                  <p>Feb</p>
                </div>

              </div>
              <div className="graph-box">

                <div className="graph-item1">
                  <div></div>
                  <div></div>
                </div>

                <div className="graph-item2">
                  <p>Mar</p>
                </div>

              </div>
              <div className="graph-box">

                <div className="graph-item1">
                  <div></div>
                  <div></div>
                </div>

                <div className="graph-item2">
                  <p>Apr</p>
                </div>

              </div>
              <div className="graph-box">

                <div className="graph-item1">
                  <div></div>
                  <div></div>
                </div>

                <div className="graph-item2">
                  <p>May</p>
                </div>

              </div>
              <div className="graph-box">

                <div className="graph-item1">
                  <div></div>
                  <div></div>
                </div>

                <div className="graph-item2">
                  <p>Jun</p>
                </div>

              </div>

            </div>

            <div className="graph-select">
              <div></div>
              <div>
                <select name="#" id="#">
                  <option value="0">Today</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className='viewall-btn'>
                <a href="#">view all</a>
              </div>
            </div>

          </div>

        </div>

        <div className="purchases-details" style={{background: `url(${wave})`, backgroundColor: '#fff', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionY: 'bottom'}}>
          <h3> Purchases</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam minima velit recusandae sit deserunt impedit fuga quae distinctio modi.</p>
          <div className="info">
            <div>
              <p>Status</p>
              <p className="number">362</p>
            </div>
            <div>
              <p>New User</p>
              <p className="number">101</p>
            </div>
            <div>
              <p>Chats</p>
              <p className="number">524</p>
            </div>
            <div>
              <p>Feedbacks</p>
              <p className="number">509</p>
              {/* <p className="number"> &#x1f50d; </p> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dashboard