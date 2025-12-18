export default function Footer() {
  return (
    <footer className="bg-gray-900/80 flex text-gray-300 h-[200px] md:h-[300px] mt-6">
      <div className="max-w-7xl mx-auto items-center flex justify-center">
        <div className="text-center items-center justify-center flex flex-col p-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/jahidmbpi"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your@email.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Md Jahid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
