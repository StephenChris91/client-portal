// components/landing/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t py-10 px-6 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-2 text-gray-900">Portal</h4>
        </div>
        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-1">
            <li>Features</li>
            <li>Why Portal</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>License</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow us</h4>
          <ul className="space-y-1">
            <li>Twitter</li>
            <li>GitHub</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
