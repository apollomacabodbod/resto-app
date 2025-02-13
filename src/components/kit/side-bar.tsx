import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  // Close sidebar on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSidebarOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`lg:hidden fixed top-0 right-0 w-[75%] max-w-[18em] min-h-screen z-50 transition-transform duration-500 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Blurred background and overlay */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/50 before:backdrop-blur-lg before:z-10">
        <div className="absolute inset-0 bg-slate-800 bg-cover bg-center opacity-30"></div>
      </div>

      <div className="flex flex-col items-start p-4 relative z-20">
        <img
          src={'/close-icon.svg'}
          width={0}
          height={0}
          alt="menu icon"
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden w-full bg-cover bg-center max-w-[2em] self-end cursor-pointer opacity-70 hover:opacity-100 transition-all duration-1000 ease-in-out"
        />

        {/* Sidebar links */}
        {[
          { to: "/", label: "Home" },
          { to: "/services", label: "Services" },
          { to: "/camping", label: "Camping" },
          { to: "/about", label: "About" },
          { to: "/blog", label: "Blog" },
          { to: "/contact", label: "Contact" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setSidebarOpen(false)}
            className="font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap text-[#FFF] opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;