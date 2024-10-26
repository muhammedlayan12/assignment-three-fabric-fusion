import Image from "next/image";
import paymentimg from "../images/payment.webp";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div>
        <footer className={`${styles.footer} flex flex-wrap justify-evenly w-full h-full bg-[#111] text-white p-4`}>

          <div className="flex flex-col gap-10">
                <div className="text-white font-bold text-2xl">Fabric <span className="text-yellow-500"> Fusion</span></div>
                <span className="tracking-wide text-[0.8em] font-poppins text-[#838383]">The customer is at the heart of our unique<br/> business model, which includes design.</span>
                <div className="img"><Image src={paymentimg} alt="" /></div>
            </div>
            <div className="flex flex-col gap-10">
            <h3 className="text-xl font-semibold">Shopping</h3>
            <ul className="collection">
                <li className="m-2 tracking-wide text-[0.8em] font-poppins text-[#838383] hover:text-yellow-500 transition-all duration-500 ease-in-out">Clothing Store</li>
                <li className="m-2 tracking-wide text-[0.8em] font-poppins text-[#838383] hover:text-yellow-500 transition-all duration-500 ease-in-out">Trending Shoes</li>
                <li className="m-2 tracking-wide text-[0.8em] font-poppins text-[#838383] hover:text-yellow-500 transition-all duration-500 ease-in-out">Accessories</li>
                <li className="m-2 tracking-wide text-[0.8em] font-poppins text-[#838383] hover:text-yellow-500 transition-all duration-500 ease-in-out">Sale</li>
            </ul>
            </div>
            <div className="flex flex-col gap-10">
            <h3 className="text-xl font-semibold">Support</h3>
            <ul className="collection">
                <li className="m-2 tracking-wide text-[0.8em] font-poppins text-[#838383] hover:text-yellow-500 transition-all duration-500 ease-in-out">Payment Method</li>
                <li className="m-2 tracking-wide text-[0.8em] font-poppins text-[#838383] hover:text-yellow-500 transition-all duration-500 ease-in-out">Ease Cash</li>
                <li className="m-2 tracking-wide text-[0.8em] font-poppins text-[#838383] hover:text-yellow-500 transition-all duration-500 ease-in-out">Delivery</li>
                <li className="m-2 tracking-wide text-[0.8em] font-poppins text-[#838383] hover:text-yellow-500 transition-all duration-500 ease-in-out">Return & Exchange</li>
            </ul>
            </div>

            <div className="flex flex-col gap-10">
            <h3 className="text-xl font-semibold">News Letter</h3>
            <span className="tracking-wide text-[0.8em] font-poppins text-[#838383]">Be the first to know about new arrivals, look<br/> books, sales & promos!</span>
            <input type="text" placeholder="Email" className="bg-transparent border-b-2 tracking-[2.5px] text-[0.8em] font-poppins text-[#838383] pl-2 pb-2 focus:outline-none"/>
            </div>
            
        </footer>

    </div>
  )
}

export default Footer;