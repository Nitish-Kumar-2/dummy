import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube} from 'react-icons/fa';

export default function Footer () {
  return (
    <div>
      <div className="mx-auto text-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-fit mx-auto mt-4 justify-between text-gray-500 gap-11">
          <ul className=" text-left">
            <p className="text-black py-2 font-medium">Use cases</p>
            <li className="py-2"><a href="#">Generate appointments</a></li>
            <li className="py-2"><a href="#">Source talent</a></li>
            <li className="py-2"><a href="#">Build an e-mail list</a></li>
            <li className="py-2"><a href="#">Make online sales</a></li>
            <li className="py-2"><a href="#">Gain insights</a></li>
            <li className="py-2"><a href="#">For Agencies</a></li>
          </ul>
          <ul className=" text-left">
            <p className="text-black py-2 font-medium">Resources</p>
            <li className="py-2"><a href="#">Why Perspective</a></li>
            <li className="py-2"><a href="#">Features</a></li>
            <li className="py-2"><a href="#">Templates</a></li>
            <li className="py-2"><a href="#">Pricing</a></li>
            <li className="py-2"><a href="#">Status</a></li>
            <li className="py-2"><a href="#">Login</a></li>
          </ul>
          <ul className=" text-left">
            <p className="text-black py-2 font-medium">Product</p>
            <li className="py-2"><a href="#">Crashcourse</a></li>
            <li className="py-2"><a href="#">Academy</a></li>
            <li className="py-2"><a href="#">Community</a></li>
            <li className="py-2"><a href="#">Helpcenter</a></li>
            <li className="py-2"><a href="#">Blog</a></li>
            <li className="py-2"><a href="#">Changelog</a></li>
          </ul>
          <ul className="text-left">
            <p className="text-black py-2 font-medium">Company</p>
            <li className="py-2"><a href="#">About us</a></li>
            <li className="py-2"><a href="#">Contact</a></li>
            <li className="py-2"><a href="#">EFRE</a></li>
            <li className="py-2"><a href="#">Careers</a></li>
            <li className="py-2"><a href="#">Refferal Program</a></li>
          </ul>
          <ul className="text-left">
            <p className="text-black py-2 font-medium">Legal</p>
            <li className="py-2"><a href="#">Cookie Policies</a></li>
            <li className="py-2"><a href="#">Privacy</a></li>
            <li className="py-2"><a href="#">Imprint</a></li>
            <li className="py-2"><a href="#">Terms & Conditions</a></li>
          </ul>
          <ul className="text-left">
            <p className="text-black py-2 font-medium">Follow us</p>
            <li className="flex items-center gap-2 py-2"><FaInstagram />Instagram</li>
            <li className="flex items-center gap-2 py-2"><FaFacebook />Facebook</li>
            <li className="flex items-center gap-2 py-2"><FaYoutube />YouTube</li>
            <li className="flex items-center gap-2 py-2"><FaLinkedin />Linkedin</li>
          </ul>
        </div>
        <div className="flex justify-between w-3/4 p-20 mx-auto">
          <div><p>© Perspective Software GmbH</p></div>
          <div className="flex justify-evenly">
            <img src="https://cdn.prod.website-files.com/61ba09162b87002e87715b91/62c85f30dfdd6b544f3cfbf7_gdpr.webp" className="w-auto h-1/2"></img>
            <img src="https://cdn.prod.website-files.com/61ba09162b87002e87715b91/6495d2ed50590116fbd4e99c_climate_active.webp" className="w-auto h-1/2"></img>
            <img src="https://cdn.prod.website-files.com/61ba09162b87002e87715b91/62257b4bcd0f0b08e9b93658_remote-company.webp" className="w-auto h-1/2"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Section 1 */}
//           <div>
//             <h3 className="text-lg font-semibold">About Us</h3>
//             <p className="mt-4 text-sm">
//               Learn more about our mission, vision, and values.
//             </p>
//           </div>

//           {/* Section 2 */}
//           <div>
//             <h3 className="text-lg font-semibold">Quick Links</h3>
//             <ul className="mt-4 space-y-2 text-sm">
//               <li><a href="#" className="hover:underline">Home</a></li>
//               <li><a href="#" className="hover:underline">Services</a></li>
//               <li><a href="#" className="hover:underline">Contact</a></li>
//               <li><a href="#" className="hover:underline">Blog</a></li>
//             </ul>
//           </div>

//           {/* Section 3 */}
//           <div>
//             <h3 className="text-lg font-semibold">Contact Us</h3>
//             <p className="mt-4 text-sm">
//               Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
//             </p>
//             <p className="mt-2 text-sm">
//               Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
//             </p>
//           </div>

//           {/* Section 4 */}
//           <div>
//             <h3 className="text-lg font-semibold">Follow Us</h3>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="hover:opacity-75">
//                 <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
//               </a>
//               <a href="#" className="hover:opacity-75">
//                 <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
//               </a>
//               <a href="#" className="hover:opacity-75">
//                 <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
//           © 2024 Your Company. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
