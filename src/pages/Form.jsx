import React from 'react'
import "./form.css";
export default function From() {
  return (
    <div>
      <div className='between_div'>
        <h1>
        Home Page Detail
        </h1>
      <div className='line'></div>
      </div>
      <form className='form_bar' >
        <h2 className='heading_text'>Order Now button Text<span>*</span></h2>
        <input type="text" id="ordernow" placeholder='Order Now' className='input_main' required/>

        <h2 className='heading_text'>Login Text<span>*</span></h2>
        <input type="text" id="logintext" placeholder='Login' className='input_main' required/>

        <h2 className='heading_text'>Location search Placeholder<span>*</span></h2>
        <input type="text" id="location" placeholder='Search Nearest location' className='input_main' required/>

        <h2 className='heading_text'>Product Search Placeholder<span>*</span></h2>
        <input type="text" id= "product placeholder" placeholder='Search for Products' className='input_main' required/>

        <h2 className='heading_text'>Category Heading<span>*</span></h2>
        <input type="text" id= "category heading" placeholder='Your neighbours are odering' className='input_main' required/>

        <h2 className='heading_text'>Tags Heading<span>*</span></h2>
        <input type="text" placeholder='Quick links' className='input_main' required/>
        

        <h2 className='heading_text'>Show all button text<span>*</span></h2>
        <input type="text" placeholder='show all' className='input_main' required/>
        

        <h2 className='heading_text'>About us heading<span>*</span></h2>
        <input type="text" placeholder='About' className='input_main' required/>

        <h2 className='heading_text'>Footer usefull link <span>*</span></h2>
        <input type="text" placeholder='usefull links' className='input_main' required/>

        <h2 className='heading_text'>footer Contact us heading<span>*</span></h2>
        <input type="text" placeholder='Contact us' className='input_main' required/>
        
      </form>

      <div className='between_div'>
        <h1>Home page download app section</h1>
      </div>
      <div className='line'></div>

      <form className='form_bar'>
        
        <h2 className='heading_text'>Section Title<span>*</span></h2>
        <input type="text" placeholder='Contact us' className='input_main' required/>

        <h2 className='heading_text'>Section Heading 1<span>*</span></h2>
        <input type="text" placeholder='You can place order from our App' className='input_main' required/>

        <h2 className='heading_text'>Section Heading 2<span>*</span></h2>
        <input type="text" placeholder='Place orders in a few click from your mobile Download our mobile App now' className='input_main' required/>

        
        <h2 className='heading_text'>Download App Image<span>*</span></h2> 
        {/* <input type="text" placeholder='You can place order from our App' className='input_main' required/> */}
        <p className='ideal_size'>Ideal size content is 630px*520px</p>
        <section className='section_image'></section>        
      </form>
      <div className='between_div'>
        <h1>
        Offer Page
        </h1>
        <div className='line'></div>
      </div>

      <form className='form_bar'>
        
        <h2 className='heading_text'>Heading 1<span>*</span></h2>
        <input type="text" placeholder='Offer for you' className='input_main' required/>

        <h2 className='heading_text'>Heading 2<span>*</span></h2>
        <input type="text" placeholder='Extend top detail and offer exculivisely for you' className='input_main' required/>
      </form>
      <div className='between_div'>
        <h1>
        Store Detail Page
        </h1>
      <div className='line'></div>
      </div>
        <form className='form_bar'>

        <h2 className='heading_text'>Heading 1<span>*</span></h2>
        <input type="text" placeholder='FEED YOUR HUNGER WITH SAFE PRODUCTS' className='input_main' required/>

        <h2 className='heading_text'>Heading 2<span>*</span></h2>
        <input type="text" placeholder='#StaySafe #StayHome' className='input_main' required/>
        </form>
    </div>
  )
}
