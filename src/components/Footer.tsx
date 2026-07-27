import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/10">
      <p className="text-gray-500 mb-4">© 2026 Sudharsan U. All rights reserved.</p>
      <SocialLinks className="text-blue-400 hover:text-blue-300" />
    </footer>
  );
}
