import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 flex text-gray-300 h-[150px] md:h-[300px] mt-6">
      <div className="max-w-7xl mx-auto items-center flex justify-center">
        <div className="text-center items-center justify-center flex flex-col p-4">
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/md.jahidul.islam.692469"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jahidul-islam-8261a2300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com/jahidmbpi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </Link>
          </div>
          <Separator className="w-full my-2 bg-gray-600 h-px" />

          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Md Jahid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
