
import { Link } from "react-router-dom";
import { BookOpen, BookText, Star, Layout, Search } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-literary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Robo Story Verse</h2>
            <p className="text-sm text-gray-300 mb-4">
              Explore literature and storytelling through an AI-powered 3D robot narrator. 
              Listen to classic and modern stories with insightful analysis.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Layout className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Literature</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <BookText className="h-4 w-4" />
                  <span>Short Stories</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Careers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Terms of Service</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Copyright</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Robo Story Verse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
