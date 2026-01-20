import '../css/Mobile.css'

const Mobile = (props) =>{
    return(
        <>
         
             <div className='parent'>

                <div id='child1'>
                    <img src={props.src} alt='' width='250'/>
                </div>

                <div id='child2'>
                        <h2>{props.name}</h2>
                        <button id='btn-rating'>4.3★</button>
                        <span>39,415 Ratings & 3,016 Reviews</span>
                        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png' width='60'/>
                        <ul>
                            <li>{props.f1}</li>
                            <li>{props.f2}</li>
                            <li>{props.f3}</li>
                            <li>{props.f4}</li>
                            <li>{props.f5}</li>
                        </ul>
                </div>

                <div id='child3'>
                    <div id="price">
                     <h1>₹{props.price}</h1>
                     <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png' width='60'/>
                    </div>

                    <div id='max-price'>
                        <p id='ac-price'>₹{props.max}</p>
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