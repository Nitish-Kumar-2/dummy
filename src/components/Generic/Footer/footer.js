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
