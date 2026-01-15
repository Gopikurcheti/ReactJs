import '../css/Mobile.css'

const Mobile = () =>{
    return(
        <>
         
             <div className='parent'>

                <div id='child1'>
                    <img src='https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/1/1/s/-original-imagwu89jy5ems28.jpeg?q=70&crop=false' alt='' width='250'/>
                </div>

                <div id='child2'>
                        <h2>REDMI Note 13 Pro 5G (Midnight Black, 256 GB) (8 GB RAM)</h2>
                        <button id='btn-rating'>4.3★</button>
                        <span>39,415 Ratings & 3,016 Reviews</span>
                        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png' width='60'/>
                        <ul>
                            <li>8 GB RAM | 256 GB ROM</li>
                            <li>16.94 cm (6.67 inch) Display</li>
                            <li>200MP (OIS) + 8MP + 2MP | 16MP Front Camera</li>
                            <li>5100 mAh Battery</li>
                            <li>7s Gen 2 Mobile Platform 5G Processor</li>
                        </ul>
                </div>

                <div id='child3'>
                    <div id="price">
                     <h1>₹24,999</h1>
                     <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png' width='60'/>
                    </div>

                    <div id='max-price'>
                        <p id='ac-price'>₹30,999</p>
                    <span>19% off</span>
                    </div>

                     
                    <p>Free delivery</p> 
                    <p>Upto ₹16,300 off on Exchange </p>                   
                </div>
             </div>
        </>
    );
}

export default Mobile;