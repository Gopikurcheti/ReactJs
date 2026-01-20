import Mobile from "./components/Mobile"
import './App.css'

function App(){

  const mob = [
    {
      src:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/1/1/s/-original-imagwu89jy5ems28.jpeg?q=70&crop=false',
      name:'REDMI Note 13 Pro 5G (256 GB) (8 GB RAM)',
      price:'24,999',
      f1:'8 GB RAM | 256 GB ROM',
      f2:'16.94 cm (6.67 inch) Display',
      f3:'200MP (OIS) + 8MP + 2MP | 16MP Front Camera',
      f4:'5100 mAh Battery',
      f5:'7s Gen 2 Mobile Platform 5G Processor',
      max:'30,999'
    },
     {
      src:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/a/x/-original-imahfkvfhcddfzvh.jpeg?q=70&crop=false',
      name:'vivo T4 Lite 5G Charger in the Box (64 GB) (4 GB RAM)',
      price:'10,999',
      f1:'4 GB RAM | 64 GB ROM | Expandable Upto 2 TB',
      f2:'17.12 cm (6.74 inch) HD+ Display',
      f3:'50MP + 2MP | 5MP Front Camera',
      f4:'6000 mAh Battery',
      f5:'Dimensity 6300 5G Processor',
      max:'12,999'
    },
    {
      src:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/a/b/-original-imah83eztbdcsknu.jpeg?q=70&crop=false',
      name:'MOTOROLA g05 (64 GB) (4 GB RAM)',
      price:'7,299',
      f1:'4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
      f2:'16.94 cm (6.67 inch) HD+ Display',
      f3:'50MP Rear Camera | 8MP Front Camera',
      f4:'5100 mAh Battery',
      f5:'Helio G81 Processor',
      max:'11,999'
    },
    {
      src:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/3/d/-original-imahea37xrfzhuty.jpeg?q=70&crop=false',
      name:'Ai+ Pulse (Green, 128 GB) (6 GB RAM)',
      price:'6,999',
      f1:'6 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
      f2:'17.13 cm (6.745 inch) HD+ Display',
      f3:'50MP Rear Camera | 5MP Front Camera',
      f4:'5000 mAh Battery',
      f5:'T615 Processor',
      max:'9,999' 
    },
    {
      src:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/v/a/-original-imahft5nxmyqndhf.jpeg?q=70&crop=false',
      name:'Apple iPhone 17 Pro (Cosmic Orange, 256 GB)',
      price:'1,34,900',
      f1:'256 GB ROM',
      f2:'16.0 cm (6.3 inch) Super Retina XDR Display',
      f3:'48MP + 48MP + 48MP | 18MP Front Camera',
      f4:'A19 Chip, 6 Core Processor Processor',
      f5:'7s Gen 2 Mobile Platform 5G Processor', 
      max:'1,50,999'
    },
    {
      src:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/w/r/z/-original-imahgfmysgtszenh.jpeg?q=70&crop=false',
      name:'Samsung Galaxy S24 Ultra 5G (256 GB) (12 GB RAM)',
      price:'99,989',
      f1:'12 GB RAM | 256 GB ROM',
      f2:'17.27 cm (6.8 inch) Quad HD+ Display',
      f3:'200MP + 50MP + 12MP + 10MP | 12MP Front Camera',
      f4:'5000 mAh Battery',
      f5:'Snapdragon 8 Gen 3 Processor',
      max:'1,36,999'  
    }
  ]





  return(
    <>
    <div className="main">

      <Mobile
       src={mob[0].src}
       name={mob[0].name}
       price={mob[0].price}
       f1={mob[0].f1}
       f2={mob[0].f2}
       f3={mob[0].f3}
       f4={mob[0].f4}
       f5={mob[0].f5}
       max={mob[0].max}
       />

      <Mobile
       src={mob[1].src}
       name={mob[1].name}
       price={mob[1].price}
       f1={mob[1].f1}
       f2={mob[1].f2}
       f3={mob[1].f3}
       f4={mob[1].f4}
       f5={mob[1].f5}
       max={mob[1].max}
       />

      <Mobile
       src={mob[2].src}
       name={mob[2].name}
       price={mob[2].price}
       f1={mob[2].f1}
       f2={mob[2].f2}
       f3={mob[2].f3}
       f4={mob[2].f4}
       f5={mob[2].f5}
       max={mob[2].max}

        />


      <Mobile
       src={mob[3].src}
       name={mob[3].name}
       price={mob[3].price}
       f1={mob[3].f1}
       f2={mob[3].f2}
       f3={mob[3].f3}
       f4={mob[3].f4}
       f5={mob[3].f5}
       max={mob[3].max}
       />

      <Mobile
       src={mob[4].src}
       name={mob[4].name}
       price={mob[4].price}
       f1={mob[4].f1}
       f2={mob[4].f2}
       f3={mob[4].f3}
       f4={mob[4].f4}
       f5={mob[4].f5}
       max={mob[4].max}
       />

      <Mobile
       src={mob[5].src}
       name={mob[5].name}
       price={mob[5].price}
       f1={mob[5].f1}
       f2={mob[5].f2}
       f3={mob[5].f3}
       f4={mob[5].f4}
       f5={mob[5].f5}
       max={mob[5].max}
        />


    </div>
    
    
          
    </>
  )
}

export default App;



