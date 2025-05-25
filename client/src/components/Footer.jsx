import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, MapPin } from "lucide-react";
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#EDE8E2]/20 py-20">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-serif">
              Subscribe to get 10% OFF
            </h3>
            <p className="text-gray-600 mb-6 font-sans text-sm">
              Subscribe for store updates and exclusive discounts on authentic
              Nepali products.
            </p>
            <div className="flex gap-2 mb-4">
              <Input type="email" placeholder="Email" className="flex-1" />
              <Button type="submit" size="icon" className="shrink-0">
                →
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              By subscribing you agree to the{" "}
              <Link href="/terms" className="underline">
                Terms of Use
              </Link>{" "}
              &{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif">About</h4>
            <p className="text-gray-600 mb-4 text-sm">
              We curate authentic Nepali products that celebrate our rich
              culture and craftsmanship – original, handmade pieces that tell
              our story.
            </p>
            <Link href="/about" className="text-sm font-medium underline">
              LEARN MORE
            </Link>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href="/sale"
                  className="text-gray-600 hover:text-gray-900"
                >
                  On Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/handicrafts"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Handicrafts
                </Link>
              </li>
              <li>
                <Link
                  href="/textiles"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Traditional Textiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif">
              Customer Care
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/account"
                  className="text-gray-600 hover:text-gray-900"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Shipping and Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
