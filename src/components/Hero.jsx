
const Hero = () => {
    return (
        <>

            <main className="hero">
                <div className="hero-content">
                    <h1>
                        YOUR FEET DESERVE THE BEST
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repudiandae, libero animi. Tenetur iusto quia quo rem id <br /> et quam ex explicabo maiores obcaecati, deserunt  in odio,<br /> earum dolore doloribus.</p>
                    <div className="hero-btn"><button>Shop now</button>
                        <button>Category</button></div>
                    <div className="shoping">
                        <p>Also Available on</p>
                        <div className="brand-icons"><img src="/images/amazon.png" alt="amazon-logo" />
                            <img src="/images/flipkart.png" alt="flipkart-logo" />

                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/shoe_image.png" alt="hero-image" />
                </div>

            </main>
        </>
    )
}

export default Hero