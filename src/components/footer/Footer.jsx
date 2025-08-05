export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left Section - Company Info */}
        <div>
          <h2 className="text-2xl font-bold">BRAINHUB</h2>
          <p className="text-xs text-gray-400 mb-4">PART OF STX NEXT</p>
          <p className="text-sm text-gray-300">
            Since 2015, we’ve helped 80+ fast-growing companies in over 20
            different industries build web, mobile and desktop apps that make an
            impact.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            {/* Replace with your actual links/icons */}
            <a href="#">Facebook</a>
            <a href="#">Github</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        {/* Column 1 - Services */}
        <div>
          <h4 className=" font-semibold mb-2">SERVICES</h4>
          <ul className="text-sm space-y-1">
            <li>Product Strategy & Design</li>
            <li>Product Design</li>
            <li>Business Analysis</li>
            <li>Software Development & Delivery</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Desktop App Development</li>
            <li>Digital Product Development</li>
            <li>Staff Augmentation</li>
            <li>UX/UI Design</li>
            <li>Cloud Engineering & DevOps</li>
            <li>Generative AI Development</li>
            <li>Legacy App Modernization</li>
            <li>Discovery Workshops</li>
          </ul>
        </div>

        {/* Column 2 - Technologies + Industries + About */}
        <div>
          <h4 className=" font-semibold mb-2">TECHNOLOGIES</h4>
          <ul className="text-sm space-y-1 mb-4">
            <li>.NET</li>
            <li>Node JS</li>
            <li>React JS</li>
            <li>React Native</li>
            <li>Electron</li>
            <li>AWS</li>
          </ul>

          <h4 className=" font-semibold mb-2">INDUSTRIES</h4>
          <ul className="text-sm space-y-1 mb-4">
            <li>Fintech</li>
            <li>Banking</li>
            <li>Accounting</li>
          </ul>

          <h4 className=" font-semibold mb-2">ABOUT</h4>
          <ul className="text-sm space-y-1">
            <li>Team</li>
            <li>Case Studies</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 - Insights */}
        <div>
          <h4 className=" font-semibold mb-2">INSIGHTS</h4>
          <ul className="text-sm space-y-1">
            <li>Engineering Library</li>
            <li>Podcast for CTOs</li>
            <li>Experts Hub</li>
          </ul>
        </div>

        {/* Column 4 - Top Reads */}
        <div>
          <h4 className=" font-semibold mb-2">TOP READS</h4>
          <ul className="text-sm space-y-1">
            <li>Reduce Technical Debt</li>
            <li>T&M vs Fixed Fee</li>
            <li>Web Development Companies</li>
            <li>Digital Transformation</li>
            <li>Examples</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        <p>Copyright © 2025 Brainhub. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie settings
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
