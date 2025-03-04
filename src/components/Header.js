import logo from './../assets/images/logo.svg';
import cart_icon from './../assets/images/cart-icon.svg';



const toggleMobileMenu = function( cssSelector ){
    if( !document ) return;

    const mobileMenu = document.querySelector(cssSelector);

    mobileMenu.classList.contains("open") ? mobileMenu.classList.remove("open") : mobileMenu.classList.add("open");

}

export default function Header(){

    return(
        <header className="header">
        <nav class="nav">
            <div className='nav__left'>
                <img className='nav__logo' src={logo} alt="website logo" />
            </div>
            <div className='nav__right'>
                <div class="nav__toggle" role='button' aria-label="Toggle navigation" onClick={()=>{
                    toggleMobileMenu('.nav__toggle');
                }}>
                     <span class="nav__toggle-icon"></span>
                     <span class="nav__toggle-icon"></span>
                     <span class="nav__toggle-icon"></span>
                </div>

                <ul class="nav__list">
                    <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                    <li class="nav__item"><a href="#products" class="nav__link">Products</a></li>
                    <li class="nav__item">
                    <a href="#cart" class="nav__link cart">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z" />
                    </svg>

                        {/* <img class="nav__cart_icon" src={cart_icon} alt="cart icon" width={24} height={20} /> */}
                    </a>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    )
}