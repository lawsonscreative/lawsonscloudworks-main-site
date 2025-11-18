import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-neutral-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">About CloudWorks</h4>
            <p className="text-sm leading-relaxed">
              Specialist MSP for cloud workspaces and modern endpoints. Managed services for UK organisations without enterprise overhead.
            </p>
            <div className="text-xs text-neutral-400 space-y-1 pt-4">
              <p>Lawsons CloudWorks is a trading name of</p>
              <p className="font-semibold">Lawsons Enterprises Ltd</p>
              <p>Company No: 16433965</p>
              <p>VAT: GB495884223</p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#managed-cloud-workspace" className="hover:text-brand-teal transition-colors hover:underline">
                  Managed Cloud Workspace Service
                </Link>
              </li>
              <li>
                <Link href="/services#managed-endpoint-identity" className="hover:text-brand-teal transition-colors hover:underline">
                  Managed Endpoint & Identity Service
                </Link>
              </li>
              <li>
                <Link href="/services#automation-dev-tooling" className="hover:text-brand-teal transition-colors hover:underline">
                  Automation & Dev Tooling
                </Link>
              </li>
              <li>
                <Link href="/services#on-ramp-projects" className="hover:text-brand-teal transition-colors hover:underline">
                  On-Ramp Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-teal transition-colors hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:text-brand-teal transition-colors hover:underline">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-brand-teal transition-colors hover:underline">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-teal transition-colors hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://lawsonscreative.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-teal transition-colors hover:underline"
                >
                  Lawsons Creative
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-neutral-400 text-xs mb-1">Email</p>
                <a
                  href="mailto:hello@lawsonscloudworks.co.uk"
                  className="hover:text-brand-teal transition-colors hover:underline"
                >
                  hello@lawsonscloudworks.co.uk
                </a>
              </div>
              <div>
                <p className="text-neutral-400 text-xs mb-1">Location</p>
                <p>Based in Kent, serving UK clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 space-y-4 md:space-y-0">
            <div className="text-center md:text-left space-y-1">
              <p>&copy; {currentYear} Lawsons Enterprises Ltd. All rights reserved.</p>
              <p className="text-xs">
                Website design and development by{' '}
                <a
                  href="https://www.lawsonscreative.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-teal transition-colors hover:underline"
                >
                  Lawsons Creative
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-brand-teal transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-teal transition-colors hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
