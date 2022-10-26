import "./AboutUs.css";
function AboutUs(){
    return(
        <div className="page">
            <h1 className="about-us-h1">About us</h1>
            <section>
                <h2 id="aboutCompany">About company</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur in reiciendis ducimus, aperiam, rerum totam ipsum harum ad error vero perferendis, porro vitae asperiores! Illo, facilis rerum, excepturi eos tenetur sapiente, et aliquid nesciunt est reprehenderit laudantium architecto saepe aliquam! Non expedita repudiandae similique possimus magnam, ab molestiae deleniti sed facilis sequi nam ut nostrum temporibus error illum nemo quidem? Vel qui iure, pariatur natus, molestias quia mollitia ipsum nulla exercitationem neque quisquam aut. Voluptatem illum inventore quis hic iste sapiente soluta corrupti ipsum incidunt iusto quidem, nihil quibusdam porro recusandae quos eos enim odio consequuntur! Modi eius dicta nemo? Facilis, aspernatur. Vitae quia rerum asperiores officiis ratione laudantium repudiandae facilis, sequi quo. Perferendis atque beatae ad, inventore repellendus tempore harum iste esse, sequi quae ea quas est dignissimos autem. Sapiente assumenda, fugit aliquid quod unde, accusamus sint tenetur eius incidunt explicabo, veritatis ab deleniti nulla tempora qui provident.</p>
            </section>
            <div className="locationAndForm">
                <section>
                    <h2 id="location">Location:</h2>
                    <p id="location-text">Lorem ipsum dolor sit amet.</p>
                    <div className="img-div">
                        <img src="https://images.unsplash.com/photo-1524850301259-7729d41d11d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvY2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </section>
                <section>
                    <h2 id="question">You have question ? We're listening</h2>
                    <form className="about-us-form">
                        <label htmlFor="">Your account:</label>
                        <input type="text"  />
                        <label htmlFor="">Message:</label>
                        <textarea name="" id=""/>
                        <button>Send</button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default AboutUs;