import fbIcon from '../assets/icons/facebook.png';
import twitterIcon from '../assets/icons/twitter.png';
import instaIcon from '../assets/icons/insta.png';
import ytIcon from '../assets/icons/youtube.png';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-8 mt-9">
      <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-3 text-center md:text-left">
        
        {/* 🔹 About Section */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-xl font-semibold">About Mello Blog</h3>
          <p className="text-sm text-white-400 max-w-xs">
            BBC Blog is your trusted source for the latest updates in news, sports,
            business, and entertainment. Stay informed and inspired with daily stories.
          </p>
        </div>

        {/* 🔹 Quick Links Section */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
           
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* 🔹 Social Media Section */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src={fbIcon}
                alt="Facebook"
                className="w-6 h-6 transition hover:filter hover:invert hover:brightness-0"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src={twitterIcon}
                alt="Twitter"
                className="w-6 h-6 transition hover:filter hover:invert hover:brightness-0"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src={instaIcon}
                alt="Instagram"
                className="w-6 h-6 transition hover:filter hover:invert hover:brightness-0"
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img
                src={ytIcon}
                alt="YouTube"
                className="w-6 h-6 transition hover:filter hover:invert hover:brightness-0"
              />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-white-400 mt-10">
        &copy; {new Date().getFullYear()} Mello. All rights reserved.
      </div>
    </footer>
  );
}



